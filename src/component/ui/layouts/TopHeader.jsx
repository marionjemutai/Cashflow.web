import React from 'react';

export default function TopHeader({ setSidebarOpen }) {
  return (
    <header className="bg-white border-b border-gray-100 px-4 sm:px-6 py-4 flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center gap-3">
        <button 
          onClick={() => setSidebarOpen(true)}
          className="p-2 -ml-2 rounded-lg hover:bg-gray-100 lg:hidden text-gray-600 focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        
        <div>
          <h1 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">Welcome back, Marion</h1>
          <p className="text-xs text-gray-500 font-medium">Manager • Main Store</p>
        </div>
      </div>
      <div className="flex items-center gap-3.5">
        <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-full relative">
          <span className="absolute top-2 right-2 w-2 h-2 bg-emerald-500 rounded-full" />
          🔔
        </button>
        
      </div>
    </header>
  );
}