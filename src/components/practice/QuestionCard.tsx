import React from 'react';
import { motion } from 'framer-motion';
import type { Question } from '../../types/database';

interface QuestionCardProps {
  question: Question;
  selectedOption: number | null;
  onSelectOption: (optionIndex: number) => void;
  showResult?: boolean;
}

const QuestionCard = ({ question, selectedOption, onSelectOption, showResult }: QuestionCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-md p-6 mb-4"
    >
      <h3 className="text-lg font-semibold mb-4">{question.question_text}</h3>
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelectOption(index)}
            className={`w-full text-left p-3 rounded-lg transition-colors ${
              selectedOption === index
                ? showResult
                  ? index === question.correct_option
                    ? 'bg-green-100 border-green-500'
                    : 'bg-red-100 border-red-500'
                  : 'bg-indigo-100 border-indigo-500'
                : 'bg-gray-50 hover:bg-gray-100'
            } border`}
            disabled={showResult}
          >
            {option}
          </button>
        ))}
      </div>
      {showResult && selectedOption !== null && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <p className="font-medium text-gray-900">Explanation:</p>
          <p className="text-gray-700">{question.explanation}</p>
        </div>
      )}
    </motion.div>
  );
};

export default QuestionCard;