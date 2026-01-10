import React, { useState, useEffect } from 'react';
import { Menu, X, LayoutGrid, Users, Zap, MessageCircle } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import TransitionLink from './TransitionLink';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'LayoutGrid': return <LayoutGrid size={20} strokeWidth={1.5} />;
      case 'Users': return <Users size={20} strokeWidth={1.5} />;
      case 'Zap': return <Zap size={20} strokeWidth={1.5} />;
      case 'MessageCircle': return <MessageCircle size={20} strokeWidth={1.5} />;
      default: return null;
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 mix-blend-difference text-white ${
          scrolled ? 'py-4' : 'py-6 md:py-10'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <TransitionLink href="#" className="text-2xl font-bold tracking-tighter uppercase z-50 relative group">
            Vantage<span data-transition-target className="text-indigo-600 inline-block">.</span>
          </TransitionLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 lg:gap-12 items-center">
            {NAV_ITEMS.map((item) => (
              <TransitionLink 
                key={item.label} 
                href={item.href}
                className="relative group flex justify-center items-center text-sm font-medium tracking-widest uppercase hover:text-indigo-400 transition-colors"
              >
                <span>{item.label}</span>
                <span 
                  data-transition-target 
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white rounded-full p-3 opacity-0 pointer-events-none"
                >
                  {getIcon(item.iconName)}
                </span>
              </TransitionLink>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden z-50 hover:text-indigo-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-40 flex flex-col justify-center items-center transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col gap-8 text-center">
          {NAV_ITEMS.map((item) => (
            <TransitionLink 
              key={item.label} 
              href={item.href}
              className="relative group flex justify-center items-center text-4xl font-light tracking-tighter uppercase hover:text-indigo-600 transition-colors text-slate-900"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
              <span 
                data-transition-target 
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white rounded-full p-4 opacity-0 pointer-events-none"
              >
                 {getIcon(item.iconName)}
              </span>
            </TransitionLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;