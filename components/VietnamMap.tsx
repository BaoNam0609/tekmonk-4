
import React, { useState, useEffect } from 'react';
import { searchVietnamPlaces, MapDiscoveryResult } from '../services/geminiService';

const VietnamMap: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [discoveryResult, setDiscoveryResult] = useState<MapDiscoveryResult | null>(null);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | undefined>(undefined);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        () => console.log("Location access denied")
      );
    }
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    setLoading(true);
    const result = await searchVietnamPlaces(searchQuery, userLocation);
    setDiscoveryResult(result);
    setLoading(false);
  };

  // URL nhúng Google Maps ổn định nhất hiển thị toàn cảnh Việt Nam
  const googleMapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7825838.455209774!2d101.5540673078125!3d16.326245362544773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31157a4d736a1e59%3A0x4405c14f31d1013!2zVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1710345678901!5m2!1svi!2s";

  return (
    <div className="relative w-full h-[750px] bg-white rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group">
      {/* Google Maps Container */}
      <div className="absolute inset-0 z-0">
        <iframe
          src={googleMapsUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Vietnam Interactive Map"
          className="w-full h-full transition-all duration-1000 group-hover:contrast-[1.05]"
        ></iframe>
      </div>

      {/* Floating Search Interface */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 w-[95%] max-w-2xl">
        <div className="glass-morphism rounded-3xl p-3 shadow-2xl border border-white/50 backdrop-blur-xl">
          <form onSubmit={handleSearch} className="flex items-center gap-3">
            <div className="flex-grow flex items-center bg-white/60 rounded-2xl px-4 py-3 focus-within:bg-white transition-all shadow-inner">
              <svg className="w-5 h-5 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input 
                type="text" 
                placeholder="Bạn muốn tìm gì ở Việt Nam? (vd: Cafe phố cổ, Resort Phú Quốc...)" 
                className="w-full bg-transparent border-none focus:ring-0 text-slate-900 font-medium placeholder:text-slate-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button 
              type="submit"
              disabled={loading}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-2xl font-bold shadow-lg shadow-red-200 transition-all flex items-center shrink-0"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                "Khám phá AI"
              )}
            </button>
          </form>
        </div>
      </div>

      {/* AI Results Overlay (Card style) */}
      {discoveryResult && (
        <div className="absolute right-6 top-32 bottom-8 z-30 w-full max-w-md pointer-events-none">
          <div className="bg-white/95 backdrop-blur-md h-full rounded-[2.5rem] shadow-2xl border border-white flex flex-col pointer-events-auto animate-in slide-in-from-right duration-500">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50 rounded-t-[2.5rem]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                <h3 className="font-serif font-bold text-xl text-slate-900">Kết quả từ Gemini</h3>
              </div>
              <button 
                onClick={() => setDiscoveryResult(null)} 
                className="p-2 bg-slate-100 rounded-full hover:bg-red-100 hover:text-red-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            
            <div className="flex-grow overflow-y-auto p-6 space-y-6">
              <div className="bg-red-50/50 p-4 rounded-2xl border-l-4 border-red-500">
                <p className="text-sm text-slate-700 leading-relaxed">
                  {discoveryResult.text}
                </p>
              </div>
              
              <div className="space-y-4">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">Địa điểm gợi ý trên bản đồ</p>
                {discoveryResult.places.map((place, i) => (
                  <div key={i} className="group p-4 bg-slate-50 hover:bg-white rounded-2xl border border-slate-100 hover:border-red-200 transition-all shadow-sm hover:shadow-md">
                    <h4 className="font-bold text-slate-900 mb-2 group-hover:text-red-600 transition-colors">{place.title}</h4>
                    <a 
                      href={place.uri} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-bold text-red-600 bg-red-50 px-3 py-1.5 rounded-lg hover:bg-red-600 hover:text-white transition-all"
                    >
                      Mở trên Google Maps
                      <svg className="w-3.5 h-3.5 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 bg-slate-900 rounded-b-[2.5rem] flex items-center justify-between">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Grounding v2.5</span>
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full border-2 border-slate-900 bg-red-500"></div>
                <div className="w-6 h-6 rounded-full border-2 border-slate-900 bg-yellow-500"></div>
                <div className="w-6 h-6 rounded-full border-2 border-slate-900 bg-green-500"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Region Badges */}
      <div className="absolute bottom-10 left-10 flex gap-4 z-10">
        <div className="bg-white shadow-xl px-5 py-2.5 rounded-2xl border border-slate-100 flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <span className="font-bold text-slate-700 text-sm">Miền Bắc</span>
        </div>
        <div className="bg-white shadow-xl px-5 py-2.5 rounded-2xl border border-slate-100 flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <span className="font-bold text-slate-700 text-sm">Miền Trung</span>
        </div>
        <div className="bg-white shadow-xl px-5 py-2.5 rounded-2xl border border-slate-100 flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="font-bold text-slate-700 text-sm">Miền Nam</span>
        </div>
      </div>
    </div>
  );
};

export default VietnamMap;
