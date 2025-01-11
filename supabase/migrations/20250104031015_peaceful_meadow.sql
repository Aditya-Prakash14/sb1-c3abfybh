/*
  # Seed initial questions

  1. Changes
    - Insert initial questions for all subjects (Basic Mathematics, Advanced Mathematics, English, Logical Reasoning)
    - Each subject includes practice, mock test, and daily questions
  2. Security
    - Questions are readable by all authenticated users (using existing RLS policy)
*/

-- Basic Mathematics Questions
INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id, 
  'What is 25% of 400?',
  ARRAY['50', '100', '150', '200'],
  1,
  'To find 25% of 400, multiply 400 by 0.25 = 100',
  'easy',
  'practice'
FROM subjects WHERE name = 'Basic Mathematics';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
  'Solve for x: 2x + 5 = 15',
  ARRAY['5', '10', '7.5', '8'],
  0,
  'Subtract 5 from both sides: 2x = 10, then divide by 2: x = 5',
  'easy',
  'practice'
FROM subjects WHERE name = 'Basic Mathematics';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
  'What is 12 * 8?',
  ARRAY['88','96','104','112'],
  1,
  '12*8=96',
  'easy',
  'practice'
FROM subjects WHERE name = 'Basic Mathematics';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
    'What is 100/25',
    ARRAY['2','3','4','5'],
    2,
    '100 divided by 25 equals 4',
    'easy',
    'practice'
FROM subjects WHERE name = 'Basic Mathematics';
    
INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
    'What is 435 + 280',
     ARRAY['615','715','725','685'],
     1,
     '435+280=715',
     'easy',
     'practice'
FROM subjects WHERE name = 'Basic Mathematics';
    
INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
     'What is 200 / 10?',
     ARRAY['10','20','30','40'],
     1,
     '200 divided by 10 is 20',
     'easy',
     'practice'
FROM subjects WHERE name = 'Basic Mathematics';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
      'Solve: 5x + 10 = 25 What is x?',
     ARRAY['1','2','3','4'],
      2,
      '5x = 15, x=3',
      'medium',
      'practice'
FROM subjects WHERE name = 'Basic Mathematics';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
     'What is the value of pi to 2 decimal places?',
      ARRAY['3.14','3.15','3.16','3.17'],
       0,
       'Pi = 3.14',
       'medium',
       'practice'
FROM subjects WHERE name = 'Basic Mathematics';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
    'What is 2^3?',
     ARRAY['6','8','9','12'],
      1,
       '2 to the power of 3 is 8',
       'medium',
      'practice'
FROM subjects WHERE name = 'Basic Mathematics';
     
INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
     'What is the square root of 81?',
    ARRAY['7','8','9','10'],
      2,
      'The square root of 81 is 9',
       'medium',
       'practice'
FROM subjects WHERE name = 'Basic Mathematics';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
      'How many degrees are in a circle?',
    ARRAY['90','180','270','360'],
      3,
      'A circle has 360 degrees',
      'medium',
      'practice'
FROM subjects WHERE name = 'Basic Mathematics';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
    'What is 30% of 50?',
     ARRAY['10','15','20','25'],
     1,
    '30% of 50 is 0.3*50 = 15',
    'medium',
    'practice'
FROM subjects WHERE name = 'Basic Mathematics';
    
INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
    'What is 120/6?',
    ARRAY['10','20','30','40'],
    1,
   '120 divided by 6 = 20',
    'medium',
   'practice'
FROM subjects WHERE name = 'Basic Mathematics';
    
INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
   'What is the average of 10, 20 and 30?',
   ARRAY['10','15','20','25'],
   2,
  'The average of 10, 20 and 30 is (10+20+30)/3 = 20',
  'medium',
  'practice'
FROM subjects WHERE name = 'Basic Mathematics';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
    'If a train travels at 60 miles per hour, how far will it travel in 3 hours?',
    ARRAY['120','180','240','280'],
    1,
   '60 miles per hour times 3 hours is 180',
   'medium',
  'practice'
FROM subjects WHERE name = 'Basic Mathematics';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
    'What is the next number: 2, 4, 6, 8, ?',
    ARRAY['9','10','11','12'],
    1,
   'The next number is 10 as the sequence is adding 2 to the last number.',
   'medium',
   'practice'
