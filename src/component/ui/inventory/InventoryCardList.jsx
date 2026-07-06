import React from 'react';

export default function InventoryCardList({ items }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
      {items.map((item, idx) => (
        <div key={idx} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between gap-3">
          <div>
            <div className="flex items-start justify-between gap-2">
              <h4 className="text-sm font-bold text-slate-800">{item.name}</h4>
              <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wide shrink-0 ${
                item.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
              }`}>
                {item.status}
              </span>
            </div>
            <p className="text-xs text-gray-400 mt-0.5 font-medium">{item.category} • <span className="font-mono text-[11px]">{item.sku}</span></p>
          </div>

          <div className="flex items-center justify-between border-t border-dashed border-gray-100 pt-3 text-xs">
            <div>
              <p className="text-gray-400 text-[10px] font-semibold uppercase tracking-wider">Price</p>
              <p className="font-bold text-slate-700 mt-0.5">KSh {item.price.toFixed(2)}</p>
            </div>
            <div className="text-right">
              <p className="text-gray-400 text-[10px] font-semibold uppercase tracking-wider">In Stock</p>
              <p className={`font-bold mt-0.5 ${item.stock <= 25 ? 'text-amber-600' : 'text-slate-700'}`}>{item.stock} units</p>
            </div>
          </div>

          <div className="flex gap-2 border-t border-gray-50 pt-2.5 mt-1">
            <button className="flex-1 bg-slate-50 hover:bg-slate-100 text-slate-600 text-xs font-semibold py-2 rounded-xl transition-colors">
              Edit
            </button>
            <button className="bg-slate-50 hover:bg-rose-50 text-gray-400 hover:text-rose-500 p-2 rounded-xl transition-colors">
              🗑️
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}