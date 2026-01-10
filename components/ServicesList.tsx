import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { Plus, Minus } from 'lucide-react';

const ServicesList: React.FC = () => {
  const [activeService, setActiveService] = useState<string | null>(SERVICES[0].id);

  return (
    <section id="services" className="py-24 bg-slate-50 text-slate-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:justify-between mb-16">
          <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-8 md:mb-0 text-slate-900">
            Our<br/>Expertise
          </h2>
          <p className="max-w-md text-slate-600 text-lg leading-relaxed">
            We don't just build websites. We build comprehensive digital ecosystems designed for scale, speed, and sales.
          </p>
        </div>

        <div className="border-t border-slate-200">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group border-b border-slate-200 transition-colors duration-300 hover:bg-white"
              onMouseEnter={() => setActiveService(service.id)}
            >
              <div 
                className="py-10 flex flex-col md:flex-row md:items-start justify-between cursor-pointer"
                onClick={() => setActiveService(activeService === service.id ? null : service.id)}
              >
                <div className="flex items-center gap-6 mb-4 md:mb-0">
                  <span className="text-indigo-600 font-mono text-sm">0{SERVICES.indexOf(service) + 1}</span>
                  <h3 className={`text-3xl md:text-5xl font-light uppercase tracking-tight transition-all duration-300 ${activeService === service.id ? 'text-indigo-600 translate-x-4' : 'text-slate-900 group-hover:text-indigo-600 group-hover:translate-x-4'}`}>
                    {service.title}
                  </h3>
                </div>
                
                <div className={`md:hidden text-indigo-600`}>
                    {activeService === service.id ? <Minus /> : <Plus />}
                </div>

                <div className={`overflow-hidden transition-all duration-500 ease-in-out md:max-h-96 md:w-1/3 ${activeService === service.id ? 'max-h-96 opacity-100 mt-4 md:mt-0' : 'max-h-0 opacity-0 md:opacity-100 md:max-h-0'}`}>
                   <p className="text-slate-600 mb-6 leading-relaxed">
                     {service.description}
                   </p>
                   <div className="flex flex-wrap gap-2">
                     {service.tags.map(tag => (
                       <span key={tag} className="border border-slate-300 rounded-full px-3 py-1 text-xs uppercase tracking-wider text-indigo-600 bg-indigo-50/50">
                         {tag}
                       </span>
                     ))}
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;