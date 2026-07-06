import React from 'react';

export default function InventoryTable({ items }) {
  return (
    <div className="hidden md:block bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 text-gray-400 text-[11px] font-bold uppercase tracking-wider border-b border-gray-100">
              <th className="py-4 px-6">Product</th>
              <th className="py-4 px-4">SKU</th>
              <th className="py-4 px-4">Category</th>
              <th className="py-4 px-4">Price</th>
              <th className="py-4 px-4">Stock</th>
              <th className="py-4 px-4">Status</th>
              <th className="py-4 px-6 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 text-sm">
            {items.map((item, idx) => (
              <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                <td className="py-4 px-6 font-bold text-slate-800">{item.name}</td>
                <td className="py-4 px-4 font-mono text-xs text-gray-500">{item.sku}</td>
                <td className="py-4 px-4 text-gray-500 font-medium">{item.category}</td>
                <td className="py-4 px-4 font-semibold text-slate-700">KSh {item.price.toFixed(2)}</td>
                <td className="py-4 px-4 font-bold text-slate-700">{item.stock}</td>
                <td className="py-4 px-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide ${
                    item.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                  }`}>
                    {item.status}
                  </span>
                </td>
                <td className="py-4 px-6 text-right space-x-2">
                  <button className="text-gray-400 hover:text-emerald-600 transition-colors text-xs">✏️</button>
                  <button className="text-gray-400 hover:text-rose-500 transition-colors text-xs">🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}