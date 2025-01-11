import React from 'react';
import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

const socialLinks = [
  { icon: Twitter, href: 'https://x.com/letsRE_start', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/lets.re.start/', label: 'Instagram' },
];

const SocialLinks = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-white/90 border-b border-indigo-500/30 pb-2">
        Connect With Us
      </h3>
      <div className="flex items-center space-x-6">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            aria-label={label}
          >
            <div className="p-3 bg-indigo-500/10 rounded-lg group-hover:bg-indigo-500/20 transition-all duration-300">
              <Icon className="h-6 w-6 group-hover:text-indigo-400 transition-all duration-300" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;