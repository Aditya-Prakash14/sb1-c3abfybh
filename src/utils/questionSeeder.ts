import { supabase } from '../lib/supabase';
import questionsData from '../data/questions.json';

export async function seedQuestions() {
  try {
    // Get subject IDs from the database
    const { data: subjects, error: subjectError } = await supabase
      .from('subjects')
      .select('id, name')
      .order('created_at');

    if (subjectError) throw subjectError;

    // Create a map of subject names to IDs
    const subjectMap = subjects.reduce((acc, subject) => {
      const name = subject.name.toLowerCase().replace(' ', '_');
      acc[name] = subject.id;
      return acc;
    }, {} as Record<string, string>);

    // Prepare questions for insertion
    const questionsToInsert = Object.entries(questionsData).flatMap(([subjectKey, types]) => {
      const subjectId = subjectMap[subjectKey];
      
      return Object.entries(types).flatMap(([type, questions]) =>
        questions.map(q => ({
          subject_id: subjectId,
          question_text: q.question_text,
          options: q.options,
          correct_option: q.correct_option,
          explanation: q.explanation,
          difficulty: q.difficulty,
          type: type
        }))
      );
    });

    // Insert questions in batches of 50
    const batchSize = 50;
    for (let i = 0; i < questionsToInsert.length; i += batchSize) {
      const batch = questionsToInsert.slice(i, i + batchSize);
      const { error } = await supabase
        .from('questions')
        .insert(batch);

      if (error) throw error;
    }

    return { success: true, message: 'Questions seeded successfully' };
  } catch (error) {
    console.error('Error seeding questions:', error);
    return { success: false, message: error instanceof Error ? error.message : 'Unknown error occurred' };
  }
}

export async function clearQuestions() {
  try {
    const { error } = await supabase
      .from('questions')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000'); // Delete all questions

    if (error) throw error;
    return { success: true, message: 'Questions cleared successfully' };
  } catch (error) {
    console.error('Error clearing questions:', error);
    return { success: false, message: error instanceof Error ? error.message : 'Unknown error occurred' };
  }
}