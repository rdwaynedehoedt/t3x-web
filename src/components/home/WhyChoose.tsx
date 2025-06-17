'use client';

import { motion } from 'framer-motion';
import AnimatedTitle from '../ui/AnimatedTitle';
import VisualAccent from '../ui/VisualAccent';

const WhyChoose = () => {
  const reasons = [
    {
      id: 1,
      title: 'Fast Delivery',
      description: 'Rapid development and deployment with zero compromise on quality or performance.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Fully Tailored',
      description: 'No cookie-cutter templates or systems. Every solution is built specifically for your business needs.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Modern Technology',
      description: 'Built with cutting-edge tech stack (React, Next.js, Tailwind) for optimal performance and scalability.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Secure',
      description: 'Enterprise-grade security built into every solution we create, with continuous monitoring and updates.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'Scalable',
      description: 'Solutions that grow with your business, from startup to enterprise, without needing to rebuild.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'Dedicated Support',
      description: 'Ongoing maintenance, quick response times, and continuous improvements to keep your systems running optimally.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      } 
    },
  };

  return (
    <section className="py-20 px-6 w-full relative">
      {/* Visual accents */}
      <VisualAccent type="circle" position="top-right" color="accent" size="md" delay={0.2} className="m-10" />
      <VisualAccent type="tech" position="bottom-left" color="indigo" size="md" delay={0.3} className="m-8" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <AnimatedTitle 
            animation="slide-in" 
            size="lg" 
            withAccent={true}
          >
            What Makes Us <span className="text-gradient">Different</span>
          </AnimatedTitle>
          
          <motion.p 
            className="text-xl opacity-70 max-w-2xl mx-auto mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            We deliver exceptional technology solutions with a focus on quality, speed, and client satisfaction
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {reasons.map((reason) => (
            <motion.div 
              key={reason.id}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-foreground/5 backdrop-blur-lg border border-foreground/10 hover:border-foreground/20 transition-all"
              variants={itemVariants}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 10px 30px -10px rgba(66, 71, 137, 0.3)"
              }}
            >
              {reason.icon}
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="opacity-70">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose; 