import React, { useState } from "react";
import { IRREGULAR_VERBS } from "../data/irregularVerbs";
import { LanguageMode } from "../types";
import { Search, Volume2, BookOpen } from "lucide-react";
import { speakText } from "../lib/speech";

interface IrregularVerbsViewProps {
  languageMode: LanguageMode;
}

export const IrregularVerbsView: React.FC<IrregularVerbsViewProps> = ({
  languageMode,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredVerbs = IRREGULAR_VERBS.filter(v => 
    v.infinitive.toLowerCase().includes(searchTerm.toLowerCase()) ||
    v.pastSimple.toLowerCase().includes(searchTerm.toLowerCase()) ||
    v.pastParticiple.toLowerCase().includes(searchTerm.toLowerCase()) ||
    v.burmeseMeaning.includes(searchTerm)
  );

  return (
    <div id="irregular-verbs-view" className="flex-1 overflow-y-auto bg-[#F5F5F7] p-4 sm:p-6 lg:p-8 space-y-6 max-w-5xl mx-auto w-full">
      
      {/* Header */}
      <div className="apple-card p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="inline-block px-2.5 py-0.5 bg-black/[0.04] text-[#1D1D1F] text-[11px] font-semibold rounded-full">
            APPENDIX 1
          </span>
          <h1 className="text-2xl sm:text-3xl font-semibold text-[#1D1D1F] mt-2 tracking-tight">
            Irregular Verbs Reference
          </h1>
          <p className="text-xs sm:text-sm text-[#6E6E73] mt-1">
            Complete Cambridge past simple and past participle reference with audio and Burmese definitions.
          </p>
        </div>

        <div className="relative w-full md:w-80">
          <Search className="w-3.5 h-3.5 text-[#86868B] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search verb (e.g. choose, broke)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-white border border-black/[0.1] rounded-full focus:outline-none focus:ring-2 focus:ring-[#0071E3] text-[#1D1D1F]"
          />
        </div>
      </div>

      {/* Verbs Table */}
      <div className="apple-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-[#F5F5F7] text-[#86868B] font-semibold border-b border-black/[0.05]">
              <tr>
                <th className="p-4 sm:px-6">Base Form (Infinitive)</th>
                <th className="p-4 sm:px-6">Past Simple (V2)</th>
                <th className="p-4 sm:px-6">Past Participle (V3)</th>
                {languageMode === 'bilingual' && (
                  <th className="p-4 sm:px-6">မြန်မာအဓိပ္ပာယ်</th>
                )}
                <th className="p-4 sm:px-6 text-right">Listen</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/[0.04]">
              {filteredVerbs.map((v, i) => (
                <tr key={i} className="hover:bg-black/[0.02] transition-colors">
                  <td className="p-4 sm:px-6 font-semibold text-[#0071E3]">
                    {v.infinitive}
                  </td>
                  <td className="p-4 sm:px-6 text-[#1D1D1F] font-medium">
                    {v.pastSimple}
                  </td>
                  <td className="p-4 sm:px-6 text-[#1D1D1F] font-medium">
                    {v.pastParticiple}
                  </td>
                  {languageMode === 'bilingual' && (
                    <td className="p-4 sm:px-6 text-[#1D1D1F] myanmar-text font-normal">
                      {v.burmeseMeaning}
                    </td>
                  )}
                  <td className="p-4 sm:px-6 text-right">
                    <button
                      onClick={() => speakText(`${v.infinitive}, ${v.pastSimple}, ${v.pastParticiple}`)}
                      className="p-1.5 rounded-full text-[#86868B] hover:text-[#0071E3] hover:bg-black/[0.05] transition-colors inline-flex items-center cursor-pointer"
                      title="Pronounce"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
