import React from 'react';

export default function StatCard({ title, value, change, isNegative, isWarning }) {
  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between min-h-[125px]">
      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{title}</p>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2 tracking-tight">{value}</h3>
      </div>
      
      {change && (
        <div className={`text-xs font-semibold mt-3 flex items-center gap-1 ${isNegative ? 'text-rose-600' : 'text-emerald-600'}`}>
          <span>{isNegative ? '▼' : '▲'}</span>
          {change}
          <span className="text-gray-400 font-normal ml-0.5">vs yesterday</span>
        </div>
      )}

      {isWarning && (
        <div className="text-xs font-semibold mt-3 text-amber-600 bg-amber-50 px-2.5 py-1 rounded-lg w-max flex items-center gap-1.5 animate-pulse">
          ⚠️ <span>8 New Items</span>
        </div>
      )}
    </div>
  );
}