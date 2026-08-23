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
    <header id="app-header" className="sticky top-0 z-40 apple-glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 gap-3">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3 cursor-pointer select-none" onClick={() => onSelectTab('units')}>
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-[#1D1D1F] rounded-xl flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-[0_1px_4px_rgba(0,0,0,0.15)] transition-transform duration-200 active:scale-95">
              G
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-sm sm:text-base font-semibold text-[#1D1D1F] tracking-tight">
                  Advanced Grammar in Use
                </h1>
                <span className="text-sm px-2 py-0.5 rounded-full font-semibold bg-[#E8E8ED] text-[#1D1D1F] tracking-wide">
                  C1 • C2
                </span>
              </div>
              <p className="text-sm text-[#333336] font-normal hidden sm:block">
                Martin Hewings • Cambridge English
              </p>
            </div>
          </div>

          {/* Apple Quick Search */}
          <div className="hidden md:flex items-center flex-1 max-w-xs relative">
            <Search className="w-3.5 h-3.5 text-[#333336] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              id="header-search-input"
              type="text"
              placeholder="Search grammar rules, units..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-8 pr-7 py-1.5 text-sm bg-black/[0.04] text-[#1D1D1F] placeholder-[#86868B] rounded-full focus:outline-none focus:ring-2 focus:ring-[#0071E3] focus:bg-white transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => onSearchChange("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-sm text-[#333336] hover:text-[#1D1D1F]"
              >
                ✕
              </button>
            )}
          </div>

          {/* Course Progress & Nav Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Progress pill */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-black/[0.03] rounded-full border border-black/[0.04]">
              <span className="text-sm font-medium text-[#333336]">
                {completedCount}/{totalUnitsCount} Units
              </span>
              <div className="w-16 h-1.5 bg-black/[0.08] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#0071E3] rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Apple Segmented Controls / Nav */}
            <nav className="flex items-center gap-1">
              
              {/* Units Tab */}
              <button
                id="nav-btn-units"
                onClick={() => onSelectTab('units')}
                className={`apple-btn px-3 py-1.5 text-sm font-medium rounded-full cursor-pointer transition-all ${
                  currentTab === 'units'
                    ? 'apple-btn-blue'
                    : 'text-[#1D1D1F] hover:bg-black/[0.05]'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Units</span>
              </button>

              {/* Study Planner Diagnostic Test */}
              <button
                id="nav-btn-study-planner"
                onClick={() => onSelectTab('study-planner')}
                className={`apple-btn px-3 py-1.5 text-sm font-medium rounded-full cursor-pointer transition-all ${
                  currentTab === 'study-planner'
                    ? 'apple-btn-blue'
                    : 'text-[#1D1D1F] hover:bg-black/[0.05]'
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Planner</span>
              </button>

              {/* AI Grammar Tutor */}
              <button
                id="nav-btn-ai-tutor"
                onClick={() => onSelectTab('ai-tutor')}
                className={`apple-btn px-3 py-1.5 text-sm font-medium rounded-full cursor-pointer transition-all ${
                  currentTab === 'ai-tutor'
                    ? 'apple-btn-blue'
                    : 'text-[#0071E3] bg-[#0071E3]/10 hover:bg-[#0071E3]/15'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span className="hidden md:inline">AI Tutor</span>
              </button>

              {/* Grammar Reminder Quick Card */}
              <button
                id="nav-btn-reminder"
                onClick={onOpenReminderModal}
                title="Open Grammar Reminder Reference (A1-M22)"
                className="apple-btn px-2.5 py-1.5 text-sm font-medium text-[#1D1D1F] bg-black/[0.04] hover:bg-black/[0.08] rounded-full transition-all cursor-pointer"
              >
                <ListOrdered className="w-3.5 h-3.5 text-[#333336]" />
                <span className="hidden xl:inline">A1–M22</span>
              </button>

              {/* Language Toggle EN / မြန်မာ */}
              <button
                id="btn-language-toggle"
                onClick={onToggleLanguage}
                title="Toggle Myanmar (Burmese) Explanations"
                className={`apple-btn px-3 py-1.5 text-sm font-medium rounded-full transition-all cursor-pointer ${
                  languageMode === 'bilingual'
                    ? 'bg-[#1D1D1F] text-white'
                    : 'bg-black/[0.04] text-[#1D1D1F] hover:bg-black/[0.08]'
                }`}
              >
                <Languages className="w-3.5 h-3.5" />
                <span>{languageMode === 'bilingual' ? 'မြန်မာ + EN' : 'EN Only'}</span>
              </button>

            </nav>

          </div>

        </div>
      </div>
    </header>
  );
};
