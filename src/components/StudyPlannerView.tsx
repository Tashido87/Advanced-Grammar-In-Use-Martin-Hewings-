import React, { useState } from "react";
import { StudyPlannerQuestion, LanguageMode } from "../types";
import { 
  GraduationCap, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  ArrowRight, 
  Lightbulb, 
  BookOpen, 
  Sparkles,
  Award,
  AlertCircle
} from "lucide-react";
import confetti from "canvas-confetti";

interface StudyPlannerViewProps {
  questions: StudyPlannerQuestion[];
  languageMode: LanguageMode;
  onNavigateToUnit: (unitId: number) => void;
  onOpenReminderModal: () => void;
}

export const StudyPlannerView: React.FC<StudyPlannerViewProps> = ({
  questions,
  languageMode,
  onNavigateToUnit,
  onOpenReminderModal,
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeSectionFilter, setActiveSectionFilter] = useState<string>("all");
  const [expandedExplanations, setExpandedExplanations] = useState<Record<string, boolean>>({});

  const sectionNames = Array.from(new Set(questions.map(q => q.sectionName)));

  const filteredQuestions = activeSectionFilter === "all"
    ? questions
    : questions.filter(q => q.sectionName === activeSectionFilter);

  const handleSelectOption = (qId: string, optionLabel: string) => {
    if (isSubmitted) return;
    setSelectedAnswers(prev => ({ ...prev, [qId]: optionLabel }));
  };

  const handleSubmitTest = () => {
    setIsSubmitted(true);
    let correctCount = 0;
    questions.forEach(q => {
      const userAns = selectedAnswers[q.id];
      if (userAns && isAnswerMatch(userAns, q.correctAnswer)) {
        correctCount++;
      }
    });

    try {
      if (correctCount / questions.length >= 0.7) {
        confetti({ particleCount: 100, spread: 80, origin: { y: 0.5 } });
      }
    } catch (e) {}
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
    setExpandedExplanations({});
  };

  const toggleExplanation = (qId: string) => {
    setExpandedExplanations(prev => ({ ...prev, [qId]: !prev[qId] }));
  };

  const isAnswerMatch = (userAns: string, correctAns: string | string[]) => {
    if (Array.isArray(correctAns)) {
      return correctAns.includes(userAns);
    }
    if (correctAns.includes(",")) {
      const valid = correctAns.split(",").map(s => s.trim());
      return valid.includes(userAns);
    }
    return userAns === correctAns;
  };

  // Diagnostic calculations
  const totalAnswered = Object.keys(selectedAnswers).length;
  let totalScore = 0;
  const sectionStats: Record<string, { correct: number; total: number; weakUnits: number[] }> = {};

  questions.forEach(q => {
    if (!sectionStats[q.sectionName]) {
      sectionStats[q.sectionName] = { correct: 0, total: 0, weakUnits: [] };
    }
    sectionStats[q.sectionName].total++;
    const userAns = selectedAnswers[q.id];
    const isCorr = userAns && isAnswerMatch(userAns, q.correctAnswer);
    if (isCorr) {
      sectionStats[q.sectionName].correct++;
      totalScore++;
    } else if (isSubmitted) {
      // Parse unit refs to suggest
      const uRefs = q.unitRef.split(",").map(u => parseInt(u.trim(), 10)).filter(n => !isNaN(n));
      uRefs.forEach(u => {
        if (!sectionStats[q.sectionName].weakUnits.includes(u)) {
          sectionStats[q.sectionName].weakUnits.push(u);
        }
      });
    }
  });

  return (
    <div id="study-planner-view" className="flex-1 overflow-y-auto bg-[#F8F9FA] p-4 sm:p-6 lg:p-8 space-y-6">
      
      {/* Header Banner */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-7 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full border border-blue-200">
                DIAGNOSTIC ASSESSMENT
              </span>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Cambridge Advanced Planner
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Study Planner & Diagnostic Test
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
              Use this diagnostic test to pinpoint your exact grammar weaknesses and get targeted unit recommendations.
            </p>
            {languageMode === 'bilingual' && (
              <p className="text-xs sm:text-sm text-blue-900 mt-1.5 font-medium bg-blue-50/70 p-2.5 rounded-lg border border-blue-200/70">
                🇲🇲 မည်သည့် Grammar Unit များကို အဓိက လေ့လာသင့်သည်ကို စစ်ဆေးနိုင်သည့် စာအုပ်ပါ အဆင့်စစ် မေးခွန်းတွဲ ဖြစ်ပါသည်။
              </p>
            )}
          </div>

          {/* Test Action Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-white text-slate-700 hover:bg-slate-50 transition-colors border border-slate-200 shadow-2xs cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Test</span>
            </button>
            <button
              onClick={handleSubmitTest}
              disabled={isSubmitted || totalAnswered === 0}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold bg-blue-600 text-white disabled:opacity-40 hover:bg-blue-700 transition-colors shadow-xs cursor-pointer"
            >
              <Award className="w-4 h-4" />
              <span>{isSubmitted ? "Submitted" : `Submit & Check (${totalAnswered}/${questions.length})`}</span>
            </button>
          </div>
        </div>

        {/* Section Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pt-4 no-scrollbar">
          <button
            onClick={() => setActiveSectionFilter("all")}
            className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              activeSectionFilter === "all"
                ? "bg-blue-600 text-white shadow-2xs"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            All Sections ({questions.length})
          </button>
          {sectionNames.map(name => (
            <button
              key={name}
              onClick={() => setActiveSectionFilter(name)}
              className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                activeSectionFilter === name
                  ? "bg-blue-600 text-white shadow-2xs"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      {/* Submitted Diagnostic Score Overview */}
      {isSubmitted && (
        <div className="bg-white rounded-xl p-6 shadow-xs space-y-4 border border-blue-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-blue-600 font-bold">
                Diagnostic Analysis Report
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                Your Score: {totalScore} / {questions.length} ({Math.round((totalScore / questions.length) * 100)}%)
              </h2>
            </div>
            <button
              onClick={onOpenReminderModal}
              className="px-3.5 py-2 rounded-lg text-xs font-semibold bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 transition-colors shadow-2xs cursor-pointer"
            >
              Open Grammar Reminder (A1–M22)
            </button>
          </div>

          {/* Weak Units Recommendation */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-slate-800 uppercase tracking-wide block">
              Targeted Units to Study Based on Mistakes:
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {Object.entries(sectionStats).map(([sName, stat]) => {
                if (stat.correct === stat.total) return null;
                return (
                  <div key={sName} className="p-4 bg-slate-50 rounded-lg border border-slate-200 text-xs">
                    <div className="flex items-center justify-between font-bold text-slate-900">
                      <span>{sName}</span>
                      <span className="text-green-700 font-bold">{stat.correct}/{stat.total}</span>
                    </div>
                    {stat.weakUnits.length > 0 && (
                      <div className="flex items-center gap-1.5 flex-wrap mt-2.5">
                        <span className="text-slate-500 text-[11px]">Recommended:</span>
                        {stat.weakUnits.map(uId => (
                          <button
                            key={uId}
                            onClick={() => onNavigateToUnit(uId)}
                            className="px-2 py-0.5 rounded bg-blue-600 hover:bg-blue-700 text-white font-bold text-[11px] transition-colors shadow-2xs cursor-pointer"
                          >
                            Unit {uId} →
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Questions Grid */}
      <div className="space-y-4">
        {filteredQuestions.map((q) => {
          const userAns = selectedAnswers[q.id];
          const isCorrect = isSubmitted && userAns && isAnswerMatch(userAns, q.correctAnswer);
          const isWrong = isSubmitted && userAns && !isAnswerMatch(userAns, q.correctAnswer);
          const isUnanswered = isSubmitted && !userAns;
          const isExpanded = expandedExplanations[q.id];

          return (
            <div
              key={q.id}
              id={`planner-q-${q.id}`}
              className={`bg-white border rounded-xl p-5 sm:p-6 shadow-xs transition-all ${
                isCorrect
                  ? 'border-green-300 bg-green-50/50'
                  : isWrong || isUnanswered
                  ? 'border-red-300 bg-red-50/50'
                  : 'border-slate-200'
              }`}
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-md text-xs font-bold bg-slate-100 text-slate-700">
                    #{q.id}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {q.sectionName}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-slate-400">Ref: Unit {q.unitRef}</span>
                  <span className="px-2 py-0.5 bg-blue-50 text-blue-900 border border-blue-200 rounded text-[11px] font-semibold">
                    {q.reminderRef}
                  </span>
                </div>
              </div>

              {/* Prompt */}
              <h3 className="text-sm sm:text-base font-semibold text-slate-900 my-2 leading-relaxed">
                {q.prompt}
              </h3>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-3.5">
                {q.options.map((opt) => {
                  const isSelected = userAns === opt.label;
                  const isThisCorrect = isSubmitted && isAnswerMatch(opt.label, q.correctAnswer);

                  return (
                    <button
                      key={opt.label}
                      id={`planner-opt-${q.id}-${opt.label}`}
                      onClick={() => handleSelectOption(q.id, opt.label)}
                      disabled={isSubmitted}
                      className={`p-3.5 rounded-lg text-left text-xs sm:text-sm font-medium border flex items-center gap-3 transition-all cursor-pointer ${
                        isThisCorrect
                          ? 'bg-green-50 text-green-950 border-green-500 font-bold'
                          : isSelected && isWrong
                          ? 'bg-red-50 text-red-950 border-red-400'
                          : isSelected
                          ? 'bg-blue-50 text-blue-900 border-2 border-blue-600 font-bold'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-blue-400 hover:bg-blue-50/20'
                      }`}
                    >
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                        isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {opt.label}
                      </span>
                      <span className="flex-1">{opt.text}</span>
                    </button>
                  );
                })}
              </div>

              {/* Post-submit Review & Explanation */}
              {isSubmitted && (
                <div className="mt-4 pt-3.5 border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5">
                      {isCorrect ? (
                        <span className="flex items-center gap-1 text-green-700 font-bold">
                          <CheckCircle2 className="w-4 h-4 text-green-600" /> Correct Answer
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-red-600 font-semibold">
                          <XCircle className="w-4 h-4 text-red-500" /> Correct Answer: <strong className="text-slate-900 font-bold">{q.correctAnswer}</strong>
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleExplanation(q.id)}
                        className="text-blue-600 hover:text-blue-800 flex items-center gap-1 font-semibold cursor-pointer"
                      >
                        <Lightbulb className="w-3.5 h-3.5 text-yellow-500" />
                        <span>{isExpanded ? "Hide Rule" : "Explanation"}</span>
                      </button>

                      <button
                        onClick={() => {
                          const firstU = parseInt(q.unitRef.split(",")[0].trim(), 10);
                          if (!isNaN(firstU)) onNavigateToUnit(firstU);
                        }}
                        className="px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold transition-colors border border-blue-200 cursor-pointer"
                      >
                        Study Unit {q.unitRef} →
                      </button>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="mt-3 p-3.5 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-700 space-y-1.5">
                      <p>
                        💡 <strong>Rule:</strong> {q.explanation}
                      </p>
                      {languageMode === 'bilingual' && (
                        <p className="text-blue-950 border-t border-slate-200 pt-1 font-medium">
                          🇲🇲 {q.explanationBurmese}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              )}

            </div>
          );
        })}
      </div>

    </div>
  );
};
