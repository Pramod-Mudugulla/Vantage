import React, { useState } from 'react';

interface TransitionLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  className?: string;
  children: React.ReactNode;
}

const TransitionLink: React.FC<TransitionLinkProps> = ({ href, className = '', children, ...props }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (isAnimating) return;

    // Try to find a specific target marked for transition (e.g. an icon)
    // Fallback to the anchor itself
    let target = e.currentTarget.querySelector('[data-transition-target]') as HTMLElement;
    if (!target) {
      target = e.currentTarget;
    }

    // Get initial dimensions and position to freeze it visually
    const rect = target.getBoundingClientRect();
    
    // Calculate center of element
    const elemCenterX = rect.left + rect.width / 2;
    const elemCenterY = rect.top + rect.height / 2;
    
    // Calculate center of viewport
    const viewportCenterX = window.innerWidth / 2;
    const viewportCenterY = window.innerHeight / 2;
    
    // Delta to move element center to viewport center
    const deltaX = viewportCenterX - elemCenterX;
    const deltaY = viewportCenterY - elemCenterY;

    // Freeze the element in place visually using fixed positioning
    // This removes it from the flow/transform context of the parent
    target.style.position = 'fixed';
    target.style.left = `${rect.left}px`;
    target.style.top = `${rect.top}px`;
    target.style.width = `${rect.width}px`;
    target.style.height = `${rect.height}px`;
    target.style.margin = '0';
    target.style.transform = 'none'; 
    target.style.zIndex = '9999';
    target.style.borderRadius = '50%'; // Ensure circle for smooth expansion
    target.style.opacity = '1'; 

    // Force reflow
    void target.offsetHeight;

    setIsAnimating(true);

    // STEP 1: Move to Center
    target.style.willChange = 'transform, width, height';
    target.style.transition = 'transform 0.5s cubic-bezier(0.2, 0, 0.2, 1)'; // Snappy move
    target.style.transform = `translate3d(${deltaX}px, ${deltaY}px, 0) scale(1.5)`; // Move and slight pop

    // STEP 2: Zoom Out / Expand to Fill (sequenced)
    // We start this shortly before the move finishes for fluidity
    setTimeout(() => {
        target.style.transition = 'transform 0.6s cubic-bezier(0.8, 0, 0.1, 1)'; // Aggressive expansion
        // Scale 200 to ensure coverage even on large screens
        target.style.transform = `translate3d(${deltaX}px, ${deltaY}px, 0) scale(200)`; 
    }, 400);

    // STEP 3: Navigate
    setTimeout(() => {
      // Navigation Logic
      if (href.startsWith('#')) {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          try {
            window.history.pushState(null, '', href);
          } catch (e) {
            console.warn('Navigation history update failed:', e);
          }
        }
      } else {
        window.location.href = href;
      }
      
      // Cleanup after navigation
      setTimeout(() => {
        setIsAnimating(false);
        // Reset all inline styles
        target.style.position = '';
        target.style.left = '';
        target.style.top = '';
        target.style.width = '';
        target.style.height = '';
        target.style.margin = '';
        target.style.transform = '';
        target.style.transition = '';
        target.style.zIndex = '';
        target.style.borderRadius = '';
        target.style.opacity = '';
        target.style.willChange = '';
      }, 500);
    }, 900); // Trigger nav when expansion is covering screen
  };

  return (
    <a 
      href={href} 
      className={`${className} ${isAnimating ? 'pointer-events-none' : ''}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
};

export default TransitionLink;