import React, { useState } from 'react';
import AuthLayout from '../layouts/AuthLayout';
import Input from '../component/ui/Input';

export default function Registration() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    
    if (!agreeTerms) {
      alert("You must agree to the terms and conditions");
      return;
    }
    
    console.log({ username, email, password, confirmPassword, agreeTerms });
  };

  return (
    <AuthLayout>
      <div className="flex items-center gap-2 mb-8">
        <div className="flex items-center justify-center bg-emerald-600 text-white p-2 rounded-xl shadow-md shadow-emerald-600/20">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
            <path fillRule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v14.25c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 19.125V4.875zM12 4.5a7.5 7.5 0 00-7.5 7.5 7.5 7.5 0 007.5 7.5 7.5 7.5 0 007.5-7.5 7.5 7.5 0 00-7.5-7.5zM4.75 6.75a.75.75 0 100-1.5.75.75 0 000 1.5zm0 12a.75.75 0 100-1.5.75.75 0 000 1.5zM20.25 6.75a.75.75 0 100-1.5.75.75 0 000 1.5zm0 12a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
          </svg>
        </div>
        <div>
          <span className="text-xl font-bold text-slate-900 tracking-tight block leading-none">CashFlow</span>
          <span className="text-[10px] font-semibold text-emerald-600 uppercase tracking-widest">Gateway</span>
        </div>
      </div>
      <div className="my-auto max-w-md w-full mx-auto lg:mx-0">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight mb-1">Create your account</h1>
          <p className="text-sm text-gray-500">Join us today! Fill in your details to get started.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            label="Username"
            id="username"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Input
            label="Email"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            label="Password"
            id="password"
            type="password"
            placeholder="Create a strong password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Input
            label="Confirm Password"
            id="confirmPassword"
            type="password"
            placeholder="Re-enter your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <div className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              id="agreeTerms"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              className="w-4 h-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer accent-emerald-600"
              required
            />
            <label htmlFor="agreeTerms" className="text-gray-600 cursor-pointer select-none">
              I agree to the <a href="#terms" className="font-semibold text-emerald-600 hover:text-emerald-700">Terms & Conditions</a> and <a href="#privacy" className="font-semibold text-emerald-600 hover:text-emerald-700">Privacy Policy</a>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 px-4 rounded-lg
                       shadow-md shadow-emerald-600/10 hover:shadow-emerald-700/20 active:scale-[0.99] transition-all text-sm mt-2"
          >
            Create Account
          </button>
        </form>
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            Already have an account?{' '}
            <a href="/login" className="font-semibold text-emerald-600 hover:text-emerald-700 transition-colors">
              Sign in here
            </a>
          </p>
        </div>
      </div>
      <div className="text-xs text-gray-400 mt-8 text-center lg:text-left">
        © 2026 CashFlowGateway. All rights reserved.
      </div>
    </AuthLayout>
  );
}