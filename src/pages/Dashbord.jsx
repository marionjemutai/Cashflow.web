import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../component/ui/layouts/Sidebar';
import TopHeader from '../component/ui/layouts/TopHeader';
import StatCard from '../component/ui/dashboard/StatCard';
import TopProducts from '../component/ui/dashboard/TopProducts';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  return (
       <div className="flex h-screen w-full bg-[#F8FAFC] overflow-hidden">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      <div className="flex-1 flex flex-col h-full overflow-y-auto">
        <TopHeader setSidebarOpen={setSidebarOpen} />

        <main className="p-4 sm:p-6 space-y-6 max-w-[1600px] w-full mx-auto">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-slate-800 uppercase text-xs">
              Overview
            </h2>
          </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            
            <div onClick={() => navigate('/reports')} className="cursor-pointer">
              <StatCard
                title="Today's Sales"
                value="KSh 45,230.00"
                change="18.4%"
              />
            </div>

            <div onClick={() => navigate('/transactions')} className="cursor-pointer">
              <StatCard
                title="Transactions"
                value="128"
                change="12.5%"
              />
            </div>

            <div onClick={() => navigate('/inventory')} className="cursor-pointer">
              <StatCard
                title="Products"
                value="532"
                change="4.2%"
              />
            </div>

            <div onClick={() => navigate('/inventory')} className="cursor-pointer">
              <StatCard
                title="Low Stock Items"
                value="23"
                isWarning
              />
            </div>

          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

            <div className="xl:col-span-2 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-50">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Sales Overview
                    </h3>
                    <p className="text-xs text-gray-400 mt-0.5">
                      Showing transactional velocity across days
                    </p>
                  </div>

                  <div className="flex bg-slate-100 p-1 rounded-lg text-xs font-semibold text-slate-600">
                    <button className="px-3 py-1.5 rounded-md hover:bg-white">
                      7D
                    </button>
                    <button className="px-3 py-1.5 rounded-md bg-white text-slate-900 shadow-sm">
                      30D
                    </button>
                    <button className="px-3 py-1.5 rounded-md hover:bg-white">
                      90D
                    </button>
                  </div>
                </div>

                <div className="h-64 flex items-end justify-between gap-2 pt-6 relative">
                  <div className="absolute inset-x-0 top-1/4 border-t border-gray-100 border-dashed" />
                  <div className="absolute inset-x-0 top-2/4 border-t border-gray-100 border-dashed" />
                  <div className="absolute inset-x-0 top-3/4 border-t border-gray-100 border-dashed" />

                  <div className="w-full bg-emerald-50 h-[40%] rounded-t-md" />
                  <div className="w-full bg-emerald-100 h-[55%] rounded-t-md" />
                  <div className="w-full bg-emerald-50 h-[35%] rounded-t-md" />
                  <div className="w-full bg-emerald-200 h-[75%] rounded-t-md" />
                  <div className="w-full bg-emerald-600 h-[90%] rounded-t-md" />
                  <div className="w-full bg-emerald-100 h-[60%] rounded-t-md" />
                </div>
              </div>

              <div className="flex justify-between text-[10px] text-gray-400 font-bold pt-4 px-1">
                <span>May 10</span>
                <span>May 15</span>
                <span>May 20</span>
                <span>May 25</span>
                <span>Jun 4</span>
              </div>
            </div>

            <div onClick={() => navigate('/inventory')} className="cursor-pointer">
              <TopProducts />
            </div>
          </div>

          <footer className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-4 text-xs text-gray-400 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-medium text-slate-600">Status: Online</span>
              <span className="text-gray-300">|</span>
              <span>Last sync: 2 minutes ago</span>
            </div>

            <div className="font-medium text-slate-500">
              Main Store • Terminal 01
            </div>
          </footer>

        </main>
      </div>
    </div>
  );
}