FROM subjects WHERE name = 'Basic Mathematics';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
    'What is the product of 7 and 9?',
    ARRAY['56','63','72','81'],
    1,
    '7 multiplied by 9 is 63',
   'medium',
    'practice'
FROM subjects WHERE name = 'Basic Mathematics';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
    'What is 1/2 + 1/4?',
   ARRAY['3/4','2/4','1/8','3/8'],
   0,
   '1/2 + 1/4 = 2/4+1/4= 3/4',
   'hard',
   'practice'
FROM subjects WHERE name = 'Basic Mathematics';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
    'What is the surface area of a cube with side length 5?',
   ARRAY['100','125','150','200'],
    2,
    'A cube has 6 sides and each side is 5 * 5 = 25, thus 25 * 6 = 150',
    'hard',
    'practice'
FROM subjects WHERE name = 'Basic Mathematics';
  
INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
     'A triangle has angles of 90 and 30, what is the 3rd angle?',
      ARRAY['60','70','80','90'],
     0,
     'The angles in a triangle total 180 so 180 - 90 - 30 = 60',
     'hard',
     'practice'
FROM subjects WHERE name = 'Basic Mathematics';
  
INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
     'What is 0.25 as a fraction?',
     ARRAY['1/2','1/4','1/8','3/4'],
    1,
    '0.25 = 1/4',
   'hard',
    'practice'
FROM subjects WHERE name = 'Basic Mathematics';
  
INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
   'If a number is divisible by 2 and 3, it must be divisible by:',
    ARRAY['4','5','6','7'],
    2,
    'A number divisible by 2 and 3 must be divisible by 6',
    'hard',
    'practice'
FROM subjects WHERE name = 'Basic Mathematics';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
  'What is the circumference of a circle with radius 7?',
   ARRAY['44','22','88','154'],
  0,
 'Circumference = 2*Pi*radius or 2*3.14*7 = 43.96 which is approx 44',
 'hard',
'practice'
FROM subjects WHERE name = 'Basic Mathematics';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
  'What is the next number 1, 4, 9, 16, ?',
   ARRAY['20','25','28','30'],
  1,
 'The sequence is the numbers squared so the next is 5*5 = 25',
 'hard',
'practice'
FROM subjects WHERE name = 'Basic Mathematics';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
    'Solve for x: 2(x+5) = 20',
   ARRAY['3','5','8','10'],
   1,
   '2x+10=20 so 2x=10 and x=5',
   'hard',
   'practice'
FROM subjects WHERE name = 'Basic Mathematics';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
    'What is 20% of 200',
   ARRAY['20','30','40','50'],
    2,
    '20% of 200 is 0.2 * 200 = 40',
    'hard',
    'practice'
FROM subjects WHERE name = 'Basic Mathematics';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
    'What is the value of x in the equation 3x - 6 = 12?',
    ARRAY['4','6','8','10'],
    1,
    'add 6 to both sides: 3x = 18, divide both sides by 3: x= 6',
    'hard',
    'practice'
FROM subjects WHERE name = 'Basic Mathematics';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
    'What is 15% of 40?',
    ARRAY['4','5','6','7'],
    2,
    '15% of 40 is 0.15 * 40 = 6',
    'medium',
    'mock'
FROM subjects WHERE name = 'Basic Mathematics';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
     'If a dozen pencils costs $3.00, what is the cost of one pencil?',
    ARRAY['$0.25','$0.50','$0.75','$1.00'],
    0,
    '$3.00 divided by 12 is 0.25',
    'medium',
   'mock'
FROM subjects WHERE name = 'Basic Mathematics';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
    'What is the next number 1,3,6,10,?',
    ARRAY['12','13','15','20'],
    2,
    'The sequence is adding 2,3,4,5 thus the next number is 10+5 = 15',
    'hard',
   'mock'
FROM subjects WHERE name = 'Basic Mathematics';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
  'If x-7 = 15, what is the value of x',
  ARRAY['8','18','22','26'],
   2,
  'Add 7 to both sides and x = 15 + 7 = 22',
  'easy',
  'daily'
