import React from 'react';

interface TimeUnitProps {
  value: number;
  label: string;
  isAnimating: boolean;
}

const TimeUnit = ({ value, label, isAnimating }: TimeUnitProps) => {
  return (
    <div className="relative group">
      <div className={`
        bg-white rounded-xl p-6 shadow-md border-2 border-indigo-100
        transform transition-all duration-300
        ${isAnimating ? 'scale-105' : 'scale-100'}
        group-hover:border-indigo-300 group-hover:shadow-lg
      `}>
        <div className="relative overflow-hidden">
          <div className={`
            text-5xl font-bold mb-2
            bg-gradient-to-br from-indigo-600 to-purple-600
            bg-clip-text text-transparent
            transition-transform duration-300
            ${isAnimating ? 'translate-y-[-1px]' : ''}
          `}>
            {value.toString().padStart(2, '0')}
          </div>
          <div className="text-gray-500 font-medium uppercase tracking-wider">
            {label}
          </div>
        </div>
        <div className="absolute inset-0 bg-indigo-600 opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300" />
      </div>
    </div>
  );
};

export default TimeUnit;