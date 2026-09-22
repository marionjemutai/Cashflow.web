import React from 'react';

export default function Button({
  children,
  type = 'button',
  variant = 'primary',
  onClick,
  disabled = false,
  className = '',
}) {
  const variants = {
    primary:
      'bg-emerald-500 hover:bg-emerald-600 text-white shadow-md shadow-emerald-600/20',
    secondary:
      'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100',
    danger:
      'bg-rose-50 text-rose-600 border border-rose-200 hover:bg-rose-100',
    dark:
      'bg-slate-900 text-white hover:bg-slate-800',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center gap-2
        px-4 py-2.5 rounded-xl
        text-sm font-semibold
        transition active:scale-95
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}