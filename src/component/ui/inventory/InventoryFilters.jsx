import React from 'react';

export default function InventoryFilters({ searchQuery, setSearchQuery }) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 items-center justify-between bg-white p-4 rounded-2xl border border-gray-100 shadow-sm shrink-0">      <div className="relative w-full sm:max-w-xs">
        <input 
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-slate-50 border border-gray-200 rounded-xl pl-9 pr-4 py-2 text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
        />
        <span className="absolute left-3 top-2.5 text-gray-400 text-xs">🔍</span>
      </div>
      <button className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md shadow-emerald-600/10 transition-all flex items-center justify-center gap-1.5 self-stretch sm:self-auto">
        <span>+</span> Add Product
      </button>
    </div>
  );
}