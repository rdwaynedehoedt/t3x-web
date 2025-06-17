'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

const CinematicEffect = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;
  
  // Adjust opacity based on theme
  const grainOpacity = theme === 'dark' ? 0.07 : 0.03;
  const vignetteBackground = theme === 'dark' 
    ? 'radial-gradient(circle, transparent 40%, rgba(0, 0, 0, 0.7) 100%)'
    : 'radial-gradient(circle, transparent 40%, rgba(0, 0, 0, 0.3) 100%)';
  
  return (
    <div className="fixed inset-0 pointer-events-none z-[1] mix-blend-soft-light">
      {/* Film Grain Effect */}
      <div 
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: grainOpacity,
          backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1IiBkPSJNMCAwaDMwMHYzMDBIMHoiLz48L3N2Zz4=')",
          backgroundRepeat: 'repeat',
        }}
      />
      
      {/* Vignette Effect */}
      <div 
        className="absolute inset-0 transition-all duration-300"
        style={{
          opacity: theme === 'dark' ? 0.7 : 0.4,
          background: vignetteBackground,
        }}
      />
      
      {/* Light Rays */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[100vw] h-[100vh] origin-top-right transition-opacity duration-300"
          style={{
            opacity: theme === 'dark' ? 0.03 : 0.015,
            top: '-20vh',
            right: '10vw',
            background: 'linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%)',
            transform: 'rotate(-45deg) translateX(30%) translateY(-50%)',
          }}
          animate={{
            opacity: theme === 'dark' ? [0.02, 0.05, 0.02] : [0.01, 0.025, 0.01],
            x: ['-30%', '10%', '-30%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      {/* Subtle Screen Flicker */}
      <motion.div
        className="absolute inset-0 bg-accent transition-opacity duration-300"
        style={{
          opacity: 0,
        }}
        animate={{ opacity: theme === 'dark' ? [0, 0.01, 0] : [0, 0.005, 0] }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatType: "mirror",
          repeatDelay: Math.random() * 10 + 5,
        }}
      />
      
      {/* Digital Distortion Lines - Appears Occasionally */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-0 right-0 h-[2px] bg-accent/50 transition-opacity duration-300"
          style={{ 
            top: '45%',
            opacity: 0,
          }}
          animate={{ 
            opacity: theme === 'dark' ? [0, 0.7, 0] : [0, 0.4, 0],
            scaleX: [0, 1, 0],
            x: ['0%', '100%', '0%'],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatDelay: Math.random() * 20 + 15,
          }}
        />
      </div>
    </div>
  );
};

export default CinematicEffect; 