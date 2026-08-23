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
    <div id="study-planner-view" className="flex-1 overflow-y-auto bg-[#F8F9FA] p-4 sm:p-6 lg:p-8 space-y-6 max-w-5xl mx-auto w-full">
      
      {/* Header Banner */}
      <div className="apple-card p-6 sm:p-7 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-black/[0.05] pb-5">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block px-2.5 py-0.5 bg-black/[0.04] text-[#202124] text-sm font-semibold rounded-full">
                DIAGNOSTIC ASSESSMENT
              </span>
              <span className="text-sm font-medium text-[#333336]">
                Cambridge Advanced Planner
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold google-text-gradient tracking-tight">
              Study Planner & Diagnostic Test
            </h1>
            <p className="text-sm sm:text-base text-[#333336] mt-1.5 leading-relaxed">
              Use this diagnostic test to pinpoint your exact grammar weaknesses and get targeted unit recommendations.
            </p>
            {languageMode === 'bilingual' && (
              <div className="apple-burmese-box myanmar-text text-sm mt-2">
                <span className="font-semibold text-[#4285F4] mr-1">🇲🇲</span>
                မည်သည့် Grammar Unit များကို အဓိက လေ့လာသင့်သည်ကို စစ်ဆေးနိုင်သည့် စာအုပ်ပါ အဆင့်စစ် မေးခွန်းတွဲ ဖြစ်ပါသည်။
              </div>
            )}
          </div>

          {/* Test Action Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              className="apple-btn apple-btn-secondary px-3.5 py-1.5 text-sm font-medium cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Test</span>
            </button>
            <button
              onClick={handleSubmitTest}
              disabled={isSubmitted || totalAnswered === 0}
              className="apple-btn apple-btn-blue px-4 py-1.5 text-sm font-medium disabled:opacity-30 cursor-pointer"
            >
              <Award className="w-3.5 h-3.5" />
              <span>{isSubmitted ? "Submitted" : `Submit (${totalAnswered}/${questions.length})`}</span>
            </button>
          </div>
        </div>

        {/* Section Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pt-1 no-scrollbar">
          <button
            onClick={() => setActiveSectionFilter("all")}
            className={`apple-btn text-sm rounded-full px-3 py-1 font-medium whitespace-nowrap cursor-pointer ${
              activeSectionFilter === "all"
                ? "apple-btn-blue"
                : "apple-btn-secondary"
            }`}
          >
            All Sections ({questions.length})
          </button>
          {sectionNames.map(name => (
            <button
              key={name}
              onClick={() => setActiveSectionFilter(name)}
              className={`apple-btn text-sm rounded-full px-3 py-1 font-medium whitespace-nowrap cursor-pointer ${
                activeSectionFilter === name
                  ? "apple-btn-blue"
                  : "apple-btn-secondary"
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      {/* Submitted Diagnostic Score Overview */}
      {isSubmitted && (
        <div className="apple-card p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-black/[0.05] pb-4">
            <div>
              <span className="text-sm uppercase tracking-wider text-[#4285F4] font-semibold">
                Diagnostic Analysis Report
              </span>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#202124] mt-1">
                Your Score: {totalScore} / {questions.length} ({Math.round((totalScore / questions.length) * 100)}%)
              </h2>
            </div>
            <button
              onClick={onOpenReminderModal}
              className="apple-btn apple-btn-secondary px-3.5 py-1.5 text-sm font-medium cursor-pointer"
            >
              Open Grammar Reminder (A1–M22)
            </button>
          </div>

          {/* Weak Units Recommendation */}
          <div className="space-y-3">
            <span className="text-sm font-semibold text-[#202124] block">
              Targeted Units to Study Based on Mistakes:
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {Object.entries(sectionStats).map(([sName, stat]) => {
                if (stat.correct === stat.total) return null;
                return (
                  <div key={sName} className="p-4 bg-[#F8F9FA] rounded-2xl border border-black/[0.04] text-sm space-y-2">
                    <div className="flex items-center justify-between font-semibold text-[#202124]">
                      <span>{sName}</span>
                      <span className="text-[#34A853] font-medium">{stat.correct}/{stat.total}</span>
                    </div>
                    {stat.weakUnits.length > 0 && (
                      <div className="flex items-center gap-1.5 flex-wrap pt-1">
                        <span className="text-[#333336] text-sm">Recommended:</span>
                        {stat.weakUnits.map(uId => (
                          <button
                            key={uId}
                            onClick={() => onNavigateToUnit(uId)}
                            className="apple-btn apple-btn-blue px-2 py-0.5 rounded-full text-sm font-medium cursor-pointer"
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
      <div className="space-y-3.5">
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
              className={`apple-card p-5 sm:p-6 transition-all ${
                isCorrect
                  ? 'border-[#34A853]/40 bg-[#34A853]/5'
                  : isWrong || isUnanswered
                  ? 'border-[#EA4335]/40 bg-[#EA4335]/5'
                  : ''
              }`}
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-full text-sm font-semibold bg-black/[0.04] text-[#202124]">
                    #{q.id}
                  </span>
                  <span className="text-sm text-[#333336] font-medium">
                    {q.sectionName}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-[#333336]">Ref: Unit {q.unitRef}</span>
                  <span className="px-2.5 py-0.5 bg-[#4285F4]/10 text-[#4285F4] rounded-full text-sm font-medium">
                    {q.reminderRef}
                  </span>
                </div>
              </div>

              {/* Prompt */}
              <h3 className="text-sm sm:text-base font-medium text-[#202124] my-2 leading-relaxed">
                {q.prompt}
              </h3>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
                {q.options.map((opt) => {
                  const isSelected = userAns === opt.label;
                  const isThisCorrect = isSubmitted && isAnswerMatch(opt.label, q.correctAnswer);

                  return (
                    <button
                      key={opt.label}
                      id={`planner-opt-${q.id}-${opt.label}`}
                      onClick={() => handleSelectOption(q.id, opt.label)}
                      disabled={isSubmitted}
                      className={`p-3 rounded-xl text-left text-sm sm:text-base font-medium flex items-center gap-2.5 transition-all cursor-pointer ${
                        isThisCorrect
                          ? 'bg-[#34A853] text-white font-semibold'
                          : isSelected && isWrong
                          ? 'bg-[#EA4335] text-white'
                          : isSelected
                          ? 'bg-[#4285F4] text-white'
                          : 'bg-[#F8F9FA] text-[#202124] hover:bg-black/[0.06]'
                      }`}
                    >
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-sm font-semibold ${
                        isSelected || isThisCorrect ? 'bg-white/20 text-white' : 'bg-black/[0.06] text-[#202124]'
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
                <div className="mt-3.5 pt-3 border-t border-black/[0.05]">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1.5">
                      {isCorrect ? (
                        <span className="flex items-center gap-1 text-[#34A853] font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#34A853]" /> Correct Answer
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-[#EA4335] font-medium">
                          <XCircle className="w-3.5 h-3.5 text-[#EA4335]" /> Correct Answer: <strong className="text-[#202124] font-semibold">{q.correctAnswer}</strong>
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleExplanation(q.id)}
                        className="text-[#4285F4] hover:underline flex items-center gap-1 font-medium cursor-pointer"
                      >
                        <Lightbulb className="w-3.5 h-3.5 text-[#FBBC05]" />
                        <span>{isExpanded ? "Hide Rule" : "Explanation"}</span>
                      </button>

                      <button
                        onClick={() => {
                          const firstU = parseInt(q.unitRef.split(",")[0].trim(), 10);
                          if (!isNaN(firstU)) onNavigateToUnit(firstU);
                        }}
                        className="apple-btn apple-btn-secondary px-2.5 py-1 text-sm font-medium cursor-pointer"
                      >
                        Study Unit {q.unitRef} →
                      </button>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="mt-2.5 p-3.5 bg-[#F8F9FA] rounded-xl text-sm text-[#202124] space-y-1.5 border border-black/[0.04]">
                      <p className="leading-relaxed">
                        <strong className="font-semibold text-[#202124]">Rule:</strong> {q.explanation}
                      </p>
                      {languageMode === 'bilingual' && (
                        <p className="text-[#4285F4] border-t border-black/[0.05] pt-1.5 myanmar-text font-normal">
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
