'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const GridLines = () => {
  return (
    <div className="fixed inset-0 -z-5 opacity-10 pointer-events-none overflow-hidden">
      {/* Horizontal Lines */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div 
          key={`h-${i}`} 
          className="absolute left-0 right-0 h-px bg-accent"
          style={{ top: `${(i + 1) * 5}vh` }}
        />
      ))}
      
      {/* Vertical Lines */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div 
          key={`v-${i}`} 
          className="absolute top-0 bottom-0 w-px bg-accent"
          style={{ left: `${(i + 1) * 5}vw` }}
        />
      ))}
    </div>
  );
};

interface DataPoint {
  top: string;
  left: string;
  delay: number;
  size: number;
}

const DataPoints = () => {
  // Random positions for data points
  const generateDataPoints = (): DataPoint[] => {
    return Array.from({ length: 12 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 2,
      size: Math.random() * 20 + 10,
    }));
  };
  
  const [dataPoints, setDataPoints] = useState<DataPoint[]>([]);
  
  useEffect(() => {
    setDataPoints(generateDataPoints());
  }, []);
  
  return (
    <div className="fixed inset-0 -z-5 pointer-events-none overflow-hidden">
      {dataPoints.map((point, i) => (
        <motion.div
          key={`data-${i}`}
          className="absolute rounded-full border-2 border-accent opacity-30"
          style={{
            top: point.top,
            left: point.left,
            width: point.size,
            height: point.size,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.2, 0.5, 0.2],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 8,
            delay: point.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

const DiagonalLines = () => {
  const { scrollYProgress } = useScroll();
  const moveX = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  const moveX2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  
  return (
    <div className="fixed inset-0 -z-5 pointer-events-none overflow-hidden">
      <motion.div 
        className="absolute w-[200vw] h-px bg-accent/20 origin-left"
        style={{ 
          top: '35%', 
          left: 0, 
          x: moveX,
          transform: 'rotate(15deg)' 
        }}
      />
      <motion.div 
        className="absolute w-[200vw] h-px bg-accent/30 origin-right"
        style={{ 
          top: '65%', 
          right: 0, 
          x: moveX2,
          transform: 'rotate(-25deg)' 
        }}
      />
      <motion.div 
        className="absolute w-px h-[200vh] bg-accent/20 origin-top"
        style={{ 
          left: '25%', 
          top: 0, 
          transform: 'rotate(15deg)' 
        }}
      />
    </div>
  );
};

// Futuristic corner elements like HUD
const CornerElements = () => {
  return (
    <div className="fixed inset-0 -z-5 pointer-events-none overflow-hidden">
      {/* Top Left */}
      <div className="absolute top-0 left-0 w-40 h-40">
        <div className="absolute top-0 left-0 w-6 h-px bg-accent/50" />
        <div className="absolute top-0 left-0 w-px h-6 bg-accent/50" />
      </div>
      
      {/* Top Right */}
      <div className="absolute top-0 right-0 w-40 h-40">
        <div className="absolute top-0 right-0 w-6 h-px bg-accent/50" />
        <div className="absolute top-0 right-0 w-px h-6 bg-accent/50" />
      </div>
      
      {/* Bottom Left */}
      <div className="absolute bottom-0 left-0 w-40 h-40">
        <div className="absolute bottom-0 left-0 w-6 h-px bg-accent/50" />
        <div className="absolute bottom-0 left-0 w-px h-6 bg-accent/50" />
      </div>
      
      {/* Bottom Right */}
      <div className="absolute bottom-0 right-0 w-40 h-40">
        <div className="absolute bottom-0 right-0 w-6 h-px bg-accent/50" />
        <div className="absolute bottom-0 right-0 w-px h-6 bg-accent/50" />
      </div>
    </div>
  );
};

// Dynamic data flow visualization
const DataFlow = () => {
  const { scrollYProgress } = useScroll();
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  
  return (
    <div className="fixed right-8 top-[30vh] bottom-[30vh] w-px bg-accent/10 -z-5 pointer-events-none overflow-hidden">
      <motion.div 
        className="absolute top-0 w-full bg-accent/40"
        style={{ height: lineHeight }}
      />
      
      {/* Data points along the line */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={`flow-${i}`}
          className="absolute w-2 h-2 -left-[3px] bg-accent rounded-full"
          style={{ 
            top: `${(i + 1) * 20 - 10}%`,
            opacity: scrollYProgress.get() > (i + 1) * 0.2 ? 1 : 0.2
          }}
          initial={{ scale: 0.5 }}
          animate={{ scale: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      ))}
    </div>
  );
};

const TechOverlay = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;
  
  return (
    <>
      <GridLines />
      <DataPoints />
      <DiagonalLines />
      <CornerElements />
      <DataFlow />
    </>
  );
};

export default TechOverlay; 