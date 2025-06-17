'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Customer {
  name: string;
  logo: string;
  website?: string;
}

// Only keep the real customer
const customers: Customer[] = [
  {
    name: 'Exclusive Travels',
    logo: '/customers/exclusive-travels.png',
    website: 'https://exclusiverentcars.com/'
  },
  {
    name: 'Black Sheep Coffee',
    logo: '/customers/blacksheepcoffee.png',
    website: 'https://blacksheepcoffee.co.uk/'
  },
  {
    name: 'Stone Elegance',
    logo: '/customers/logo-removebg-preview.webp',
    website: 'https://stoneelegance.t3xlk.com/'
  },
  {
    name: 'Ceilao Insurance',
    logo: '/CIB-Logo.png'
  }
];

const Customers = () => {
  return (
    <section className="py-16 overflow-hidden bg-background relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-gradient">Clients</span></h2>
          <p className="text-lg max-w-2xl mx-auto text-foreground/70">
            Trusted by businesses who value quality digital solutions.
          </p>
        </motion.div>
        
        <div className="flex flex-wrap justify-center items-center gap-12">
          {customers.map((customer, index) => (
            <motion.a
              key={customer.name}
              href={customer.website}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-40 h-24 md:w-48 md:h-28 relative flex items-center justify-center">
                <Image
                  src={customer.logo}
                  alt={`${customer.name} logo`}
                  width={160}
                  height={80}
                  className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
              <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-accent/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <p className="text-center text-sm text-foreground/70 mt-6 font-medium">{customer.name}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Customers; 