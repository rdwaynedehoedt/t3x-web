'use client';

import { motion } from 'framer-motion';

const ServicesHero = () => {
  return (
    <div className="relative min-h-[35vh] flex flex-col items-center justify-center w-full py-14 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-accent/5 to-background/0 z-0" />
      
      {/* Content */}
      <motion.div 
        className="z-10 max-w-5xl px-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-3 leading-tight tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          What We <span className="text-gradient">Offer</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto opacity-80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Smart solutions built to grow your business.
        </motion.p>
        
        {/* Animated underline */}
        <motion.div 
          className="h-px bg-gradient-to-r from-background via-accent to-background w-0 mx-auto"
          initial={{ width: 0 }}
          animate={{ width: "60%" }}
          transition={{ delay: 0.6, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
      </motion.div>
      
      {/* Decorative elements */}
      <div className="absolute left-0 top-1/4 w-16 h-32 bg-accent/5 rounded-r-full blur-xl" />
      <div className="absolute right-0 bottom-1/4 w-16 h-32 bg-indigo-500/5 rounded-l-full blur-xl" />
    </div>
  );
};

export default ServicesHero; 