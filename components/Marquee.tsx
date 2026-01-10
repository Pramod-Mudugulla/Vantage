import React from 'react';

interface MarqueeProps {
  items: string[];
  direction?: 'left' | 'right';
  className?: string;
}

const Marquee: React.FC<MarqueeProps> = ({ items, className = '' }) => {
  return (
    <div className={`relative overflow-hidden w-full py-12 bg-indigo-600 text-white shadow-2xl shadow-indigo-900/20 ${className}`}>
      <div className="flex whitespace-nowrap animate-marquee">
        {/* Double the content to create seamless loop */}
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <span key={index} className="mx-8 text-6xl md:text-8xl font-bold uppercase tracking-tighter flex items-center">
            {item} <span className="ml-8 w-4 h-4 bg-white rounded-full inline-block" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;