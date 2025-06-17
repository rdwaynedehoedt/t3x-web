'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-in' | 'scale-in' | 'slide-left' | 'slide-right';
  duration?: number;
  delay?: number;
  scrub?: boolean;
  start?: string;
  end?: string;
  markers?: boolean;
  threshold?: number;
  className?: string;
}

const defaultAnimations = {
  'fade-up': {
    opacity: 0,
    y: 60,
    duration: 1.2,
  },
  'fade-in': {
    opacity: 0,
    duration: 1,
  },
  'scale-in': {
    opacity: 0,
    scale: 0.8,
    duration: 1,
  },
  'slide-left': {
    opacity: 0,
    x: 80,
    duration: 1.2,
  },
  'slide-right': {
    opacity: 0,
    x: -80,
    duration: 1.2,
  },
};

export const ScrollAnimation = ({
  children,
  animation = 'fade-up',
  duration,
  delay = 0,
  scrub = false,
  start = 'top 80%',
  end = 'bottom 20%',
  markers = false,
  threshold = 0.5,
  className = '',
}: ScrollAnimationProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!ref.current) return;
    
    const element = ref.current;
    
    // Get the animation config
    const animConfig = { ...defaultAnimations[animation] };
    if (duration) animConfig.duration = duration;
    
    // Set the initial state
    gsap.set(element, {
      opacity: animConfig.opacity,
      y: 'y' in animConfig ? animConfig.y : 0,
      x: 'x' in animConfig ? animConfig.x : 0,
      scale: 'scale' in animConfig ? animConfig.scale : 1,
    });
    
    // Create the animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start,
        end: scrub ? end : 'bottom bottom',
        scrub: scrub,
        markers,
        toggleActions: scrub ? undefined : 'play none none none',
      },
      defaults: {
        ease: 'power2.out',
        duration: scrub ? 1 : animConfig.duration,
      },
      delay,
    });
    
    // Add the animation to the timeline
    tl.to(element, {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [animation, delay, duration, end, markers, scrub, start, threshold]);
  
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default ScrollAnimation;
