'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface AnimatedButtonProps {
  href: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const AnimatedButton = ({
  href,
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  onClick,
}: AnimatedButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-accent text-foreground hover:bg-accent-dark';
      case 'secondary':
        return 'bg-foreground/10 hover:bg-foreground/20';
      case 'outline':
        return 'bg-transparent border border-foreground/20 hover:bg-foreground/5';
      default:
        return 'bg-accent text-white hover:bg-accent-dark';
    }
  };
  
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'text-sm px-4 py-2';
      case 'md':
        return 'text-base px-6 py-3';
      case 'lg':
        return 'text-lg px-8 py-4';
      default:
        return 'text-base px-6 py-3';
    }
  };
  
  return (
    <Link href={href} className="block relative" onClick={onClick}>
      <motion.div
        className={`magnetic rounded-full font-medium transition-colors ${getVariantClasses()} ${getSizeClasses()} ${className}`}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="relative z-10 flex items-center justify-center">
          {children}
          
          {/* Arrow icon for primary variant */}
          {variant === 'primary' && (
            <motion.svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2"
              initial={{ opacity: 0, x: -4 }}
              animate={{ 
                opacity: isHovered ? 1 : 0, 
                x: isHovered ? 0 : -4 
              }}
              transition={{ duration: 0.2 }}
            >
              <path
                d="M3.33331 8H12.6666"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 3.33334L12.6667 8.00001L8 12.6667"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          )}
        </span>
        
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-accent/20 blur-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: isHovered ? 0.7 : 0, 
            scale: isHovered ? 1.1 : 0.8 
          }}
          transition={{ duration: 0.3 }}
          style={{ display: variant !== 'primary' ? 'none' : 'block' }}
        />
      </motion.div>
    </Link>
  );
};

export default AnimatedButton; 