'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  imagePath?: string; // Path to profile image
  social?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
};

const teamMembers: TeamMember[] = [
  {
    id: 'dwayne',
    name: 'Dwayne Dehoedt',
    role: 'Co-Founder & Lead Developer',
    bio: 'Passionate about creating innovative solutions that transform businesses through technology.',
    imagePath: '/DwayneTeam.png', // Path to Dwayne's image
    social: {
      linkedin: 'https://www.linkedin.com/in/dwaynedehoedt/',
      github: '#',
    }
  },
  {
    id: 'sachi',
    name: 'Sachi Fernando',
    role: 'Co-Founder & Designer',
    bio: 'Creative thinker with an eye for detail, focused on delivering exceptional user experiences.',
    social: {
      linkedin: '#',
      twitter: '#',
    }
  },
  {
    id: 'vihanga',
    name: 'Vihanga Jayamanna',
    role: 'CTO & Solutions Architect',
    bio: 'Technology enthusiast with a knack for solving complex problems through elegant solutions.',
    social: {
      linkedin: '#',
      github: '#',
    }
  },
];

// Enhanced profile avatar component supporting both images and initials
const ProfileAvatar = ({ 
  name, 
  imagePath, 
  isHovered 
}: { 
  name: string; 
  imagePath?: string;
  isHovered: boolean 
}) => {
  // Get initials from name
  const initials = name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase();
  
  // Generate a predictable color based on the name
  const hue = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % 360;
  
  // Colors for the avatar and glow effects
  const glowColor = hue < 180 ? 'rgba(96,165,250,0.7)' : 'rgba(167,139,250,0.7)'; // Blue or purple glow
  const gradientStart = hue < 180 ? '#3b82f6' : '#8b5cf6'; // Blue or purple gradient
  const gradientEnd = '#1e1e1e';
  
  return (
    <div className="relative flex items-center justify-center mb-4">
      {/* Outer glow effect - intensifies on hover */}
      <div 
        className="absolute inset-0 rounded-full transition-all duration-300 blur-md"
        style={{ 
          background: `radial-gradient(circle, ${glowColor} 5%, transparent 70%)`,
          opacity: isHovered ? 0.8 : 0.3,
          transform: `scale(${isHovered ? 1.2 : 1})`,
        }}
      />
      
      {/* Inner circle with gradient or image */}
      <div 
        className="relative w-20 h-20 rounded-full flex items-center justify-center transition-transform duration-300 z-10 border border-gray-700 overflow-hidden"
        style={{ 
          background: imagePath ? 'none' : `linear-gradient(135deg, ${gradientStart} 0%, ${gradientEnd} 100%)`,
          boxShadow: isHovered ? `0 0 20px 2px ${glowColor}` : 'none',
          transform: `scale(${isHovered ? 1.05 : 1})`,
        }}
      >
        {imagePath ? (
          // Actual profile image
          <div 
            className="w-full h-full bg-center bg-cover"
            style={{ 
              backgroundImage: `url(${imagePath})`,
              filter: isHovered ? 'brightness(1.1)' : 'brightness(1)'
            }}
          />
        ) : (
          // Fallback to initials
          <span className="text-white text-xl font-bold">{initials}</span>
        )}
      </div>
      
      {/* Decorative ring */}
      <div 
        className="absolute w-24 h-24 rounded-full border-2 border-opacity-20 transition-all duration-300"
        style={{ 
          borderColor: gradientStart,
          transform: `scale(${isHovered ? 1.1 : 1}) rotate(${isHovered ? '45deg' : '0deg'})`,
        }}
      />
    </div>
  );
};

const TeamSection = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">Our <span className="text-gradient">Team</span></h2>
        <p className="text-lg max-w-2xl mx-auto text-foreground/70">
          Meet the talented individuals behind T3X
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => {
          const isHovered = hoveredCard === member.id;
          
          return (
            <motion.div
              key={member.id}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              onMouseEnter={() => setHoveredCard(member.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div 
                className="bg-background/50 backdrop-blur-sm border border-foreground/10 rounded-lg p-6 flex flex-col items-center transition-all duration-300"
                style={{
                  transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
                  boxShadow: isHovered ? '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 0 10px 1px rgba(96, 165, 250, 0.2)' : 'none',
                }}
              >
                <ProfileAvatar 
                  name={member.name} 
                  imagePath={member.imagePath}
                  isHovered={isHovered} 
                />
                
                <h3 className="text-foreground text-lg font-medium mb-1">{member.name}</h3>
                <p className="text-foreground/70 text-sm mb-3">{member.role}</p>
                
                {/* Social links */}
                {member.social && (
                  <div className="flex space-x-3 mt-auto">
                    {member.social.linkedin && (
                      <a 
                        href={member.social.linkedin} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/70 hover:text-accent transition-colors"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                        </svg>
                      </a>
                    )}
                    {member.social.twitter && (
                      <a 
                        href={member.social.twitter} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/70 hover:text-accent transition-colors"
                        aria-label={`${member.name}'s Twitter`}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    )}
                    {member.social.github && (
                      <a 
                        href={member.social.github} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/70 hover:text-accent transition-colors"
                        aria-label={`${member.name}'s GitHub`}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                      </a>
                    )}
                  </div>
                )}
              </div>
              
              {/* Subtle animated background effect */}
              <motion.div 
                className="absolute inset-0 -z-10 opacity-0 bg-gradient-to-r from-accent/10 via-accent/10 to-accent/10 rounded-lg blur-xl"
                animate={{ 
                  opacity: isHovered ? 0.5 : 0,
                  scale: isHovered ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default TeamSection; 