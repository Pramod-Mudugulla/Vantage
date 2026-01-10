import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-start pt-20 pb-12 container mx-auto px-4 md:px-8 relative">
      <div className="flex-1 flex flex-col justify-center w-full">
        <h1 className="text-[12vw] leading-[0.9] font-bold tracking-tighter uppercase text-slate-900 mb-6">
          Digital <br />
          <span className="pl-[10vw] text-indigo-600">Commerce</span> <br />
          Architects
        </h1>
      </div>
      
      <div className="w-full flex justify-between items-end pb-8 border-b border-slate-200">
        <div className="max-w-md">
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
            We partner with ambitious brands to define the future of digital retail through strategy, design, and technology.
          </p>
        </div>
        <div className="hidden md:block animate-bounce">
          <ArrowDown className="text-indigo-600" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;