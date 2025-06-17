'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

// Fixed set of nodes and connections to avoid hydration mismatches
// const center = { x: 100, y: 100 };
// const radius = 70;

// Create a deterministic set of nodes (avoid Math.random for initial render)
const sphereNodes = [
  { x: 50, y: 50, z: 40 },
  { x: 150, y: 30, z: 20 },
  { x: 170, y: 120, z: -10 },
  { x: 80, y: 150, z: -30 },
  { x: 20, y: 90, z: 10 },
  { x: 110, y: 70, z: 60 },
  { x: 140, y: 140, z: -40 },
  { x: 40, y: 130, z: -15 },
  { x: 30, y: 60, z: 35 },
  { x: 160, y: 70, z: 5 },
  { x: 120, y: 40, z: 45 },
  { x: 70, y: 20, z: 25 },
  { x: 90, y: 170, z: -45 },
  { x: 130, y: 110, z: -5 },
  { x: 60, y: 100, z: 15 }
];

// Predefined connections to ensure consistency
const connections = [
  { from: 0, to: 1, distance: 100 },
  { from: 1, to: 2, distance: 90 },
  { from: 2, to: 3, distance: 110 },
  { from: 3, to: 4, distance: 85 },
  { from: 4, to: 0, distance: 95 },
  { from: 5, to: 0, distance: 70 },
  { from: 5, to: 1, distance: 65 },
  { from: 5, to: 6, distance: 80 },
  { from: 6, to: 2, distance: 75 },
  { from: 7, to: 3, distance: 60 },
  { from: 7, to: 4, distance: 55 },
  { from: 8, to: 0, distance: 45 },
  { from: 8, to: 4, distance: 50 },
  { from: 9, to: 1, distance: 40 },
  { from: 9, to: 2, distance: 65 },
  { from: 10, to: 1, distance: 55 },
  { from: 10, to: 5, distance: 50 },
  { from: 11, to: 0, distance: 60 },
  { from: 12, to: 3, distance: 45 },
  { from: 13, to: 2, distance: 35 },
  { from: 14, to: 4, distance: 40 }
];

// Create orbital rings
const orbitalRings = [
  { radius: 60, rotationSpeed: 10, color: 'rgba(124,58,237,0.2)' },
  { radius: 70, rotationSpeed: -15, color: 'rgba(96,165,250,0.15)' },
  { radius: 80, rotationSpeed: 8, color: 'rgba(6,182,212,0.1)' }
];

