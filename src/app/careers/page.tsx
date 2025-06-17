'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CareersPage() {
  return (
    <div className="flex-1">
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] z-0"></div>
        
        {/* Decorative elements */}
        <motion.div 
          className="absolute top-1/3 left-1/5 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/5 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 0.9, 1.2],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              Join Our <span className="text-gradient">Team</span>
            </h1>
            
            <motion.div 
              className="relative inline-block mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="px-6 py-3 bg-accent/20 rounded-full text-accent-dark font-medium">
                Coming Soon
              </div>
            </motion.div>
            
            <motion.p 
              className="text-xl opacity-80 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              We&apos;re building a team of talented individuals passionate about technology and innovation. Check back soon for exciting career opportunities.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row justify-center"
            >
              <Link 
                href="/about" 
                className="px-8 py-4 rounded-full bg-transparent border border-foreground/20 font-medium text-lg hover:bg-foreground/5 transition-colors"
              >
                About Us
              </Link>
              <Link 
                href="/contact?source=careers" 
                className="px-8 py-4 rounded-full bg-accent text-white font-medium text-lg hover:bg-accent-dark transition-colors inline-flex items-center group"
              >
                Contact Us
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 