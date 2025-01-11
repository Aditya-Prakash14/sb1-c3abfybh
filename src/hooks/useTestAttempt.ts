import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useAuthStore } from '../store/authStore';
import type { TestAttempt } from '../types/database';

export const useTestAttempt = () => {
  const [saving, setSaving] = useState(false);
  const { user } = useAuthStore();

  const saveAttempt = async (
    subjectId: string,
    testType: 'practice' | 'mock' | 'daily',
    score: number,
    totalQuestions: number,
    answers: Record<string, number>
  ): Promise<void> => {
    if (!user) return;

    setSaving(true);
    try {
      const { error } = await supabase.from('test_attempts').insert({
        user_id: user.id,
        subject_id: subjectId,
        test_type: testType,
        score,
        total_questions: totalQuestions,
        answers,
        completed_at: new Date().toISOString()
      });

      if (error) throw error;
    } catch (err) {
      throw err instanceof Error ? err : new Error('Failed to save attempt');
    } finally {
      setSaving(false);
    }
  };

  return { saveAttempt, saving };
};