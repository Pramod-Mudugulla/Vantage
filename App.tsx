import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkGrid from './components/WorkGrid';
import ServicesList from './components/ServicesList';
import Marquee from './components/Marquee';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white min-h-screen relative selection:bg-indigo-500 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        <Marquee 
          items={['Strategy', 'E-Commerce', 'Development', 'Branding', 'Art Direction', 'Motion']} 
          className="rotate-2 scale-105 my-12"
        />
        
        <div id="agency" className="container mx-auto px-4 py-24 md:px-8 md:py-32 flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
                <span className="block w-12 h-[1px] bg-indigo-600 mb-6"></span>
                <p className="uppercase tracking-widest text-sm text-indigo-600 font-semibold">The Agency</p>
            </div>
            <div className="md:w-2/3">
                <p className="text-2xl md:text-4xl font-light leading-snug text-slate-900 indent-12">
                    VANTAGE is a digital commerce agency built for the new era of retail. We bridge the gap between aesthetic excellence and technical performance to build brands that define culture.
                </p>
            </div>
        </div>

        <WorkGrid />
        
        <ServicesList />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;