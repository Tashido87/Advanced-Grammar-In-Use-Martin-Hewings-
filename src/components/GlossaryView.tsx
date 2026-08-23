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
    <div id="glossary-view" className="flex-1 overflow-y-auto bg-[#F8F9FA] p-4 sm:p-6 lg:p-8 space-y-6 max-w-5xl mx-auto w-full">
      
      {/* Header */}
      <div className="apple-card p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="inline-block px-2.5 py-0.5 bg-black/[0.04] text-[#202124] text-sm font-semibold rounded-full">
            GLOSSARY REFERENCE
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold google-text-gradient mt-2 tracking-tight">
            Grammar Terms Glossary
          </h1>
          <p className="text-sm sm:text-base text-[#333336] mt-1">
            Key grammatical terms explained concisely with real contextual examples and Burmese definitions.
          </p>
        </div>

        <div className="relative w-full md:w-80">
          <Search className="w-3.5 h-3.5 text-[#333336] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search grammar term..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm sm:text-base bg-white border border-black/[0.1] rounded-full focus:outline-none focus:ring-2 focus:ring-[#4285F4] text-[#202124]"
          />
        </div>
      </div>

      {/* Terms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredTerms.map((t, idx) => (
          <div
            key={idx}
            className="apple-card p-5 sm:p-6 space-y-3"
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-semibold text-base text-[#202124]">
                {t.term}
              </h3>
              {t.relatedUnits && (
                <span className="text-sm font-medium text-[#4285F4] bg-[#4285F4]/10 px-2.5 py-0.5 rounded-full">
                  Units {t.relatedUnits}
                </span>
              )}
            </div>

            <p className="text-sm sm:text-base text-[#202124] leading-relaxed">
              {t.definition}
            </p>

            {languageMode === 'bilingual' && (
              <div className="apple-burmese-box myanmar-text text-sm">
                <span className="font-semibold text-[#4285F4] mr-1">🇲🇲</span>
                {t.definitionBurmese}
              </div>
            )}

            <div className="p-3 bg-[#F8F9FA] rounded-xl flex items-center justify-between gap-2 text-sm text-[#202124] border border-black/[0.04]">
              <span className="italic font-normal">Example: {t.example}</span>
              <button
                onClick={() => speakText(t.example)}
                className="p-1 rounded-full text-[#333336] hover:text-[#4285F4] hover:bg-black/[0.05] transition-colors flex-shrink-0 cursor-pointer"
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
