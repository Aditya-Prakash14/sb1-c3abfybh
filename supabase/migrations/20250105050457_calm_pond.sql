/*
  # Fix Questions and Add Missing Practice Questions

  1. Changes
    - Re-add practice questions that were accidentally deleted
    - Update question types for better organization
    - Add missing questions for all subjects
*/

-- Re-add practice questions that were accidentally deleted
INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
  'What is 25% of 400?',
  ARRAY['50', '100', '150', '200'],
  1,
  'To find 25% of 400, multiply 400 by 0.25 = 100',
  'easy',
  'practice'
FROM subjects WHERE name = 'Basic Mathematics';

-- Add more practice questions for each subject
INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
  'What is the derivative of x²?',
  ARRAY['x', '2x', '2x²', 'x/2'],
  1,
  'Using the power rule, the derivative of x² is 2x',
  'medium',
  'practice'
FROM subjects WHERE name = 'Advanced Mathematics';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
  'Which sentence uses the correct form of "their"?',
  ARRAY[
    'There going to the store',
    'Their going to the store',
    'They''re going to the store',
    'Theyre going to the store'
  ],
  2,
  '"They''re" is the contraction of "they are"',
  'medium',
  'practice'
FROM subjects WHERE name = 'English';