import React from 'react';

export default function Input({
  label,
  type = 'text',
  value,
  onChange,
  placeholder = '',
  required = false,
  icon: Icon,
}) {
  return (
    <div>
      {label && (
        <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">
          {label}
        </label>
      )}

      <div className="relative">
        {Icon && (
          <Icon
            size={16}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
          />
        )}

        <input
          type={type}
          required={required}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`
            w-full px-3.5 py-2.5
            bg-slate-50
            border border-slate-200
            rounded-xl text-sm
            focus:outline-none
            focus:ring-2 focus:ring-emerald-500/20
            focus:border-emerald-500
            ${Icon ? 'pl-10' : ''}
          `}
        />
      </div>
    </div>
  );
}