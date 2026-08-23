import React, { useState } from "react";
import { GLOSSARY_TERMS } from "../data/glossaryData";
import { LanguageMode } from "../types";
import { Search, BookOpen, Volume2 } from "lucide-react";
import { speakText } from "../lib/speech";

interface GlossaryViewProps {
  languageMode: LanguageMode;
  onNavigateToUnit?: (unitId: number) => void;
}

export const GlossaryView: React.FC<GlossaryViewProps> = ({
  languageMode,
  onNavigateToUnit,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTerms = GLOSSARY_TERMS.filter(t => 
    t.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.definitionBurmese.includes(searchTerm)
  );

  return (
    <div id="glossary-view" className="flex-1 overflow-y-auto bg-[#F8FAFC] p-4 sm:p-6 lg:p-8 space-y-6">
      
      {/* Header */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-7 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-full border border-indigo-100">
            GLOSSARY REFERENCE
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2 tracking-tight">
            Grammar Terms Glossary
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Key grammatical terms explained concisely with real contextual examples and Burmese definitions.
          </p>
        </div>

        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search grammar term (e.g. Cleft, Inversion)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-indigo-600 text-slate-900 shadow-2xs"
          />
        </div>
      </div>

      {/* Terms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredTerms.map((t, idx) => (
          <div
            key={idx}
            className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-xs space-y-3"
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-bold text-base text-slate-900">
                {t.term}
              </h3>
              {t.relatedUnits && (
                <span className="text-[11px] font-semibold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-100">
                  Units {t.relatedUnits}
                </span>
              )}
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {t.definition}
            </p>

            {languageMode === 'bilingual' && (
              <div className="p-3 bg-emerald-50/80 rounded-lg border border-emerald-200/80 text-xs text-emerald-950 font-medium leading-relaxed">
                🇲🇲 {t.definitionBurmese}
              </div>
            )}

            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between gap-2 text-xs text-slate-800">
              <span className="italic font-medium">Example: {t.example}</span>
              <button
                onClick={() => speakText(t.example)}
                className="p-1 text-slate-400 hover:text-indigo-600 transition-colors flex-shrink-0"
                title="Pronounce"
              >
                <Volume2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
