import React, { useState } from 'react';
import {
  Plus,
  Search,
  SlidersHorizontal,
} from 'lucide-react';

import Button from '../component/ui/users/Button';
import UserTable from '../component/ui/users/UserTable';
import AddUserModal from '../component/ui/users/AddUserModal';
import ViewUserModal from '../component/ui/users/ViewUserModal';
import { useUsers } from '../hooks/useUsers';
import Sidebar from '../component/ui/layouts/Sidebar';
import TopHeader from '../component/ui/layouts/TopHeader';

export default function UsersPage({
  showNotification = () => {},
}) {
  const {
    users,
    totalCount,
    searchTerm,
    setSearchTerm,
    roleFilter,
    setRoleFilter,
    addUser,
    deleteUser,
  } = useUsers();

  const [isAddUserOpen, setIsAddUserOpen] =
    useState(false);

  const [viewingUser, setViewingUser] =
    useState(null);

  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  const handleAddUser = (user) => {
    addUser(user);
    showNotification('User added successfully');
  };

  const handleDeleteUser = (id) => {
    deleteUser(id);
    showNotification('User deleted');
  };

  return (
    <div className="flex h-screen w-full bg-[#F8FAFC] overflow-hidden">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      <div className="flex-1 flex flex-col h-full overflow-y-auto">
        <TopHeader setSidebarOpen={setSidebarOpen} />

        <main className="p-4 md:p-8 max-w-7xl mx-auto w-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            Users
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Manage system operators, branch administrators, and cashiers
          </p>
        </div>

        <Button
          onClick={() => setIsAddUserOpen(true)}
        >
          <Plus size={18} />
          Add User
        </Button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row gap-3 justify-between items-center">
          <div className="relative w-full sm:w-80">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search user name or branch..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
            />
          </div>

          <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto">
            <SlidersHorizontal
              size={15}
              className="text-slate-400 mr-1"
            />

            {[
              'All',
              'ADMIN',
              'MANAGER',
              'CASHIER',
            ].map((role) => (
              <button
                key={role}
                onClick={() =>
                  setRoleFilter(role)
                }
                className={`
                  px-3 py-1.5 rounded-lg
                  text-xs font-semibold
                  shrink-0
                  ${
                    roleFilter === role
                      ? 'bg-slate-900 text-white'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                  }
                `}
              >
                {role}
              </button>
            ))}
          </div>
        </div>

        <UserTable
          users={users}
          onView={setViewingUser}
          onDelete={handleDeleteUser}
        />

        <div className="block md:hidden p-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="border-b border-slate-100 py-4"
            >
              <div className="flex justify-between">
                <div>
                  <h4 className="font-bold text-slate-900">
                    {user.name}
                  </h4>

                  <p className="text-xs text-slate-500">
                    {user.email}
                  </p>
                </div>

                <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">
                  {user.status}
                </span>
              </div>

              <div className="mt-3 text-xs text-slate-600">
                Role:{' '}
                <strong>{user.role}</strong>
                {' · '}
                Store:{' '}
                <strong>{user.store}</strong>
              </div>

              <div className="mt-3 flex justify-end gap-2">
                <button
                  onClick={() =>
                    setViewingUser(user)
                  }
                  className="px-3 py-1.5 border rounded-lg text-xs"
                >
                  View
                </button>

                <button
                  onClick={() =>
                    handleDeleteUser(user.id)
                  }
                  className="px-3 py-1.5 border border-rose-200 text-rose-600 bg-rose-50 rounded-lg text-xs"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 bg-slate-50/80 border-t border-slate-100 text-sm text-slate-700 font-semibold flex justify-between">
          <span>
            Total System Users:{' '}
            <strong>{totalCount}</strong>
          </span>

          <span className="text-xs text-slate-500">
            User Management
          </span>
        </div>
      </div>

      <AddUserModal
        isOpen={isAddUserOpen}
        onClose={() => setIsAddUserOpen(false)}
        onAdd={handleAddUser}
      />

      <ViewUserModal
        user={viewingUser}
        onClose={() => setViewingUser(null)}
      />
        </main>
      </div>
    </div>
  );
}