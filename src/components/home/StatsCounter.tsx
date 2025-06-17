'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import AnimatedTitle from '../ui/AnimatedTitle';
import VisualAccent from '../ui/VisualAccent';

interface StatItem {
  id: number;
  value: number;
  suffix?: string;
  label: string;
  icon: React.ReactNode;
}

const stats: StatItem[] = [
  {
    id: 1,
    value: 12,
    suffix: '+',
    label: 'Websites Live',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  },
  {
    id: 2,
    value: 6,
    label: 'Custom Business Systems Delivered',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    )
  },
  {
    id: 3,
    value: 98,
    suffix: '%',
    label: 'Client Satisfaction',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
}

const CountUp = ({ end, duration = 2, suffix = '' }: CountUpProps) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, amount: 0.3 });
  
  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const increment = end / 30;
    const timer = setInterval(() => {
      start += increment;
      if (start > end) {
        setCount(end);
        clearInterval(timer);
        return;
      }
      setCount(Math.floor(start));
    }, duration * 1000 / 30);
    
    return () => clearInterval(timer);
  }, [end, duration, isInView]);
  
  return (
    <div ref={nodeRef} className="font-bold text-5xl md:text-6xl text-accent">
      {count}{suffix}
    </div>
  );
};

interface StatCardProps {
  stat: StatItem;
  index: number;
}

const StatCard = ({ stat, index }: StatCardProps) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      ref={cardRef}
      className="flex flex-col items-center text-center p-6 rounded-xl bg-foreground/5 backdrop-blur-lg hover:bg-foreground/10 transition-all"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.7, 
        ease: [0.16, 1, 0.3, 1],
        delay: 0.1 * index 
      }}
      whileHover={{
        y: -5,
        boxShadow: "0 10px 30px -10px rgba(66, 71, 137, 0.3)"
      }}
    >
      <div className="mb-4 opacity-80">
        {stat.icon}
      </div>
      <CountUp end={stat.value} suffix={stat.suffix || ''} />
      <h3 className="text-lg mt-2 opacity-70">{stat.label}</h3>
    </motion.div>
  );
};

const StatsCounter = () => {
  const containerRef = useRef(null);
  
  return (
    <section ref={containerRef} className="py-24 px-6 relative bg-card/5">
      {/* Visual accents */}
      <VisualAccent type="bracket" position="top-right" color="accent" size="sm" delay={0.2} className="m-8 opacity-20" />
      <VisualAccent type="dot" position="bottom-left" color="blue" size="sm" delay={0.4} className="m-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <AnimatedTitle 
            animation="slide-in" 
            size="lg" 
            withAccent={true}
            className="mb-6"
          >
            Our <span className="text-gradient">Impact</span>
          </AnimatedTitle>
          
          <motion.p 
            className="text-xl opacity-70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Delivering exceptional results that drive real business outcomes
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter; 