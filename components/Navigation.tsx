
import React from 'react';

interface NavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navigation: React.FC<NavProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'home', label: 'Khám phá', icon: '🏠' },
    { id: 'home', label: 'Bản đồ', icon: '📍', isMap: true }, // Map trigger
    { id: 'planner', label: 'Lịch trình', icon: '📅' },
    { id: 'food', label: 'Ẩm thực', icon: '🍲' },
    { id: 'guide', label: 'Cẩm nang', icon: '📖' }
  ];

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md z-[9999] bg-white/95 backdrop-blur-2xl border-t border-slate-100 pb-safe shadow-[0_-10px_30px_rgba(0,0,0,0.1)]">
      <div className="flex justify-around items-center h-20 px-2">
        {tabs.map(tab => (
          <button
            key={tab.label}
            onClick={() => {
              setActiveTab(tab.id);
              if (tab.isMap) {
                setTimeout(() => {
                  document.getElementById('map-section')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }}
            className={`flex flex-col items-center justify-center w-full transition-all duration-300 ${
              activeTab === tab.id ? 'text-red-600 scale-110' : 'text-slate-400'
            }`}
          >
            <span className="text-2xl mb-1">{tab.icon}</span>
            <span className={`text-[9px] font-black uppercase tracking-tighter ${activeTab === tab.id ? 'opacity-100' : 'opacity-60'}`}>
              {tab.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
