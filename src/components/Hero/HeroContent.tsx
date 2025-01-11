import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import CampusImages from './CampusImages';

const HeroContent = () => {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left md:max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Your Gateway to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">
              Tech Excellence
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join the prestigious collaboration between ADYPU & Newton School of Technology. 
            Transform your career with our cutting-edge tech programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/register"
              className="inline-flex items-center bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors group"
            >
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/mock-test"
              className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              <BookOpen className="mr-2" />
              Try Mock Test
            </Link>
          </div>
        </div>
        
        <CampusImages />
      </div>
    </div>
  );
};

export default HeroContent;