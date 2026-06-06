import React, { useState } from 'react';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import useAuth from '../../hooks/useAuth';

interface LoginFormProps {
  onToggleRegister: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onToggleRegister }) => {
  const { login, loading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    try {
      await login(email, password);
    } catch (err) {
      // Error handled by AuthContext
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-1.5">
        <label className="block text-xs font-semibold text-[var(--text-secondary)]">
          Email Address
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[var(--text-muted)]">
            <Mail className="w-4 h-4" />
          </div>
          <input
            type="email"
            required
            placeholder="name@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-900/50 rounded-xl border border-[var(--glass-border)] text-sm text-white focus:outline-none focus:border-indigo-500"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="block text-xs font-semibold text-[var(--text-secondary)]">
          Password
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[var(--text-muted)]">
            <Lock className="w-4 h-4" />
          </div>
          <input
            type="password"
            required
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-900/50 rounded-xl border border-[var(--glass-border)] text-sm text-white focus:outline-none focus:border-indigo-500"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 rounded-xl text-sm font-bold tracking-wide uppercase bg-gradient-to-r from-indigo-500 to-cyan-500 text-white transition-all duration-300 hover:opacity-90 disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {loading ? 'Processing...' : 'Authenticate Credentials'}
        <ArrowRight className="w-4 h-4" />
      </button>

      <div className="text-center pt-2">
        <button
          type="button"
          onClick={onToggleRegister}
          className="text-xs text-indigo-400 hover:underline bg-transparent border-0 cursor-pointer"
        >
          Need an organization? Register Tenant
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
