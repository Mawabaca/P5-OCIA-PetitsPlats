export function Filters({ filters }) {
  return (
    <div className="flex flex-wrap gap-4">
      {filters.map((filter, index) => (
        <span
          key={filter}
          className={`flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold shadow-sm ring-1 ring-slate-200 transition ${
            index === 0
              ? "bg-amber-300 text-slate-900 shadow-[0_10px_18px_rgba(0,0,0,0.12)] ring-amber-200"
              : "bg-white text-slate-700 hover:ring-amber-200"
          }`}
        >
          {filter}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5 text-slate-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
          </svg>
        </span>
      ))}
    </div>
  );
}
