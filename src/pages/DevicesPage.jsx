import React, { useState } from 'react';

import { useDevices } from '../hooks/useDevices';
import { DeviceTable } from '../component/ui/device/DeviceTable';
import { RegisterDeviceModal } from '../component/ui/device/RegisterDeviceModal';

import { Button } from '../component/ui/device/Button';
import Sidebar from '../component/ui/layouts/Sidebar';
import TopHeader from '../component/ui/layouts/TopHeader';

import {
  Lock,
  Search,
  SlidersHorizontal,
} from 'lucide-react';

export default function DevicesPage() {
  const {
    devices,
    totalCount,
    searchTerm,
    setSearchTerm,
    statusFilter,
    setStatusFilter,
    addDevice,
    deleteDevice,
    toggleLinkDevice,
  } = useDevices();

  const [isModalOpen, setIsModalOpen] =
    useState(false);
  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  return (
    <div className="flex h-screen w-full bg-[#F8FAFC] overflow-hidden">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      <div className="flex-1 flex flex-col h-full overflow-y-auto">
        <TopHeader setSidebarOpen={setSidebarOpen} />

        <main className="p-4 md:p-8 max-w-7xl mx-auto w-full">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">
            Devices
          </h1>

          <p className="text-sm text-slate-500 mt-1">
            Manage hardware POS terminals and connectivity
          </p>
        </div>

        <Button
          onClick={() => setIsModalOpen(true)}
        >
          <Lock
            size={15}
            className="mr-2"
          />

          Register Device
        </Button>
      </div>

      {/* Device Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Search and Filters */}
        <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row gap-3 justify-between items-center">
          <div className="relative w-full sm:w-80">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search device name or store..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
            />
          </div>

          <div className="flex items-center gap-1.5 w-full sm:w-auto">
            <SlidersHorizontal
              size={15}
              className="text-slate-400 mr-1"
            />

            {['All', 'Online', 'Offline'].map(
              (status) => (
                <button
                  key={status}
                  onClick={() =>
                    setStatusFilter(status)
                  }
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                    statusFilter === status
                      ? 'bg-slate-900 text-white'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {status}
                </button>
              )
            )}
          </div>
        </div>

        {/* Table */}
        <DeviceTable
          devices={devices}
          onDelete={deleteDevice}
          onToggleLink={toggleLinkDevice}
        />

        <div className="p-4 bg-slate-50 border-t border-slate-100 text-sm text-slate-700 font-semibold">
          Total Devices: {totalCount}
        </div>
      </div>

      <RegisterDeviceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onRegister={addDevice}
      />
        </main>
      </div>
    </div>
  );
}