import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain } from 'lucide-react';

interface SubjectCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  progress: number;
  color: string;
}

const SubjectCard = ({ id, title, description, icon, progress, color }: SubjectCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`bg-white rounded-xl shadow-lg p-6 border-l-4 ${color}`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-gray-50 rounded-lg">{icon}</div>
        <div className="text-gray-400">{progress}% Complete</div>
      </div>
      
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      
      <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
        <div
          className={`h-2 rounded-full ${color.replace('border-l', 'bg')}`}
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div className="flex flex-wrap gap-2">
        <Link
          to={`/subject/${id}/practice`}
          className="flex-1 text-center px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Practice
        </Link>
        <Link
          to={`/subject/${id}/mock`}
          className="flex-1 text-center px-3 py-2 bg-white border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors"
        >
          Mock Test
        </Link>
        <Link
          to={`/subject/${id}/daily`}
          className="flex-1 text-center px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Daily Problem
        </Link>
      </div>
    </motion.div>
  );
};

export default SubjectCard;