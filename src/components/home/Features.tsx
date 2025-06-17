'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import AnimatedTitle from '../ui/AnimatedTitle';
import VisualAccent from '../ui/VisualAccent';

const features = [
  {
    title: 'Website Development',
    description: 'Custom, responsive websites tailored to your business needs with SEO optimization built in.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 9H21M9 21V9M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: 'Business Systems',
    description: 'POS systems, inventory management, and custom dashboards that streamline your operations.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 21V5C16 3.89543 15.1046 3 14 3H10C8.89543 3 8 3.89543 8 5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Store Solutions',
    description: 'Digital solutions for retail, online ordering, reservations, and contactless payment systems.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 3H4.5L6.5 17H17.5L22 7.5H10M16 19C16 20.1046 15.1046 21 14 21C12.8954 21 12 20.1046 12 19M16 19C16 17.8954 15.1046 17 14 17C12.8954 17 12 17.8954 12 19M9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19M9 19C9 17.8954 8.10457 17 7 17C5.89543 17 5 17.8954 5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Technical Support',
    description: 'Ongoing maintenance, updates, security enhancements, and feature additions for your systems.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  }
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      ref={ref}
      className="group relative bg-foreground/5 backdrop-blur-lg rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.7, 
        ease: [0.16, 1, 0.3, 1],
        delay: 0.1 * index 
      }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Gradient background that appears on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/20 via-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <motion.div 
        className="relative w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-6 text-accent group-hover:bg-accent/30 group-hover:scale-110 transition-all duration-500"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ 
          duration: 0.4, 
          ease: [0.16, 1, 0.3, 1],
          delay: 0.1 * index + 0.2
        }}
      >
        {feature.icon}
      </motion.div>
      <div className="relative">
        <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors duration-500">{feature.title}</h3>
        <p className="opacity-70 group-hover:opacity-90 transition-opacity duration-500">{feature.description}</p>
      </div>
    </motion.div>
  );
};

const Features = () => {
  const ref = useRef(null);
  
  return (
    <section className="py-24 px-6 relative" ref={ref}>
      {/* Visual accents */}
      <VisualAccent type="bracket" position="top-left" color="accent" size="md" delay={0.2} className="m-8 opacity-20" />
      <VisualAccent type="dot" position="top-right" color="blue" size="sm" delay={0.4} className="m-10" />
      <VisualAccent type="tech" position="bottom-right" color="indigo" size="lg" delay={0.6} className="m-12" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <AnimatedTitle 
            animation="letter-reveal" 
            size="xl" 
            withAccent={true}
            className="mb-6"
          >
            Our <span className="text-gradient">Services</span>
          </AnimatedTitle>
          
          <motion.p 
            className="text-xl opacity-70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            We deliver tailored digital solutions that fit your needs and grow with your business.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 