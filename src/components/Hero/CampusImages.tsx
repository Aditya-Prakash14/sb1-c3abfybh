import React from 'react';
import { motion } from 'framer-motion';

const CampusImages = () => {
  return (
    <div className="hidden md:flex space-x-6">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative group"
      >
        <div className="absolute -inset-4">
          <div className="w-full h-full mx-auto opacity-30 blur-lg filter bg-gradient-to-r from-indigo-400 to-purple-400" />
        </div>
        <img
          src="https://images.shiksha.com/mediadata/images/1720680023phpvAgroU.jpeg"
          className="relative rounded-lg shadow-2xl w-[300px] h-[200px] object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded p-2">
          <p className="text-white text-sm font-medium">NST ADYPU Campus</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative group"
      >
        <div className="absolute -inset-4">
          <div className="w-full h-full mx-auto opacity-30 blur-lg filter bg-gradient-to-r from-purple-400 to-indigo-400" />
        </div>
        <img
          src="https://content.jdmagicbox.com/comp/sonepat/e2/9999px130.x130.231106183008.w5e2/catalogue/newton-school-of-technology-bahalgarh-sonepat-colleges-lv1oan7n9e.jpg"
          alt="Newton School Campus"
          className="relative rounded-lg shadow-2xl w-[300px] h-[200px] object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded p-2">
          <p className="text-white text-sm font-medium">NST RU Campus</p>
        </div>
      </motion.div>
    </div>
  );
};

export default CampusImages;