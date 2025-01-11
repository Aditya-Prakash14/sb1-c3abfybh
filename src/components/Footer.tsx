import React from 'react';
import { Mail, MapPin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a href="mailto:letsrestart.here@gmail.com" className="flex items-center hover:text-indigo-400 transition-colors">
                <Mail className="h-4 w-4 mr-2" /> 
                letsrestart.here@gmail.com
              </a>
              <a href="https://maps.google.com/?q=ADYPU+NEWTON+SCHOOL+OF+TECHNOLOGY+PUNE" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-indigo-400 transition-colors">
                <MapPin className="h-4 w-4 mr-2" />
                ADYPU & NEWTON SCHOOL OF TECHNOLOGY PUNE
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a 
                href="https://x.com/letsRE_start" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-transform hover:scale-110"
              >
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a 
                href="https://www.instagram.com/lets.re.start/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-transform hover:scale-110"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} REstart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;