import React from 'react';

export default function CartItem({ item, onUpdateQty, onRemove }) {
  return (
    <div className="flex items-center justify-between gap-3 py-3 border-b border-gray-50">
      <div className="flex items-center gap-2.5 min-w-0">
        <span className="text-xl bg-slate-50 p-2 rounded-lg shrink-0">{item.image}</span>
        <div className="min-w-0">
          <h5 className="text-xs sm:text-sm font-bold text-slate-800 truncate">{item.name}</h5>
          <p className="text-[11px] font-semibold text-emerald-600 mt-0.5">KSh {item.price.toFixed(2)}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <div className="flex items-center bg-slate-100 rounded-lg p-1">
          <button 
            onClick={() => onUpdateQty(item.id, -1)}
            className="w-6 h-6 flex items-center justify-center font-bold text-slate-600 hover:bg-white rounded transition-colors text-xs"
          >
            -
          </button>
          <span className="w-8 text-center text-xs font-bold text-slate-800">{item.quantity}</span>
          <button 
            onClick={() => onUpdateQty(item.id, 1)}
            className="w-6 h-6 flex items-center justify-center font-bold text-slate-600 hover:bg-white rounded transition-colors text-xs"
          >
            +
          </button>
        </div>
        
        <button 
          onClick={() => onRemove(item.id)}
          className="text-gray-300 hover:text-rose-500 p-1.5 transition-colors text-xs"
        >
          ✕
        </button>
      </div>
    </div>
  );
}