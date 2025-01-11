import React from 'react';
import { motion } from 'framer-motion';

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-white" />
      
      {/* Animated grid pattern */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 200,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(to right, #6366f1 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
      </motion.div>

      {/* Interactive floating elements */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full mix-blend-multiply filter blur-xl cursor-pointer"
          style={{
            background: `rgba(${i % 2 ? '99, 102, 241' : '139, 92, 246'}, 0.15)`,
            width: `${150 + i * 50}px`,
            height: `${150 + i * 50}px`,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            scale: [1, 1.1, 1],
          }}
          whileHover={{ scale: 1.2 }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Animated particles with interaction */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute h-1 w-1 rounded-full bg-indigo-400/60 cursor-pointer"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.5, 1],
            y: [0, -30, 0],
          }}
          whileHover={{
            scale: 2,
            opacity: 0.8,
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

export default Background;