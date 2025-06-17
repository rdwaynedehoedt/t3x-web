'use client';

import { motion } from 'framer-motion';

const benefits = [
  {
    id: 'secure',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="#3291ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 12L11 14L15 10" stroke="#3291ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Secure by design',
    description: 'Security built into every line of code from day one, not added as an afterthought.'
  },
  {
    id: 'mobile',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="7" y="2" width="10" height="20" rx="2" stroke="#3291ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 18H12.01" stroke="#3291ff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Mobile-optimized',
    description: 'Responsive design that works seamlessly across all devices and screen sizes.'
  },
  {
    id: 'fast',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#3291ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Fast & scalable',
    description: 'Performance-optimized solutions that grow with your business needs.'
  },
  {
    id: 'tailored',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="#3291ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" stroke="#3291ff" strokeWidth="1.5" />
        <path d="M6.168 18.849A5 5 0 0 1 11 15h2a5 5 0 0 1 4.832 3.849" stroke="#3291ff" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Tailored to your business',
    description: 'Custom solutions designed specifically for your unique requirements.'
  }
];

const Benefits = () => {
  return (
    <section className="w-full bg-gradient-to-b from-background via-background/95 to-background py-16 pt-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            Why Work With <span className="text-gradient">Us</span>
          </motion.h2>
          <motion.p 
            className="text-xl opacity-70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our approach focuses on quality, reliability, and results
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={benefit.id}
              className="flex items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="mt-1 bg-foreground/5 p-3 rounded-lg">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-foreground/70">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits; 