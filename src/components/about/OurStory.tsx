'use client';

import { motion } from 'framer-motion';
import NetworkLogo from './NetworkLogo';

const OurStory = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl font-bold mb-6">Our <span className="text-gradient">Story</span></h2>
          <div className="space-y-4 text-foreground/80">
            <p>
              Founded in 2025, T3X began with a simple mission: to make cutting-edge technology accessible to businesses of all sizes. What started as a small team of three passionate developers has grown into a versatile digital solutions provider with expertise across multiple disciplines.
            </p>
            <p>
              Our journey has been defined by our commitment to innovation and our belief that technology should serve businesses, not complicate them. We&apos;ve helped transform startups into industry leaders and assisted established companies in staying ahead of digital trends.
            </p>
            <p>
              Today, we continue to push boundaries and explore new possibilities, always guided by our founding principles of excellence, integrity, and client partnership.
            </p>
          </div>
        </motion.div>
        
        <motion.div
          className="relative aspect-square max-w-md mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <NetworkLogo />
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory; 