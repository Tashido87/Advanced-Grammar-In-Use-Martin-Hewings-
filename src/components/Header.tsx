import React from "react";
import { AppTab, LanguageMode } from "../types";
import { 
  BookOpen, 
  GraduationCap, 
  Sparkles, 
  Languages, 
  Bookmark, 
  ListOrdered, 
  Search,
  CheckCircle2
} from "lucide-react";

interface HeaderProps {
  currentTab: AppTab;
  onSelectTab: (tab: AppTab) => void;
  languageMode: LanguageMode;
  onToggleLanguage: () => void;
  onOpenReminderModal: () => void;
  completedCount: number;
  totalUnitsCount: number;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  bookmarkedCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  languageMode,
  onToggleLanguage,
  onOpenReminderModal,
  completedCount,
  totalUnitsCount,
  searchQuery,
  onSearchChange,
  bookmarkedCount,
}) => {
  const progressPercent = totalUnitsCount > 0 ? Math.round((completedCount / totalUnitsCount) * 100) : 0;

  return (
    <header id="app-header" className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3 cursor-pointer select-none" onClick={() => onSelectTab('units')}>
            <div className="w-9 h-9 bg-stone-800 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-xs">
              G
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base font-bold text-stone-900 tracking-tight">
                  Advanced Grammar in Use
                </h1>
                <span className="text-[10px] px-2 py-0.5 rounded font-bold bg-stone-100 text-stone-700 border border-stone-300 tracking-wide uppercase">
                  B2 – C2
                </span>
              </div>
              <p className="text-xs text-stone-500 font-medium tracking-wide uppercase hidden sm:block">
                Martin Hewings • Cambridge Edition
              </p>
            </div>
          </div>

          {/* Quick Search */}
          <div className="hidden md:flex items-center flex-1 max-w-xs relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              id="header-search-input"
              type="text"
              placeholder="Search grammar rules, units..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-9 pr-8 py-1.5 text-xs sm:text-sm bg-stone-50 text-stone-800 placeholder-stone-400 border border-stone-200 rounded-lg focus:outline-none focus:border-stone-500 focus:bg-white transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => onSearchChange("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600"
              >
                ✕
              </button>
            )}
          </div>

          {/* Course Progress & Nav Controls */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Progress bar */}
            <div className="hidden lg:flex flex-col items-end pr-2">
              <span className="text-[10px] font-bold text-stone-400 tracking-widest uppercase mb-1">
                COURSE PROGRESS ({completedCount}/{totalUnitsCount})
              </span>
              <div className="w-32 h-2 bg-stone-100 rounded-full overflow-hidden border border-stone-200">
                <div 
                  className="h-full bg-stone-800 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Primary Navigation Buttons */}
            <nav className="flex items-center gap-1.5 sm:gap-2">
              
              {/* Units Tab */}
              <button
                id="nav-btn-units"
                onClick={() => onSelectTab('units')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  currentTab === 'units'
                    ? 'bg-stone-800 text-white shadow-xs'
                    : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span className="hidden sm:inline">Units</span>
              </button>

              {/* Study Planner Diagnostic Test */}
              <button
                id="nav-btn-study-planner"
                onClick={() => onSelectTab('study-planner')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  currentTab === 'study-planner'
                    ? 'bg-stone-800 text-white shadow-xs'
                    : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                <span className="hidden sm:inline">Study Planner</span>
                <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.2 bg-stone-100 text-stone-700 rounded font-bold">
                  Test
                </span>
              </button>

              {/* AI Grammar Tutor */}
              <button
                id="nav-btn-ai-tutor"
                onClick={() => onSelectTab('ai-tutor')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  currentTab === 'ai-tutor'
                    ? 'bg-stone-800 text-white shadow-xs'
                    : 'text-stone-700 bg-stone-100 hover:bg-stone-200 transition-colors'
                }`}
              >
                <Sparkles className="w-4 h-4 text-stone-500" />
                <span className="hidden md:inline">AI Tutor</span>
              </button>

              {/* Grammar Reminder Quick Card */}
              <button
                id="nav-btn-reminder"
                onClick={onOpenReminderModal}
                title="Open Grammar Reminder Reference (A1-M22)"
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-stone-700 bg-white hover:bg-stone-50 border border-stone-200 shadow-2xs transition-all"
              >
                <ListOrdered className="w-3.5 h-3.5 text-stone-600" />
                <span className="hidden xl:inline">A1-M22</span>
              </button>

              {/* Language Toggle EN / မြန်မာ */}
              <button
                id="btn-language-toggle"
                onClick={onToggleLanguage}
                title="Toggle Myanmar (Burmese) Explanations"
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                  languageMode === 'bilingual'
                    ? 'bg-amber-50 text-amber-900 border-amber-300 hover:bg-amber-100'
                    : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
                }`}
              >
                <Languages className="w-3.5 h-3.5 text-amber-700" />
                <span>{languageMode === 'bilingual' ? 'မြန်မာ + EN' : 'EN Only'}</span>
              </button>

            </nav>

          </div>

        </div>
      </div>
    </header>
  );
};
