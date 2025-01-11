import React from 'react';
import { motion } from 'framer-motion';

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50" />
      
      {/* Animated grid pattern */}
      <motion.div 
        className="absolute inset-0 opacity-20"
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
          backgroundImage: 'linear-gradient(to right, #818cf8 1px, transparent 1px), linear-gradient(#818cf8 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          transform: 'rotate(15deg) scale(1.5)',
        }} />
      </motion.div>

      {/* Interactive floating elements */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full mix-blend-multiply filter blur-xl cursor-pointer"
          style={{
            background: `rgba(${i % 2 ? '99, 102, 241' : '168, 85, 247'}, 0.15)`,
            width: `${200 + i * 100}px`,
            height: `${200 + i * 100}px`,
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
            scale: [1, 1.2, 1],
          }}
          whileHover={{ scale: 1.3 }}
          transition={{
            duration: 20 + i * 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Interactive particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute h-1.5 w-1.5 rounded-full bg-indigo-400 cursor-pointer"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.5, 1],
            y: [0, -20, 0],
          }}
          whileHover={{
            scale: 2,
            opacity: 0.8,
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

export default Background;