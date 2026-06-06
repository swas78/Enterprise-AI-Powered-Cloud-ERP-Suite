import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';

interface RegisterFormProps {
  onToggleRegister: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onToggleRegister }) => {
  const { register, loading } = useAuth();
  const [tenantName, setTenantName] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!tenantName || !name || !email || !password) return;
    try {
      await register(email, password, name, tenantName);
    } catch (err) {
      // Error handled by AuthContext
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-lg">
      <div className="space-y-xs">
        <label className="font-label-md text-label-md text-on-surface-variant">ORGANIZATION NAME (TENANT)</label>
        <div className="relative">
          <input
            type="text"
            required
            placeholder="e.g. Acme Corp"
            value={tenantName}
            onChange={(e) => setTenantName(e.target.value)}
            className="w-full h-[48px] px-md bg-surface-container-low border border-outline-variant rounded-lg focus:ring-0 focus:border-primary transition-all duration-150 outline-none text-body-md"
          />
          <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">corporate_fare</span>
        </div>
      </div>

      <div className="space-y-xs">
        <label className="font-label-md text-label-md text-on-surface-variant">FULL NAME</label>
        <div className="relative">
          <input
            type="text"
            required
            placeholder="e.g. John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full h-[48px] px-md bg-surface-container-low border border-outline-variant rounded-lg focus:ring-0 focus:border-primary transition-all duration-150 outline-none text-body-md"
          />
          <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">person</span>
        </div>
      </div>

      <div className="space-y-xs">
        <label className="font-label-md text-label-md text-on-surface-variant">CORPORATE EMAIL</label>
        <div className="relative">
          <input
            type="email"
            required
            placeholder="name@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-[48px] px-md bg-surface-container-low border border-outline-variant rounded-lg focus:ring-0 focus:border-primary transition-all duration-150 outline-none text-body-md"
          />
          <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">alternate_email</span>
        </div>
      </div>

      <div className="space-y-xs">
        <label className="font-label-md text-label-md text-on-surface-variant">PASSWORD</label>
        <div className="relative">
          <input
            type="password"
            required
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-[48px] px-md bg-surface-container-low border border-outline-variant rounded-lg focus:ring-0 focus:border-primary transition-all duration-150 outline-none text-body-md"
          />
          <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">lock</span>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full h-[48px] bg-primary-container text-white font-label-md rounded-lg hover:bg-[#0B7DFF] active:scale-[0.98] transition-all duration-150 flex items-center justify-center gap-sm shadow-sm"
      >
        {loading ? 'Creating Organization...' : 'Create Account'}
      </button>

      <div className="text-center pt-md border-t border-outline-variant/30 mt-md">
        <button
          type="button"
          onClick={onToggleRegister}
          className="text-xs text-primary font-semibold hover:underline bg-transparent border-0 cursor-pointer"
        >
          Already registered? Sign In
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
