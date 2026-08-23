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
      
      {/* Unit Hero Card */}
      <div className="bg-white border border-slate-200/90 rounded-xl p-6 sm:p-7 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div>
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              <span className="inline-block px-3 py-1 bg-slate-100 text-slate-800 text-xs font-bold rounded-md tracking-wide">
                UNIT {unit.id}
              </span>
              <span className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200/70 uppercase tracking-wide">
                {unit.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-100 text-slate-600">
                {unit.level}
              </span>
              {unit.reminderRefs && unit.reminderRefs.length > 0 && (
                <button
                  onClick={onOpenReminderModal}
                  className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-blue-50 text-blue-900 border border-blue-200 hover:bg-blue-100 transition-colors cursor-pointer"
                >
                  Rule Ref: {unit.reminderRefs.join(", ")}
                </button>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {unit.title}
            </h1>

            <p className="text-sm text-slate-600 mt-2 leading-relaxed max-w-3xl">
              {unit.summary}
            </p>

            {languageMode === 'bilingual' && (
              <p className="text-sm font-medium text-blue-950 mt-2.5 leading-relaxed bg-blue-50/70 p-3 rounded-lg border border-blue-200/80">
                🇲🇲 {unit.summaryBurmese}
              </p>
            )}
          </div>

          {/* Top Actions & Bookmark */}
          <div className="flex items-center gap-2.5 self-start md:self-auto flex-wrap">
            <button
              id="unit-bookmark-toggle"
              onClick={onToggleBookmark}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                isBookmarked
                  ? 'bg-amber-50 text-amber-900 border-amber-300 shadow-2xs'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500 text-amber-500' : ''}`} />
              <span>{isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
            </button>

            <button
              onClick={() => onAskAI(`Explain key nuances for Unit ${unit.id}: ${unit.title}`, unit.summary)}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200 hover:bg-blue-100 transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>Ask AI Tutor</span>
            </button>
          </div>
        </div>

        {/* Key Rules Snapshot Box */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-700">
          <div className="bg-slate-50 border-l-4 border-blue-600 p-4 rounded-r-lg space-y-1.5">
            <span className="font-bold text-slate-900 uppercase tracking-wide text-[11px] block">
              Core Principles & Rules (အဓိကစည်းမျဉ်းများ)
            </span>
            <ul className="space-y-1.5 text-slate-700">
              {unit.keyPoints.map((kp, idx) => (
                <li key={idx} className="leading-relaxed flex items-start gap-1.5">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>{kp}</span>
                </li>
              ))}
            </ul>
          </div>

          {languageMode === 'bilingual' && (
            <div className="space-y-1.5 bg-blue-50/50 p-4 rounded-lg border border-blue-200/70">
              <span className="font-bold text-blue-900 uppercase tracking-wide text-[11px] block">
                အဓိကမှတ်သားရန် အကျဉ်းချုပ် (မြန်မာဘာသာ)
              </span>
              <ul className="space-y-1.5 text-blue-950">
                {unit.keyPointsBurmese.map((kp, idx) => (
                  <li key={idx} className="leading-relaxed flex items-start gap-1.5">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>{kp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Unit Navigation Control Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-6 pt-4 border-t border-slate-100">
          
          {/* Main Separate Tabs Switcher */}
          <div className="flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200 w-full sm:w-auto">
            <button
              id="tab-btn-grammar-explanation"
              onClick={() => setActiveTab("explanation")}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "explanation"
                  ? 'bg-white text-blue-900 shadow-xs font-bold border border-blue-200'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              <BookOpen className={`w-4 h-4 ${activeTab === "explanation" ? 'text-blue-600' : 'text-slate-500'}`} />
              <span>Grammar Explanation</span>
              <span className={`text-[11px] px-1.5 py-0.2 rounded font-semibold ${
                activeTab === "explanation" 
                  ? 'bg-blue-100 text-blue-800' 
                  : 'bg-slate-200 text-slate-600'
              }`}>
                {unit.sections.length} Secs
              </span>
            </button>

            <button
              id="tab-btn-interactive-practice"
              onClick={() => setActiveTab("practice")}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "practice"
                  ? 'bg-white text-blue-900 shadow-xs font-bold border border-blue-200'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              <Dumbbell className={`w-4 h-4 ${activeTab === "practice" ? 'text-blue-600' : 'text-slate-500'}`} />
              <span>Interactive Practice</span>
              <span className={`text-[11px] px-1.5 py-0.2 rounded font-semibold ${
                activeTab === "practice" 
                  ? 'bg-blue-100 text-blue-800' 
                  : 'bg-slate-200 text-slate-600'
              }`}>
                {unit.exercises.length} Exs
              </span>
            </button>
          </div>

          {/* Unit Pagination Buttons */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={onPrevUnit}
              disabled={!hasPrev}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-slate-200 disabled:opacity-40 hover:bg-slate-50 text-slate-700 transition-colors shadow-2xs cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Prev Unit</span>
            </button>
            <button
              onClick={onNextUnit}
              disabled={!hasNext}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 text-white disabled:opacity-40 hover:bg-blue-700 transition-colors shadow-xs cursor-pointer"
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
          
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-md bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Grammar Explanations (သဒ္ဒါရှင်းလင်းချက်များ)
                </h2>
                <p className="text-xs text-slate-500">
                  Detailed Cambridge explanations, authentic examples with audio, and Burmese notes
                </p>
              </div>
            </div>
            <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 hidden sm:inline">
              Unit {unit.id} • {unit.sections.length} Sections
            </span>
          </div>

          {/* Section Cards */}
          <div className="space-y-5">
            {unit.sections.map((sec) => (
              <div
                key={sec.id}
                id={`section-card-${sec.id}`}
                className="bg-white border border-slate-200 rounded-xl p-6 sm:p-7 shadow-xs space-y-4"
              >
                {/* Section Title */}
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-md bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
                    {sec.id}
                  </span>
                  <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                    {sec.title}
                  </h3>
                </div>

                {/* Section Rule English */}
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
                  {sec.content}
                </p>

                {/* Burmese Explanation */}
                {languageMode === 'bilingual' && sec.contentBurmese && (
                  <div className="p-4 bg-blue-50/70 rounded-lg border border-blue-200/90 text-xs sm:text-sm text-blue-950 leading-relaxed font-medium">
                    🇲🇲 {sec.contentBurmese}
                  </div>
                )}

                {/* Authentic Examples with audio */}
                <div className="space-y-2.5 pt-3 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                    Authentic Examples & Context (စာအုပ်ပါ နမူနာဝါကျများ)
                  </span>
                  <div className="space-y-2">
                    {sec.examples.map((ex, exIdx) => {
                      const audioKey = `${sec.id}-${exIdx}`;
                      return (
                        <div
                          key={exIdx}
                          className={`p-3.5 rounded-lg border transition-colors ${
                            ex.isWrong
                              ? 'bg-red-50/80 border-red-200 text-red-950'
                              : 'bg-slate-50/90 border-slate-200 text-slate-800'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <p className="text-xs sm:text-sm font-medium leading-relaxed">
                              {ex.text}
                            </p>
                            <button
                              onClick={() => handlePlayAudio(audioKey, ex.text)}
                              title="Listen to pronunciation"
                              className={`p-1.5 rounded text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors flex-shrink-0 cursor-pointer ${
                                playingAudioIndex === audioKey ? 'text-blue-600 animate-pulse bg-blue-100' : ''
                              }`}
                            >
                              <Volume2 className="w-4 h-4" />
                            </button>
                          </div>

                          {ex.note && (
                            <p className="text-[11px] sm:text-xs text-slate-600 mt-1.5 italic">
                              💬 {ex.note}
                            </p>
                          )}

                          {languageMode === 'bilingual' && ex.burmeseNote && (
                            <p className="text-[11px] sm:text-xs text-blue-900 mt-1 font-medium">
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
                  <div className="p-4 bg-amber-50/70 rounded-lg border border-amber-200/90 text-xs sm:text-sm text-amber-950 flex items-start gap-2.5">
                    <Info className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-amber-900 font-semibold">Special Cambridge Note:</strong> {sec.specialNote}
                    </div>
                  </div>
                )}

              </div>
            ))}
          </div>

          {/* Action to switch to practice */}
          <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-blue-950 text-sm sm:text-base">
                Ready to practice Unit {unit.id}?
              </h4>
              <p className="text-xs text-blue-800 mt-0.5">
                Apply these grammar rules in {unit.exercises.length} interactive exercises with instant feedback.
              </p>
            </div>
            <button
              onClick={() => {
                setActiveTab("practice");
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-xs cursor-pointer flex-shrink-0"
            >
              <span>Go to Interactive Practice ({unit.exercises.length})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}

      {/* TAB 2: INTERACTIVE PRACTICE EXERCISES ONLY */}
      {activeTab === "practice" && (
        <div id="tab-content-practice" className="space-y-5 animate-in fade-in-50 duration-200">
          
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-md bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
                <Dumbbell className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Interactive Practice Exercises (စာအုပ်ပါ လေ့ကျင့်ခန်းများ)
                </h2>
                <p className="text-xs text-slate-500">
                  Test your understanding with instant feedback, explanations, and score tracking
                </p>
              </div>
            </div>
            <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              {unit.exercises.length} Exercises
            </span>
          </div>

          {/* Exercises List */}
          <div className="space-y-6">
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
          <div className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => {
                setActiveTab("explanation");
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors border border-slate-200 cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span>← Review Grammar Explanation</span>
            </button>

            <button
              onClick={onNextUnit}
              disabled={!hasNext}
              className="flex items-center gap-2 px-5 py-2 rounded-lg text-xs sm:text-sm font-bold bg-blue-600 text-white disabled:opacity-30 hover:bg-blue-700 transition-colors shadow-xs cursor-pointer"
            >
              <span>Next Unit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}

      {/* Bottom Footer Navigation */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs flex items-center justify-between gap-4">
        <button
          onClick={onPrevUnit}
          disabled={!hasPrev}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold bg-slate-50 border border-slate-200 disabled:opacity-30 hover:bg-slate-100 text-slate-700 transition-colors shadow-2xs cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous Unit</span>
        </button>

        <span className="text-xs font-medium text-slate-400 hidden sm:inline">
          Unit {unit.id} of 105 • {unit.category}
        </span>

        <button
          onClick={onNextUnit}
          disabled={!hasNext}
          className="flex items-center gap-2 px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold bg-blue-600 text-white disabled:opacity-30 hover:bg-blue-700 transition-colors shadow-xs cursor-pointer"
        >
          <span>Next Unit</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
