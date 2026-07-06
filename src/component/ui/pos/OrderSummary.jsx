import React from 'react';

export default function OrderSummary({ cart, onClear }) {
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const tax = subtotal * 0.16;
  const total = subtotal + tax;

  return (
    <div className="bg-slate-50/50 rounded-2xl p-4 mt-auto border border-dashed border-gray-200">
      <div className="space-y-2 text-xs font-medium text-gray-500 pb-3 border-b border-gray-100">
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
        <span className="text-lg font-black text-emerald-600">KSh {total.toFixed(2)}</span>
      </div>

      <button 
        disabled={cart.length === 0}
        className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-200 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl shadow-lg shadow-emerald-600/10 active:scale-[0.99] transition-all text-sm"
      >
        Complete Sale
      </button>
    </div>
  );
}