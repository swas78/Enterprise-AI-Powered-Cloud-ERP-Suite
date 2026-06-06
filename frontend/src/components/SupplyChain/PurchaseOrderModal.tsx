import React, { useState, useEffect } from 'react';
import supplyChainService from '../../services/supplyChainService';

interface PurchaseOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const PurchaseOrderModal: React.FC<PurchaseOrderModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [vendorId, setVendorId] = useState('');
  const [amount, setAmount] = useState('');
  const [vendors, setVendors] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      fetchVendors();
      setVendorId('');
      setAmount('');
      setError(null);
    }
  }, [isOpen]);

  const fetchVendors = async () => {
    try {
      const data = await supplyChainService.getVendors();
      setVendors(data);
      if (data.length > 0) setVendorId(data[0]._id);
    } catch (err: any) {
      console.error('Failed to load vendors', err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!vendorId || !amount) {
      setError('Please fill out all required fields');
      return;
    }

    setIsLoading(true);
    setError(null);
    try {
      await supplyChainService.createPurchaseOrder({
        vendorId,
        items: [{ sku: 'SYS-ITEM', description: 'General Item', quantity: 1, unitPrice: Number(amount) }],
        totalAmount: Number(amount),
        status: 'Draft',
      });
      onSuccess();
      onClose();
    } catch (err: any) {
      setError(err.message || 'Failed to create purchase order');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-surface rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="flex justify-between items-center p-6 border-b border-outline-variant">
          <h3 className="font-display text-xl font-bold text-on-surface">New Purchase Order</h3>
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
            <label className="font-label-md text-secondary">Vendor <span className="text-error">*</span></label>
            <select
              value={vendorId}
              onChange={(e) => setVendorId(e.target.value)}
              className="h-10 bg-surface-container-lowest border border-outline-variant rounded-lg px-3 text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none"
              disabled={isLoading || vendors.length === 0}
              required
            >
              {vendors.length === 0 && <option value="">Loading vendors...</option>}
              {vendors.map(v => (
                <option key={v._id} value={v._id}>{v.name}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-label-md text-secondary">Total Amount (USD) <span className="text-error">*</span></label>
            <input
              type="number"
              min="0"
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="h-10 bg-surface-container-lowest border border-outline-variant rounded-lg px-3 text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none"
              placeholder="e.g. 5000.00"
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
                <span className="material-symbols-outlined text-[18px]">save</span>
              )}
              {isLoading ? 'Creating...' : 'Create PO'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PurchaseOrderModal;
