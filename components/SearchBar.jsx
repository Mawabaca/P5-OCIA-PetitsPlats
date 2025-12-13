"use client";

import { useState } from "react";

export function SearchBar() {
  const [value, setValue] = useState("");

  return (
    <div>
      <label className="sr-only" htmlFor="search">
        Rechercher une recette ou un ingrédient
      </label>
      <div className="flex items-center gap-0 rounded-[14px] bg-white shadow-[0_12px_24px_rgba(0,0,0,0.18)] ring-1 ring-slate-200">
        <input
          id="search"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          className="flex-1 rounded-[14px] border-0 bg-transparent px-5 py-4 text-base font-medium text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-0"
          placeholder="Rechercher une recette, un ingrédient, ..."
          type="search"
        />
        {value && (
          <button
            type="button"
            onClick={() => setValue("")}
            className="mr-1 flex h-10 w-10 items-center justify-center rounded-full text-slate-400 transition hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 focus:ring-offset-white"
            aria-label="Effacer la recherche"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.225 4.811a1 1 0 0 0-1.414 1.414L10.586 12l-5.775 5.775a1 1 0 1 0 1.414 1.414L12 13.414l5.775 5.775a1 1 0 0 0 1.414-1.414L13.414 12l5.775-5.775a1 1 0 1 0-1.414-1.414L12 10.586 6.225 4.811Z" />
            </svg>
          </button>
        )}
        <button className="m-2 flex h-[52px] w-[52px] items-center justify-center rounded-[12px] bg-[#1f1f1f] text-white shadow-[0_10px_20px_rgba(0,0,0,0.25)] ring-1 ring-black/10 transition hover:bg-black focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 focus:ring-offset-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
