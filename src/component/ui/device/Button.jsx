import React from 'react';

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-xl transition duration-150 active:scale-95 disabled:opacity-50';

  const variants = {
    primary:
      'bg-[#10b981] hover:bg-[#059669] text-white shadow-md shadow-emerald-600/20',
    secondary:
      'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200',
    outline:
      'border border-slate-200 text-slate-600 hover:bg-slate-50',
    danger:
      'bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-5 py-2.5 text-base',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}