FROM subjects WHERE name = 'Basic Mathematics';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
  'What is 234 * 10',
   ARRAY['23.4','234','2340','23400'],
   2,
    'Multiplying a number by 10 simply moves the decimal point 1 place to the right',
  'easy',
  'daily'
FROM subjects WHERE name = 'Basic Mathematics';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
  'What is 1/5 + 2/5?',
  ARRAY['2/5','3/5','4/5','5/5'],
  1,
  '1/5 + 2/5 = 3/5',
  'easy',
  'daily'
FROM subjects WHERE name = 'Basic Mathematics';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
    'What is 1200/100?',
    ARRAY['1.2','12','120','12000'],
    1,
   'Dividing by 100 removes two zeros',
    'medium',
    'daily'
FROM subjects WHERE name = 'Basic Mathematics';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
    'What is 20% of 50?',
    ARRAY['5','10','15','20'],
    1,
    '20% of 50 is 0.2*50 = 10',
    'medium',
    'daily'
FROM subjects WHERE name = 'Basic Mathematics';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
  'What is the value of x in the equation x+10 = 30?',
   ARRAY['10','20','30','40'],
   1,
    'Subtract 10 from both sides and x=20',
   'medium',
   'daily'
FROM subjects WHERE name = 'Basic Mathematics';

-- Advanced Mathematics Questions
INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
  'What is the derivative of sin(x)?',
  ARRAY['cos(x)', '-sin(x)', 'tan(x)', '-cos(x)'],
  0,
  'The derivative of sin(x) is cos(x)',
  'hard',
  'practice'
FROM subjects WHERE name = 'Advanced Mathematics';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
  'What is the integral of 2x dx?',
  ARRAY['x²', 'x² + C', 'x² - C', '2x'],
  1,
  'The integral of 2x dx is x² + C, where C is the constant of integration',
  'medium',
  'mock'
FROM subjects WHERE name = 'Advanced Mathematics';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
  'What is the limit of (sin x) / x as x approaches 0?',
  ARRAY['0','1','infinity','undefined'],
  1,
  'The limit of (sin x) / x as x approaches 0 is a well-known limit and equals 1.',
  'medium',
  'practice'
FROM subjects WHERE name = 'Advanced Mathematics';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
    'What is the value of e^0?',
    ARRAY['0','1','e','undefined'],
    1,
    'Any number to the power of 0 is 1, except for 0.',
    'medium',
    'practice'
FROM subjects WHERE name = 'Advanced Mathematics';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
    'What is the derivative of sin(x)?',
    ARRAY['cos(x)','-cos(x)','tan(x)','-sin(x)'],
    0,
    'The derivative of sin(x) is cos(x)',
    'medium',
    'practice'
FROM subjects WHERE name = 'Advanced Mathematics';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
   'What is the 3rd term of the fibonacci sequence?',
    ARRAY['1','2','3','4'],
     1,
    'Fibonacci = 1, 1, 2, 3, 5... The third term is 2.',
    'medium',
    'practice'
FROM subjects WHERE name = 'Advanced Mathematics';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
   'What is the cosine of 90 degrees?',
   ARRAY['0','1','-1','1/2'],
   0,
   'The cosine of 90 degrees is 0.',
    'medium',
    'practice'
FROM subjects WHERE name = 'Advanced Mathematics';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
  'If f(x) = x^3 + 2x, what is f\'(x)?',
   ARRAY['3x^2 + 2', 'x^2 + 2','3x^2','x^2'],
   0,
    'Using the power rule, f\'(x) = 3x^2 + 2',
   'medium',
   'practice'
FROM subjects WHERE name = 'Advanced Mathematics';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
  'What is the determinant of a 2x2 matrix [[2,1],[3,4]]?',
   ARRAY['5','-5','11','-11'],
   0,
  'Determinant of [[a,b],[c,d]] = ad-bc, so (2*4)-(1*3) = 8-3=5',
    'medium',
   'practice'
