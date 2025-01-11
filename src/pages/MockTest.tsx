import React from 'react';
import { motion } from 'framer-motion';
import CountdownTimer from '../components/CountdownTimer';
import MockTestCard from '../components/MockTest/MockTestCard';
import Background from '../components/MockTest/Background';
import { BookOpen, Target, Award, Brain, Rocket, Users } from 'lucide-react';

const MockTest = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Study Materials",
      description: "Access comprehensive study materials designed by experts"
    },
    {
      icon: Target,
      title: "Practice Tests",
      description: "Take mock tests to assess your preparation level"
    },
    {
      icon: Award,
      title: "Track Progress",
      description: "Monitor your improvement with detailed analytics"
    },
    {
      icon: Brain,
      title: "Smart Learning",
      description: "AI-powered personalized learning paths"
    },
    {
      icon: Rocket,
      title: "Quick Revision",
      description: "Rapid review modules for last-minute preparation"
    },
    {
      icon: Users,
      title: "Peer Learning",
      description: "Connect with fellow aspirants and learn together"
    }
  ];

  return (
    <div className="min-h-screen relative">
      <Background />
      
      <div className="relative z-10 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Prepare for Success
            </h1>

            <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500">
  Happy New Year 2025
</h1>
            <p className="text-gray-600 text-lg">
              Your gateway to Newton School of Technology awaits
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <CountdownTimer />
          </motion.div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
              Everything You Need to Succeed
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <MockTestCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MockTest;