import React from 'react';
import ContactInfo from './ContactInfo';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ContactInfo />
            <SocialLinks />
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-white/60">
              &copy; {new Date().getFullYear()} REstart. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-white/60">
              <a href="/privacy" className="hover:text-indigo-400 transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-indigo-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;