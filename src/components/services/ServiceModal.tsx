'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ServiceDataType } from './serviceData';
import Link from 'next/link';

// Service with icon type
export type ServiceWithIcon = ServiceDataType & { icon: React.ReactNode };

interface ServiceModalProps {
  service: ServiceWithIcon;
  isOpen: boolean;
  onClose: () => void;
}

export default function ServiceModal({ service, isOpen, onClose }: ServiceModalProps) {
  // Close when clicking outside modal content
  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 bg-background/90 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleBackgroundClick}
        >
          <motion.div 
            className="bg-foreground/5 border border-foreground/20 rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-xl"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6 md:p-8 bg-background/95">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">{service.title}</h2>
                </div>
                <button 
                  onClick={onClose} 
                  className="p-2 hover:bg-foreground/10 rounded-full transition-colors"
                  aria-label="Close details"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
              
              {/* Content */}
              <div className="space-y-8">
                <div>
                  <p className="text-lg mb-4 text-foreground/90">{service.details.fullDescription}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">What We Offer</h3>
                  <ul className="space-y-2">
                    {service.details.offerings.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                        <span className="text-foreground/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {service.details.technologies && (
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Technologies We Use</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.details.technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-accent/15 text-accent font-medium rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {service.details.process && (
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Our Process</h3>
                    <ol className="space-y-2">
                      {service.details.process.map((step, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent/20 text-accent text-sm font-medium flex-shrink-0">
                            {index + 1}
                          </span>
                          <span className="text-foreground/90">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
                
                {service.details.supportPlans && (
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Support Plans</h3>
                    <ul className="space-y-2">
                      {service.details.supportPlans.map((plan, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
                          </svg>
                          <span className="text-foreground/90">{plan}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              {/* CTA */}
              <div className="mt-8 pt-6 border-t border-foreground/20 flex flex-col sm:flex-row items-center justify-between gap-4 bg-accent/5 -mx-8 -mb-8 p-8 rounded-b-xl">
                <p className="text-foreground/80 font-medium">Ready to get started with this service?</p>
                <Link href={`/contact?source=service&service=${encodeURIComponent(service.title)}`} className="px-6 py-3 bg-accent hover:bg-accent-dark text-white font-semibold rounded-full transition-colors shadow-sm hover:shadow">
                  Request a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 