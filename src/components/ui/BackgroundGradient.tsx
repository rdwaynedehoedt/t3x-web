'use client';

import { useRef } from 'react';
import { useTheme } from 'next-themes';

const BackgroundGradient = () => {
  const ref = useRef(null);
  const { theme } = useTheme();
  
  return (
    <div 
      ref={ref}
      className="fixed top-0 left-0 w-full h-full -z-10 bg-background transition-colors duration-300"
    />
  );
};

export default BackgroundGradient; 