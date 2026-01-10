import React from 'react';
import { ArrowRight } from 'lucide-react';
import TransitionLink from './TransitionLink';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#020617] text-slate-100 pt-32 pb-8 border-t border-slate-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-24">
          <p className="text-indigo-400 uppercase tracking-widest mb-6 text-sm font-bold">Start a project</p>
          <TransitionLink href="mailto:hello@vantage.agency" className="group block w-full">
            <h2 className="text-[8vw] leading-[0.9] font-bold uppercase tracking-tighter group-hover:text-indigo-300 transition-colors flex items-center text-slate-100">
              Let's Talk 
              <span data-transition-target className="inline-block ml-4 md:ml-12">
                 <ArrowRight className="w-[6vw] h-[6vw] -rotate-45 group-hover:rotate-0 transition-transform duration-500 text-indigo-500" />
              </span>
            </h2>
          </TransitionLink>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24 border-t border-slate-900 pt-12">
          <div>
            <h4 className="uppercase tracking-wider text-xs font-bold text-slate-500 mb-4">Socials</h4>
            <ul className="space-y-2 text-sm uppercase tracking-wide">
              <li><a href="#" className="text-slate-300 hover:text-indigo-400 transition-colors">Instagram</a></li>
              <li><a href="#" className="text-slate-300 hover:text-indigo-400 transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-slate-300 hover:text-indigo-400 transition-colors">Twitter</a></li>
            </ul>
          </div>
          <div>
            <h4 className="uppercase tracking-wider text-xs font-bold text-slate-500 mb-4">Amsterdam</h4>
            <address className="not-italic text-sm text-slate-300 leading-relaxed">
              Keizersgracht 123<br/>
              1015 CJ Amsterdam<br/>
              Netherlands
            </address>
          </div>
          <div>
            <h4 className="uppercase tracking-wider text-xs font-bold text-slate-500 mb-4">New York</h4>
            <address className="not-italic text-sm text-slate-300 leading-relaxed">
              54 Bowery<br/>
              New York, NY 10013<br/>
              United States
            </address>
          </div>
           <div className="flex flex-col justify-between">
              <span className="text-xs text-slate-600">© 2024 VANTAGE Agency</span>
           </div>
        </div>

        <div className="text-[14vw] font-bold text-slate-900 leading-none text-center select-none pointer-events-none opacity-40">
          VANTAGE
        </div>
      </div>
    </footer>
  );
};

export default Footer;