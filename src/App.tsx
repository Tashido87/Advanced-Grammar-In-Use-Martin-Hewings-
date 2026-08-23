import React, { useState, useEffect } from "react";
import { AppTab, LanguageMode, GrammarUnit } from "./types";
import { CATEGORIES } from "./data/categoriesData";
import { UNITS_DATA } from "./data/unitsData";
import { STUDY_PLANNER_QUESTIONS } from "./data/studyPlannerData";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { UnitView } from "./components/UnitView";
import { StudyPlannerView } from "./components/StudyPlannerView";
import { GrammarReminderModal } from "./components/GrammarReminderModal";
import { GrammarTutorAI } from "./components/GrammarTutorAI";
import { IrregularVerbsView } from "./components/IrregularVerbsView";
import { GlossaryView } from "./components/GlossaryView";
import { 
  BookOpen, 
  GraduationCap, 
  Sparkles, 
  Table, 
  HelpCircle, 
  CheckCircle2, 
  Bookmark,
  Layers,
  Menu,
  X
} from "lucide-react";

export default function App() {
  const [currentTab, setCurrentTab] = useState<AppTab>("units");
  const [selectedUnitId, setSelectedUnitId] = useState<number>(1);
  const [languageMode, setLanguageMode] = useState<LanguageMode>("bilingual");
  const [isReminderModalOpen, setIsReminderModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState<string | null>(null);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // AI Tutor initial payload
  const [aiTutorContext, setAiTutorContext] = useState({ question: "", context: "" });

  // Persistence for user progress
  const [completedUnits, setCompletedUnits] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem("ag_completed_units");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [bookmarkedUnits, setBookmarkedUnits] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem("ag_bookmarked_units");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    document.title = "Advanced Grammar in Use";
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("ag_completed_units", JSON.stringify(completedUnits));
    } catch {}
  }, [completedUnits]);

  useEffect(() => {
    try {
      localStorage.setItem("ag_bookmarked_units", JSON.stringify(bookmarkedUnits));
    } catch {}
  }, [bookmarkedUnits]);

  const currentUnit = UNITS_DATA.find(u => u.id === selectedUnitId) || UNITS_DATA[0];
  const currentIndex = UNITS_DATA.findIndex(u => u.id === selectedUnitId);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < UNITS_DATA.length - 1;

  const handlePrevUnit = () => {
    if (hasPrev) setSelectedUnitId(UNITS_DATA[currentIndex - 1].id);
  };

  const handleNextUnit = () => {
    if (hasNext) setSelectedUnitId(UNITS_DATA[currentIndex + 1].id);
  };

  const handleToggleBookmark = (unitId: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setBookmarkedUnits(prev => 
      prev.includes(unitId) ? prev.filter(id => id !== unitId) : [...prev, unitId]
    );
  };

  const handleUnitCompleted = (unitId: number, score: number, maxScore: number) => {
    if (score / maxScore >= 0.7) {
      if (!completedUnits.includes(unitId)) {
        setCompletedUnits(prev => [...prev, unitId]);
      }
    }
  };

  const handleAskAI = (question: string, context: string) => {
    setAiTutorContext({ question, context });
    setCurrentTab("ai-tutor");
  };

  const handleNavigateToUnit = (unitId: number) => {
    setSelectedUnitId(unitId);
    setCurrentTab("units");
    setIsMobileSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col text-[#202124] font-sans selection:bg-[#4285F4] selection:text-white">
      
      {/* Top Main Navigation Header */}
      <Header
        currentTab={currentTab}
        onSelectTab={(tab) => {
          setCurrentTab(tab);
          setIsMobileSidebarOpen(false);
        }}
        languageMode={languageMode}
        onToggleLanguage={() => setLanguageMode(prev => prev === 'bilingual' ? 'en' : 'bilingual')}
        onOpenReminderModal={() => setIsReminderModalOpen(true)}
        completedCount={completedUnits.length}
        totalUnitsCount={UNITS_DATA.length}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        bookmarkedCount={bookmarkedUnits.length}
      />

      {/* Apple Inset Segmented Sub-nav Bar */}
      <div className="bg-[#F8F9FA] border-b border-black/[0.05] px-4 sm:px-6 py-2 flex items-center justify-between text-xs overflow-x-auto">
        <div className="flex items-center gap-1.5 min-w-max">
          
          {/* Mobile Sidebar toggle button */}
          {currentTab === 'units' && (
            <button
              onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
              className="md:hidden flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-black/[0.05] text-[#202124] font-medium hover:bg-black/[0.08] transition-colors cursor-pointer"
            >
              {isMobileSidebarOpen ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
              <span>Units List</span>
            </button>
          )}

          <div className="apple-segmented-group">
            <button
              onClick={() => setCurrentTab('units')}
              className={`apple-segmented-item flex items-center gap-1.5 cursor-pointer ${
                currentTab === 'units' ? 'active' : ''
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Units 1–105</span>
            </button>

            <button
              onClick={() => setCurrentTab('study-planner')}
              className={`apple-segmented-item flex items-center gap-1.5 cursor-pointer ${
                currentTab === 'study-planner' ? 'active' : ''
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Diagnostic Test</span>
            </button>

            <button
              onClick={() => setCurrentTab('irregular-verbs')}
              className={`apple-segmented-item flex items-center gap-1.5 cursor-pointer ${
                currentTab === 'irregular-verbs' ? 'active' : ''
              }`}
            >
              <Table className="w-3.5 h-3.5" />
              <span>Irregular Verbs</span>
            </button>

            <button
              onClick={() => setCurrentTab('glossary')}
              className={`apple-segmented-item flex items-center gap-1.5 cursor-pointer ${
                currentTab === 'glossary' ? 'active' : ''
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Glossary</span>
            </button>

            <button
              onClick={() => setCurrentTab('ai-tutor')}
              className={`apple-segmented-item flex items-center gap-1.5 cursor-pointer ${
                currentTab === 'ai-tutor' ? 'active' : ''
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#4285F4]" />
              <span>AI Explainer</span>
            </button>
          </div>
        </div>

        {/* Status Indicators */}
        <div className="hidden sm:flex items-center gap-3 text-[#6E6E73] font-medium flex-shrink-0 pl-4">
          <span className="flex items-center gap-1 text-[11px]">
            <Bookmark className="w-3 h-3 text-[#FBBC05] fill-[#FBBC05]/30" />
            {bookmarkedUnits.length} Bookmarked
          </span>
          <span className="flex items-center gap-1 text-[11px] text-[#202124] font-semibold">
            <CheckCircle2 className="w-3 h-3 text-[#34A853]" />
            {completedUnits.length} Mastered
          </span>
        </div>
      </div>

      {/* Main Layout Area */}
      <div className="flex-1 flex overflow-hidden relative">
        
        {/* Units View with Sidebar */}
        {currentTab === "units" && (
          <>
            {/* Desktop Sidebar */}
            <div className="hidden md:block">
              <Sidebar
                categories={CATEGORIES}
                units={UNITS_DATA}
                selectedUnitId={selectedUnitId}
                onSelectUnit={(id) => {
                  setSelectedUnitId(id);
                  setIsMobileSidebarOpen(false);
                }}
                completedUnits={completedUnits}
                bookmarkedUnits={bookmarkedUnits}
                onToggleBookmark={handleToggleBookmark}
                filterCategory={filterCategory}
                onSelectCategory={setFilterCategory}
                searchQuery={searchQuery}
                languageMode={languageMode}
              />
            </div>

            {/* Mobile Drawer Sidebar */}
            {isMobileSidebarOpen && (
              <div className="md:hidden fixed inset-0 z-30 bg-slate-900/40 backdrop-blur-xs flex">
                <div className="w-4/5 max-w-sm bg-white h-full shadow-2xl flex flex-col">
                  <div className="p-3.5 border-b border-slate-200 flex items-center justify-between">
                    <span className="font-bold text-sm text-slate-900">Unit Chapters</span>
                    <button 
                      onClick={() => setIsMobileSidebarOpen(false)}
                      className="p-1 text-slate-400 hover:text-slate-600"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <Sidebar
                    categories={CATEGORIES}
                    units={UNITS_DATA}
                    selectedUnitId={selectedUnitId}
                    onSelectUnit={(id) => {
                      setSelectedUnitId(id);
                      setIsMobileSidebarOpen(false);
                    }}
                    completedUnits={completedUnits}
                    bookmarkedUnits={bookmarkedUnits}
                    onToggleBookmark={handleToggleBookmark}
                    filterCategory={filterCategory}
                    onSelectCategory={setFilterCategory}
                    searchQuery={searchQuery}
                    languageMode={languageMode}
                  />
                </div>
              </div>
            )}

            {/* Unit Center Content */}
            <UnitView
              unit={currentUnit}
              onPrevUnit={handlePrevUnit}
              onNextUnit={handleNextUnit}
              hasPrev={hasPrev}
              hasNext={hasNext}
              languageMode={languageMode}
              isBookmarked={bookmarkedUnits.includes(currentUnit.id)}
              onToggleBookmark={() => handleToggleBookmark(currentUnit.id)}
              onUnitCompleted={handleUnitCompleted}
              onOpenReminderModal={() => setIsReminderModalOpen(true)}
              onAskAI={handleAskAI}
            />
          </>
        )}

        {/* Study Planner Tab */}
        {currentTab === "study-planner" && (
          <StudyPlannerView
            questions={STUDY_PLANNER_QUESTIONS}
            languageMode={languageMode}
            onNavigateToUnit={handleNavigateToUnit}
            onOpenReminderModal={() => setIsReminderModalOpen(true)}
          />
        )}

        {/* Irregular Verbs Tab */}
        {currentTab === "irregular-verbs" && (
          <IrregularVerbsView
            languageMode={languageMode}
          />
        )}

        {/* Glossary Tab */}
        {currentTab === "glossary" && (
          <GlossaryView
            languageMode={languageMode}
            onNavigateToUnit={handleNavigateToUnit}
          />
        )}

        {/* AI Tutor Tab */}
        {currentTab === "ai-tutor" && (
          <GrammarTutorAI
            languageMode={languageMode}
            initialQuestion={aiTutorContext.question}
            initialContext={aiTutorContext.context}
          />
        )}

      </div>

      {/* Grammar Reminder Modal (A1-M22) */}
      <GrammarReminderModal
        isOpen={isReminderModalOpen}
        onClose={() => setIsReminderModalOpen(false)}
        languageMode={languageMode}
        onNavigateToUnit={handleNavigateToUnit}
      />

    </div>
  );
}
