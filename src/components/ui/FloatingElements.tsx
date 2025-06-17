'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const techElements = [
  // Modern minimal tech icons
  {
    type: 'icon',
    content: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    side: 'left',
    size: 'sm'
  },
  {
    type: 'code',
    content: '{ }',
    side: 'right',
    size: 'lg'
  },
  {
    type: 'icon',
    content: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 7L7 17M7 7L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    side: 'left',
    size: 'lg'
  },
  {
    type: 'code',
    content: '</>',
    side: 'right',
    size: 'sm'
  },
  {
    type: 'icon',
    content: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 6V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M6 12H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    side: 'right',
    size: 'md'
  },
  {
    type: 'code',
    content: '[]',
    side: 'left',
    size: 'md'
  }
];

const FloatingElements = () => {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  // Create scroll-based transforms for each side
  const leftElementsY = useTransform(scrollY, 
    [0, 1000], 
    [0, 200]
  );
  
  const rightElementsY = useTransform(scrollY, 
    [0, 1000], 
    [0, -200]
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" ref={containerRef}>
      <div className="relative w-full h-full max-w-[1920px] mx-auto">
        {/* Left side elements */}
        <motion.div 
          className="absolute left-8 top-0 h-full"
          style={{ y: leftElementsY }}
        >
          {techElements
            .filter(elem => elem.side === 'left')
            .map((elem, index) => (
              <motion.div
                key={index}
                className="absolute backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0.1, 0.15, 0.1],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 1.5,
                  times: [0, 0.5, 1]
                }}
                style={{
                  top: `${20 + (index * 30)}%`,
                  left: `${index * 20}px`
                }}
              >
                {elem.type === 'icon' ? (
                  <div className={`text-accent/20 transform ${
                    elem.size === 'sm' ? 'scale-75' :
                    elem.size === 'lg' ? 'scale-125' : 'scale-100'
                  }`}>
                    {elem.content}
                  </div>
                ) : (
                  <div className={`font-mono text-accent/20 ${
                    elem.size === 'sm' ? 'text-sm' :
                    elem.size === 'lg' ? 'text-2xl' : 'text-xl'
                  }`}>
                    {elem.content}
                  </div>
                )}
              </motion.div>
            ))}
        </motion.div>

        {/* Right side elements */}
        <motion.div 
          className="absolute right-8 top-0 h-full"
          style={{ y: rightElementsY }}
        >
          {techElements
            .filter(elem => elem.side === 'right')
            .map((elem, index) => (
              <motion.div
                key={index}
                className="absolute backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0.1, 0.15, 0.1],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 1.5,
                  times: [0, 0.5, 1]
                }}
                style={{
                  top: `${35 + (index * 30)}%`,
                  right: `${index * 20}px`
                }}
              >
                {elem.type === 'icon' ? (
                  <div className={`text-accent/20 transform ${
                    elem.size === 'sm' ? 'scale-75' :
                    elem.size === 'lg' ? 'scale-125' : 'scale-100'
                  }`}>
                    {elem.content}
                  </div>
                ) : (
                  <div className={`font-mono text-accent/20 ${
                    elem.size === 'sm' ? 'text-sm' :
                    elem.size === 'lg' ? 'text-2xl' : 'text-xl'
                  }`}>
                    {elem.content}
                  </div>
                )}
              </motion.div>
            ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FloatingElements; 