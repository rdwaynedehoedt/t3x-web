'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type AnimationType = 'fade-up' | 'letter-reveal' | 'slide-in' | 'scale';
type TitleSize = 'sm' | 'md' | 'lg' | 'xl';
type TitleElement = 'h1' | 'h2' | 'h3' | 'h4';

interface AnimatedTitleProps {
  children: ReactNode;
  animation?: AnimationType;
  element?: TitleElement;
  size?: TitleSize;
  className?: string;
  delay?: number;
  withAccent?: boolean;
}

const AnimatedTitle = ({
  children,
  animation = 'fade-up',
  element = 'h2',
  size = 'lg',
  className = '',
  delay = 0,
  withAccent = false,
}: AnimatedTitleProps) => {
  // Size classes mapped to TailwindCSS
  const sizeClasses = {
    'sm': 'text-xl md:text-2xl',
    'md': 'text-2xl md:text-3xl',
    'lg': 'text-3xl md:text-4xl',
    'xl': 'text-4xl md:text-5xl',
  };
  
  // Base variants for different animations
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay
      }
    }
  };
  
  const slideInVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay
      }
    }
  };
  
  const scaleVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay
      }
    }
  };
  
  // For letter animation
  const letterContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: delay
      }
    }
  };
  
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  // Determine which variants to use based on animation type
  const getVariants = () => {
    switch (animation) {
      case 'fade-up':
        return fadeUpVariants;
      case 'slide-in':
        return slideInVariants;
      case 'scale':
        return scaleVariants;
      case 'letter-reveal':
        return letterContainerVariants;
      default:
        return fadeUpVariants;
    }
  };

  // Split text for letter animation if needed
  const renderContent = () => {
    if (animation === 'letter-reveal' && typeof children === 'string') {
      return children.split('').map((char, index) => (
        <motion.span key={index} variants={letterVariants} className="inline-block">
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ));
    }
    return children;
  };

  // Render the correct element
  const renderElement = () => {
    const variants = getVariants();
    const baseClasses = `font-bold ${sizeClasses[size]} ${className} relative`;
    
    const titleContent = (
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={variants}
        className="inline-block"
      >
        {renderContent()}
        {withAccent && (
          <motion.span 
            className="absolute -bottom-2 left-0 h-1 bg-accent rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: '2rem' }}
            transition={{ duration: 0.5, delay: delay + 0.3 }}
            viewport={{ once: true }}
          />
        )}
      </motion.span>
    );
    
    switch (element) {
      case 'h1':
        return <h1 className={baseClasses}>{titleContent}</h1>;
      case 'h2':
        return <h2 className={baseClasses}>{titleContent}</h2>;
      case 'h3':
        return <h3 className={baseClasses}>{titleContent}</h3>;
      case 'h4':
        return <h4 className={baseClasses}>{titleContent}</h4>;
      default:
        return <h2 className={baseClasses}>{titleContent}</h2>;
    }
  };

  return renderElement();
};

export default AnimatedTitle; 