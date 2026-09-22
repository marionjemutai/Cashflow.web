import React from 'react';
import { Search, Filter } from 'lucide-react';

export const StoreFilters = ({ 
  searchTerm, 
  setSearchTerm, 
  statusFilter, 
  setStatusFilter, 
  totalStores 
}) => {
  return (
    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
      {/* Search & Status  */}
      <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto flex-1">
        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 textFilter-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search store name, manager, location..."
            className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder-gray-400"
          />
        </div>

        <div className="relative w-full sm:w-auto">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full sm:w-auto appearance-none bg-gray-50 border border-gray-200 text-gray-700 text-xs sm:text-sm px-3 py-2 pr-8 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="ALL">All Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <Filter className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>

      <div className="text-xs sm:text-sm text-gray-500 font-medium self-end sm:self-auto whitespace-nowrap">
        Total Stores: <span className="font-semibold text-gray-900">{totalStores}</span>
      </div>
    </div>
  );
};