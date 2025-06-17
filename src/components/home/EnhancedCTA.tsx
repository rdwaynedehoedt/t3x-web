'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRef, useEffect } from 'react';
import AnimatedTitle from '../ui/AnimatedTitle';

const EnhancedCTA = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  
  // Effect for the animated gradient background
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    let x = 0;
    let y = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      x = (e.clientX - rect.left) / container.offsetWidth;
      y = (e.clientY - rect.top) / container.offsetHeight;
      
      container.style.setProperty('--mouse-x', `${x}`);
      container.style.setProperty('--mouse-y', `${y}`);
    };
    
    container.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Effect for button gloss effect
  useEffect(() => {
    if (!buttonRef.current) return;
    
    const button = buttonRef.current;
    
    const handleButtonMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      button.style.setProperty('--x', `${x}px`);
      button.style.setProperty('--y', `${y}px`);
    };
    
    button.addEventListener('mousemove', handleButtonMouseMove);
    
    return () => {
      button.removeEventListener('mousemove', handleButtonMouseMove);
    };
  }, []);
  
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };

  return (
    <section 
      ref={containerRef} 
      className="relative py-24 px-6 overflow-hidden bg-background"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-background">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: "radial-gradient(circle at calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%), rgba(79, 70, 229, 0.15) 0%, transparent 50%)"
          }}
        ></div>
        
        {/* Glowing lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-30"></div>
        
        {/* Glowing dots */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-indigo-600 opacity-20"></div>
        <div className="absolute top-3/4 left-3/4 w-3 h-3 rounded-full bg-blue-600 opacity-20"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-purple-600 opacity-20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <AnimatedTitle 
            animation="letter-reveal" 
            size="xl" 
            className="mb-6 text-foreground"
          >
            Ready to transform your business?
          </AnimatedTitle>
          
          <motion.p 
            className="text-xl text-foreground/80 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            From websites to complete business systems, we&apos;ll help you simplify operations and enhance customer experiences.
          </motion.p>
          
          <motion.div
            className="inline-block"
            variants={buttonVariants}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 1 } }}
            whileHover="hover"
            whileTap="tap"
          >
            <Link 
              ref={buttonRef}
              href="/contact?source=cta" 
              className="relative px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-medium text-lg inline-flex items-center group overflow-hidden"
            >
              {/* Gloss Effect - follows cursor within the button */}
              <span 
                className="absolute inset-0 rounded-full overflow-hidden pointer-events-none"
                style={{
                  background: "radial-gradient(circle 80px at var(--x, 0) var(--y, 0), rgba(255, 255, 255, 0.25) 0%, transparent 60%)",
                }}
              ></span>
              
              {/* Button Border Glow */}
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                boxShadow: "0 0 15px 2px rgba(79, 70, 229, 0.5)",
              }}></span>
              
              <span className="relative z-10">Start Your Project</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="relative z-10 h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedCTA; 