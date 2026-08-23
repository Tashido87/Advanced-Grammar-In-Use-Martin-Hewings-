export type AppTab = 'units' | 'study-planner' | 'reminder' | 'glossary' | 'irregular-verbs' | 'ai-tutor' | 'saved';

export type LanguageMode = 'en' | 'bilingual';

export interface SectionExample {
  text: string;
  note?: string;
  burmeseNote?: string;
  isWrong?: boolean;
}

export interface SectionRule {
  id: string; // 'A', 'B', 'C', etc.
  title: string;
  content: string;
  contentBurmese?: string;
  examples: SectionExample[];
  specialNote?: string;
  specialNoteBurmese?: string;
  tables?: {
    headers: string[];
    rows: string[][];
  };
}

export interface ExerciseQuestion {
  id: number | string;
  prompt: string;
  prefix?: string;
  suffix?: string;
  options?: string[];
  correctAnswer: string | string[]; // Can be single string or array of accepted variants
  alternatives?: string[];
  explanation: string;
  explanationBurmese?: string;
  contextHint?: string;
  categoryTag?: string;
}

export interface Exercise {
  id: string; // e.g. "1.1", "1.2"
  title: string;
  instruction: string;
  instructionBurmese?: string;
  targetSections?: string[]; // e.g. ["A", "B"]
  type: 'fill-in' | 'multiple-choice' | 'underline-choice' | 'sentence-rewrite' | 'match-pairs' | 'identify-mistake';
  wordBank?: string[];
  questions: ExerciseQuestion[];
}

export interface GrammarUnit {
  id: number; // 1 to 105
  title: string;
  category: string;
  level: 'B2 Intermediate' | 'C1 Advanced' | 'C2 Proficiency';
  summary: string;
  summaryBurmese: string;
  keyPoints: string[];
  keyPointsBurmese: string[];
  reminderRefs?: string[];
  sections: SectionRule[];
  exercises: Exercise[];
}

export interface StudyPlannerOption {
  label: string; // 'A', 'B', 'C', 'D'
  text: string;
}

export interface StudyPlannerQuestion {
  id: string; // e.g. "1.1", "1.2", "2.1"
  sectionNumber: number;
  sectionName: string;
  prompt: string;
  options: StudyPlannerOption[];
  correctAnswer: string | string[]; // e.g. "C" or ["B", "D"]
  reminderRef: string; // e.g. "A1", "A5"
  unitRef: string; // e.g. "1, 2"
  explanation: string;
  explanationBurmese: string;
}

export interface GrammarReminderItem {
  code: string; // 'A1', 'A2', 'B1', etc.
  category: string;
  title: string;
  rule: string;
  ruleBurmese: string;
  example: string;
  relatedUnits: string;
}

export interface GlossaryTerm {
  term: string;
  partOfSpeech?: string;
  definition: string;
  definitionBurmese: string;
  example: string;
  relatedUnits?: string;
}

export interface IrregularVerb {
  infinitive: string;
  pastSimple: string;
  pastParticiple: string;
  burmeseMeaning: string;
  notes?: string;
}

export interface UserAnswerRecord {
  unitId: number;
  exerciseId: string;
  questionId: number | string;
  userAnswer: string;
  isCorrect: boolean;
  timestamp: number;
}

export interface UnitProgress {
  unitId: number;
  completedExercises: string[]; // exercise IDs completed
  totalScore: number;
  maxScore: number;
  lastStudiedAt: number;
  bookmarked: boolean;
}

export interface StudyPlannerResult {
  completedAt: number;
  score: number;
  totalQuestions: number;
  sectionScores: Record<string, { correct: number; total: number; unitRefs: string[] }>;
  recommendedUnits: number[];
  answers: Record<string, string>;
}
