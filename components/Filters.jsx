"use client";

import { useMemo, useState } from "react";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export function Filters({ filters, options, selected = {}, onSelectionChange }) {
  const [openFilter, setOpenFilter] = useState(null);
  const [queries, setQueries] = useState({});

  const toggleFilter = (filter) => {
    setOpenFilter((current) => (current === filter ? null : filter));
  };

  const filteredOptions = useMemo(() => {
    const map = {};
    filters.forEach((filter) => {
      const allOptions = options?.[filter] || [];
      const query = (queries[filter] || "").toLowerCase();
      const currentSelected = new Set(selected[filter] || []);
      const availableList = allOptions.filter(
        (option) =>
          !currentSelected.has(option) &&
          option.toLowerCase().includes(query)
      );
      const selectedList = Array.from(currentSelected);
      map[filter] = { availableList, selectedList, currentSelected };
    });
    return map;
  }, [filters, options, queries, selected]);

  const toggleSelection = (filter, option) => {
    onSelectionChange?.(filter, option);
  };

  const clearQuery = (filter) => {
    setQueries((prev) => ({ ...prev, [filter]: "" }));
  };

  const selectedTags = useMemo(
    () =>
      Object.entries(selected || {}).flatMap(([filter, items]) =>
        (items || []).map((item) => ({ filter, label: item }))
      ),
    [selected]
  );

  return (
    <div className={`${manrope.className} flex flex-col gap-4`}>
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <div key={filter} className="relative min-w-[180px]">
            <button
              type="button"
              onClick={() => toggleFilter(filter)}
              className={`flex w-full items-center justify-between rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-none transition hover:shadow-sm focus:outline-none ${
                openFilter === filter ? "rounded-b-none" : ""
              }`}
            >
              <span>{filter}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-slate-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={openFilter === filter ? "M6 15l6-6 6 6" : "M6 9l6 6 6-6"}
                />
              </svg>
            </button>

            {openFilter === filter && (
              <div className="absolute left-0 top-full z-20 w-full overflow-hidden rounded-b-[14px] rounded-t-none bg-white shadow-[0_12px_26px_rgba(0,0,0,0.12)]">
                <div className="flex items-center gap-2 px-3 py-3">
                  <input
                    value={queries[filter] || ""}
                    onChange={(event) =>
                      setQueries((prev) => ({
                        ...prev,
                        [filter]: event.target.value,
                      }))
                    }
                    placeholder={filter}
                    className="w-full bg-transparent text-sm font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-none"
                  />
                  {queries[filter] ? (
                    <button
                      type="button"
                      onClick={() => clearQuery(filter)}
                      className="text-slate-400 transition hover:text-slate-600"
                      aria-label="Effacer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M6.225 4.811a1 1 0 0 0-1.414 1.414L10.586 12l-5.775 5.775a1 1 0 1 0 1.414 1.414L12 13.414l5.775 5.775a1 1 0 0 0 1.414-1.414L13.414 12l5.775-5.775a1 1 0 1 0-1.414-1.414L12 10.586 6.225 4.811Z" />
                      </svg>
                    </button>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-slate-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
                      />
                    </svg>
                  )}
                </div>

                <div className="max-h-56 space-y-2 overflow-auto text-sm text-slate-800">
                  {filteredOptions[filter].selectedList.length > 0 && (
                    <div className="space-y-1 bg-[#FFD15B]">
                      {filteredOptions[filter].selectedList.map((option) => (
                        <button
                          type="button"
                          key={`selected-${option}`}
                          onClick={() => toggleSelection(filter, option)}
                          className="block w-full px-3 py-2 text-left font-semibold text-slate-900"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}

                  {filteredOptions[filter].availableList.map((option) => (
                    <button
                      type="button"
                      key={option}
                      onClick={() => toggleSelection(filter, option)}
                      className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left transition hover:bg-slate-50"
                    >
                      <span className="font-normal">{option}</span>
                    </button>
                  ))}
                  {filteredOptions[filter].availableList.length === 0 &&
                    filteredOptions[filter].selectedList.length === 0 && (
                      <p className="px-2 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                        Aucun résultat
                      </p>
                    )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedTags.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {selectedTags.map((tag) => (
            <span
              key={`${tag.filter}-${tag.label}`}
              className="flex w-[180px] items-center justify-between gap-2 rounded-[10px] bg-[#FFD15B] px-4 py-3 text-sm font-normal text-slate-900"
            >
              {tag.label}
              <button
                type="button"
                onClick={() => toggleSelection(tag.filter, tag.label)}
                aria-label={`Retirer ${tag.label}`}
                className="text-slate-700 transition hover:text-slate-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6.225 4.811a1 1 0 0 0-1.414 1.414L10.586 12l-5.775 5.775a1 1 0 1 0 1.414 1.414L12 13.414l5.775 5.775a1 1 0 0 0 1.414-1.414L13.414 12l5.775-5.775a1 1 0 1 0-1.414-1.414L12 10.586 6.225 4.811Z" />
                </svg>
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
