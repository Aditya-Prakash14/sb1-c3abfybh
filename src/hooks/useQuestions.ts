import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { Question } from '../types/database';

interface UseQuestionsProps {
  subjectId: string;
  type: 'practice' | 'mock' | 'daily';
  limit?: number;
}

export const useQuestions = ({ subjectId, type, limit }: UseQuestionsProps) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        let query = supabase
          .from('questions')
          .select('*')
          .eq('subject_id', subjectId)
          .eq('type', type);

        if (limit) {
          query = query.limit(limit);
        }

        const { data, error } = await query;

        if (error) throw error;
        setQuestions(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch questions');
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [subjectId, type, limit]);

  return { questions, loading, error };
};