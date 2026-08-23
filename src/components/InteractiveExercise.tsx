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
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#202124] text-white tracking-wide">
              Exercise {exercise.id}
            </span>
            {exercise.targetSections && (
              <span className="text-xs font-medium text-[#333336]">
                (Sections {exercise.targetSections.join(", ")})
              </span>
            )}
          </div>
          <p className="font-semibold text-[#202124] text-base sm:text-lg mt-2">
            {exercise.instruction}
          </p>
          {languageMode === 'bilingual' && exercise.instructionBurmese && (
            <div className="apple-burmese-box myanmar-text mt-1.5 inline-block text-xs">
              <span className="font-semibold text-[#4285F4] mr-1">👉</span>
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
            className="apple-btn apple-btn-blue px-4 py-1.5 text-xs font-medium cursor-pointer"
          >
            <Check className="w-3.5 h-3.5" />
            <span>Check Answers</span>
          </button>
        </div>
      </div>

      {/* Word Bank if present */}
      {exercise.wordBank && exercise.wordBank.length > 0 && (
        <div className="p-3.5 bg-[#F8F9FA] rounded-2xl border border-black/[0.04]">
          <span className="text-xs font-semibold text-[#333336] tracking-wider uppercase block mb-2">
            Word Bank
          </span>
          <div className="flex flex-wrap gap-1.5">
            {exercise.wordBank.map((word, i) => (
              <span
                key={i}
                className="px-2.5 py-1 text-xs font-medium bg-white border border-black/[0.06] rounded-full text-[#202124] shadow-2xs"
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
                  ? 'bg-[#34A853]/5 border-[#34A853]/40'
                  : isWrong
                  ? 'bg-[#EA4335]/5 border-[#EA4335]/40'
                  : 'bg-white border-black/[0.06]'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  
                  {/* Prompt Text / Context */}
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-semibold text-[#333336]">0{idx + 1}</span>
                    <button
                      onClick={() => handleAudioPlay(q.id, q.prompt)}
                      title="Listen to sentence"
                      className={`p-1 rounded-full text-[#333336] hover:text-[#4285F4] transition-colors cursor-pointer ${
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
                                ? 'bg-[#4285F4] text-white font-medium shadow-[0_1px_3px_rgba(0,113,227,0.3)]'
                                : 'bg-[#F8F9FA] text-[#202124] font-normal hover:bg-black/[0.06]'
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
                              : 'border-black/[0.1] bg-[#F8F9FA] text-[#202124] focus:bg-white focus:ring-2 focus:ring-[#4285F4]'
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
                        <div className="flex items-center gap-1.5 text-sm font-semibold text-[#34A853]">
                          <CheckCircle className="w-4 h-4 text-[#34A853]" />
                          <span>Correct usage.</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1.5 text-sm font-medium text-[#EA4335]">
                          <XCircle className="w-4 h-4 text-[#EA4335]" />
                          <span>Key answer: <strong className="font-semibold text-[#202124]">{primaryCorrectAnswer}</strong></span>
                        </div>
                      )}

                      <button
                        onClick={() => toggleExplanation(q.id)}
                        className="ml-auto text-sm text-[#4285F4] hover:underline flex items-center gap-1 font-medium cursor-pointer"
                      >
                        <Lightbulb className="w-3.5 h-3.5 text-[#FBBC05]" />
                        <span>{isExpanded ? "Hide Rule" : "Why is this right?"}</span>
                        {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                      </button>
                    </div>
                  )}

                  {/* Show Answer Toggle view */}
                  {showAnswers && !isResultChecked && (
                    <div className="mt-2 text-sm font-medium text-[#202124] bg-[#F8F9FA] p-2.5 rounded-xl border border-black/[0.04]">
                      Answer Key: {primaryCorrectAnswer}
                    </div>
                  )}

                  {/* Deep Explanation Panel */}
                  {isExpanded && (
                    <div className="mt-2.5 p-3.5 bg-[#F8F9FA] rounded-xl text-sm text-[#202124] space-y-2 border border-black/[0.04]">
                      <p className="font-normal leading-relaxed">
                        <strong className="font-semibold text-[#202124]">Grammar Rule:</strong> {q.explanation}
                      </p>
                      {languageMode === 'bilingual' && q.explanationBurmese && (
                        <p className="text-[#4285F4] pt-1.5 border-t border-black/[0.05] myanmar-text font-normal">
                          🇲🇲 <strong>မြန်မာဘာသာ ရှင်းလင်းချက်:</strong> {q.explanationBurmese}
                        </p>
                      )}
                      {onAskAI && (
                        <div className="pt-1">
                          <button
                            onClick={() => onAskAI(`Explain why the answer for this sentence is "${primaryCorrectAnswer}": "${q.prompt}"`, q.explanation)}
                            className="inline-flex items-center gap-1 text-xs font-medium text-[#4285F4] hover:underline cursor-pointer"
                          >
                            <Sparkles className="w-3 h-3 text-[#4285F4]" />
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
        {checkedQuestions > 0 && correctTotal === totalQuestions && totalQuestions > 0 && (
          <div className="p-4 bg-[#34A853]/10 border border-[#34A853]/25 rounded-2xl flex items-center gap-3.5 my-2 transition-all">
            <div className="w-10 h-10 bg-[#34A853] rounded-xl flex items-center justify-center text-white flex-shrink-0 google-glow border border-transparent">
              <Check className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <h4 className="text-base font-semibold text-[#202124]">
                Exercise Mastered! (100% Score)
              </h4>
              <p className="text-sm text-[#333336] mt-0.5">
                {languageMode === 'bilingual' 
                  ? 'အဖြေအားလုံး မှန်ကန်စွာ ဖြေဆိုပြီးပါပြီ။ သဒ္ဒါစည်းမျဉ်းကို ကျွမ်းကျင်စွာ နားလည်သွားပါပြီ။'
                  : 'All questions answered accurately. You have mastered these Cambridge Advanced rules!'}
              </p>
            </div>
          </div>
        )}

        <div className="p-4 bg-[#F8F9FA] border border-black/[0.04] rounded-2xl flex items-start gap-2.5 text-sm text-[#333336]">
          <Lightbulb className="w-4 h-4 text-[#FBBC05] flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-[#202124] font-medium">Cambridge Tip:</strong> Advanced English tests subtle nuances in aspect, modal probability, and inversion. Review answer keys and explanations to consolidate your knowledge.
          </p>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-black/[0.05] text-xs text-[#333336]">
          <div>
            <span>Answered: {answeredQuestions} of {totalQuestions}</span>
            {checkedQuestions > 0 && (
              <span className="ml-3 font-semibold text-[#202124] bg-black/[0.04] px-2.5 py-0.5 rounded-full">
                Score: {correctTotal} / {totalQuestions} ({Math.round((correctTotal / totalQuestions) * 100)}%)
              </span>
            )}
          </div>
          <button
            id={`toggle-answers-btn-${exercise.id}`}
            onClick={() => setShowAnswers(!showAnswers)}
            className="text-xs text-[#333336] hover:text-[#202124] underline cursor-pointer"
          >
            {showAnswers ? "Hide Answer Keys" : "Show Answer Keys"}
          </button>
        </div>
      </div>

    </div>
  );
};