FROM subjects WHERE name = 'Advanced Mathematics';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
 'What is the sum of an infinite geometric series with first term 1 and common ratio 1/2?',
   ARRAY['1','2','1.5','0.5'],
    1,
   'The sum of an infinite geometric series = a/1-r. So = 1/(1-1/2) = 1/0.5=2',
    'hard',
   'practice'
FROM subjects WHERE name = 'Advanced Mathematics';
  
INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
   'Solve for x: log2(x) = 3',
    ARRAY['4','6','8','9'],
    2,
    'log2(x) = 3 means that 2^3 = x, therefore x = 8',
   'hard',
    'practice'
FROM subjects WHERE name = 'Advanced Mathematics';
    
INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
   'What is the next number in the series: 2, 6, 12, 20, 30, ?',
    ARRAY['36','40','42','48'],
    2,
     'This series is n*(n+1), therefore the next is 7*6=42',
   'hard',
   'practice'
FROM subjects WHERE name = 'Advanced Mathematics';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
   'What is the area of a circle with radius 5?',
    ARRAY['15.70','78.50','157.08','314'],
    1,
     'Area of a circle = pi*r^2 = 3.14 * 5*5 = 78.5',
   'hard',
   'practice'
FROM subjects WHERE name = 'Advanced Mathematics';
   
INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
   'What is the volume of a cylinder with radius 2 and height 5?',
    ARRAY['20*pi','25*pi','40*pi','100*pi'],
     0,
     'Volume of a cylinder is pi*r^2*h = 3.14 * 2*2 *5 = 20*pi',
   'hard',
    'practice'
FROM subjects WHERE name = 'Advanced Mathematics';
    
INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
    'What is the magnitude of the vector (3,4)?',
   ARRAY['5','7','25','10'],
    0,
    'The magnitude of a vector = sqrt(a^2 + b^2), so sqrt(3*3+4*4) = sqrt(25) = 5',
   'hard',
   'practice'
FROM subjects WHERE name = 'Advanced Mathematics';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
    'What is the standard deviation when x = [1,3,5]?',
   ARRAY['1','2','3','4'],
    1,
    'The mean is 3, the variance is (1-3)^2 +(3-3)^2 +(5-3)^2 / 3 = 8/3. Take the square root which is about 1.6, so approx 2',
    'hard',
   'practice'
FROM subjects WHERE name = 'Advanced Mathematics';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
   'What is the binomial expansion of (x + y)^3?',
    ARRAY['x^3 + 3x^2y + 3xy^2 + y^3','x^3 + y^3','x^3 + 2x^2y + 2xy^2 + y^3','x^3 + 3x^2y + 2xy^2 + y^3'],
    0,
  'Using binomial theorem: x^3 + 3x^2y + 3xy^2 + y^3',
   'hard',
   'practice'
FROM subjects WHERE name = 'Advanced Mathematics';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
    'What is the next number of the sequence 1, 1, 2, 3, 5, 8, ?',
   ARRAY['10','11','13','16'],
    2,
    'The sequence is the fibonacci where the next number is sum of the previous two, so 8 + 5 = 13',
    'hard',
    'practice'
FROM subjects WHERE name = 'Advanced Mathematics';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
    'What is the value of the following summation: sum of i from i = 1 to 3 where i^2',
    ARRAY['10','14','18','20'],
    1,
    '1^2+2^2+3^2=1+4+9=14',
   'hard',
    'practice'
FROM subjects WHERE name = 'Advanced Mathematics';
    
INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
    'If two lines are perpendicular, what is the relationship between their slopes?',
    ARRAY['Equal','Opposite','Negative Reciprocal','Positive Reciprocal'],
    2,
     'Perpendicular lines have negative reciprocal slopes',
    'hard',
    'practice'
FROM subjects WHERE name = 'Advanced Mathematics';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
    'What is the probability of rolling an even number on a standard 6 sided die?',
   ARRAY['1/6','1/3','1/2','2/3'],
    2,
    'Even numbers are 2,4,6, so 3/6 = 1/2',
   'hard',
   'practice'
FROM subjects WHERE name = 'Advanced Mathematics';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
   'What is the derivative of x^3?',
   ARRAY['x^2','2x^2','3x^2','4x^2'],
   2,
   'Using power rule, 3x^(3-1) = 3x^2',
    'medium',
    'mock'
