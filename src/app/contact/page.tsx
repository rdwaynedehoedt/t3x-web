'use client';

import { useState, Suspense } from 'react';
import { motion } from 'framer-motion';

import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import ScrollAnimation from '@/components/ui/ScrollTrigger';

// A fallback component to display while the ContactForm is loading
const ContactFormFallback = () => (
  <div className="h-full min-h-[400px] bg-gradient-to-b from-background/60 to-background/30 backdrop-blur-sm border border-foreground/10 rounded-2xl p-8 flex items-center justify-center">
    <div className="animate-pulse text-center">
      <div className="h-6 w-32 bg-foreground/10 rounded mx-auto mb-4"></div>
      <div className="h-4 w-56 bg-foreground/10 rounded mx-auto"></div>
    </div>
  </div>
);

export default function ContactPage() {
  return (
    <div className="flex-1">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] z-0"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Let&apos;s <span className="text-gradient">Connect</span>
            </h1>
            <p className="text-xl opacity-80">
              Ready to start your project or have questions? We&apos;re here to help you build something amazing.
            </p>
          </motion.div>
          
          <ScrollAnimation animation="fade-up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Suspense fallback={<ContactFormFallback />}>
                <ContactForm />
              </Suspense>
              <ContactInfo />
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
} 