import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar({ isOpen, setIsOpen }) {
  const location = useLocation();

  const menuItems = [
    { icon: "📊", label: "Dashboard", path: "/dashboard" },
    { icon: "🛒", label: "POS", path: "/pos" },
    { icon: "🧾", label: "Transactions", path: "/transactions" },
    { icon: "📦", label: "Inventory", path: "/inventory" },
    { icon: "📈", label: "Reports", path: "/reports" },
    { icon: "🏪", label: "Stores", path: "/stores" },
    { icon: "📱", label: "Devices", path: "/devices" },
    { icon: "👥", label: "Users", path: "/users" },
    { icon: "⚙️", label: "Settings", path: "/settings" },
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
          {/* Logo */}
          <div className="p-6 flex items-center justify-between border-b border-emerald-950/50">
            <div className="flex items-center gap-2.5">
              <div className="bg-emerald-600 text-white p-1.5 rounded-lg">
                <span className="text-xl font-bold">CF</span>
              </div>

              <div>
                <h2 className="text-md font-bold text-white tracking-tight leading-none">
                  CashFlow
                </h2>
                <span className="text-[9px] uppercase tracking-widest text-emerald-500 font-semibold">
                  Gateway
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden p-1 text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          {/* Menu */}
          <nav className="p-4 space-y-1">
            {menuItems.map((item, idx) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={idx}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`
                    flex items-center gap-3.5 px-4 py-3 rounded-xl font-medium text-sm transition-all
                    ${
                      isActive
                        ? "bg-emerald-600 text-white shadow-md shadow-emerald-700/20"
                        : "hover:bg-emerald-950/40 text-gray-400 hover:text-gray-200"
                    }
                  `}
                >
                  <span className="text-base">{item.icon}</span>
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Logout */}
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