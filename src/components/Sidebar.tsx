import React from "react";
import { GrammarUnit } from "../types";
import { CategoryInfo } from "../data/categoriesData";
import { 
  CheckCircle2, 
  Bookmark, 
  ChevronRight, 
  BookMarked,
  Sparkles,
  Layers
} from "lucide-react";

interface SidebarProps {
  categories: CategoryInfo[];
  units: GrammarUnit[];
  selectedUnitId: number;
  onSelectUnit: (unitId: number) => void;
  completedUnits: number[];
  bookmarkedUnits: number[];
  onToggleBookmark: (unitId: number, e: React.MouseEvent) => void;
  filterCategory: string | null;
  onSelectCategory: (catId: string | null) => void;
  searchQuery: string;
  languageMode: 'en' | 'bilingual';
}

export const Sidebar: React.FC<SidebarProps> = ({
  categories,
  units,
  selectedUnitId,
  onSelectUnit,
  completedUnits,
  bookmarkedUnits,
  onToggleBookmark,
  filterCategory,
  onSelectCategory,
  searchQuery,
  languageMode,
}) => {
  // Filter units based on category & search query
  const filteredUnits = units.filter(unit => {
    const matchesCat = !filterCategory || unit.category === filterCategory;
    const matchesSearch = !searchQuery || 
      unit.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      unit.id.toString() === searchQuery.trim() ||
      unit.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (unit.summaryBurmese && unit.summaryBurmese.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <aside id="units-sidebar" className="w-full md:w-72 lg:w-80 flex-shrink-0 bg-[#FBFBFD] md:bg-[#F8F9FA] border-r border-black/[0.06] flex flex-col h-[calc(100vh-6.5rem)]">
      
      {/* Category Horizontal Filter Chips & Section Header */}
      <div className="p-3.5 border-b border-black/[0.05] flex flex-col gap-2">
        <div className="flex items-center justify-between px-1">
          <h2 className="text-sm font-semibold text-[#333336] tracking-wider uppercase">
            Units
          </h2>
          <span className="text-sm font-medium text-[#333336]">
            {filteredUnits.length}
          </span>
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-0.5">
          <button
            id="cat-filter-all"
            onClick={() => onSelectCategory(null)}
            className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              filterCategory === null
                ? 'bg-gradient-to-r from-[#4285F4] to-[#1A73E8] text-white shadow-xs'
                : 'bg-white border border-slate-200/80 text-slate-700 hover:bg-blue-50/60 hover:text-[#1A73E8]'
            }`}
          >
            All Units
          </button>
          {categories.map(cat => {
            const isSelected = filterCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`cat-filter-${cat.id}`}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#4285F4] to-[#1A73E8] text-white shadow-xs'
                    : 'bg-white border border-slate-200/80 text-slate-700 hover:bg-blue-50/60 hover:text-[#1A73E8]'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Units List */}
      <div className="flex-1 overflow-y-auto p-2.5 space-y-1.5">
        {filteredUnits.length === 0 ? (
          <div className="p-8 text-center text-slate-500 text-sm">
            No units match your filter.
          </div>
        ) : (
          filteredUnits.map((unit) => {
            const isSelected = unit.id === selectedUnitId;
            const isCompleted = completedUnits.includes(unit.id);
            const isBookmarked = bookmarkedUnits.includes(unit.id);

            const formattedNum = unit.id < 10 ? `0${unit.id}` : `${unit.id}`;

            return (
              <div
                key={unit.id}
                id={`unit-list-item-${unit.id}`}
                onClick={() => onSelectUnit(unit.id)}
                className={`group flex items-center justify-between gap-2.5 px-3 py-2.5 rounded-xl cursor-pointer transition-all duration-150 ${
                  isSelected
                    ? 'bg-gradient-to-r from-blue-50/95 via-indigo-50/70 to-blue-50/40 border border-blue-200/90 text-blue-950 font-semibold shadow-xs'
                    : 'text-[#202124] hover:bg-slate-100/80 border border-transparent'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0 flex-1">
                  
                  {/* Number Badge */}
                  <span className={`text-xs font-bold flex-shrink-0 w-6 h-6 rounded-lg flex items-center justify-center ${
                    isSelected ? 'bg-gradient-to-br from-[#4285F4] to-[#1A73E8] text-white shadow-2xs' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {formattedNum}
                  </span>

                  <div className="min-w-0 flex-1">
                    <span className={`text-sm truncate block ${isSelected ? 'text-blue-950 font-bold' : 'text-[#202124] font-medium'}`}>
                      {unit.title}
                    </span>

                    {languageMode === 'bilingual' && (
                      <p className={`text-xs truncate mt-0.5 myanmar-text font-normal ${isSelected ? 'text-indigo-700' : 'text-slate-500'}`}>
                        {unit.summaryBurmese}
                      </p>
                    )}
                  </div>
                </div>

                {/* Status Indicator & Bookmark */}
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  {isCompleted && (
                    <span className="w-2 h-2 rounded-full bg-[#34A853]" title="Mastered" />
                  )}

                  <button
                    id={`bookmark-btn-${unit.id}`}
                    onClick={(e) => onToggleBookmark(unit.id, e)}
                    title={isBookmarked ? "Remove bookmark" : "Bookmark this unit"}
                    className={`p-1 rounded-md transition-colors cursor-pointer ${
                      isBookmarked
                        ? 'text-[#FBBC05]'
                        : 'text-[#333336]/40 hover:text-[#333336] opacity-0 group-hover:opacity-100'
                    }`}
                  >
                    <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-[#FBBC05] text-[#FBBC05]' : ''}`} />
                  </button>
                </div>

              </div>
            );
          })
        )}
      </div>

    </aside>
  );
};
