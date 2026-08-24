import React, { useState } from "react";
import { GrammarUnit, LanguageMode } from "../types";
import { InteractiveExercise } from "./InteractiveExercise";
import { speakText } from "../lib/speech";
import { 
  BookOpen, 
  CheckCircle2, 
  Volume2, 
  Bookmark, 
  Sparkles, 
  ArrowRight,
  ArrowLeft,
  Info,
  Layers,
  FileText,
  Dumbbell
} from "lucide-react";

interface UnitViewProps {
  unit: GrammarUnit;
  onPrevUnit: () => void;
  onNextUnit: () => void;
  hasPrev: boolean;
  hasNext: boolean;
  languageMode: LanguageMode;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
  onUnitCompleted: (unitId: number, score: number, maxScore: number) => void;
  onOpenReminderModal: () => void;
  onAskAI: (question: string, context: string) => void;
}

export type UnitSubTab = "explanation" | "practice";

export const UnitView: React.FC<UnitViewProps> = ({
  unit,
  onPrevUnit,
  onNextUnit,
  hasPrev,
  hasNext,
  languageMode,
  isBookmarked,
  onToggleBookmark,
  onUnitCompleted,
  onOpenReminderModal,
  onAskAI,
}) => {
  const [activeTab, setActiveTab] = useState<UnitSubTab>("explanation");
  const [playingAudioIndex, setPlayingAudioIndex] = useState<string | null>(null);

  const handlePlayAudio = (id: string, text: string) => {
    setPlayingAudioIndex(id);
    speakText(text, () => setPlayingAudioIndex(null));
  };

  return (
    <div id="unit-main-view" className="flex-1 overflow-y-auto bg-[#F8F9FA] p-4 sm:p-6 lg:p-8 space-y-6 max-w-5xl mx-auto w-full">
      
      {/* Apple Unit Hero Card */}
      <div className="apple-card p-6 sm:p-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-black/[0.05] pb-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3 py-1 bg-gradient-to-r from-[#4285F4] to-[#1A73E8] text-white text-xs font-bold rounded-full tracking-wide shadow-xs">
                UNIT {unit.id}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200/60">
                {unit.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                {unit.level}
              </span>
              {unit.reminderRefs && unit.reminderRefs.length > 0 && (
                <button
                  onClick={onOpenReminderModal}
                  className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-sky-50 text-[#1A73E8] hover:bg-sky-100 border border-sky-200/60 transition-colors cursor-pointer"
                >
                  Rule Ref: {unit.reminderRefs.join(", ")}
                </button>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold google-text-gradient tracking-tight">
              {unit.title}
            </h1>

            <p className="text-base sm:text-lg text-[#202124] leading-relaxed">
              {unit.summary}
            </p>

            {languageMode === 'bilingual' && (
              <div className="apple-burmese-box myanmar-text mt-2 text-sm sm:text-base">
                <span className="font-semibold text-[#4285F4] mr-1.5">🇲🇲</span>
                {unit.summaryBurmese}
              </div>
            )}
          </div>

          {/* Top Actions & Bookmark */}
          <div className="flex items-center gap-2 self-start md:self-auto flex-wrap">
            <button
              id="unit-bookmark-toggle"
              onClick={onToggleBookmark}
              className={`apple-btn px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all ${
                isBookmarked
                  ? 'bg-amber-50 text-amber-700 border border-amber-300 shadow-xs'
                  : 'apple-btn-secondary'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-amber-500 text-amber-600' : 'text-[#333336]'}`} />
              <span>{isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
            </button>

            <button
              onClick={() => onAskAI(`Explain key nuances for Unit ${unit.id}: ${unit.title}`, unit.summary)}
              className="apple-btn apple-btn-blue px-4 py-2 text-sm font-medium cursor-pointer google-glow"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ask AI Tutor</span>
            </button>
          </div>
        </div>

        {/* Key Rules Snapshot Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm sm:text-base">
          <div className="bg-gradient-to-br from-blue-50/80 via-sky-50/40 to-slate-50/60 p-5 rounded-2xl space-y-3 border border-blue-100/80 shadow-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#4285F4]" />
              <span className="font-bold text-[#1A73E8] text-sm tracking-tight block">
                Core Principles & Rules
              </span>
            </div>
            <ul className="space-y-2.5 text-[#202124]">
              {unit.keyPoints.map((kp, idx) => (
                <li key={idx} className="leading-relaxed flex items-start gap-2.5">
                  <span className="text-[#4285F4] font-bold mt-0.5">•</span>
                  <span>{kp}</span>
                </li>
              ))}
            </ul>
          </div>

          {languageMode === 'bilingual' && (
            <div className="bg-gradient-to-br from-indigo-50/80 via-purple-50/40 to-slate-50/60 p-5 rounded-2xl space-y-3 border border-indigo-100/80 shadow-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500" />
                <span className="font-bold text-indigo-800 text-sm block myanmar-text tracking-tight">
                  အဓိကမှတ်သားရန် အကျဉ်းချုပ် (မြန်မာ)
                </span>
              </div>
              <ul className="space-y-2.5 text-[#202124] myanmar-text">
                {unit.keyPointsBurmese.map((kp, idx) => (
                  <li key={idx} className="leading-relaxed flex items-start gap-2.5">
                    <span className="text-indigo-600 font-bold mt-0.5">•</span>
                    <span>{kp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Unit Navigation Control Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-black/[0.05]">
          
          {/* Apple Segmented Switcher */}
          <div className="apple-segmented-group w-full sm:w-auto">
            <button
              id="tab-btn-grammar-explanation"
              onClick={() => setActiveTab("explanation")}
              className={`apple-segmented-item flex-1 sm:flex-none flex items-center justify-center gap-1.5 cursor-pointer ${
                activeTab === "explanation" ? 'active' : ''
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Grammar Explanation</span>
              <span className="text-sm px-2 py-0.5 bg-black/[0.05] rounded-full">
                {unit.sections.length}
              </span>
            </button>

            <button
              id="tab-btn-interactive-practice"
              onClick={() => setActiveTab("practice")}
              className={`apple-segmented-item flex-1 sm:flex-none flex items-center justify-center gap-1.5 cursor-pointer ${
                activeTab === "practice" ? 'active' : ''
              }`}
            >
              <Dumbbell className="w-3.5 h-3.5" />
              <span>Interactive Practice</span>
              <span className="text-sm px-2 py-0.5 bg-black/[0.05] rounded-full">
                {unit.exercises.length}
              </span>
            </button>
          </div>

          {/* Unit Pagination Buttons */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={onPrevUnit}
              disabled={!hasPrev}
              className="apple-btn apple-btn-secondary px-3.5 py-1.5 text-sm disabled:opacity-30 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Prev Unit</span>
            </button>
            <button
              onClick={onNextUnit}
              disabled={!hasNext}
              className="apple-btn apple-btn-blue px-3.5 py-1.5 text-sm disabled:opacity-30 cursor-pointer"
            >
              <span>Next Unit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* TAB 1: GRAMMAR EXPLANATIONS ONLY */}
      {activeTab === "explanation" && (
        <div id="tab-content-explanation" className="space-y-5 animate-in fade-in-50 duration-200">
          
          <div className="flex items-center justify-between pb-1">
            <div className="flex items-center gap-2">
              <h2 className="text-base sm:text-lg font-semibold text-[#202124]">
                Grammar Explanations
              </h2>
            </div>
            <span className="text-sm font-medium text-[#333336] hidden sm:inline">
              Unit {unit.id} • {unit.sections.length} Sections
            </span>
          </div>

          {/* Section Cards */}
          <div className="space-y-4">
            {unit.sections.map((sec) => (
              <div
                key={sec.id}
                id={`section-card-${sec.id}`}
                className="apple-card p-6 sm:p-7 space-y-4 border border-slate-200/70"
              >
                {/* Section Title */}
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-xl bg-gradient-to-br from-[#4285F4] to-[#1A73E8] text-white flex items-center justify-center text-xs font-bold shadow-xs">
                    {sec.id}
                  </span>
                  <h3 className="font-bold text-[#202124] text-base sm:text-lg">
                    {sec.title}
                  </h3>
                </div>

                {/* Section Rule English */}
                <p className="text-base text-[#202124] leading-relaxed font-normal">
                  {sec.content}
                </p>

                {/* Burmese Explanation */}
                {languageMode === 'bilingual' && sec.contentBurmese && (
                  <div className="apple-burmese-box myanmar-text text-sm sm:text-base">
                    <span className="font-semibold text-[#4285F4] mr-1.5">🇲🇲</span>
                    {sec.contentBurmese}
                  </div>
                )}

                {/* Authentic Examples with audio */}
                <div className="space-y-2 pt-2 border-t border-black/[0.05]">
                  <span className="text-xs font-bold text-slate-500 tracking-wider uppercase block">
                    Examples & Context
                  </span>
                  <div className="space-y-2.5">
                    {sec.examples.map((ex, exIdx) => {
                      const audioKey = `${sec.id}-${exIdx}`;
                      return (
                        <div
                          key={exIdx}
                          className={`p-3.5 rounded-xl border transition-all ${
                            ex.isWrong
                              ? 'bg-gradient-to-r from-rose-50/90 to-red-50/40 border-rose-200/80 text-rose-950'
                              : 'bg-gradient-to-r from-slate-50/90 via-blue-50/20 to-slate-50 border-slate-200/70 hover:border-blue-200 text-[#202124]'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <p className="text-sm sm:text-base font-medium leading-relaxed text-[#202124]">
                              {ex.text}
                            </p>
                            <button
                              onClick={() => handlePlayAudio(audioKey, ex.text)}
                              title="Listen to pronunciation"
                              className={`p-1.5 rounded-full text-slate-600 bg-white border border-slate-200/60 hover:text-[#4285F4] hover:bg-blue-50 transition-colors flex-shrink-0 cursor-pointer shadow-2xs ${
                                playingAudioIndex === audioKey ? 'text-[#4285F4] animate-pulse bg-[#4285F4]/15 border-[#4285F4]/30' : ''
                              }`}
                            >
                              <Volume2 className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          {ex.note && (
                            <p className="text-xs text-slate-600 mt-1.5 italic">
                              {ex.note}
                            </p>
                          )}

                          {languageMode === 'bilingual' && ex.burmeseNote && (
                            <p className="text-xs text-blue-900 bg-blue-50/80 border border-blue-100/70 p-2 rounded-lg mt-2 myanmar-text font-normal">
                              👉 {ex.burmeseNote}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Special Note */}
                {sec.specialNote && (
                  <div className="p-4 bg-gradient-to-r from-amber-50 via-yellow-50/40 to-orange-50/30 rounded-xl border border-amber-200/80 text-sm text-amber-950 flex items-start gap-3 shadow-2xs">
                    <Info className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-bold text-amber-900">Cambridge Note:</strong> {sec.specialNote}
                    </div>
                  </div>
                )}

              </div>
            ))}
          </div>

          {/* Action to switch to practice */}
          <div className="apple-card bg-gradient-to-r from-blue-50/90 via-indigo-50/40 to-teal-50/30 border border-blue-200/70 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-[#202124] text-base sm:text-lg">
                Ready to practice Unit {unit.id}?
              </h4>
              <p className="text-sm text-slate-600 mt-0.5">
                Apply these grammar rules in {unit.exercises.length} interactive exercises with instant feedback.
              </p>
            </div>
            <button
              onClick={() => {
                setActiveTab("practice");
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="apple-btn apple-btn-blue px-4 py-2 text-sm font-medium cursor-pointer flex-shrink-0"
            >
              <span>Go to Practice ({unit.exercises.length})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      )}

      {/* TAB 2: INTERACTIVE PRACTICE EXERCISES ONLY */}
      {activeTab === "practice" && (
        <div id="tab-content-practice" className="space-y-5 animate-in fade-in-50 duration-200">
          
          <div className="flex items-center justify-between pb-1">
            <div className="flex items-center gap-2">
              <h2 className="text-base sm:text-lg font-semibold text-[#202124]">
                Interactive Exercises
              </h2>
            </div>
            <span className="text-sm font-medium text-[#333336]">
              {unit.exercises.length} Exercises
            </span>
          </div>

          {/* Exercises List */}
          <div className="space-y-5">
            {unit.exercises.map((ex) => (
              <InteractiveExercise
                key={ex.id}
                exercise={ex}
                unitId={unit.id}
                languageMode={languageMode}
                onExerciseComplete={(score, maxScore) => {
                  onUnitCompleted(unit.id, score, maxScore);
                }}
                onAskAI={onAskAI}
              />
            ))}
          </div>

          {/* Back to Explanation button */}
          <div className="apple-card p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => {
                setActiveTab("explanation");
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="apple-btn apple-btn-secondary px-4 py-2 text-sm font-medium cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>← Review Grammar Explanation</span>
            </button>

            <button
              onClick={onNextUnit}
              disabled={!hasNext}
              className="apple-btn apple-btn-blue px-4 py-2 text-sm font-medium disabled:opacity-30 cursor-pointer"
            >
              <span>Next Unit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      )}

      {/* Bottom Footer Navigation */}
      <div className="apple-card p-4 sm:p-5 flex items-center justify-between gap-4">
        <button
          onClick={onPrevUnit}
          disabled={!hasPrev}
          className="apple-btn apple-btn-secondary px-4 py-2 text-sm font-medium disabled:opacity-30 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Previous Unit</span>
        </button>

        <span className="text-sm font-medium text-[#333336] hidden sm:inline">
          Unit {unit.id} of 105 • {unit.category}
        </span>

        <button
          onClick={onNextUnit}
          disabled={!hasNext}
          className="apple-btn apple-btn-blue px-4 py-2 text-sm font-medium disabled:opacity-30 cursor-pointer"
        >
          <span>Next Unit</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};
