
import React, { useState } from 'react';
import Navigation from './components/Navigation';
import VietnamMap from './components/VietnamMap';
import AIPlanner from './components/AIPlanner';
import FoodExplorer from './components/FoodExplorer';
import Vietnam101 from './components/Vietnam101';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch(activeTab) {
      case 'home':
        return (
          <div className="space-y-24 pb-24">
            <header className="relative h-[80vh] flex items-center justify-center overflow-hidden">
              <img 
                src="https://picsum.photos/seed/vn-landscape/1920/1080" 
                alt="Vietnam Landscape" 
                className="absolute inset-0 w-full h-full object-cover brightness-50"
              />
              <div className="relative z-10 text-center text-white px-4">
                <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 tracking-tight drop-shadow-lg">
                  Unveil the Spirit of <br/><span className="text-red-500">Vietnam</span>
                </h1>
                <p className="text-xl md:text-2xl font-light mb-12 text-slate-200 max-w-2xl mx-auto">
                  From Sapa's mists to Saigon's pulse, discover the timeless beauty of the S-shaped land.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button 
                    onClick={() => setActiveTab('planner')}
                    className="bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-all shadow-2xl hover:scale-105"
                  >
                    Start AI Planning
                  </button>
                  <button 
                    onClick={() => {
                      const el = document.getElementById('map-section');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-white/20 backdrop-blur text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all shadow-2xl"
                  >
                    Explore Map
                  </button>
                </div>
              </div>
            </header>

            <section id="map-section" className="max-w-7xl mx-auto px-4">
              <VietnamMap />
            </section>

            <section className="bg-slate-100 py-24">
              <div className="max-w-7xl mx-auto px-4">
                 <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">Why Vietnam?</h2>
                    <p className="text-slate-600 max-w-3xl mx-auto text-lg italic">
                      "A country of immense natural beauty with a complex history and a vibrant, energetic present."
                    </p>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                      { title: 'The People', desc: 'Renowned for their hospitality, resilience, and warm smiles that welcome you everywhere.', img: 'https://picsum.photos/seed/people/400/300' },
                      { title: 'The Nature', desc: 'From the limestone karsts of Halong Bay to the lush Mekong Delta, nature is everywhere.', img: 'https://picsum.photos/seed/nature/400/300' },
                      { title: 'The Culture', desc: 'A rich tapestry woven from thousands of years of traditions, art, and vibrant festivals.', img: 'https://picsum.photos/seed/culture/400/300' }
                    ].map(card => (
                      <div key={card.title} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                        <img src={card.img} alt={card.title} className="w-full h-56 object-cover" />
                        <div className="p-8">
                          <h3 className="text-2xl font-serif font-bold mb-4">{card.title}</h3>
                          <p className="text-slate-600 leading-relaxed">{card.desc}</p>
                        </div>
                      </div>
                    ))}
                 </div>
              </div>
            </section>
          </div>
        );
      case 'planner':
        return <AIPlanner />;
      case 'food':
        return <FoodExplorer />;
      case 'guide':
        return <Vietnam101 />;
      case 'budget':
        return (
          <div className="max-w-4xl mx-auto p-8 text-center">
            <h2 className="text-4xl font-serif font-bold mb-8">Budget Calculator</h2>
            <div className="bg-white p-12 rounded-3xl shadow-xl border border-slate-100">
               <div className="mb-12">
                  <p className="text-slate-500 mb-8">This module calculates estimated daily costs based on travel style.</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     <div className="p-6 bg-green-50 rounded-2xl border border-green-100">
                        <h4 className="font-bold text-green-800 text-lg mb-2">Backpacker</h4>
                        <p className="text-2xl font-black text-green-600">$30 - $45</p>
                        <p className="text-xs text-green-700 mt-2">Per day/person</p>
                     </div>
                     <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                        <h4 className="font-bold text-blue-800 text-lg mb-2">Standard</h4>
                        <p className="text-2xl font-black text-blue-600">$60 - $120</p>
                        <p className="text-xs text-blue-700 mt-2">Per day/person</p>
                     </div>
                     <div className="p-6 bg-purple-50 rounded-2xl border border-purple-100">
                        <h4 className="font-bold text-purple-800 text-lg mb-2">Luxury</h4>
                        <p className="text-2xl font-black text-purple-600">$200+</p>
                        <p className="text-xs text-purple-700 mt-2">Per day/person</p>
                     </div>
                  </div>
               </div>
               <button className="bg-red-600 text-white px-8 py-3 rounded-full font-bold">Try Advanced Calculator</button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <footer className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-red-500 font-bold text-3xl tracking-tighter">VN</span>
              <span className="font-serif text-2xl font-bold">Explorer</span>
            </div>
            <p className="text-slate-400 max-w-sm">
              Your comprehensive guide to exploring the hidden gems and vibrant cities of Vietnam. Powered by Gemini AI.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-slate-300">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><button onClick={() => setActiveTab('home')} className="hover:text-red-500">Destination Map</button></li>
              <li><button onClick={() => setActiveTab('planner')} className="hover:text-red-500">Trip Planner</button></li>
              <li><button onClick={() => setActiveTab('food')} className="hover:text-red-500">Food Discovery</button></li>
              <li><button onClick={() => setActiveTab('guide')} className="hover:text-red-500">Survival Guide</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-slate-300">Contact</h4>
            <p className="text-slate-400 text-sm">Hanoi, Vietnam</p>
            <p className="text-slate-400 text-sm">contact@vnexplorer.com</p>
            <div className="flex space-x-4 mt-6">
               <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer">FB</div>
               <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer">IG</div>
               <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer">YT</div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2025 Vietnam Explorer AI. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
