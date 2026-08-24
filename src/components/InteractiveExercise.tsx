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
    <div id={`exercise-card-${exercise.id}`} className="apple-card p-5 sm:p-7 space-y-6">
      
      {/* Exercise Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-black/[0.05] pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-[#4285F4] to-[#1A73E8] text-white tracking-wide shadow-xs">
              Exercise {exercise.id}
            </span>
            {exercise.targetSections && (
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-[#1A73E8] border border-blue-200/60">
                Sections {exercise.targetSections.join(", ")}
              </span>
            )}
          </div>
          <p className="font-bold text-[#202124] text-base sm:text-lg mt-2">
            {exercise.instruction}
          </p>
          {languageMode === 'bilingual' && exercise.instructionBurmese && (
            <div className="apple-burmese-box myanmar-text mt-2 inline-block text-xs sm:text-sm">
              <span className="font-semibold text-[#4285F4] mr-1.5">👉</span>
              {exercise.instructionBurmese}
            </div>
          )}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            id={`reset-btn-${exercise.id}`}
            onClick={handleReset}
            className="apple-btn apple-btn-secondary px-3.5 py-1.5 text-xs font-medium cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
          <button
            id={`check-answers-btn-${exercise.id}`}
            onClick={handleCheckAll}
            className="apple-btn apple-btn-blue px-4 py-1.5 text-xs font-medium cursor-pointer shadow-xs"
          >
            <Check className="w-3.5 h-3.5" />
            <span>Check Answers</span>
          </button>
        </div>
      </div>

      {/* Word Bank if present */}
      {exercise.wordBank && exercise.wordBank.length > 0 && (
        <div className="p-4 bg-gradient-to-r from-amber-50/70 via-yellow-50/40 to-orange-50/30 rounded-2xl border border-amber-200/70 shadow-2xs">
          <span className="text-xs font-bold text-amber-900 tracking-wider uppercase block mb-2.5">
            Word Bank
          </span>
          <div className="flex flex-wrap gap-2">
            {exercise.wordBank.map((word, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-semibold bg-white border border-amber-300/80 rounded-lg text-[#202124] shadow-2xs"
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Questions List */}
      <div className="space-y-3.5">
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
              className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                isCorrect
                  ? 'bg-gradient-to-r from-emerald-50/80 to-teal-50/40 border-emerald-300 ring-1 ring-emerald-300/60'
                  : isWrong
                  ? 'bg-gradient-to-r from-rose-50/80 to-red-50/40 border-rose-300 ring-1 ring-rose-300/60'
                  : 'bg-white hover:border-blue-200/80 border-slate-200/80 shadow-xs'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  
                  {/* Prompt Text / Context */}
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">0{idx + 1}</span>
                    <button
                      onClick={() => handleAudioPlay(q.id, q.prompt)}
                      title="Listen to sentence"
                      className={`p-1 rounded-full text-slate-600 hover:text-[#4285F4] hover:bg-blue-50 transition-colors cursor-pointer ${
                        activeAudioId === q.id ? 'text-[#4285F4] animate-pulse bg-[#4285F4]/10' : ''
                      }`}
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <p className="text-base sm:text-lg text-[#202124] font-medium whitespace-pre-line leading-relaxed">
                    {q.prompt}
                  </p>

                  {/* Input or Options based on type */}
                  {q.options && q.options.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
                      {q.options.map((opt, optIdx) => {
                        const isSelected = userVal === opt;
                        return (
                          <button
                            key={optIdx}
                            id={`option-btn-${exercise.id}-${q.id}-${optIdx}`}
                            onClick={() => handleInputChange(q.id, opt)}
                            className={`p-3 rounded-xl text-left text-sm sm:text-base transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-gradient-to-r from-[#4285F4] to-[#1A73E8] text-white font-semibold shadow-xs border border-transparent'
                                : 'bg-slate-50/90 text-[#202124] font-normal hover:bg-blue-50/60 hover:border-blue-200 border border-slate-200/70'
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 mt-3 flex-wrap">
                      {q.prefix && (
                        <span className="text-sm sm:text-base font-medium text-[#202124]">
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
                          className={`w-full px-3.5 py-2 text-sm sm:text-base rounded-xl border focus:outline-none transition-colors ${
                            isCorrect
                              ? 'border-[#34A853] bg-white text-[#202124] font-medium ring-1 ring-[#34A853]'
                              : isWrong
                              ? 'border-[#EA4335] bg-white text-[#202124] font-medium ring-1 ring-[#EA4335]'
                              : 'border-slate-200/90 bg-slate-50/80 text-[#202124] focus:bg-white focus:ring-2 focus:ring-[#4285F4]'
                          }`}
                        />
                      </div>

                      {q.suffix && (
                        <span className="text-sm sm:text-base font-medium text-[#202124]">
                          {q.suffix}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Feedback Status */}
                  {isResultChecked && (
                    <div className="mt-3 flex items-center justify-between gap-2 pt-2.5 border-t border-black/[0.04]">
                      {isCorrect ? (
                        <div className="flex items-center gap-1.5 text-sm font-bold text-[#34A853]">
                          <CheckCircle className="w-4 h-4 text-[#34A853]" />
                          <span>Correct usage.</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1.5 text-sm font-medium text-[#EA4335]">
                          <XCircle className="w-4 h-4 text-[#EA4335]" />
                          <span>Key answer: <strong className="font-bold text-[#202124] bg-white px-2 py-0.5 rounded-md border border-rose-200">{primaryCorrectAnswer}</strong></span>
                        </div>
                      )}

                      <button
                        onClick={() => toggleExplanation(q.id)}
                        className="ml-auto text-sm text-[#1A73E8] hover:underline flex items-center gap-1 font-semibold cursor-pointer"
                      >
                        <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                        <span>{isExpanded ? "Hide Rule" : "Why is this right?"}</span>
                        {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                      </button>
                    </div>
                  )}

                  {/* Show Answer Toggle view */}
                  {showAnswers && !isResultChecked && (
                    <div className="mt-2.5 text-sm font-semibold text-[#202124] bg-gradient-to-r from-blue-50 to-indigo-50/40 p-3 rounded-xl border border-blue-200/70">
                      Answer Key: <span className="text-[#1A73E8]">{primaryCorrectAnswer}</span>
                    </div>
                  )}

                  {/* Deep Explanation Panel */}
                  {isExpanded && (
                    <div className="mt-3 p-4 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 rounded-xl text-sm text-[#202124] space-y-2.5 border border-blue-100/80 shadow-2xs">
                      <p className="font-normal leading-relaxed">
                        <strong className="font-bold text-[#202124]">Grammar Rule:</strong> {q.explanation}
                      </p>
                      {languageMode === 'bilingual' && q.explanationBurmese && (
                        <div className="text-[#1A73E8] bg-white/90 p-3 rounded-lg border border-blue-100/70 myanmar-text font-normal">
                          🇲🇲 <strong>မြန်မာဘာသာ ရှင်းလင်းချက်:</strong> {q.explanationBurmese}
                        </div>
                      )}
                      {onAskAI && (
                        <div className="pt-1">
                          <button
                            onClick={() => onAskAI(`Explain why the answer for this sentence is "${primaryCorrectAnswer}": "${q.prompt}"`, q.explanation)}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1A73E8] hover:underline cursor-pointer"
                          >
                            <Sparkles className="w-3.5 h-3.5 text-[#4285F4]" />
                            <span>Ask AI Tutor for deeper explanation</span>
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
        {checkedQuestions > 0 && correctTotal === totalQuestions && totalQuestions > 0 && (
          <div className="p-4 bg-gradient-to-r from-emerald-50/90 via-teal-50/50 to-white border border-emerald-300 rounded-2xl flex items-center gap-3.5 my-2 transition-all shadow-xs">
            <div className="w-10 h-10 bg-[#34A853] rounded-xl flex items-center justify-center text-white flex-shrink-0 google-glow border border-transparent">
              <Check className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <h4 className="text-base font-bold text-emerald-950">
                Exercise Mastered! (100% Score)
              </h4>
              <p className="text-sm text-emerald-900/80 mt-0.5">
                {languageMode === 'bilingual' 
                  ? 'အဖြေအားလုံး မှန်ကန်စွာ ဖြေဆိုပြီးပါပြီ။ သဒ္ဒါစည်းမျဉ်းကို ကျွမ်းကျင်စွာ နားလည်သွားပါပြီ။'
                  : 'All questions answered accurately. You have mastered these Cambridge Advanced rules!'}
              </p>
            </div>
          </div>
        )}

        <div className="p-4 bg-gradient-to-r from-amber-50/90 via-yellow-50/40 to-orange-50/30 border border-amber-200/80 rounded-2xl flex items-start gap-3 text-sm text-amber-950 shadow-2xs">
          <Lightbulb className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-amber-900 font-bold">Cambridge Tip:</strong> Advanced English tests subtle nuances in aspect, modal probability, and inversion. Review answer keys and explanations to consolidate your knowledge.
          </p>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-black/[0.05] text-xs text-[#333336]">
          <div>
            <span className="font-medium">Answered: {answeredQuestions} of {totalQuestions}</span>
            {checkedQuestions > 0 && (
              <span className="ml-3 font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/70 px-3 py-1 rounded-full shadow-2xs">
                Score: {correctTotal} / {totalQuestions} ({Math.round((correctTotal / totalQuestions) * 100)}%)
              </span>
            )}
          </div>
          <button
            id={`toggle-answers-btn-${exercise.id}`}
            onClick={() => setShowAnswers(!showAnswers)}
            className="text-xs text-[#1A73E8] hover:underline font-semibold cursor-pointer"
          >
            {showAnswers ? "Hide Answer Keys" : "Show Answer Keys"}
          </button>
        </div>
      </div>

    </div>
  );
};
