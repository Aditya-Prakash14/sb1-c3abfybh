import React from 'react';
import { motion } from 'framer-motion';

interface FormContainerProps {
  children: React.ReactNode;
}

const FormContainer = ({ children }: FormContainerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-indigo-100"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-50" />
      <div className="relative px-6 py-8 sm:p-10">
        {children}
      </div>
    </motion.div>
  );
};

export default FormContainer;