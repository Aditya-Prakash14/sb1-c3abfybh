import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, ArrowRight } from 'lucide-react';

interface TestResultsProps {
  score: number;
  totalQuestions: number;
  onRetry: () => void;
  onClose: () => void;
}

const TestResults = ({ score, totalQuestions, onRetry, onClose }: TestResultsProps) => {
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-xl shadow-lg p-8 text-center"
    >
      <Trophy className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
      <h2 className="text-2xl font-bold mb-4">Test Completed!</h2>
      <p className="text-4xl font-bold text-indigo-600 mb-2">{percentage}%</p>
      <p className="text-gray-600 mb-6">
        You got {score} out of {totalQuestions} questions correct
      </p>
      <div className="flex justify-center space-x-4">
        <button
          onClick={onRetry}
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Try Again
        </button>
        <button
          onClick={onClose}
          className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center"
        >
          Continue <ArrowRight className="ml-2 w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};

export default TestResults;