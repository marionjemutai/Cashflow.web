import React, { useState } from 'react';
import InventoryFilters from '../component/ui/inventory/InventoryFilters';
import InventoryTable from '../component/ui/inventory/InventoryTable';
import InventoryCardList from '../component/ui/inventory/InventoryCardList';

export default function Inventory() {
  const [searchQuery, setSearchQuery] = useState('');

  const mockInventory = [
    { name: 'Coca Cola 500ml', sku: 'P001', category: 'Drinks', price: 60.00, stock: 150, status: 'Active' },
    { name: 'Water 500ml', sku: 'P002', category: 'Drinks', price: 40.00, stock: 200, status: 'Active' },
    { name: 'Bread 400g', sku: 'P003', category: 'Bakery', price: 60.00, stock: 35, status: 'Active' },
    { name: 'Milk 500ml', sku: 'P004', category: 'Dairy', price: 70.00, stock: 28, status: 'Low Stock' },
    { name: 'Sugar 1kg', sku: 'P005', category: 'Groceries', price: 120.00, stock: 80, status: 'Active' },
    { name: 'Rice 2kg', sku: 'P006', category: 'Groceries', price: 240.00, stock: 18, status: 'Low Stock' },
    { name: 'Cooking Oil 1L', sku: 'P007', category: 'Groceries', price: 320.00, stock: 25, status: 'Active' },
  ];

  const filteredItems = mockInventory.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.sku.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen w-full bg-[#F8FAFC] p-4 sm:p-6 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-5">
        
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-black text-slate-900 tracking-tight">Inventory</h1>
            <p className="text-xs text-gray-400 mt-0.5 font-medium">Manage stock metrics, pricing structure, and items SKU logs.</p>
          </div>
          <span className="text-xs font-bold text-slate-500 bg-white border border-gray-100 px-3 py-1.5 rounded-xl shadow-sm hidden sm:inline">
            Total Products: <span className="text-emerald-600">{mockInventory.length}</span>
          </span>
        </div>

        <InventoryFilters searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <InventoryTable items={filteredItems} />
        <InventoryCardList items={filteredItems} />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 text-xs font-medium text-gray-400">
          <p>Showing {filteredItems.length} of {mockInventory.length} products</p>
          <div className="flex items-center bg-white border border-gray-100 rounded-xl p-1 shadow-sm text-slate-700">
            <button className="px-2.5 py-1.5 rounded-lg hover:bg-slate-50 transition-colors">◀</button>
            <span className="px-3 py-1.5 text-emerald-600 font-bold bg-emerald-50 rounded-lg">1</span>
            <button className="px-3 py-1.5 rounded-lg hover:bg-slate-50 transition-colors">2</button>
            <button className="px-3 py-1.5 rounded-lg hover:bg-slate-50 transition-colors">3</button>
            <span className="px-2 text-gray-300">...</span>
            <button className="px-3 py-1.5 rounded-lg hover:bg-slate-50 transition-colors">27</button>
            <button className="px-2.5 py-1.5 rounded-lg hover:bg-slate-50 transition-colors">▶</button>
          </div>
        </div>

      </div>
    </div>
  );
}