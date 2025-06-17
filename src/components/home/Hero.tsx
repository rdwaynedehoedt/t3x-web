'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  
  return (
    <motion.div 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Background particles removed */}
      
      {/* Left side accent elements */}
      <div className="absolute left-8 md:left-16 top-0 h-full pointer-events-none hidden md:flex flex-col justify-end items-start pb-48">
        {/* Custom code element */}
        <motion.div 
          className="mb-16 opacity-30"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 0.3, x: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
        >
          <div className="text-xs font-mono text-accent">
            <div>&lt;T3X&gt;</div>
            <div className="ml-4">{`{`}</div>
            <div className="ml-8">innovate()</div>
            <div className="ml-4">{`}`}</div>
            <div>&lt;/T3X&gt;</div>
          </div>
        </motion.div>
        
        {/* Web/UI icon */}
        <motion.div
          className="mb-16 ml-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 0.7, x: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="2"
              stroke="#3060f9"
              strokeWidth="1"
              strokeLinecap="round"
              strokeDasharray="60"
              strokeDashoffset="60"
              initial={{ strokeDashoffset: 60 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 1.2, delay: 1.7 }}
            />
            <motion.path
              d="M3 9H21"
              stroke="#3060f9"
              strokeWidth="1"
              strokeLinecap="round"
              strokeDasharray="18"
              strokeDashoffset="18"
              initial={{ strokeDashoffset: 18 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 0.8, delay: 1.9 }}
            />
            <motion.path
              d="M9 21V9"
              stroke="#3060f9"
              strokeWidth="1"
              strokeLinecap="round"
              strokeDasharray="12"
              strokeDashoffset="12"
              initial={{ strokeDashoffset: 12 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 0.8, delay: 2.1 }}
            />
            <motion.circle
              cx="6"
              cy="6"
              r="1"
              fill="#4a3cb5"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 2.3 }}
            />
          </svg>
        </motion.div>
        
        {/* Tech circuit icon */}
        <motion.div
          className="mb-16 ml-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 0.7, x: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.circle
              cx="12"
              cy="12"
              r="3"
              stroke="#4a3cb5"
              strokeWidth="1"
              strokeDasharray="20"
              strokeDashoffset="20"
              initial={{ strokeDashoffset: 20 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 1.0, delay: 2.0 }}
            />
            <motion.path
              d="M12 5V1M12 23v-4M5 12H1M23 12h-4M18.364 18.364l2.829 2.829M2.807 2.807l2.829 2.829M18.364 5.636l2.829-2.829M2.807 21.193l2.829-2.829"
              stroke="#4a3cb5"
              strokeWidth="1"
              strokeLinecap="round"
              strokeDasharray="120"
              strokeDashoffset="120"
              initial={{ strokeDashoffset: 120 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 2.0, delay: 2.2 }}
            />
          </svg>
        </motion.div>
        
        {/* Vertical line with dots */}
        <motion.div 
          className="relative" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          <motion.div 
            className="h-24 w-px bg-accent/20 relative"
            initial={{ height: 0 }}
            animate={{ height: 96 }}
            transition={{ duration: 1.2, delay: 2.3 }}
          >
            <motion.div 
              className="absolute top-1/4 -right-1 w-2 h-2 rounded-full bg-indigo-500/30"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 2.5 }}
            />
            <motion.div 
              className="absolute top-3/4 -right-1 w-2 h-2 rounded-full bg-accent/30"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 2.7 }}
            />
          </motion.div>
        </motion.div>
      </div>
      
      {/* Hero content */}
      <motion.div 
        className="z-10 max-w-5xl px-6 text-center flex flex-col items-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-gradient">Transforming</span> Tech Together
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-10 max-w-2xl opacity-80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Empowering businesses through innovative digital solutions that simplify operations and enhance customer experiences.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link 
            href="/services" 
            className="magnetic px-8 py-4 rounded-full bg-accent text-foreground font-medium text-lg hover:bg-accent-dark transition-colors"
          >
            Our Services
          </Link>
          <Link 
            href="/contact" 
            className="magnetic px-8 py-4 rounded-full bg-transparent border border-foreground/20 text-foreground font-medium text-lg hover:bg-foreground/5 transition-colors"
          >
            Get Started
          </Link>
        </motion.div>
      </motion.div>
      
      {/* Right side accent elements */}
      <div className="absolute right-8 md:right-16 top-0 h-full pointer-events-none hidden md:flex flex-col justify-end items-center pb-48">
        {/* Tech icons collection */}
        <motion.div
          className="mb-16 overflow-hidden flex flex-col items-end gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          {/* Main cube icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent">
              {/* Digital Transformation Icon */}
              <motion.path
                d="M12 8L7 10.5L12 13L17 10.5L12 8Z"
                fill="url(#iconGradient)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.6 }}
              />
              <motion.path
                d="M7 10.5V15.5L12 18L17 15.5V10.5"
                stroke="currentColor"
                strokeWidth="0.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="40"
                strokeDashoffset="40"
                initial={{ strokeDashoffset: 40 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1.2, delay: 1.8 }}
              />
              <motion.path
                d="M12 3L4 7L12 11L20 7L12 3Z"
                stroke="currentColor"
                strokeWidth="0.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="50"
                strokeDashoffset="50"
                initial={{ strokeDashoffset: 50 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1.5, delay: 1.5 }}
              />
              <motion.path
                d="M4 7V15L12 19L20 15V7"
                stroke="currentColor"
                strokeWidth="0.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="60"
                strokeDashoffset="60"
                initial={{ strokeDashoffset: 60 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1.8, delay: 1.7 }}
              />
              <defs>
                <linearGradient id="iconGradient" x1="7" y1="8" x2="17" y2="13" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#4a3cb5" />
                  <stop offset="1" stopColor="#3060f9" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
          
          {/* Code brackets icon */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 0.8, x: 0 }}
            transition={{ duration: 0.8, delay: 1.7 }}
            className="mr-8"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path
                d="M16 18L22 12L16 6"
                stroke="#3060f9"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="30"
                strokeDashoffset="30"
                initial={{ strokeDashoffset: 30 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1.2, delay: 2.0 }}
              />
              <motion.path
                d="M8 6L2 12L8 18"
                stroke="#3060f9"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="30"
                strokeDashoffset="30"
                initial={{ strokeDashoffset: 30 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1.2, delay: 2.1 }}
              />
            </svg>
          </motion.div>
          
          {/* Data/business icon */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 0.8, x: 0 }}
            transition={{ duration: 0.8, delay: 1.9 }}
            className="mr-2"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path
                d="M21 5C21 6.65685 16.9706 8 12 8C7.02944 8 3 6.65685 3 5"
                stroke="#4a3cb5"
                strokeWidth="1"
                strokeLinecap="round"
                strokeDasharray="30"
                strokeDashoffset="30"
                initial={{ strokeDashoffset: 30 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1.0, delay: 2.2 }}
              />
              <motion.path
                d="M3 5V19C3 20.6569 7.02944 22 12 22C16.9706 22 21 20.6569 21 19V5"
                stroke="#4a3cb5"
                strokeWidth="1"
                strokeLinecap="round"
                strokeDasharray="60"
                strokeDashoffset="60"
                initial={{ strokeDashoffset: 60 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1.5, delay: 2.3 }}
              />
              <motion.ellipse
                cx="12"
                cy="5"
                rx="9"
                ry="3"
                stroke="#4a3cb5"
                strokeWidth="1"
                strokeDasharray="40"
                strokeDashoffset="40"
                initial={{ strokeDashoffset: 40 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1.0, delay: 2.4 }}
              />
              <motion.path
                d="M21 12C21 13.6569 16.9706 15 12 15C7.02944 15 3 13.6569 3 12"
                stroke="#4a3cb5"
                strokeWidth="1"
                strokeLinecap="round"
                strokeDasharray="30"
                strokeDashoffset="30"
                initial={{ strokeDashoffset: 30 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1.0, delay: 2.5 }}
              />
            </svg>
          </motion.div>
        </motion.div>
        
        {/* Tech line pattern */}
        <motion.div
          className="relative" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          <motion.div 
            className="h-24 w-px bg-accent/20 relative"
            initial={{ height: 0 }}
            animate={{ height: 96 }}
            transition={{ duration: 1.2, delay: 2.3 }}
          >
            <motion.div 
              className="absolute top-1/4 -left-1 w-2 h-2 rounded-full bg-indigo-500/30"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 2.5 }}
            />
            <motion.div 
              className="absolute top-3/4 -left-1 w-2 h-2 rounded-full bg-accent/30"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 2.7 }}
            />
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="24" height="36" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="22" height="34" rx="11" stroke="currentColor" strokeWidth="2" />
          <motion.circle 
            cx="12" 
            cy="12" 
            r="4" 
            fill="currentColor" 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default Hero; 