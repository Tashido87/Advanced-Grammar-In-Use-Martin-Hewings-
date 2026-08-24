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
    <div id="irregular-verbs-view" className="flex-1 overflow-y-auto bg-[#F8F9FA] p-4 sm:p-6 lg:p-8 space-y-6 max-w-5xl mx-auto w-full">
      
      {/* Header */}
      <div className="apple-card p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-4 border border-slate-200/70 shadow-xs">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#4285F4] to-[#1A73E8] text-white text-xs font-bold rounded-full shadow-xs">
              APPENDIX 1
            </span>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60">
              Irregular Verbs
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold google-text-gradient tracking-tight">
            Irregular Verbs Reference
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-1">
            Complete Cambridge past simple and past participle reference with audio and Burmese definitions.
          </p>
        </div>

        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search verb (e.g. choose, broke)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-full focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#4285F4] text-[#202124]"
          />
        </div>
      </div>

      {/* Verbs Table */}
      <div className="apple-card overflow-hidden border border-slate-200/80 shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm sm:text-base">
            <thead className="bg-gradient-to-r from-blue-50/90 via-indigo-50/40 to-slate-50/80 text-[#202124] font-bold border-b border-slate-200/80">
              <tr>
                <th className="p-4 sm:px-6 text-xs uppercase tracking-wider text-[#1A73E8]">Base Form (Infinitive)</th>
                <th className="p-4 sm:px-6 text-xs uppercase tracking-wider text-slate-700">Past Simple (V2)</th>
                <th className="p-4 sm:px-6 text-xs uppercase tracking-wider text-slate-700">Past Participle (V3)</th>
                {languageMode === 'bilingual' && (
                  <th className="p-4 sm:px-6 text-xs uppercase tracking-wider text-indigo-700">မြန်မာအဓိပ္ပာယ်</th>
                )}
                <th className="p-4 sm:px-6 text-right text-xs uppercase tracking-wider text-slate-500">Listen</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredVerbs.map((v, i) => (
                <tr key={i} className="hover:bg-blue-50/40 transition-colors">
                  <td className="p-4 sm:px-6 font-bold text-[#1A73E8]">
                    {v.infinitive}
                  </td>
                  <td className="p-4 sm:px-6 text-[#202124] font-medium">
                    {v.pastSimple}
                  </td>
                  <td className="p-4 sm:px-6 text-[#202124] font-medium">
                    {v.pastParticiple}
                  </td>
                  {languageMode === 'bilingual' && (
                    <td className="p-4 sm:px-6 text-slate-700 myanmar-text font-normal">
                      {v.burmeseMeaning}
                    </td>
                  )}
                  <td className="p-4 sm:px-6 text-right">
                    <button
                      onClick={() => speakText(`${v.infinitive}, ${v.pastSimple}, ${v.pastParticiple}`)}
                      className="p-1.5 rounded-full text-slate-600 bg-white border border-slate-200 hover:text-[#4285F4] hover:bg-blue-50 transition-colors inline-flex items-center cursor-pointer shadow-2xs"
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
