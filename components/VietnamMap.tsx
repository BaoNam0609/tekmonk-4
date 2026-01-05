
import React, { useEffect, useRef, useState } from 'react';
import { searchVietnamPlaces, MapDiscoveryResult } from '../services/geminiService';
import { VIETNAM_PLACES } from '../constants';

declare var L: any; // Khai báo Leaflet global

const VietnamMap: React.FC = () => {
  const mapRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [discoveryResult, setDiscoveryResult] = useState<MapDiscoveryResult | null>(null);
  const [selectedCity, setSelectedCity] = useState<any>(null);
  const [showSheet, setShowSheet] = useState(false);

  // Tọa độ bao quanh Việt Nam (SouthWest, NorthEast)
  const VIETNAM_BOUNDS = [
    [8.0, 102.0], // Điểm phía Tây Nam (gần Cà Mau/Vịnh Thái Lan)
    [23.5, 110.0]  // Điểm phía Đông Bắc (gần Lũng Cú/Biển Đông)
  ];

  // Danh sách tọa độ GPS thực tế của các địa danh
  const hotspots = [
    { id: 'hanoi', name: 'Hà Nội', lat: 21.0285, lng: 105.8542, short: 'Cố đô nghìn năm văn hiến' },
    { id: 'halong', name: 'Vịnh Hạ Long', lat: 20.9501, lng: 107.0733, short: 'Kỳ quan thiên nhiên thế giới' },
    { id: 'hue', name: 'Cố đô Huế', lat: 16.4637, lng: 107.5909, short: 'Di sản triều Nguyễn' },
    { id: 'danang', name: 'Đà Nẵng', lat: 16.0544, lng: 108.2022, short: 'Thành phố đáng sống nhất Việt Nam' },
    { id: 'hoian', name: 'Hội An', lat: 15.8801, lng: 108.3380, short: 'Phố cổ đèn lồng lung linh' },
    { id: 'nhatrang', name: 'Nha Trang', lat: 12.2388, lng: 109.1967, short: 'Vịnh biển xanh cát trắng' },
    { id: 'dalat', name: 'Đà Lạt', lat: 11.9404, lng: 108.4583, short: 'Thành phố ngàn hoa mộng mơ' },
    { id: 'hcmc', name: 'TP. Hồ Chí Minh', lat: 10.8231, lng: 106.6297, short: 'Hòn ngọc Viễn Đông năng động' },
    { id: 'phuquoc', name: 'Phú Quốc', lat: 10.2289, lng: 103.9572, short: 'Đảo ngọc thiên đường' },
  ];

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    // Khởi tạo bản đồ Leaflet với các ràng buộc chặt chẽ
    mapRef.current = L.map(containerRef.current, {
      center: [16.0, 107.5], // Tâm Việt Nam
      zoom: 6,
      minZoom: 5.5, // Không cho thu nhỏ quá nhiều
      maxZoom: 18,
      maxBounds: VIETNAM_BOUNDS, // Cố định vùng hiển thị
      maxBoundsViscosity: 1.0, // Độ "cứng" của biên (1.0 là không cho kéo ra ngoài luôn)
      zoomControl: false, 
      attributionControl: false
    });

    // Sử dụng map style sạch sẽ (CartoDB Voyager)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      maxZoom: 19,
    }).addTo(mapRef.current);

    // Thêm các marker hotspots
    hotspots.forEach(spot => {
      const customIcon = L.divIcon({
        className: 'custom-div-icon',
        html: `<div class="pulse-marker"></div>`,
        iconSize: [12, 12],
        iconAnchor: [6, 6]
      });

      const marker = L.marker([spot.lat, spot.lng], { icon: customIcon }).addTo(mapRef.current);

      marker.bindPopup(`
        <div class="p-3 min-w-[120px]">
          <h5 class="font-bold text-slate-900 text-xs mb-0.5">${spot.name}</h5>
          <p class="text-[9px] text-slate-500 leading-tight">${spot.short}</p>
          <button class="mt-2 w-full bg-red-600 text-white text-[9px] font-bold py-1 px-2 rounded-lg btn-more">
            Khám phá chi tiết
          </button>
        </div>
      `, {
        closeButton: false,
        offset: [0, -10]
      });

      marker.on('popupopen', () => {
        const btn = document.querySelector('.btn-more');
        if (btn) {
          btn.addEventListener('click', () => {
            handleHotspotClick(spot);
            mapRef.current.closePopup();
          });
        }
      });
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setLoading(true);
    const result = await searchVietnamPlaces(searchQuery);
    setDiscoveryResult(result);
    setLoading(false);
  };

  const handleHotspotClick = (spot: any) => {
    const placeData = VIETNAM_PLACES.find(p => p.id === spot.id) || {
      name: spot.name,
      description: spot.short + '. Một điểm đến tuyệt vời đang chờ đón bạn khám phá cùng trợ lý ảo Gemini.',
      image: `https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=400`,
      rating: 4.8,
      bestTime: 'Tháng 1 - Tháng 5',
      specialties: ['Món đặc sản địa phương', 'Quà lưu niệm']
    };
    setSelectedCity({ ...spot, ...placeData });
    setShowSheet(true);
  };

  return (
    <div className="relative w-full h-[85vh] bg-slate-100 rounded-[3rem] overflow-hidden shadow-2xl border-2 border-white/50">
      <div ref={containerRef} className="w-full h-full z-0" />

      {/* Overlay: AI Search Bar */}
      <div className="absolute top-4 left-4 right-4 z-[1000] pointer-events-none">
        <form 
          onSubmit={handleSearch} 
          className="pointer-events-auto flex items-center bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl p-1.5 border border-white/40"
        >
          <div className="p-2 text-red-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
          <input 
            type="text" 
            placeholder="Bạn muốn tìm gì ở Việt Nam?" 
            className="flex-grow bg-transparent border-none focus:ring-0 text-xs font-bold py-2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase shadow-md active:scale-95 transition-transform">
            {loading ? "..." : "Hỏi AI"}
          </button>
        </form>
      </div>

      {/* Discovery Results from AI */}
      {discoveryResult && (
        <div className="absolute bottom-6 left-4 right-4 z-[1000] bg-white/95 backdrop-blur-2xl rounded-[2.5rem] p-6 shadow-2xl animate-in slide-in-from-bottom duration-500 border border-slate-100">
          <div className="flex justify-between items-start mb-3">
            <h4 className="font-black text-slate-900 text-xs uppercase tracking-tighter">Kết quả từ Gemini AI</h4>
            <button onClick={() => setDiscoveryResult(null)} className="p-1.5 bg-slate-100 rounded-full text-slate-400">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          <p className="text-xs text-slate-600 mb-4 leading-relaxed line-clamp-2">{discoveryResult.text}</p>
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {discoveryResult.places.map((p, i) => (
              <a key={i} href={p.uri} target="_blank" className="flex-shrink-0 bg-slate-900 text-white px-4 py-2.5 rounded-2xl text-[10px] font-bold shadow-lg flex items-center gap-2">
                📍 {p.title}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Sheet (City Details) */}
      {showSheet && selectedCity && (
        <div className="absolute inset-0 z-[2000] bg-slate-900/40 backdrop-blur-[2px]" onClick={() => setShowSheet(false)}>
          <div 
            className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[3.5rem] p-8 pb-32 shadow-[0_-20px_60px_rgba(0,0,0,0.3)] animate-in slide-in-from-bottom duration-500"
            onClick={e => e.stopPropagation()}
          >
            <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-8"></div>
            
            <div className="flex gap-5 mb-8">
              <img src={selectedCity.image} className="w-28 h-28 rounded-3xl object-cover shadow-2xl" />
              <div className="flex-grow pt-2">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-2xl font-black text-slate-900 leading-none">{selectedCity.name}</h3>
                  <div className="bg-yellow-400 text-white p-1 rounded-lg">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  </div>
                </div>
                <p className="text-[10px] font-bold text-red-600 uppercase tracking-widest mb-3">Điểm đến hàng đầu</p>
                <p className="text-xs text-slate-500 italic leading-relaxed">"{selectedCity.description}"</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-slate-50 p-5 rounded-3xl border border-slate-100">
                <p className="text-[9px] uppercase font-black text-slate-400 mb-2">Đặc sản nổi bật</p>
                <p className="text-[11px] font-bold text-slate-800 leading-tight">{selectedCity.specialties.join(' • ')}</p>
              </div>
              <div className="bg-red-50 p-5 rounded-3xl border border-red-100">
                <p className="text-[9px] uppercase font-black text-red-400 mb-2">Mùa du lịch</p>
                <p className="text-[11px] font-bold text-red-700">{selectedCity.bestTime}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex-grow bg-slate-900 text-white py-5 rounded-3xl font-black text-xs uppercase tracking-widest shadow-xl active:scale-95 transition-all">
                Lên lịch trình cùng Gemini
              </button>
              <button className="bg-slate-100 p-5 rounded-3xl text-slate-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VietnamMap;
