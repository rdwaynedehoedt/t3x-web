'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import AnimatedTitle from '../ui/AnimatedTitle';
import VisualAccent from '../ui/VisualAccent';

const PortfolioPreview = () => {
  const projects = [
    {
      id: 1,
      title: 'Stone Elegance',
      description: 'Premium website for a luxury quartz surfaces company with elegant design and product showcases',
      category: 'Web Design',
      imagePlaceholder: 'linear-gradient(45deg, #2a2a2a, #4a4a4a)',
      url: 'https://stoneelegance.t3xlk.com/'
    },
    {
      id: 2,
      title: 'SmartRetail Platform',
      description: 'Complete POS system with inventory management and customer analytics',
      category: 'Business System',
      imagePlaceholder: 'linear-gradient(45deg, #1a1f38, #2d3158)',
    },
    {
      id: 3,
      title: 'DataViz Dashboard',
      description: 'Real-time data visualization platform for financial analytics',
      category: 'Web Application',
      imagePlaceholder: 'linear-gradient(45deg, #162032, #273a5a)',
    }
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      } 
    },
  };

  return (
    <section className="py-20 px-6 w-full relative">
      {/* Visual accents */}
      <VisualAccent type="bracket" position="bottom-right" color="accent" size="sm" delay={0.3} className="mb-8 mr-10" />
      <VisualAccent type="line" position="left" color="indigo" size="md" delay={0.4} className="ml-6 w-px h-40" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <AnimatedTitle 
              animation="fade-up" 
              size="lg" 
              withAccent={true}
              className="mb-4"
            >
              Featured Projects
            </AnimatedTitle>
            
            <motion.p 
              className="text-gray-400 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              A glimpse into some of our recent work transforming businesses through technology.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link 
              href="/portfolio"
              className="mt-6 md:mt-0 text-accent hover:text-accent-light transition-colors flex items-center group"
            >
              View all projects
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              className="group cursor-pointer"
              variants={itemVariants}
              whileHover={{ y: -8 }}
              onClick={() => project.url && window.open(project.url, '_blank')}
            >
              <div className="overflow-hidden rounded-lg mb-5">
                <div 
                  className="w-full aspect-video rounded-lg group-hover:scale-105 transition-transform duration-500"
                  style={{ background: project.imagePlaceholder }}
                ></div>
              </div>
              
              <span className="text-sm text-accent block mb-2">{project.category}</span>
              <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
              {project.url && (
                <div className="mt-4 text-accent hover:text-accent-light transition-colors flex items-center group/link">
                  <span>View project</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioPreview; 