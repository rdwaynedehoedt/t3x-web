'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { serviceData, ServiceDataType } from './serviceData';
import ServiceModal from './ServiceModal';

// Service cards data with SVG icons
const services = [
  {
    ...serviceData[0],
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="#3291ff" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 9H21" stroke="#3291ff" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 21V9" stroke="#3291ff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  },
  {
    ...serviceData[1],
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 6L6 2H18L21 6" stroke="#3291ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 6H21V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V6Z" stroke="#3291ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="14" r="2" stroke="#3291ff" strokeWidth="1.5" />
        <circle cx="15" cy="14" r="2" stroke="#3291ff" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    ...serviceData[2],
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#3291ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 17L12 22L22 17" stroke="#3291ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 12L12 17L22 12" stroke="#3291ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    ...serviceData[3],
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 2H7C4.79086 2 3 3.79086 3 6V18C3 20.2091 4.79086 22 7 22H17C19.2091 22 21 20.2091 21 18V6C21 3.79086 19.2091 2 17 2Z" stroke="#3291ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 12H16" stroke="#3291ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 8H16" stroke="#3291ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 16H12" stroke="#3291ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    ...serviceData[4],
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="#3291ff" strokeWidth="1.5" />
        <path d="M12 6V18" stroke="#3291ff" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16.24 7.75L7.76 16.24" stroke="#3291ff" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7.76 7.75L16.24 16.24" stroke="#3291ff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  },
  {
    ...serviceData[5],
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="3" width="20" height="18" rx="2" stroke="#3291ff" strokeWidth="1.5" />
        <path d="M8 10H16" stroke="#3291ff" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 14H16" stroke="#3291ff" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 7H22" stroke="#3291ff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  }
];

// Service Card component
type ServiceWithIcon = ServiceDataType & { icon: React.ReactNode };

const ServiceCard = ({ 
  service, 
  index,
  onLearnMore
}: { 
  service: ServiceWithIcon, 
  index: number,
  onLearnMore: (service: ServiceWithIcon) => void
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      className="group relative bg-foreground/5 border border-foreground/10 rounded-xl p-6 hover:border-accent/50 transition-colors duration-300 flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-20px" }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/10 group-hover:to-accent/0 rounded-xl transition-all duration-700 opacity-0 group-hover:opacity-100" />
      
      <div className="z-10 flex flex-col h-full">
        <div className="mb-4">
          {service.icon}
        </div>
        
        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
        <p className="text-foreground/70 text-sm flex-grow">{service.description}</p>
        
        <button 
          onClick={() => onLearnMore(service)}
          className="mt-4 flex items-center text-sm text-accent font-medium hover:underline focus:outline-none"
        >
          <span>Learn more</span>
          <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 16 16" fill="none">
            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

const ServiceGrid = () => {
  const [selectedService, setSelectedService] = useState<ServiceWithIcon | null>(null);

  const handleLearnMore = (service: ServiceWithIcon) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard 
            key={service.id} 
            service={service} 
            index={index}
            onLearnMore={handleLearnMore}
          />
        ))}
      </div>
      
      {selectedService && (
        <ServiceModal 
          service={selectedService} 
          isOpen={!!selectedService} 
          onClose={handleCloseModal} 
        />
      )}
    </section>
  );
};

export default ServiceGrid; 