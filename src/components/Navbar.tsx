import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity group"
          >
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="absolute -inset-2 bg-white/20 rounded-full blur-sm group-hover:bg-white/30 transition-colors" />
                <GraduationCap className="h-8 w-8 relative" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl">REstart</span>
              <span className="text-xs text-indigo-200">Initiative by NST 2028 batch</span>
            </div>
          </Link>
          <div className="flex space-x-4">
            <Link to="/mock-test" className="hover:text-indigo-200 px-3 py-2">Mock Test</Link>
            <Link to="/register" className="bg-white text-indigo-600 px-4 py-2 rounded-md font-medium hover:bg-indigo-50">
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;