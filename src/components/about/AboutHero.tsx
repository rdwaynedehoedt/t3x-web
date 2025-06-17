'use client';

import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <div className="relative min-h-[40vh] flex flex-col items-center justify-center w-full py-16 overflow-hidden">
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
          className="text-5xl md:text-7xl font-bold mb-4 leading-tight tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          About <span className="text-gradient">T3X</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-6 max-w-3xl mx-auto opacity-80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          A team of innovators passionate about transforming businesses through technology
        </motion.p>
        
        {/* Decorative line */}
        <motion.div 
          className="h-px bg-gradient-to-r from-background via-accent to-background w-0 mx-auto"
          initial={{ width: 0 }}
          animate={{ width: "60%" }}
          transition={{ delay: 0.6, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
      </motion.div>
      
      {/* Decorative elements */}
      <div className="absolute left-0 top-1/4 w-32 h-32 bg-accent/5 rounded-full blur-xl" />
      <div className="absolute right-0 bottom-1/4 w-32 h-32 bg-indigo-500/5 rounded-full blur-xl" />
    </div>
  );
};

export default AboutHero; 