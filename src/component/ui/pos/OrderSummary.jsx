import React from 'react';

export default function OrderSummary({ cart, onClear, onCompleteSale }) {
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const tax = subtotal * 0.16;
  const total = subtotal + tax;

  return (
    <div className="bg-[#f4f8f6] rounded-2xl p-4 mt-auto border border-slate-200/80">
      <div className="space-y-2 text-xs font-medium text-slate-500 pb-3 border-b border-slate-200/80">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="font-bold text-slate-800">KSh {subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax (16%)</span>
          <span className="font-bold text-slate-800">KSh {tax.toFixed(2)}</span>
        </div>
      </div>
      
      <div className="flex justify-between items-center my-4">
        <span className="text-sm font-bold text-slate-800">Total</span>
        <span className="text-xl font-black text-emerald-600">KSh {total.toFixed(2)}</span>
      </div>

      <button 
        disabled={cart.length === 0}
        onClick={onCompleteSale}
        className="w-full bg-slate-900 hover:bg-emerald-700 disabled:bg-slate-200 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-xl shadow-lg shadow-slate-900/10 active:scale-[0.99] transition-all text-sm"
      >
        Complete Sale
      </button>
    </div>
  );
}