FROM subjects WHERE name = 'Advanced Mathematics';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
    'What is the integral of 4x^3?',
   ARRAY['x^4 + C','x^3 + C','3x^4 + C','2x^4 + C'],
    0,
    'The integral of 4x^3 is x^4 + C',
   'medium',
    'mock'
FROM subjects WHERE name = 'Advanced Mathematics';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
    'What is sin(0)?',
    ARRAY['0','1','-1','0.5'],
    0,
    'The sin of 0 is 0',
   'medium',
   'mock'
FROM subjects WHERE name = 'Advanced Mathematics';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
    'What is the cosine of 0?',
    ARRAY['0','1','-1','0.5'],
    1,
    'The cosine of 0 is 1',
   'easy',
   'daily'
FROM subjects WHERE name = 'Advanced Mathematics';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
  'What is the derivative of e^x?',
   ARRAY['e^x','x*e^(x-1)','e^2x','2*e^x'],
    0,
   'The derivative of e^x is e^x',
   'easy',
   'daily'
FROM subjects WHERE name = 'Advanced Mathematics';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
    'What is log10(100)?',
   ARRAY['1','2','3','4'],
    1,
    'log10(100) = 2 as 10^2=100',
   'easy',
   'daily'
FROM subjects WHERE name = 'Advanced Mathematics';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
    'If a function is f(x) = x^2 + 3, what is the value of f(2)?',
   ARRAY['5','6','7','8'],
    2,
   'f(2) = 2*2 +3 =7',
   'medium',
   'daily'
FROM subjects WHERE name = 'Advanced Mathematics';

-- English Questions
INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
  'Choose the correct form of the verb: She ___ to the store yesterday.',
  ARRAY['go', 'goes', 'went', 'gone'],
  2,
  'In past tense, the correct form is "went"',
  'easy',
  'practice'
FROM subjects WHERE name = 'English';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
  'Which sentence is grammatically correct?',
  ARRAY['Between you and I, the test was easy.', 'Between you and me, the test was easy.', 'Between we, the test was easy.', 'Between us all, the test was easy.'],
  1,
  'The preposition "between" requires an object pronoun (me) rather than a subject pronoun (I).',
  'medium',
  'mock'
FROM subjects WHERE name = 'English';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
    'Choose the correct word: The cat is _____ the table.',
    ARRAY['in','on','at','under'],
    3,
   'The cat is under the table',
   'easy',
   'practice'
FROM subjects WHERE name = 'English';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
   'Identify the verb in the sentence: She walks to school everyday.',
    ARRAY['She','walks','school','everyday'],
     1,
     'Walks is the verb in the sentence',
    'easy',
    'practice'
FROM subjects WHERE name = 'English';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
   'Choose the correct plural form of the word "child"',
    ARRAY['childs','childes','children','child'],
    2,
    'Children is the correct plural of child',
    'easy',
    'practice'
FROM subjects WHERE name = 'English';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
   'Which of these is a noun?',
    ARRAY['runs','happy','cat','quickly'],
   2,
   'A cat is a noun',
    'easy',
    'practice'
FROM subjects WHERE name = 'English';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
    'Which sentence is in the past tense?',
   ARRAY['I am going to the store', 'I will go to the store', 'I went to the store', 'I go to the store'],
   2,
    'The word went denotes past tense',
    'easy',
    'practice'
FROM subjects WHERE name = 'English';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
   'Choose the synonym for "happy."',
    ARRAY['sad','angry','joyful','mad'],
     2,
     'Joyful is a synonym of happy',
    'easy',
   'practice'
FROM subjects WHERE name = 'English';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
    'Identify the adjective in the sentence: The big dog ran fast',
    ARRAY['dog','ran','big','fast'],
    2,
    'Big describes dog which is an adjective',
    'medium',
    'practice'
FROM subjects WHERE name = 'English';

INSERT INTO questions (subject_id, question_text, options, correct_option, explanation, difficulty, type)
SELECT id,
    'Which is a pronoun?',
    ARRAY['table','run','he','fast'],
   2,
    'He is a pronoun',
    'medium',
    'practice'
FROM subjects WHERE name = 'English