'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    id: 'process',
    question: 'What is your project process like?',
    answer: 'Our process typically involves discovery, planning, design, development, testing, and launch phases. We start with understanding your business needs, create a detailed plan, then execute with continuous feedback and testing to ensure quality.'
  },
  {
    id: 'timeline',
    question: 'How long do projects typically take?',
    answer: 'Project timelines vary based on complexity and scope. Simple websites might take 4-6 weeks, while complex business systems can take 3-6 months. We\'ll provide a detailed timeline during our initial consultation based on your specific requirements.'
  },
  {
    id: 'tech',
    question: 'What technologies do you use?',
    answer: 'We use modern, proven technologies tailored to each project\'s needs. Our stack typically includes React, Next.js, and Node.js for web development; native iOS/Android development for mobile apps; and cloud solutions like AWS or Azure for hosting and infrastructure.'
  },
  {
    id: 'support',
    question: 'Do you provide ongoing support after launch?',
    answer: 'Yes, we offer comprehensive support packages to ensure your digital solution continues to perform optimally. Our support includes routine maintenance, security updates, performance monitoring, and technical assistance when you need it.'
  }
];

const FAQ = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  
  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };
  
  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked <span className="text-gradient">Questions</span>
        </motion.h2>
        
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={faq.id}
              className="border border-foreground/10 rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button 
                className="w-full flex justify-between items-center p-6 text-left bg-foreground/5 hover:bg-foreground/10 transition-colors duration-200"
                onClick={() => toggleExpand(faq.id)}
              >
                <h3 className="text-xl font-medium">{faq.question}</h3>
                <svg 
                  className={`w-5 h-5 transition-transform duration-300 ${expandedId === faq.id ? 'rotate-180' : ''}`} 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 9L12 16L5 9" className="stroke-accent" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              
              <AnimatePresence>
                {expandedId === faq.id && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-2 text-foreground/70">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 