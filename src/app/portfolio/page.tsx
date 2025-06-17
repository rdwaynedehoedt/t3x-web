'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface ProjectDetails {
  title: string;
  description: string;
  challenges: string[];
  solutions: string[];
  technologies: string[];
}

interface PortfolioItem {
  title: string;
  description: string;
  image: string;
  tags: string[];
  url?: string;
  hasDetails?: boolean;
  details?: ProjectDetails;
}

const portfolioItems: PortfolioItem[] = [
  {
    title: 'Ceilao Insurance',
    description: 'Comprehensive insurance brokerage management system for client, policy, and document management.',
    image: '/CIB-Logo.png',
    tags: ['Management System', 'Insurance', 'Document Management'],
    hasDetails: true,
    details: {
      title: 'Insurance Brokerage Management System',
      description: 'A comprehensive system designed to streamline operations for Ceilao Insurance Brokers, enabling efficient client management, policy tracking, and document handling.',
      challenges: [
        'Manual tracking of client information and policies',
        'Inefficient document storage and retrieval',
        'Difficulty monitoring policy renewals and commissions',
        'Limited reporting capabilities for business insights'
      ],
      solutions: [
        'Client Management System with comprehensive information tracking',
        'Policy Management with renewal alerts and premium calculations',
        'Secure Document Management with organized storage and retrieval',
        'Dashboard Analytics providing performance metrics and business intelligence',
        'Commission Tracking for monitoring revenue and payments'
      ],
      technologies: [
        'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js', 
        'Azure SQL Database', 'Azure Blob Storage', 'JWT Authentication'
      ]
    }
  },
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

// Project Details Modal Component
function ProjectDetailsModal({ 
  project, 
  isOpen, 
  onClose 
}: { 
  project: ProjectDetails, 
  isOpen: boolean, 
  onClose: () => void 
}) {
  // Close when clicking outside modal content
  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-background/90 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto"
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
            <h2 className="text-2xl md:text-3xl font-bold">{project.title}</h2>
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
              <p className="text-lg mb-4 text-foreground/90">{project.description}</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Challenges</h3>
              <ul className="space-y-2">
                {project.challenges.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 6v8M6 10h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Our Solution</h3>
              <ul className="space-y-2">
                {project.solutions.map((item, index) => (
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
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-accent/15 text-accent font-medium rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="mt-8 pt-6 border-t border-foreground/20 flex flex-col sm:flex-row items-center justify-between gap-4 bg-accent/5 -mx-8 -mb-8 p-8 rounded-b-xl">
            <p className="text-foreground/80 font-medium">Interested in a similar solution?</p>
            <Link href="/contact?source=portfolio" className="px-6 py-3 bg-accent hover:bg-accent-dark text-white font-semibold rounded-full transition-colors shadow-sm hover:shadow">
              Contact Us
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);

  const handleLearnMore = (item: PortfolioItem) => {
    if (item.details) {
      setSelectedProject(item.details);
    }
  };

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
                  
                  {item.url ? (
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
                  ) : item.hasDetails ? (
                    <button 
                      onClick={() => handleLearnMore(item)}
                      className="inline-flex items-center text-accent hover:text-accent-dark transition-colors group text-sm"
                    >
                      Learn More
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  ) : null}
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
      
      {selectedProject && (
        <ProjectDetailsModal 
          project={selectedProject} 
          isOpen={!!selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
} 