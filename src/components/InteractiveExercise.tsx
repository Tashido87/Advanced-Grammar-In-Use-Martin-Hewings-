import React, { useState } from "react";
import { Exercise, ExerciseQuestion, LanguageMode } from "../types";
import { checkAnswer } from "../lib/answerValidator";
import { speakText } from "../lib/speech";
import { 
  CheckCircle, 
  XCircle, 
  HelpCircle, 
  Volume2, 
  RotateCcw, 
  Sparkles, 
  Lightbulb, 
  Check,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import confetti from "canvas-confetti";

interface InteractiveExerciseProps {
  exercise: Exercise;
  unitId: number;
  onExerciseComplete: (score: number, maxScore: number) => void;
  languageMode: LanguageMode;
  onAskAI?: (questionPrompt: string, ruleContext: string) => void;
}

export const InteractiveExercise: React.FC<InteractiveExerciseProps> = ({
  exercise,
  unitId,
  onExerciseComplete,
  languageMode,
  onAskAI,
}) => {
  const [answers, setAnswers] = useState<Record<string | number, string>>({});
  const [results, setResults] = useState<Record<string | number, boolean | null>>({});
  const [showAnswers, setShowAnswers] = useState(false);
  const [expandedExplanation, setExpandedExplanation] = useState<Record<string | number, boolean>>({});
  const [activeAudioId, setActiveAudioId] = useState<string | number | null>(null);

  const handleInputChange = (qId: string | number, val: string) => {
    setAnswers(prev => ({ ...prev, [qId]: val }));
    if (results[qId] !== undefined) {
      setResults(prev => ({ ...prev, [qId]: null }));
    }
  };

  const handleCheckAll = () => {
    const newResults: Record<string | number, boolean> = {};
    let correctCount = 0;

    exercise.questions.forEach(q => {
      const userVal = answers[q.id] || "";
      const { isCorrect } = checkAnswer(userVal, q.correctAnswer, q.alternatives);
      newResults[q.id] = isCorrect;
      if (isCorrect) correctCount++;
    });

    setResults(newResults);

    if (correctCount === exercise.questions.length && exercise.questions.length > 0) {
      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // ignore
      }
    }

    onExerciseComplete(correctCount, exercise.questions.length);
  };

  const handleReset = () => {
    setAnswers({});
    setResults({});
    setShowAnswers(false);
  };

  const toggleExplanation = (qId: string | number) => {
    setExpandedExplanation(prev => ({ ...prev, [qId]: !prev[qId] }));
  };

  const handleAudioPlay = (qId: string | number, text: string) => {
    setActiveAudioId(qId);
    speakText(text, () => setActiveAudioId(null));
  };

  const totalQuestions = exercise.questions.length;
  const answeredQuestions = Object.values(answers).filter(v => typeof v === 'string' && v.trim().length > 0).length;
  const checkedQuestions = Object.values(results).filter(v => v !== null && v !== undefined).length;
  const correctTotal = Object.values(results).filter(v => v === true).length;

  return (
    <div id={`exercise-card-${exercise.id}`} className="bg-white border border-stone-200 rounded-xl p-5 sm:p-7 shadow-xs space-y-6">
      
      {/* Exercise Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-100 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-stone-100 text-stone-800 border border-stone-200 uppercase tracking-wide">
              Exercise {exercise.id}
            </span>
            {exercise.targetSections && (
              <span className="text-xs font-medium text-stone-400">
                (Sections {exercise.targetSections.join(", ")})
              </span>
            )}
          </div>
          <p className="font-semibold text-stone-900 text-sm sm:text-base mt-2">
            {exercise.instruction}
          </p>
          {languageMode === 'bilingual' && exercise.instructionBurmese && (
            <p className="text-xs text-amber-900 mt-1 font-medium bg-amber-50/60 p-2 rounded border border-amber-200/70 inline-block">
              👉 {exercise.instructionBurmese}
            </p>
          )}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            id={`reset-btn-${exercise.id}`}
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-stone-600 hover:bg-stone-50 border border-stone-200 transition-colors shadow-2xs"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
          <button
            id={`check-answers-btn-${exercise.id}`}
            onClick={handleCheckAll}
            className="flex items-center gap-1.5 px-5 py-2 rounded-lg text-xs sm:text-sm font-bold bg-stone-800 hover:bg-stone-900 text-white shadow-xs transition-colors"
          >
            <Check className="w-4 h-4" />
            <span>Check Answers</span>
          </button>
        </div>
      </div>

      {/* Word Bank if present */}
      {exercise.wordBank && exercise.wordBank.length > 0 && (
        <div className="p-4 bg-stone-50 rounded-lg border border-stone-200">
          <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block mb-2">
            Word Bank (စကားလုံးဘဏ်)
          </span>
          <div className="flex flex-wrap gap-2">
            {exercise.wordBank.map((word, i) => (
              <span
                key={i}
                className="px-2.5 py-1 text-xs font-medium bg-white border border-stone-300 rounded-md text-stone-800 shadow-2xs hover:border-stone-500 hover:text-stone-900 transition-colors cursor-default"
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Questions List */}
      <div className="space-y-4">
        {exercise.questions.map((q, idx) => {
          const userVal = answers[q.id] || "";
          const isResultChecked = results[q.id] !== undefined && results[q.id] !== null;
          const isCorrect = results[q.id] === true;
          const isWrong = results[q.id] === false;
          const isExpanded = expandedExplanation[q.id];

          const primaryCorrectAnswer = Array.isArray(q.correctAnswer) ? q.correctAnswer[0] : q.correctAnswer;

          return (
            <div
              key={q.id}
              id={`question-box-${exercise.id}-${q.id}`}
              className={`p-4 sm:p-5 rounded-xl border transition-all ${
                isCorrect
                  ? 'bg-emerald-50/50 border-emerald-300'
                  : isWrong
                  ? 'bg-rose-50/50 border-rose-300'
                  : 'bg-white border-stone-200'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  
                  {/* Prompt Text / Context */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-stone-400">0{idx + 1}</span>
                    <button
                      onClick={() => handleAudioPlay(q.id, q.prompt)}
                      title="Listen to sentence"
                      className={`p-1 rounded text-stone-400 hover:text-stone-700 transition-colors ${
                        activeAudioId === q.id ? 'text-stone-900 animate-pulse' : ''
                      }`}
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <p className="text-sm sm:text-base text-stone-800 font-medium whitespace-pre-line leading-relaxed">
                    {q.prompt}
                  </p>

                  {/* Input or Options based on type */}
                  {q.options && q.options.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-3.5">
                      {q.options.map((opt, optIdx) => {
                        const isSelected = userVal === opt;
                        return (
                          <button
                            key={optIdx}
                            id={`option-btn-${exercise.id}-${q.id}-${optIdx}`}
                            onClick={() => handleInputChange(q.id, opt)}
                            className={`p-3.5 rounded-lg text-left text-xs sm:text-sm font-medium border transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-stone-100 border-2 border-stone-800 text-stone-900 font-bold shadow-2xs'
                                : 'bg-white text-stone-700 border-stone-200 hover:border-stone-400 hover:bg-stone-50'
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 mt-3.5 flex-wrap">
                      {q.prefix && (
                        <span className="text-xs sm:text-sm font-medium text-stone-700">
                          {q.prefix}
                        </span>
                      )}
                      
                      <div className="relative flex-1 min-w-[200px] max-w-md">
                        <input
                          id={`input-${exercise.id}-${q.id}`}
                          type="text"
                          value={userVal}
                          onChange={(e) => handleInputChange(q.id, e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") handleCheckAll();
                          }}
                          placeholder="Type your answer..."
                          className={`w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border focus:outline-none transition-colors ${
                            isCorrect
                              ? 'border-emerald-600 bg-white text-emerald-950 font-semibold'
                              : isWrong
                              ? 'border-rose-600 bg-white text-rose-950'
                              : 'border-stone-300 bg-white text-stone-900 focus:border-stone-700'
                          }`}
                        />
                      </div>

                      {q.suffix && (
                        <span className="text-xs sm:text-sm font-medium text-stone-700">
                          {q.suffix}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Feedback Status */}
                  {isResultChecked && (
                    <div className="mt-3.5 flex items-center justify-between gap-2 pt-3 border-t border-stone-100">
                      {isCorrect ? (
                        <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800">
                          <CheckCircle className="w-4 h-4 text-emerald-600" />
                          <span>Correct! Authentic grammar usage.</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-700">
                          <XCircle className="w-4 h-4" />
                          <span>Incorrect. Correct answer: <strong className="text-stone-900 font-bold">{primaryCorrectAnswer}</strong></span>
                        </div>
                      )}

                      <button
                        onClick={() => toggleExplanation(q.id)}
                        className="ml-auto text-xs text-stone-700 hover:text-stone-900 flex items-center gap-1 font-semibold underline"
                      >
                        <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                        <span>{isExpanded ? "Hide Rule" : "Why is this right?"}</span>
                        {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                      </button>
                    </div>
                  )}

                  {/* Show Answer Toggle view */}
                  {showAnswers && !isResultChecked && (
                    <div className="mt-2 text-xs font-semibold text-stone-800 bg-stone-100 p-2.5 rounded-lg border border-stone-200">
                      Answer Key: {primaryCorrectAnswer}
                    </div>
                  )}

                  {/* Deep Explanation Panel */}
                  {isExpanded && (
                    <div className="mt-3 p-3.5 bg-stone-50 rounded-lg border border-stone-200 text-xs text-stone-700 space-y-2">
                      <p className="font-medium text-stone-900">
                        💡 <strong>Grammar Rule:</strong> {q.explanation}
                      </p>
                      {languageMode === 'bilingual' && q.explanationBurmese && (
                        <p className="text-amber-950 pt-1.5 border-t border-stone-200 font-medium">
                          🇲🇲 <strong>မြန်မာဘာသာ ရှင်းလင်းချက်:</strong> {q.explanationBurmese}
                        </p>
                      )}
                      {onAskAI && (
                        <div className="pt-2">
                          <button
                            onClick={() => onAskAI(`Explain why the answer for this sentence is "${primaryCorrectAnswer}": "${q.prompt}"`, q.explanation)}
                            className="inline-flex items-center gap-1 text-[11px] font-bold text-stone-700 hover:text-stone-900 underline"
                          >
                            <Sparkles className="w-3 h-3 text-stone-600" />
                            Ask AI Tutor for deeper explanation
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Score Summary & Tip Banner */}
      <div className="space-y-3 pt-2">
        <div className="p-4 bg-amber-50/70 border border-amber-200/80 rounded-lg flex items-start gap-2.5 text-xs text-amber-950">
          <Lightbulb className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Exam & Usage Tip:</strong> Cambridge Advanced tests precise aspect, modal nuance, and inversion. Review the grammar rules above and exercise answer explanations to cement your understanding.
          </p>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-stone-100 text-xs text-stone-500">
          <div>
            <span>Answered: {answeredQuestions} of {totalQuestions}</span>
            {checkedQuestions > 0 && (
              <span className="ml-3 font-bold text-stone-900 bg-stone-100 px-2.5 py-0.5 rounded border border-stone-200">
                Score: {correctTotal} / {totalQuestions} ({Math.round((correctTotal / totalQuestions) * 100)}%)
              </span>
            )}
          </div>
          <button
            id={`toggle-answers-btn-${exercise.id}`}
            onClick={() => setShowAnswers(!showAnswers)}
            className="text-xs text-stone-600 hover:text-stone-900 underline"
          >
            {showAnswers ? "Hide Answer Keys" : "Show Answer Keys"}
          </button>
        </div>
      </div>

    </div>
  );
};
