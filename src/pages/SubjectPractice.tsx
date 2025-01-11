import React, { useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Loader } from 'lucide-react';
import QuestionCard from '../components/practice/QuestionCard';
import TestResults from '../components/practice/TestResults';
import { useQuestions } from '../hooks/useQuestions';
import { useTestAttempt } from '../hooks/useTestAttempt';

const SubjectPractice = () => {
  const { subjectId, type = 'practice' } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);

  const { questions, loading, error } = useQuestions({
    subjectId: subjectId!,
    type: type as 'practice' | 'mock' | 'daily',
    limit: type === 'mock' ? 20 : type === 'daily' ? 1 : 10
  });

  const { saveAttempt, saving } = useTestAttempt();

  const handleSelectOption = useCallback((optionIndex: number) => {
    if (!questions[currentQuestion]) return;
    
    setAnswers(prev => ({
      ...prev,
      [questions[currentQuestion].id]: optionIndex
    }));
  }, [currentQuestion, questions]);

  const handleNext = useCallback(() => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  }, [currentQuestion, questions.length]);

  const calculateScore = useCallback(() => {
    return Object.entries(answers).reduce((score, [questionId, answer]) => {
      const question = questions.find(q => q.id === questionId);
      return question?.correct_option === answer ? score + 1 : score;
    }, 0);
  }, [answers, questions]);

  const handleComplete = useCallback(async () => {
    const score = calculateScore();
    await saveAttempt(subjectId!, type as 'practice' | 'mock' | 'daily', score, questions.length, answers);
    setShowResults(true);
  }, [subjectId, type, calculateScore, saveAttempt, questions.length, answers]);

  if (loading || saving) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader className="w-8 h-8 animate-spin text-indigo-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-2xl mx-auto p-4">
        <div className="bg-red-50 text-red-500 p-4 rounded-lg">{error}</div>
      </div>
    );
  }

  if (showResults) {
    return (
      <div className="max-w-2xl mx-auto p-4">
        <TestResults
          score={calculateScore()}
          totalQuestions={questions.length}
          onRetry={() => {
            setCurrentQuestion(0);
            setAnswers({});
            setShowResults(false);
          }}
          onClose={() => navigate('/dashboard')}
        />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      {questions[currentQuestion] && (
        <>
          <div className="mb-4 flex justify-between items-center">
            <span className="text-gray-600">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm text-gray-500">
              {type.charAt(0).toUpperCase() + type.slice(1)} Test
            </span>
          </div>
          
          <QuestionCard
            question={questions[currentQuestion]}
            selectedOption={answers[questions[currentQuestion].id] ?? null}
            onSelectOption={handleSelectOption}
            showResult={type === 'practice'}
          />

          <div className="flex justify-end">
            <button
              onClick={currentQuestion === questions.length - 1 ? handleComplete : handleNext}
              disabled={!answers[questions[currentQuestion].id]}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50"
            >
              {currentQuestion === questions.length - 1 ? 'Complete' : 'Next'}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default SubjectPractice;