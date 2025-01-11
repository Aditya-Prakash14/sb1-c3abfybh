export interface Subject {
  id: string;
  name: string;
  description: string;
  created_at: string;
}

export interface Question {
  id: string;
  subject_id: string;
  question_text: string;
  options: string[];
  correct_option: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  type: 'practice' | 'mock' | 'daily';
  created_at: string;
}

export interface UserProgress {
  id: string;
  user_id: string;
  subject_id: string;
  progress: number;
  last_updated: string;
  created_at: string;
}

export interface TestAttempt {
  id: string;
  user_id: string;
  subject_id: string;
  test_type: 'practice' | 'mock' | 'daily';
  score: number;
  total_questions: number;
  answers: Record<string, number>; // question_id: selected_option
  completed_at: string;
  created_at: string;
}

export interface Database {
  public: {
    Tables: {
      subjects: {
        Row: Subject;
        Insert: Omit<Subject, 'id' | 'created_at'>;
        Update: Partial<Omit<Subject, 'id' | 'created_at'>>;
      };
      questions: {
        Row: Question;
        Insert: Omit<Question, 'id' | 'created_at'>;
        Update: Partial<Omit<Question, 'id' | 'created_at'>>;
      };
      user_progress: {
        Row: UserProgress;
        Insert: Omit<UserProgress, 'id' | 'created_at' | 'last_updated'>;
        Update: Partial<Omit<UserProgress, 'id' | 'created_at'>>;
      };
      test_attempts: {
        Row: TestAttempt;
        Insert: Omit<TestAttempt, 'id' | 'created_at'>;
        Update: Partial<Omit<TestAttempt, 'id' | 'created_at'>>;
      };
    };
  };
}