import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import type { UserProgress } from '../types/database';
import { useAuthStore } from '../store/authStore';

export const useProgress = () => {
  const [progress, setProgress] = useState<UserProgress[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuthStore();

  useEffect(() => {
    if (!user) return;

    const fetchProgress = async () => {
      try {
        const { data, error } = await supabase
          .from('user_progress')
          .select('*')
          .eq('user_id', user.id)
          .order('last_updated', { ascending: false });

        if (error) throw error;
        setProgress(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch progress');
      } finally {
        setLoading(false);
      }
    };

    fetchProgress();
  }, [user]);

  const updateProgress = async (subjectId: string, newProgress: number) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('user_progress')
        .upsert({
          user_id: user.id,
          subject_id: subjectId,
          progress: newProgress
        });

      if (error) throw error;

      setProgress(prev => 
        prev.map(p => 
          p.subject_id === subjectId 
            ? { ...p, progress: newProgress, last_updated: new Date().toISOString() }
            : p
        )
      );
    } catch (err) {
      throw err instanceof Error ? err : new Error('Failed to update progress');
    }
  };

  return { progress, loading, error, updateProgress };
};