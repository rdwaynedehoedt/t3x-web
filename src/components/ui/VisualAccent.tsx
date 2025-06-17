'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type AccentType = 'bracket' | 'dot' | 'line' | 'circle' | 'tech';
type AccentPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'left' | 'right';

interface VisualAccentProps {
  type: AccentType;
  position: AccentPosition;
  color?: string;
  delay?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const VisualAccent = ({ 
  type, 
  position, 
  color = 'accent', 
  delay = 0, 
  size = 'md',
  className = '' 
}: VisualAccentProps) => {
  // Position classes
  const positionClasses = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0',
    'bottom-left': 'bottom-0 left-0',
    'bottom-right': 'bottom-0 right-0',
    'left': 'top-1/2 -translate-y-1/2 left-0',
    'right': 'top-1/2 -translate-y-1/2 right-0'
  };

  // Size classes
  const sizeClasses = {
    'sm': 'h-10 w-10',
    'md': 'h-16 w-16',
    'lg': 'h-24 w-24'
  };

  // Color classes
  const colorClasses = {
    'accent': 'text-accent',
    'primary': 'text-primary',
    'blue': 'text-blue-500',
    'purple': 'text-purple-500',
    'indigo': 'text-indigo-500'
  };

  // Animation variants
  const variants = {
    hidden: { 
      opacity: 0,
      scale: 0.7,
    },
    visible: { 
      opacity: 0.25,
      scale: 1,
      transition: {
        duration: 0.8,
        delay,
        ease: "easeOut"
      }
    }
  };

  // Render the appropriate accent based on type
  const renderAccent = (): ReactNode => {
    switch (type) {
      case 'bracket':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full">
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
          </svg>
        );
      case 'dot':
        return (
          <div className="flex gap-1 flex-wrap justify-center items-center w-full h-full">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-current opacity-70"></div>
            ))}
          </div>
        );
      case 'line':
        return (
          <div className="w-full h-px bg-current"></div>
        );
      case 'circle':
        return (
          <div className="rounded-full border border-current w-full h-full opacity-30"></div>
        );
      case 'tech':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      className={`absolute pointer-events-none ${positionClasses[position]} ${sizeClasses[size]} ${colorClasses[color as keyof typeof colorClasses] || 'text-accent'} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
    >
      {renderAccent()}
    </motion.div>
  );
};

export default VisualAccent; 