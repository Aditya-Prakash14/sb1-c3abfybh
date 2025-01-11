import React from 'react';

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.shiksha.com/mediadata/images/1720679959phpb4Bo7c.jpeg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-purple-900/90" />
      </div>
      <div className="absolute inset-0 bg-grid-white/[0.05]" />
    </div>
  );
};

export default HeroBackground;