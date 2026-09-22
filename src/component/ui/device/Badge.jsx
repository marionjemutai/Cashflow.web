import React from 'react';

export function Badge({ status }) {
  const isOnline = status === 'Online';

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${
        isOnline
          ? 'bg-emerald-100/80 text-emerald-700 border border-emerald-200'
          : 'bg-rose-100/80 text-rose-600 border border-rose-200'
      }`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
          isOnline ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'
        }`}
      />

      {status}
    </span>
  );
}