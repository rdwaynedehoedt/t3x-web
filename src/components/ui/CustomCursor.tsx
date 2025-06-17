'use client';

import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true); // Default to true to prevent flash on mobile

  useEffect(() => {
    // Check if we're on the client side
    if (typeof window !== 'undefined') {
      // Function to check if device is mobile (screen width < 768px)
      const checkIsMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };
      
      // Initial check
      checkIsMobile();
      
      // Add event listener for window resize
      window.addEventListener('resize', checkIsMobile);
      
      // Cleanup
      return () => {
        window.removeEventListener('resize', checkIsMobile);
      };
    }
  }, []);

  useEffect(() => {
    // Only set up cursor effects if not on mobile
    if (isMobile) return;
    
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Set up magnetic effect for buttons and links
    const setupMagneticElements = () => {
      const magneticElements = document.querySelectorAll('.magnetic');
      
      magneticElements.forEach(el => {
        el.addEventListener('mousemove', ((e: MouseEvent) => {
          const rect = el.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          
          (el as HTMLElement).style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        }) as EventListener);
        
        el.addEventListener('mouseleave', () => {
          (el as HTMLElement).style.transform = 'translate(0px, 0px)';
        });
      });
    };

    window.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    // Setup magnetic effect after component mounts
    setupMagneticElements();
    
    // Clean up event listeners
    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      
      const magneticElements = document.querySelectorAll('.magnetic');
      magneticElements.forEach(el => {
        el.removeEventListener('mousemove', () => {});
        el.removeEventListener('mouseleave', () => {});
      });
    };
  }, [isVisible, isMobile]);

  // If it's a mobile device, don't render the cursor at all
  if (isMobile) {
    return null;
  }

  return (
    <div
      className={`cursor-follower ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{
        transform: `translate(${position.x - 10}px, ${position.y - 10}px)`,
      }}
    />
  );
};

export default CustomCursor; 