const NetworkLogo = () => {
  const [activeConnections, setActiveConnections] = useState<number[]>([]);
  // const [isLogoVisible, setIsLogoVisible] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [orbitalRotations, setOrbitalRotations] = useState<number[]>([0, 0, 0]);
  const [isClient, setIsClient] = useState(false);
  const networkRef = useRef<HTMLDivElement>(null);
  const logoControls = useAnimationControls();
  
  // Set isClient to true once component mounts (client-side only)
  useEffect(() => {
    setIsClient(true);
    
    // Show the logo after a short delay
    const logoTimer = setTimeout(() => {
      // setIsLogoVisible(true);
      logoControls.start({
        scale: [0.9, 1.1, 1],
        opacity: [0, 1],
        transition: { duration: 1.2, ease: "easeOut" }
      });
    }, 600);
    
    // Create multi-connection pulse effects
    const interval = setInterval(() => {
      const pulseCount = Math.floor(Math.random() * 3) + 1;
      const newActiveConnections: number[] = [];
      
      // Activate multiple connections at once
      for (let i = 0; i < pulseCount; i++) {
        const randomConnection = Math.floor(Math.random() * connections.length);
        newActiveConnections.push(randomConnection);
      }
      
      setActiveConnections(newActiveConnections);
      
      // Turn off the connections after a short time
      setTimeout(() => {
        setActiveConnections([]);
      }, 600);
    }, 1500);
    
    // Rotation animation
    const rotationInterval = setInterval(() => {
      setRotationAngle(prev => (prev + 0.2) % 360);
      
      // Update orbital rings rotation
      setOrbitalRotations(prev => 
        prev.map((rotation, i) => 
          (rotation + orbitalRings[i].rotationSpeed / 100) % 360
        )
      );
    }, 30);
    
    return () => {
      clearInterval(interval);
      clearTimeout(logoTimer);
      clearInterval(rotationInterval);
    };
  }, [logoControls]);
  
  // Generate unique connection ID
  const getConnectionId = (from: number, to: number): string => `connection-${from}-${to}`;
  
  // Helper to format numbers consistently 
  const formatNumber = (num: number): number => {
    // Force all numbers to fixed precision to avoid hydration mismatches
    return parseFloat(num.toFixed(2));
  };
  
  return (
    <div className="w-full h-full relative flex items-center justify-center" ref={networkRef}>
      <motion.div
        className="w-full h-full max-w-md aspect-square relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <svg 
          viewBox="0 0 200 200" 
          className="w-full h-full"
        >
          {/* Dark energy core background */}
          <radialGradient id="core-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="rgba(124,58,237,0.4)" />
            <stop offset="40%" stopColor="rgba(96,165,250,0.2)" />
            <stop offset="70%" stopColor="rgba(6,182,212,0.1)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0)" />
          </radialGradient>
          
          <motion.circle
            cx="100"
            cy="100"
            r="85"
            fill="url(#core-gradient)"
            initial={{ opacity: 0 }}
            animate={isClient ? { opacity: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.3 }}
          />
          
          {/* Rotating orbital rings - Only animate these client-side */}
          {isClient && orbitalRings.map((ring, i) => (
            <g key={`ring-${i}`} transform={`rotate(${orbitalRotations[i]} 100 100)`}>
              <ellipse
                cx="100"
                cy="100"
                rx={ring.radius}
                ry={ring.radius * 0.3} // Flatten to create perspective
                fill="none"
                stroke={ring.color}
                strokeWidth="1"
                strokeDasharray="2 3"
                className="mix-blend-screen"
              />
              {/* Energy pulse traveling along the ring */}
              <circle
                r="2"
                fill={i === 0 ? "#9333ea" : i === 1 ? "#60a5fa" : "#06b6d4"}
                className="drop-shadow-[0_0_5px_rgba(96,165,250,0.8)]"
              >
                <animateMotion
                  path={`M ${100 + ring.radius} 100 A ${ring.radius} ${ring.radius * 0.3} 0 1 1 ${100 - ring.radius} 100 A ${ring.radius} ${ring.radius * 0.3} 0 1 1 ${100 + ring.radius} 100`}
                  dur={`${Math.abs(20 - ring.rotationSpeed)}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          ))}
          
          {/* 3D Wireframe Network */}
          <g transform={isClient ? `rotate(${rotationAngle} 100 100)` : "rotate(0 100 100)"}>
            {/* Connections */}
            {connections.map((connection, i) => {
              const from = sphereNodes[connection.from];
              const to = sphereNodes[connection.to];
              const isActive = activeConnections.includes(i);
              
              // Determine brightness based on Z position to create 3D effect
              const avgZ = (from.z + to.z) / 2;
              const normalizedZ = (avgZ + 70) / 140; // Map from [-70, 70] to [0, 1]
              const opacity = formatNumber(0.1 + normalizedZ * 0.5);
              
              // Format coordinates to avoid floating point discrepancies
              const x1 = formatNumber(from.x);
              const y1 = formatNumber(from.y);
              const x2 = formatNumber(to.x);
              const y2 = formatNumber(to.y);
              
              return (
                <motion.line
                  key={getConnectionId(connection.from, connection.to)}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={isActive && isClient 
                    ? "url(#pulse-gradient)" 
                    : `rgba(255,255,255,${opacity})`
                  }
                  strokeWidth={isActive ? 2 : 1}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isClient ? { 
                    pathLength: 1,
                    opacity: isActive ? 1 : opacity,
                    strokeWidth: isActive ? 2 : 1,
                  } : {}}
                  transition={{ 
                    pathLength: { duration: 1.5, delay: 0.1 * Math.min(connection.from, connection.to) },
                    opacity: { duration: 0.8 }
                  }}
                  className={isActive && isClient ? "drop-shadow-[0_0_5px_rgba(96,165,250,0.8)]" : ""}
                />
              );
            })}
            
            {/* Nodes */}
            {sphereNodes.map((node, i) => {
              // Determine brightness based on Z position to create 3D effect
              const normalizedZ = (node.z + 70) / 140; // Map from [-70, 70] to [0, 1]
              const scale = formatNumber(0.7 + normalizedZ * 0.6);
              const opacity = formatNumber(0.4 + normalizedZ * 0.6);
              
              // Create a color that varies with depth
              const color = i % 3 === 0 
                ? "#9333ea" // Purple
                : i % 3 === 1 
                  ? "#60a5fa" // Blue
                  : "#06b6d4"; // Cyan
              
              // Format coordinates to avoid floating point discrepancies
              const cx = formatNumber(node.x);
              const cy = formatNumber(node.y);
              
              return (
                <motion.circle
                  key={`node-${i}`}
                  cx={cx}
                  cy={cy}
                  r={formatNumber(3 * scale)}
                  fill={color}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isClient ? { 
                    scale: 1, 
                    opacity: opacity,
                  } : {}}
                  transition={{ 
                    delay: 0.05 * i,
                    duration: 0.7
                  }}
                  className="drop-shadow-[0_0_4px_rgba(96,165,250,0.7)]"
                >
                  {isClient && (
                    <animate 
                      attributeName="opacity" 
                      values={`${opacity};${formatNumber(opacity * 0.6)};${opacity}`} 
                      dur={`${1.5 + i % 3}s`} 
                      repeatCount="indefinite" 
                    />
                  )}
                </motion.circle>
              );
            })}
          </g>
          
          {/* Additional energy details - Only show on client */}
          {isClient && (
            <motion.circle
              cx="100"
              cy="100"
              r="25"
              fill="none"
              stroke="url(#scanner-gradient)"
              strokeWidth="1"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: [0.9, 1.1, 0.9], 
                opacity: [0.2, 0.4, 0.2] 
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
          )}
          
          {/* Lightning/energy pulses - Only show on client */}
          {isClient && activeConnections.length > 0 && (
            <motion.g 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              
              {/* Random lightning/energy bursts */}
              {Array.from({ length: 3 }).map((_, i) => {
                // Use fixed paths instead of random values to avoid hydration issues
                const paths = [
                  "M 90 90 Q 110 80, 120 110",
                  "M 110 95 Q 90 120, 70 105",
                  "M 105 80 Q 120 100, 95 115"
                ];
                
                return (
                  <motion.path
                    key={`lightning-${i}`}
                    d={paths[i]}
                    stroke="url(#lightning-gradient)"
                    strokeWidth="1"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ 
                      pathLength: 1, 
                      opacity: [0, 0.8, 0] 
                    }}
                    transition={{ 
                      duration: 0.5,
                      delay: i * 0.1,
                      ease: "easeOut"
                    }}
                    filter="url(#glow)"
                  />
                );
              })}
            </motion.g>
          )}
          
          {/* Logo Text */}
          <motion.g
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isClient ? logoControls : {}}
            className="drop-shadow-[0_0_15px_rgba(124,58,237,0.9)]"
          >
            <circle
              cx="100"
              cy="100"
              r="22"
              fill="rgba(15,15,20,0.8)"
              className="mix-blend-screen"
            />
            <text
              x="100"
              y="108"
              textAnchor="middle"
              className="fill-white"
              style={{ 
                fontWeight: 'bold', 
                fontFamily: 'sans-serif', 
                fontSize: '24px',
                letterSpacing: '1px'
              }}
            >
              T3X
            </text>
          </motion.g>
          
          {/* Definitions */}
          <defs>
            <radialGradient id="scanner-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="rgba(96,165,250,0.6)" />
              <stop offset="70%" stopColor="rgba(124,58,237,0.3)" />
              <stop offset="100%" stopColor="rgba(6,182,212,0)" />
            </radialGradient>
            
            <linearGradient id="pulse-gradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#9333ea" />
              <stop offset="50%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
            
            <linearGradient id="lightning-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="50%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#9333ea" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </div>
  );
};

export default NetworkLogo; 