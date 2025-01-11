/*
  # Remove practice questions
  
  This migration removes all practice questions from the database
  while keeping mock test and daily questions intact.
*/

DELETE FROM questions 
WHERE type = 'practice';