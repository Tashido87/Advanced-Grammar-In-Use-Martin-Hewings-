import React, { useState } from "react";
import { GRAMMAR_REMINDER_ITEMS } from "../data/grammarReminders";
import { LanguageMode } from "../types";
import { 
  X, 
  Search, 
  BookOpen, 
  Bookmark, 
  Check, 
  Volume2,
  Tag
} from "lucide-react";
import { speakText } from "../lib/speech";

interface GrammarReminderModalProps {
  isOpen: boolean;
  onClose: () => void;
  languageMode: LanguageMode;
  onNavigateToUnit?: (unitId: number) => void;
}

export const GrammarReminderModal: React.FC<GrammarReminderModalProps> = ({
  isOpen,
  onClose,
  languageMode,
  onNavigateToUnit,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  if (!isOpen) return null;

  const categories = Array.from(new Set(GRAMMAR_REMINDER_ITEMS.map(item => item.category)));

  const filteredItems = GRAMMAR_REMINDER_ITEMS.filter(item => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch = !searchTerm ||
      item.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.rule.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.ruleBurmese.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.relatedUnits.includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  return (
    <div id="grammar-reminder-modal-overlay" className="fixed inset-0 z-50 bg-black/40 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-3xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden border border-black/[0.08]">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200/80 flex items-center justify-between gap-3 bg-gradient-to-r from-blue-50/70 via-indigo-50/40 to-slate-50/60">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-[#4285F4] to-[#1A73E8] text-white shadow-xs">
                A1 – M22 Reference
              </span>
              <h2 className="text-base sm:text-lg font-bold text-[#202124]">
                Grammar Reminder
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Quick core rule reminders referenced in Cambridge units and diagnostic study planner
            </p>
          </div>
          <button
            id="close-reminder-modal-btn"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white hover:bg-slate-100 flex items-center justify-center text-slate-600 border border-slate-200 transition-colors cursor-pointer shadow-2xs"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Filter Bar */}
        <div className="p-3.5 border-b border-slate-200/80 bg-slate-50/90 flex flex-col sm:flex-row items-center gap-2.5">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search reminder code (e.g. A1, C5), rule, topic..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm bg-white border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#4285F4] text-[#202124]"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full sm:w-auto px-3.5 py-2 text-sm bg-white border border-slate-200 rounded-full text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-[#4285F4]"
          >
            <option value="all">All Categories</option>
            {categories.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3.5">
          {filteredItems.length === 0 ? (
            <div className="text-center py-10 text-slate-500 text-sm">
              No grammar reminder cards matched your search.
            </div>
          ) : (
            filteredItems.map((item) => (
              <div key={item.code} className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:border-blue-200 transition-all space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#4285F4] to-[#1A73E8] text-white font-bold text-xs flex items-center justify-center shadow-xs">
                      {item.code}
                    </span>
                    <div>
                      <h4 className="font-bold text-sm text-[#202124]">
                        {item.title}
                      </h4>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs">
                    <span className="text-slate-500 font-medium">Units:</span>
                    <span className="font-bold text-[#1A73E8] bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200/60">
                      {item.relatedUnits}
                    </span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  {item.rule}
                </p>

                {languageMode === 'bilingual' && (
                  <div className="apple-burmese-box myanmar-text text-sm">
                    <span className="font-semibold text-[#4285F4] mr-1.5">🇲🇲</span>
                    {item.ruleBurmese}
                  </div>
                )}

                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-slate-50/90 to-blue-50/30 rounded-xl text-sm text-[#202124] border border-slate-200/70">
                  <span className="font-normal italic text-slate-800">Example: {item.example}</span>
                  <button
                    onClick={() => speakText(item.example)}
                    title="Listen to audio"
                    className="p-1.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-[#4285F4] hover:bg-blue-50 transition-colors cursor-pointer shadow-2xs"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3.5 bg-slate-50 border-t border-slate-200/80 flex justify-end">
          <button
            onClick={onClose}
            className="apple-btn apple-btn-secondary px-5 py-1.5 text-sm font-medium cursor-pointer shadow-2xs"
          >
            Close Reference
          </button>
        </div>

      </div>
    </div>
  );
};
