'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface PortfolioItem {
  title: string;
  description: string;
  image: string;
  tags: string[];
  url: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    title: 'Stone Elegance',
    description: 'Premium website for a luxury quartz surfaces company with elegant design and product showcases.',
    image: '/customers/logo-removebg-preview.webp',
    tags: ['Web Design', 'E-commerce', 'Luxury Brand'],
    url: 'https://stoneelegance.t3xlk.com/'
  },
  {
    title: 'Black Sheep Coffee',
    description: 'Modern website for a specialty coffee brand with online ordering capabilities and location finder.',
    image: '/customers/blacksheepcoffee.png',
    tags: ['Web Design', 'Food & Beverage', 'E-commerce'],
    url: 'https://blacksheepcoffee.co.uk/'
  },
  {
    title: 'Exclusive Travels',
    description: 'Luxury travel booking platform with premium car rental services and personalized travel experiences.',
    image: '/customers/exclusive-travels.png',
    tags: ['Web Design', 'Travel', 'Booking System'],
    url: 'https://exclusiverentcars.com/'
  }
];

export default function PortfolioPage() {
  return (
    <div className="flex-1">
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] z-0"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Portfolio</span>
            </h1>
            
            <motion.p 
              className="text-lg opacity-80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Showcasing our best work and innovative digital solutions for our clients.
            </motion.p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="aspect-square bg-accent/5 p-6 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-foreground/70 text-sm mb-4 line-clamp-3">{item.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 2).map((tag) => (
                      <span 
                        key={tag} 
                        className="px-2 py-1 bg-accent/10 text-accent rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                    {item.tags.length > 2 && (
                      <span className="px-2 py-1 bg-accent/5 text-accent/80 rounded-full text-xs">
                        +{item.tags.length - 2}
                      </span>
                    )}
                  </div>
                  
                  <a 
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-accent hover:text-accent-dark transition-colors group text-sm"
                  >
                    Visit Website
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link 
              href="/contact?source=portfolio" 
              className="px-6 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent-dark transition-colors inline-flex items-center group"
            >
              Get in Touch
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 