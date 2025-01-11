import React from 'react';
import { motion } from 'framer-motion';

interface MockTestCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}

const MockTestCard = ({ icon: Icon, title, description, index }: MockTestCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 group"
    >
      <div className="relative">
        <div className="absolute -inset-2 bg-indigo-50 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative">
          <Icon className="h-12 w-12 text-indigo-600 mb-4 transform group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default MockTestCard;