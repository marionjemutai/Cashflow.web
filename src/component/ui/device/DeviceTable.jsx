import React from 'react';

import { Badge } from './Badge';

import {
  Link2,
  Unlink,
  Trash2,
} from 'lucide-react';

export function DeviceTable({
  devices,
  onDelete,
  onToggleLink,
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-slate-100 bg-slate-50/80 text-slate-500 text-xs uppercase font-semibold">
            <th className="py-3.5 px-6">
              Device Name
            </th>

            <th className="py-3.5 px-6">
              Store
            </th>

            <th className="py-3.5 px-6">
              Status
            </th>

            <th className="py-3.5 px-6">
              Last Seen
            </th>

            <th className="py-3.5 px-6 text-right">
              Actions
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-100 text-sm">
          {devices.map((device) => (
            <tr
              key={device.id}
              className="hover:bg-slate-50/80 transition"
            >
              <td className="py-4 px-6 font-bold text-slate-800">
                {device.name}
              </td>

              <td className="py-4 px-6 text-slate-700">
                {device.store}
              </td>

              <td className="py-4 px-6">
                <Badge status={device.status} />
              </td>

              <td className="py-4 px-6 text-slate-600">
                {device.lastSeen}
              </td>

              <td className="py-4 px-6 text-right">
                <div className="flex items-center justify-end gap-2">
                  <button
                    onClick={() =>
                      onToggleLink(device.id)
                    }
                    className="p-1.5 rounded-lg border border-slate-200 text-slate-500 hover:text-emerald-600 hover:bg-emerald-50"
                  >
                    {device.linked ? (
                      <Link2 size={14} />
                    ) : (
                      <Unlink size={14} />
                    )}
                  </button>

                  <button
                    onClick={() =>
                      onDelete(device.id)
                    }
                    className="p-1.5 rounded-lg border border-slate-200 text-slate-500 hover:text-rose-600 hover:bg-rose-50"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}