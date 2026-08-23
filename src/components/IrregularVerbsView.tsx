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
    <div id="irregular-verbs-view" className="flex-1 overflow-y-auto bg-[#F8F9FA] p-4 sm:p-6 lg:p-8 space-y-6">
      
      {/* Header */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-7 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full border border-blue-200">
            APPENDIX 1
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2 tracking-tight">
            Irregular Verbs Reference
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
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
            className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600 text-slate-900 shadow-2xs"
          />
        </div>
      </div>

      {/* Verbs Table */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
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
            <tbody className="divide-y divide-slate-100">
              {filteredVerbs.map((v, i) => (
                <tr key={i} className="hover:bg-slate-50/70 transition-colors">
                  <td className="p-4 sm:px-6 font-bold text-blue-600">
                    {v.infinitive}
                  </td>
                  <td className="p-4 sm:px-6 text-slate-900 font-medium">
                    {v.pastSimple}
                  </td>
                  <td className="p-4 sm:px-6 text-slate-900 font-medium">
                    {v.pastParticiple}
                  </td>
                  {languageMode === 'bilingual' && (
                    <td className="p-4 sm:px-6 text-blue-950 font-medium">
                      {v.burmeseMeaning}
                    </td>
                  )}
                  <td className="p-4 sm:px-6 text-right">
                    <button
                      onClick={() => speakText(`${v.infinitive}, ${v.pastSimple}, ${v.pastParticiple}`)}
                      className="p-1.5 text-slate-400 hover:text-blue-600 transition-colors inline-flex items-center cursor-pointer"
                      title="Pronounce"
                    >
                      <Volume2 className="w-4 h-4" />
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
