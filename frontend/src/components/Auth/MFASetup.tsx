import React, { useState } from 'react';
import { Key, ArrowRight } from 'lucide-react';
import useAuth from '../../hooks/useAuth';

export const MFASetup: React.FC = () => {
  const { verifyMfa } = useAuth();
  const [mfaCode, setMfaCode] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await verifyMfa(mfaCode);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="text-center space-y-2">
        <h3 className="text-lg font-bold text-white">Multi-Factor Authentication</h3>
        <p className="text-xs text-[var(--text-secondary)]">
          Secure token validation required. Enter the 6-digit verification code from your authenticator app (e.g. 123456).
        </p>
      </div>

      <div className="space-y-1.5">
        <label className="block text-xs font-semibold text-[var(--text-secondary)]">
          MFA Passcode
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[var(--text-muted)]">
            <Key className="w-4 h-4" />
          </div>
          <input
            type="text"
            maxLength={6}
            required
            placeholder="e.g. 123456"
            value={mfaCode}
            onChange={(e) => setMfaCode(e.target.value.replace(/\D/g, ''))}
            className="w-full pl-10 pr-4 py-3 bg-slate-900/50 rounded-xl border border-[var(--glass-border)] text-sm text-center tracking-[0.5em] font-mono text-indigo-300 focus:outline-none focus:border-indigo-500"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-3 rounded-xl text-sm font-bold tracking-wide uppercase bg-gradient-to-r from-indigo-500 to-cyan-500 text-white transition-all duration-300 hover:opacity-90 flex items-center justify-center gap-2"
      >
        Verify & Complete Sign In
        <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
};

export default MFASetup;
