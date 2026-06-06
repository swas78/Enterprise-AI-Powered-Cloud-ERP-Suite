import React, { useState, useEffect } from 'react';
import supplyChainService from '../../services/supplyChainService';

interface VendorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const VendorModal: React.FC<VendorModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setName('');
      setEmail('');
      setCode(`VEND-${Math.floor(1000 + Math.random() * 9000)}`);
      setError(null);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !code) {
      setError('Please fill out all required fields');
      return;
    }

    setIsLoading(true);
    setError(null);
    try {
      await supplyChainService.registerVendor({
        name,
        email,
        code,
        status: 'Active',
      });
      onSuccess();
      onClose();
    } catch (err: any) {
      setError(err.message || 'Failed to register vendor');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-surface rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="flex justify-between items-center p-6 border-b border-outline-variant">
          <h3 className="font-display text-xl font-bold text-on-surface">Register Vendor</h3>
          <button onClick={onClose} className="text-on-surface-variant hover:text-on-surface transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
          {error && (
            <div className="bg-error-container text-on-error-container p-3 rounded-lg text-sm flex items-start gap-2">
              <span className="material-symbols-outlined text-[18px]">error</span>
              <span>{error}</span>
            </div>
          )}
          
          <div className="flex flex-col gap-1">
            <label className="font-label-md text-secondary">Vendor Name <span className="text-error">*</span></label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-10 bg-surface-container-lowest border border-outline-variant rounded-lg px-3 text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none"
              placeholder="e.g. Global Logistics Corp"
              disabled={isLoading}
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-label-md text-secondary">Vendor Email <span className="text-error">*</span></label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-10 bg-surface-container-lowest border border-outline-variant rounded-lg px-3 text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none"
              placeholder="e.g. contact@vendor.com"
              disabled={isLoading}
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-label-md text-secondary">Vendor Code <span className="text-error">*</span></label>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="h-10 bg-surface-container-lowest border border-outline-variant rounded-lg px-3 text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none"
              disabled={isLoading}
              required
            />
          </div>

          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 font-semibold text-secondary hover:bg-surface-container-low rounded-lg transition-colors"
              disabled={isLoading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 font-semibold bg-primary text-white hover:bg-primary-fixed-dim rounded-lg transition-colors flex items-center gap-2 disabled:opacity-70"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="material-symbols-outlined animate-spin text-[18px]">progress_activity</span>
              ) : (
                <span className="material-symbols-outlined text-[18px]">person_add</span>
              )}
              {isLoading ? 'Registering...' : 'Register Vendor'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VendorModal;
