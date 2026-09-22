import React from 'react';
import {
  Eye,
  Trash2,
  ShieldAlert,
} from 'lucide-react';

export default function UserTable({
  users,
  onView,
  onDelete,
}) {
  return (
    <div className="hidden md:block overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider bg-slate-50/80">
            <th className="py-3.5 px-6">
              Full Name
            </th>

            <th className="py-3.5 px-6">
              Role
            </th>

            <th className="py-3.5 px-6">
              Store
            </th>

            <th className="py-3.5 px-6">
              Status
            </th>

            <th className="py-3.5 px-6 text-right">
              Actions
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-100 text-sm">
          {users.length > 0 ? (
            users.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-slate-50/60 transition"
              >
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-slate-200 text-slate-700 font-bold flex items-center justify-center text-xs">
                      {user.name
                        .split(' ')
                        .map((name) => name[0])
                        .join('')}
                    </div>

                    <div>
                      <div className="font-bold text-slate-900">
                        {user.name}
                      </div>

                      <div className="text-xs text-slate-400">
                        {user.email}
                      </div>
                    </div>
                  </div>
                </td>

                <td className="py-4 px-6">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                    {user.role}
                  </span>
                </td>

                <td className="py-4 px-6 font-medium text-slate-700">
                  {user.store}
                </td>

                <td className="py-4 px-6">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700 border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full mr-1.5 bg-emerald-500 animate-pulse" />
                    {user.status}
                  </span>
                </td>

                <td className="py-4 px-6 text-right">
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => onView(user)}
                      className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100"
                      title="View User"
                    >
                      <Eye size={16} />
                    </button>

                    <button
                      onClick={() => onDelete(user.id)}
                      className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-rose-50 hover:text-rose-600"
                      title="Delete User"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="5"
                className="py-12 text-center"
              >
                <ShieldAlert
                  size={32}
                  className="mx-auto mb-2 text-slate-300"
                />

                <p className="font-medium text-slate-600">
                  No users found matching filters
                </p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}