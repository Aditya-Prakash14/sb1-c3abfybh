import React from 'react';
import { motion } from 'framer-motion';

const PageTitle = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-center mb-8"
    >
      <h1 className="text-4xl font-extrabold">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
          Join Our Tech Community
        </span>
      </h1>
      <p className="mt-3 text-gray-600">
        Begin your journey towards tech excellence
      </p>
    </motion.div>
  );
};

export default PageTitle;