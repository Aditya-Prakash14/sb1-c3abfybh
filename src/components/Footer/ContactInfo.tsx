import React from 'react';
import { Mail, MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-white/90 border-b border-indigo-500/30 pb-2">
        Contact Information
      </h3>
      <div className="space-y-4">
        <a 
          href="mailto:letsrestart.here@gmail.com" 
          className="flex items-center group hover:text-indigo-400 transition-all duration-300"
        >
          <div className="p-2 bg-indigo-500/10 rounded-lg group-hover:bg-indigo-500/20 transition-all duration-300">
            <Mail className="h-5 w-5" />
          </div>
          <span className="ml-3">letsrestart.here@gmail.com</span>
        </a>
        <a 
          href="https://maps.google.com/?q=ADYPU+NEWTON+SCHOOL+OF+TECHNOLOGY+PUNE" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center group hover:text-indigo-400 transition-all duration-300"
        >
          <div className="p-2 bg-indigo-500/10 rounded-lg group-hover:bg-indigo-500/20 transition-all duration-300">
            <MapPin className="h-5 w-5" />
          </div>
          <span className="ml-3">ADYPU & NEWTON SCHOOL OF TECHNOLOGY PUNE</span>
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;