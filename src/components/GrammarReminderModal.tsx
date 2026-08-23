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
    <div id="grammar-reminder-modal-overlay" className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white border border-slate-200 rounded-xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between gap-3 bg-white">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
                A1 – M22 Reference
              </span>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Grammar Reminder
              </h2>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Quick core rule reminders referenced in Cambridge units and diagnostic study planner
            </p>
          </div>
          <button
            id="close-reminder-modal-btn"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Bar */}
        <div className="p-3 border-b border-slate-100 bg-slate-50 flex flex-col sm:flex-row items-center gap-2.5">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search reminder code (e.g. A1, C5), rule, topic..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 text-xs sm:text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-indigo-600 text-slate-800"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full sm:w-auto px-3 py-1.5 text-xs bg-white border border-slate-300 rounded-lg text-slate-700 focus:outline-none focus:border-indigo-600"
          >
            <option value="all">All Categories</option>
            {categories.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3.5 divide-y divide-slate-100">
          {filteredItems.length === 0 ? (
            <div className="text-center py-10 text-slate-400 text-sm">
              No grammar reminder cards matched your search.
            </div>
          ) : (
            filteredItems.map((item) => (
              <div key={item.code} className="pt-3.5 first:pt-0 space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white font-bold text-xs flex items-center justify-center shadow-2xs">
                      {item.code}
                    </span>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">
                        {item.title}
                      </h4>
                      <span className="text-[11px] font-medium text-slate-400">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs">
                    <span className="text-slate-400">Units:</span>
                    <span className="font-semibold text-indigo-700">
                      {item.relatedUnits}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {item.rule}
                </p>

                {languageMode === 'bilingual' && (
                  <p className="text-xs text-amber-900 bg-amber-50 p-2.5 rounded-lg border border-amber-200/80 font-medium leading-relaxed">
                    🇲🇲 {item.ruleBurmese}
                  </p>
                )}

                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-800">
                  <span className="font-medium italic">Example: {item.example}</span>
                  <button
                    onClick={() => speakText(item.example)}
                    title="Listen to audio"
                    className="p-1 text-slate-400 hover:text-indigo-600 transition-colors"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-2xs"
          >
            Close Reference
          </button>
        </div>

      </div>
    </div>
  );
};
