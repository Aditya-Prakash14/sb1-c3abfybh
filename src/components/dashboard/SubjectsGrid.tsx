import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Calculator, BookOpen, PieChart, Loader } from 'lucide-react';
import SubjectCard from './SubjectCard';
import { useSubjects } from '../../hooks/useSubjects';
import { useProgress } from '../../hooks/useProgress';

const subjectIcons = {
  'Basic Mathematics': <Calculator className="h-6 w-6 text-blue-600" />,
  'Advanced Mathematics': <PieChart className="h-6 w-6 text-purple-600" />,
  'English': <BookOpen className="h-6 w-6 text-green-600" />,
  'Logical Reasoning': <Brain className="h-6 w-6 text-orange-600" />
} as const;

const subjectColors = {
  'Basic Mathematics': 'border-l-blue-500',
  'Advanced Mathematics': 'border-l-purple-500',
  'English': 'border-l-green-500',
  'Logical Reasoning': 'border-l-orange-500'
} as const;

const SubjectsGrid = () => {
  const { subjects = [], loading: subjectsLoading, error: subjectsError } = useSubjects();
  const { progress = [], loading: progressLoading, error: progressError } = useProgress();

  if (subjectsLoading || progressLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader className="h-8 w-8 animate-spin text-indigo-600" />
      </div>
    );
  }

  if (subjectsError || progressError) {
    return (
      <div className="text-red-500 bg-red-50 p-4 rounded-lg">
        {subjectsError || progressError}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {subjects.map((subject, index) => {
        const subjectProgress = progress.find(p => p.subject_id === subject.id);
        return (
          <motion.div
            key={subject.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <SubjectCard
              id={subject.id}
              title={subject.name}
              icon={subjectIcons[subject.name as keyof typeof subjectIcons]}
              progress={subjectProgress?.progress || 0}
              color={subjectColors[subject.name as keyof typeof subjectColors]}
              description={subject.description || ''}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default SubjectsGrid;