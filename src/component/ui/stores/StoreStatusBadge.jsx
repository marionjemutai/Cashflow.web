import React from 'react';

export const StoreStatusBadge = ({ status }) => {
  const isCompleted = status.toLowerCase() === 'active';
  
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${
        isCompleted
          ? 'bg-emerald-50 text-emerald-600 border-emerald-200'
          : 'bg-rose-50 text-rose-600 border-rose-200'
      }`}
    >
      {status}
    </span>
  );
};