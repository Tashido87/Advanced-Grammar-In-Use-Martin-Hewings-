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
        <div className="p-4 sm:p-5 border-b border-black/[0.05] flex items-center justify-between gap-3 bg-white">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-sm font-semibold bg-black/[0.04] text-[#1D1D1F]">
                A1 – M22 Reference
              </span>
              <h2 className="text-base sm:text-lg font-semibold text-[#1D1D1F]">
                Grammar Reminder
              </h2>
            </div>
            <p className="text-sm text-[#333336] mt-0.5">
              Quick core rule reminders referenced in Cambridge units and diagnostic study planner
            </p>
          </div>
          <button
            id="close-reminder-modal-btn"
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-black/[0.05] hover:bg-black/[0.1] flex items-center justify-center text-[#333336] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Filter Bar */}
        <div className="p-3 border-b border-black/[0.05] bg-[#F5F5F7] flex flex-col sm:flex-row items-center gap-2.5">
          <div className="relative flex-1 w-full">
            <Search className="w-3.5 h-3.5 text-[#333336] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search reminder code (e.g. A1, C5), rule, topic..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 text-sm sm:text-base bg-white border border-black/[0.1] rounded-full focus:outline-none focus:ring-2 focus:ring-[#0071E3] text-[#1D1D1F]"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full sm:w-auto px-3 py-1.5 text-sm bg-white border border-black/[0.1] rounded-full text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#0071E3]"
          >
            <option value="all">All Categories</option>
            {categories.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3 divide-y divide-black/[0.04]">
          {filteredItems.length === 0 ? (
            <div className="text-center py-10 text-[#333336] text-sm">
              No grammar reminder cards matched your search.
            </div>
          ) : (
            filteredItems.map((item) => (
              <div key={item.code} className="pt-3.5 first:pt-0 space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-full bg-[#1D1D1F] text-white font-semibold text-sm flex items-center justify-center">
                      {item.code}
                    </span>
                    <div>
                      <h4 className="font-semibold text-sm text-[#1D1D1F]">
                        {item.title}
                      </h4>
                      <span className="text-sm font-medium text-[#333336]">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-sm">
                    <span className="text-[#333336]">Units:</span>
                    <span className="font-semibold text-[#0071E3]">
                      {item.relatedUnits}
                    </span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#1D1D1F] leading-relaxed">
                  {item.rule}
                </p>

                {languageMode === 'bilingual' && (
                  <div className="apple-burmese-box myanmar-text text-sm">
                    <span className="font-semibold text-[#0071E3] mr-1">🇲🇲</span>
                    {item.ruleBurmese}
                  </div>
                )}

                <div className="flex items-center justify-between p-3 bg-[#F5F5F7] rounded-xl text-sm text-[#1D1D1F] border border-black/[0.04]">
                  <span className="font-normal italic">Example: {item.example}</span>
                  <button
                    onClick={() => speakText(item.example)}
                    title="Listen to audio"
                    className="p-1 rounded-full text-[#333336] hover:text-[#0071E3] hover:bg-black/[0.05] transition-colors cursor-pointer"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3.5 bg-[#F5F5F7] border-t border-black/[0.05] flex justify-end">
          <button
            onClick={onClose}
            className="apple-btn apple-btn-secondary px-5 py-1.5 text-sm font-medium cursor-pointer"
          >
            Close Reference
          </button>
        </div>

      </div>
    </div>
  );
};
