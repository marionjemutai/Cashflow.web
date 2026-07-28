import React, { useState } from 'react';
import { Plus, Edit2, Store, MapPin, User } from 'lucide-react';
import { mockStores } from '../component/ui/stores/data/mockStores';
import { StoreStatusBadge } from '../component/ui/stores/StoreStatusBadge';
import { StoreFilters } from '../component/ui/stores/StoreFilters';
import { AddStoreModal } from '../component/ui/stores/AddStoreModal';

export const Stores = () => {
  const [stores, setStores] = useState(mockStores);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredStores = stores.filter((store) => {
    const matchesSearch =
      store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      store.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      store.manager.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === 'ALL' || store.status.toLowerCase() === statusFilter.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  const handleAddStore = (newStore) => {
    setStores((prev) => [newStore, ...prev]);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-50/50 min-h-screen space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Stores</h1>
        </div>

        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs sm:text-sm px-4 py-2.5 rounded-lg transition-colors shadow-sm self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Add Store</span>
        </button>
      </div>


      <StoreFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        totalStores={filteredStores.length}
      />

      <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
        
        <div className="block sm:hidden divide-y divide-gray-100">
          {filteredStores.map((store) => (
            <div key={store.id} className="p-4 space-y-3 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
                    <Store className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-gray-900 text-sm">{store.name}</span>
                </div>
                <StoreStatusBadge status={store.status} />
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 pt-1">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-gray-400" />
                  <span>{store.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-gray-400" />
                  <span>{store.manager}</span>
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-2 border-t border-gray-50">
                <button
                  title="Edit Store"
                  className="p-1.5 text-gray-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg border border-gray-200 transition-colors"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden sm:block overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-gray-50 text-gray-500 font-medium uppercase tracking-wider border-b border-gray-100">
              <tr>
                <th className="py-3.5 px-6">Store Name</th>
                <th className="py-3.5 px-6 hidden md:table-cell">Location</th>
                <th className="py-3.5 px-6">Manager</th>
                <th className="py-3.5 px-6">Status</th>
                <th className="py-3.5 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-700">
              {filteredStores.map((store) => (
                <tr key={store.id} className="hover:bg-gray-50/80 transition-colors">
                  <td className="py-4 px-6 font-semibold text-gray-900 whitespace-nowrap">
                    {store.name}
                  </td>
                  <td className="py-4 px-6 text-gray-500 hidden md:table-cell whitespace-nowrap">
                    {store.location}
                  </td>
                  <td className="py-4 px-6 font-medium text-gray-800 whitespace-nowrap">
                    {store.manager}
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    <StoreStatusBadge status={store.status} />
                  </td>
                  <td className="py-4 px-6 text-center whitespace-nowrap">
                    <button
                      title="Edit Store"
                      className="p-1.5 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors border border-transparent hover:border-emerald-100"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 bg-gray-50/50 border-t border-gray-100 text-xs text-gray-500 font-medium">
          Total Stores: {filteredStores.length}
        </div>
      </div>

      <AddStoreModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddStore={handleAddStore}
      />
    </div>
  );
};

export default Stores;

