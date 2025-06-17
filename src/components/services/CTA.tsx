'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="w-full py-14 px-6">
      <motion.div 
        className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-accent/10 via-background/80 to-background/80 backdrop-blur-sm border border-accent/10 p-10 text-center relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500/5 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Ready to build something <span className="text-gradient">amazing</span>?
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Let&apos;s discuss your project and explore how we can help transform your business with tailored technology solutions.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link 
              href="/contact?source=cta" 
              className="magnetic inline-block px-8 py-4 rounded-full bg-accent text-white font-medium text-lg hover:bg-accent-dark hover:scale-105 transition-all duration-300"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA; 