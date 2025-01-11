// CountdownTimer.js
import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import TimeUnit from './TimeUnit';
import { calculateTimeLeft } from '../utils/timeUtils'; // Assuming timeUtils.js is in that directory


const CountdownTimer = ({ targetDate = '2025-01-02T06:00:00' }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));
  const [animatingUnit, setAnimatingUnit] = useState(null); // Track which unit is animating

  useEffect(() => {
    const timer = setInterval(() => {
        const newTimeLeft = calculateTimeLeft(targetDate);
        // Find the first unit that changed
        let unitChanged = null;
        if (newTimeLeft.days !== timeLeft.days) unitChanged = 'days';
        else if (newTimeLeft.hours !== timeLeft.hours) unitChanged = 'hours';
        else if (newTimeLeft.minutes !== timeLeft.minutes) unitChanged = 'minutes';
        else if (newTimeLeft.seconds !== timeLeft.seconds) unitChanged = 'seconds';


        if(unitChanged) {
            setAnimatingUnit(unitChanged);
             setTimeout(() => setAnimatingUnit(null), 500);
        }
      
      setTimeLeft(newTimeLeft);

    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, timeLeft]);

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl shadow-lg p-8 text-center transform hover:scale-[1.02] transition-transform duration-300">
      <div className="flex items-center justify-center mb-8">
        <Clock className="h-10 w-10 text-indigo-600 mr-3 animate-pulse" />
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          Time Until Prep Resource Launch
        </h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
        <TimeUnit value={timeLeft.days} label="Days" isAnimating={animatingUnit === 'days'} />
        <TimeUnit value={timeLeft.hours} label="Hours" isAnimating={animatingUnit === 'hours'} />
        <TimeUnit value={timeLeft.minutes} label="Minutes" isAnimating={animatingUnit === 'minutes'} />
        <TimeUnit value={timeLeft.seconds} label="Seconds" isAnimating={animatingUnit === 'seconds'} />
      </div>
      
      <div className="mt-10 space-y-4">
        <p className="text-gray-600 text-lg">
          Your journey to success begins now. Make every second count!
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300 flex items-center">
            Study Resources
          </button>
          <button className="border-2 border-indigo-600 text-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-50 transition-colors duration-300">
            Practice Tests
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;