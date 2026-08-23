import React, { useState, useRef } from "react";
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
  Lightbulb,
  ArrowDown,
  Info,
  Check
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
  const [playingAudioIndex, setPlayingAudioIndex] = useState<string | null>(null);
  const exercisesSectionRef = useRef<HTMLDivElement>(null);
  const theorySectionRef = useRef<HTMLDivElement>(null);

  const handlePlayAudio = (id: string, text: string) => {
    setPlayingAudioIndex(id);
    speakText(text, () => setPlayingAudioIndex(null));
  };

  const scrollToExercises = () => {
    exercisesSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTheory = () => {
    theorySectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="unit-main-view" className="flex-1 overflow-y-auto bg-[#F8F9FA] p-4 sm:p-6 lg:p-8 space-y-8 max-w-5xl mx-auto w-full">
      
      {/* Unit Hero Banner */}
      <div className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-100 pb-5">
          <div>
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              <span className="inline-block px-3 py-1 bg-stone-100 text-stone-800 text-xs font-bold rounded-md tracking-wide">
                UNIT {unit.id}
              </span>
              <span className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-slate-100 text-slate-600 uppercase tracking-wide">
                {unit.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-100 text-slate-500">
                {unit.level}
              </span>
              {unit.reminderRefs && unit.reminderRefs.length > 0 && (
                <button
                  onClick={onOpenReminderModal}
                  className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100 transition-colors"
                >
                  Rule Ref: {unit.reminderRefs.join(", ")}
                </button>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
              {unit.title}
            </h1>

            <p className="text-sm text-stone-600 mt-2 leading-relaxed max-w-3xl">
              {unit.summary}
            </p>

            {languageMode === 'bilingual' && (
              <p className="text-sm font-medium text-amber-900 mt-2 leading-relaxed bg-amber-50/70 p-3 rounded-lg border border-amber-200/80">
                🇲🇲 {unit.summaryBurmese}
              </p>
            )}
          </div>

          {/* Top Actions & Bookmark */}
          <div className="flex items-center gap-2.5 self-start md:self-auto flex-wrap">
            <button
              id="unit-bookmark-toggle"
              onClick={onToggleBookmark}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold border transition-all ${
                isBookmarked
                  ? 'bg-amber-50 text-amber-900 border-amber-300'
                  : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500 text-amber-600' : ''}`} />
              <span>{isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
            </button>

            <button
              onClick={() => onAskAI(`Explain key nuances for Unit ${unit.id}: ${unit.title}`, unit.summary)}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-stone-100 text-stone-800 border border-stone-300 hover:bg-stone-200 transition-all"
            >
              <Sparkles className="w-4 h-4 text-stone-600" />
              <span>Ask AI Tutor</span>
            </button>
          </div>
        </div>

        {/* Key Rules Snapshot Box */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-stone-700">
          <div className="bg-stone-50 border-l-4 border-stone-700 p-4 rounded-r-lg space-y-1.5">
            <span className="font-bold text-stone-900 uppercase tracking-wide text-[11px] block">
              Core Principles & Rules (အဓိကစည်းမျဉ်းများ)
            </span>
            <ul className="space-y-1.5 text-stone-700">
              {unit.keyPoints.map((kp, idx) => (
                <li key={idx} className="leading-relaxed flex items-start gap-1.5">
                  <span className="text-stone-600 font-bold">•</span>
                  <span>{kp}</span>
                </li>
              ))}
            </ul>
          </div>

          {languageMode === 'bilingual' && (
            <div className="space-y-1.5 bg-amber-50/60 p-4 rounded-lg border border-amber-200/80">
              <span className="font-bold text-amber-900 uppercase tracking-wide text-[11px] block">
                အဓိကမှတ်သားရန် အကျဉ်းချုပ် (မြန်မာဘာသာ)
              </span>
              <ul className="space-y-1.5 text-amber-950">
                {unit.keyPointsBurmese.map((kp, idx) => (
                  <li key={idx} className="leading-relaxed flex items-start gap-1.5">
                    <span className="text-amber-700 font-bold">•</span>
                    <span>{kp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Quick Jump & Pagination Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-6 pt-4 border-t border-stone-100">
          <div className="flex items-center gap-2">
            <button
              onClick={scrollToTheory}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-100 text-stone-800 hover:bg-stone-200 transition-all border border-stone-200"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>1. Grammar Explanation</span>
            </button>
            <button
              onClick={scrollToExercises}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-stone-800 text-white hover:bg-stone-900 transition-all shadow-xs"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>2. Interactive Practice ({unit.exercises.length})</span>
              <ArrowDown className="w-3 h-3" />
            </button>
          </div>

          {/* Unit Navigation Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={onPrevUnit}
              disabled={!hasPrev}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-stone-200 disabled:opacity-40 hover:bg-stone-50 text-stone-700 transition-colors shadow-2xs"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Prev Unit</span>
            </button>
            <button
              onClick={onNextUnit}
              disabled={!hasNext}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold bg-stone-800 text-white disabled:opacity-40 hover:bg-stone-900 transition-colors shadow-xs"
            >
              <span>Next Unit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* SECTION 1: FULL GRAMMAR EXPLANATIONS (စာအုပ်ပါ သဒ္ဒါရှင်းလင်းချက်များ) */}
      <div ref={theorySectionRef} className="space-y-5">
        
        <div className="flex items-center justify-between border-b border-stone-200 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-md bg-stone-800 text-white flex items-center justify-center text-xs font-bold">
              1
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-stone-900">
                Grammar Explanations (သဒ္ဒါရှင်းလင်းချက်များ)
              </h2>
              <p className="text-xs text-stone-500">
                Detailed Cambridge explanations, authentic examples, and Burmese notes
              </p>
            </div>
          </div>
          <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider hidden sm:inline">
            Unit {unit.id} • Theory
          </span>
        </div>

        {/* Section Cards */}
        <div className="space-y-5">
          {unit.sections.map((sec) => (
            <div
              key={sec.id}
              id={`section-card-${sec.id}`}
              className="bg-white border border-stone-200 rounded-xl p-6 sm:p-7 shadow-xs space-y-4"
            >
              {/* Section Title */}
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-md bg-stone-800 text-white flex items-center justify-center text-xs font-bold">
                  {sec.id}
                </span>
                <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                  {sec.title}
                </h3>
              </div>

              {/* Section Rule English */}
              <p className="text-sm sm:text-base text-stone-800 leading-relaxed font-normal">
                {sec.content}
              </p>

              {/* Burmese Explanation */}
              {languageMode === 'bilingual' && sec.contentBurmese && (
                <div className="p-4 bg-amber-50/80 rounded-lg border border-amber-200/90 text-xs sm:text-sm text-amber-950 leading-relaxed font-medium">
                  🇲🇲 {sec.contentBurmese}
                </div>
              )}

              {/* Authentic Examples with audio */}
              <div className="space-y-2.5 pt-3 border-t border-stone-100">
                <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block">
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
                            ? 'bg-rose-50/60 border-rose-200 text-rose-950'
                            : 'bg-stone-50 border-stone-200 text-stone-800'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <p className="text-xs sm:text-sm font-medium leading-relaxed">
                            {ex.text}
                          </p>
                          <button
                            onClick={() => handlePlayAudio(audioKey, ex.text)}
                            title="Listen to pronunciation"
                            className={`p-1.5 rounded text-stone-400 hover:text-stone-800 hover:bg-stone-200 transition-colors flex-shrink-0 ${
                              playingAudioIndex === audioKey ? 'text-stone-900 animate-pulse' : ''
                            }`}
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </div>

                        {ex.note && (
                          <p className="text-[11px] sm:text-xs text-stone-600 mt-1.5 italic">
                            💬 {ex.note}
                          </p>
                        )}

                        {languageMode === 'bilingual' && ex.burmeseNote && (
                          <p className="text-[11px] sm:text-xs text-amber-900 mt-1 font-medium">
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
                <div className="p-4 bg-stone-100 rounded-lg border border-stone-200 text-xs sm:text-sm text-stone-800 flex items-start gap-2.5">
                  <Info className="w-4 h-4 text-stone-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900 font-semibold">Special Cambridge Note:</strong> {sec.specialNote}
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>
      </div>

      {/* SECTION 2: INTERACTIVE PRACTICE EXERCISES (လေ့ကျင့်ခန်းများ) */}
      <div ref={exercisesSectionRef} className="space-y-5 pt-4">
        
        <div className="flex items-center justify-between border-b border-stone-200 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-md bg-stone-800 text-white flex items-center justify-center text-xs font-bold">
              2
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-stone-900">
                Interactive Practice Exercises (စာအုပ်ပါ လေ့ကျင့်ခန်းများ)
              </h2>
              <p className="text-xs text-stone-500">
                Test your understanding with instant feedback, explanations, and score tracking
              </p>
            </div>
          </div>
          <span className="text-xs font-semibold text-stone-600 bg-stone-100 px-3 py-1 rounded-full border border-stone-200">
            {unit.exercises.length} Exercises
          </span>
        </div>

        {/* Exercises List - Natural Vertical Flow */}
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
      </div>

      {/* Bottom Footer Navigation */}
      <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs flex items-center justify-between gap-4">
        <button
          onClick={onPrevUnit}
          disabled={!hasPrev}
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold bg-stone-50 border border-stone-200 disabled:opacity-30 hover:bg-stone-100 text-stone-700 transition-colors shadow-2xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous Unit</span>
        </button>

        <button
          onClick={scrollToTheory}
          className="text-xs text-stone-500 hover:text-stone-800 font-medium hidden sm:inline"
        >
          ↑ Back to Top of Unit
        </button>

        <button
          onClick={onNextUnit}
          disabled={!hasNext}
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold bg-stone-800 text-white disabled:opacity-30 hover:bg-stone-900 transition-colors shadow-xs"
        >
          <span>Next Unit</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};

