
import React from 'react';

interface NavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navigation: React.FC<NavProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'home', label: 'Explore' },
    { id: 'planner', label: 'AI Planner' },
    { id: 'food', label: 'Food' },
    { id: 'guide', label: 'Vietnam 101' },
    { id: 'budget', label: 'Budget' }
  ];

  return (
    <nav className="sticky top-0 z-50 glass-morphism border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <span className="text-red-600 font-bold text-2xl tracking-tighter">VN</span>
            <span className="font-serif text-xl font-bold text-slate-800">Explorer</span>
          </div>
          <div className="hidden md:flex space-x-8">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-sm font-medium transition-colors ${
                  activeTab === tab.id 
                    ? 'text-red-600 border-b-2 border-red-600 pb-1' 
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <button className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-red-700 transition-all shadow-lg hover:shadow-red-200">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
