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
    <aside id="units-sidebar" className="w-full md:w-72 lg:w-80 flex-shrink-0 bg-white border-r border-stone-200 flex flex-col h-[calc(100vh-6.5rem)]">
      
      {/* Category Horizontal Filter Chips & Section Header */}
      <div className="p-4 border-b border-stone-100 flex flex-col gap-2.5">
        <div className="flex items-center justify-between">
          <h2 className="text-[11px] font-bold text-stone-400 tracking-widest uppercase">
            Unit Chapters
          </h2>
          <span className="text-xs font-semibold text-stone-400">
            {filteredUnits.length} Units
          </span>
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
          <button
            id="cat-filter-all"
            onClick={() => onSelectCategory(null)}
            className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              filterCategory === null
                ? 'bg-stone-800 text-white shadow-2xs'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            All
          </button>
          {categories.map(cat => {
            const isSelected = filterCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`cat-filter-${cat.id}`}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-stone-800 text-white shadow-2xs'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Units List */}
      <div className="flex-1 overflow-y-auto p-3 space-y-1">
        {filteredUnits.length === 0 ? (
          <div className="p-8 text-center text-stone-400 text-sm">
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
                className={`group flex items-center justify-between gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-emerald-50/70 text-emerald-950 font-semibold border-l-3 border-emerald-700 shadow-2xs'
                    : 'text-stone-600 hover:bg-stone-50 hover:text-stone-900'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  
                  {/* Number Badge */}
                  <span className={`text-sm italic font-bold flex-shrink-0 ${
                    isSelected ? 'opacity-90 text-emerald-800' : 'opacity-40 text-stone-400'
                  }`}>
                    {formattedNum}
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                      <span className={`text-xs truncate font-medium ${isSelected ? 'text-stone-950 font-bold' : 'text-stone-800'}`}>
                        {unit.title}
                      </span>
                    </div>

                    {languageMode === 'bilingual' && (
                      <p className="text-[11px] text-emerald-800 truncate mt-0.5 font-normal">
                        {unit.summaryBurmese}
                      </p>
                    )}
                  </div>
                </div>

                {/* Status Indicator & Bookmark */}
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  {isCompleted && (
                    <span className="w-2 h-2 rounded-full bg-emerald-600" title="Mastered" />
                  )}

                  <button
                    id={`bookmark-btn-${unit.id}`}
                    onClick={(e) => onToggleBookmark(unit.id, e)}
                    title={isBookmarked ? "Remove bookmark" : "Bookmark this unit"}
                    className={`p-1 rounded transition-colors cursor-pointer ${
                      isBookmarked
                        ? 'text-emerald-700 hover:text-emerald-800'
                        : 'text-stone-300 hover:text-stone-500 opacity-0 group-hover:opacity-100'
                    }`}
                  >
                    <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
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
