import React from 'react';

export default function TopProducts() {
  const products = [
    { name: 'Coca Cola 500ml', category: 'Drinks', qty: 236 },
    { name: 'Bread 400g', category: 'Bakery', qty: 175 },
    { name: 'Milk 500ml', category: 'Dairy', qty: 142 },
    { name: 'Rice 2kg', category: 'Groceries', qty: 110 },
    { name: 'Sugar 1kg', category: 'Groceries', qty: 98 },
  ];

  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between pb-4 border-b border-gray-50">
          <h3 className="text-sm font-bold text-slate-900">Top Selling Products</h3>
          <span className="text-xs text-gray-400 font-medium">Sold Qty</span>
        </div>
        <div className="divide-y divide-gray-50">
          {products.map((prod, idx) => (
            <div key={idx} className="flex items-center justify-between py-3">
              <div>
                <p className="text-sm font-semibold text-slate-800">{prod.name}</p>
                <p className="text-xs text-gray-400">{prod.category}</p>
              </div>
              <span className="text-sm font-bold text-slate-900 bg-slate-50 px-2.5 py-1 rounded-lg">{prod.qty}</span>
            </div>
          ))}
        </div>
      </div>
      <button className="w-full text-center text-xs font-semibold text-emerald-600 bg-emerald-50 hover:bg-emerald-100 py-2.5 rounded-xl transition-colors mt-4">
        View full report
      </button>
    </div>
  );
}