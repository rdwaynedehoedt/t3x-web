'use client';

import { motion } from 'framer-motion';

const ClientLogos = () => {
  // Placeholder fake logos
  const logos = [
    { id: 1, name: 'TechVision', src: '/logos/logo1.svg' },
    { id: 2, name: 'Innovate Inc', src: '/logos/logo2.svg' },
    { id: 3, name: 'DataFlow', src: '/logos/logo3.svg' },
    { id: 4, name: 'CloudMatrix', src: '/logos/logo4.svg' },
    { id: 5, name: 'SecureNet', src: '/logos/logo5.svg' },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 0.7, 
      y: 0,
      transition: {
        duration: 0.5,
      } 
    },
  };

  return (
    <section className="py-16 px-6 w-full">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-center text-xl font-medium mb-12 text-gray-300">Trusted by innovative companies</h3>
        
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {logos.map((logo) => (
            <motion.div 
              key={logo.id}
              className="w-32 h-16 relative flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:opacity-100"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              {/* Fallback for demo - using div with text since images don't exist yet */}
              <div className="border border-gray-700 rounded w-full h-full flex items-center justify-center bg-black bg-opacity-20 hover:bg-opacity-30 transition-all">
                <span className="text-sm font-medium">{logo.name}</span>
              </div>
              {/* Once you have the actual logo SVGs:
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                className="object-contain"
              /> */}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientLogos; 