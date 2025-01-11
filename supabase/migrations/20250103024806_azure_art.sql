/*
  # Add Questions and Test Attempts System

  1. New Tables
    - `questions`
      - `id` (uuid, primary key)
      - `subject_id` (uuid, foreign key to subjects)
      - `question_text` (text)
      - `options` (text array)
      - `correct_option` (integer)
      - `explanation` (text)
      - `difficulty` (enum: easy, medium, hard)
      - `type` (enum: practice, mock, daily)
      - `created_at` (timestamp)
    
    - `test_attempts`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key to auth.users)
      - `subject_id` (uuid, foreign key to subjects)
      - `test_type` (enum: practice, mock, daily)
      - `score` (integer)
      - `total_questions` (integer)
      - `answers` (jsonb)
      - `completed_at` (timestamp)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users
*/

-- Create enum types
CREATE TYPE question_difficulty AS ENUM ('easy', 'medium', 'hard');
CREATE TYPE question_type AS ENUM ('practice', 'mock', 'daily');

-- Create questions table
CREATE TABLE IF NOT EXISTS questions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  subject_id uuid REFERENCES subjects NOT NULL,
  question_text text NOT NULL,
  options text[] NOT NULL,
  correct_option integer NOT NULL,
  explanation text NOT NULL,
  difficulty question_difficulty NOT NULL,
  type question_type NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create test attempts table
CREATE TABLE IF NOT EXISTS test_attempts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  subject_id uuid REFERENCES subjects NOT NULL,
  test_type question_type NOT NULL,
  score integer NOT NULL,
  total_questions integer NOT NULL,
  answers jsonb NOT NULL,
  completed_at timestamptz NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE test_attempts ENABLE ROW LEVEL SECURITY;

-- Policies for questions
CREATE POLICY "Questions are viewable by authenticated users"
  ON questions
  FOR SELECT
  TO authenticated
  USING (true);

-- Policies for test attempts
CREATE POLICY "Users can view their own attempts"
  ON test_attempts
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own attempts"
  ON test_attempts
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Insert sample questions
INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type) VALUES
  -- Basic Mathematics
  ((SELECT id FROM subjects WHERE name = 'Basic Mathematics'), 
   'What is 15% of 200?',
   ARRAY['25', '30', '35', '40'],
   1,
   'To find 15% of 200, multiply 200 by 0.15 = 30',
   'easy',
   'practice'),
   
  ((SELECT id FROM subjects WHERE name = 'Basic Mathematics'),
   'If x + 3 = 8, what is x?',
   ARRAY['3', '4', '5', '6'],
   2,
   'Subtract 3 from both sides: x = 8 - 3 = 5',
   'easy',
   'practice'),

  -- Advanced Mathematics
  ((SELECT id FROM subjects WHERE name = 'Advanced Mathematics'),
   'What is the derivative of x²?',
   ARRAY['x', '2x', '2x²', 'x/2'],
   1,
   'The power rule states that the derivative of x^n is nx^(n-1). For x², n=2, so the derivative is 2x.',
   'medium',
   'practice'),

  -- English
  ((SELECT id FROM subjects WHERE name = 'English'),
   'Which sentence is grammatically correct?',
   ARRAY[
     'Between you and I, the test was easy.',
     'Between you and me, the test was easy.',
     'Between we, the test was easy.',
     'Between us all, the test was easy.'
   ],
   1,
   'The preposition "between" requires an object pronoun (me) rather than a subject pronoun (I).',
   'medium',
   'practice'),

  -- Logical Reasoning
  ((SELECT id FROM subjects WHERE name = 'Logical Reasoning'),
   'If all cats are animals, and some animals are pets, which conclusion must be true?',
   ARRAY[
     'All cats are pets',
     'Some pets are cats',
     'Some animals are not cats',
     'None of the above'
   ],
   2,
   'Since all cats are animals and some animals are pets, we can conclude that some pets must be cats.',
   'hard',
   'practice');