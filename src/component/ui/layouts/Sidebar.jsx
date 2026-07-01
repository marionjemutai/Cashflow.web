import React, { useState } from "react";

export default function Sidebar({ isOpen, setIsOpen }) {
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const menuItems = [
    { icon: "📊", label: "Dashboard" },
    { icon: "🛒", label: "POS" },
    { icon: "🧾", label: "Transactions" },
    { icon: "📦", label: "Inventory" },
    { icon: "📈", label: "Reports" },
    { icon: "🏪", label: "Stores" },
    { icon: "📱", label: "Devices" },
    { icon: "👥", label: "Users" },
    { icon: "⚙️", label: "Settings" },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-[#00072D] text-gray-300 flex flex-col justify-between
          transform transition-transform duration-300 ease-in-out
          lg:translate-x-0 lg:static lg:h-screen
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div>
          <div className="p-6 flex items-center justify-between border-b border-emerald-950/50">
            <div className="flex items-center gap-2.5">
              <div className="bg-emerald-600 text-white p-1.5 rounded-lg">
                <span className="text-xl font-bold">CF</span>
              </div>

              <div>
                <h2 className="text-md font-bold text-white">CashFlow</h2>
                <span className="text-[9px] uppercase tracking-widest text-emerald-500 font-semibold">
                  Gateway
                </span>
              </div>
            </div>
          </div>

          <nav className="p-4 space-y-1">
            {menuItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveMenu(item.label)}
                className={`
                  w-full flex items-center gap-3.5 px-4 py-3 rounded-xl font-medium text-sm transition-all
                  ${
                    activeMenu === item.label
                      ? "bg-emerald-600 text-white shadow-md shadow-emerald-700/20"
                      : "hover:bg-emerald-950/40 text-gray-400 hover:text-gray-200"
                  }
                `}
              >
                <span className="text-base">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-4 border-t border-emerald-950/50">
          <button className="w-full flex items-center gap-3.5 px-4 py-3 text-sm font-medium text-gray-400 hover:text-red-400 hover:bg-red-950/20 rounded-xl transition-colors">
            <span>🚪</span>
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}