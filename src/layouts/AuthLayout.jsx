import React from 'react';

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen w-full flex bg-white font-sans antialiased selection:bg-emerald-500 selection:text-white">
      <div className="w-full lg:w-[45%] flex flex-col justify-between p-6 sm:p-12 md:p-16 xl:p-24 min-h-screen">
        {children}
      </div>
      <div className="hidden lg:flex lg:w-[55%] relative overflow-hidden bg-emerald-950">
        <div className="absolute inset-y-0 left-0 rounded-xl w-24 bg-white transform -skew-x-6 -translate-x-12 z-10 origin-top-left rounded-r-[3rem]" />
          <div className="absolute inset-y-0 left-0 rounded-xl w-24 bg-white transform -skew-x-6 -translate-x-12 z-10 origin-top-left rounded-r-[4rem]" />
        <div 
          className="absolute inset-0 bg-cover bg-center brightness-[0.85]"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1658282687011-2a6a3d55eb0c?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` 
          }} 
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/40 via-transparent to-transparent mix-blend-multiply" />
      </div>
    </div>

  );
}