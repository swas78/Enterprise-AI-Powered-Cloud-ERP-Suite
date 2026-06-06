import React, { useState, useEffect } from 'react';
import supplyChainService from '../../services/supplyChainService';

interface ReceiveGoodsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const ReceiveGoodsModal: React.FC<ReceiveGoodsModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [sku, setSku] = useState('');
  const [quantity, setQuantity] = useState('');
  const [inventory, setInventory] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      fetchInventory();
      setSku('');
      setQuantity('');
      setError(null);
    }
  }, [isOpen]);

  const fetchInventory = async () => {
    try {
      const data = await supplyChainService.getInventory();
      setInventory(data);
      if (data.length > 0) setSku(data[0].sku);
    } catch (err: any) {
      console.error('Failed to load inventory for selection', err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!sku || !quantity) {
      setError('Please fill out all required fields');
      return;
    }

    setIsLoading(true);
    setError(null);
    try {
      await supplyChainService.receiveGoods({
        poNumber: `PO-${Math.floor(1000 + Math.random() * 9000)}`,
        itemsReceived: [{ sku, quantityReceived: Number(quantity), acceptedQuantity: Number(quantity) }]
      });
      onSuccess();
      onClose();
    } catch (err: any) {
      setError(err.message || 'Failed to receive goods');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-surface rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="flex justify-between items-center p-6 border-b border-outline-variant">
          <h3 className="font-display text-xl font-bold text-on-surface">Receive Goods</h3>
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
            <label className="font-label-md text-secondary">Item SKU <span className="text-error">*</span></label>
            <select
              value={sku}
              onChange={(e) => setSku(e.target.value)}
              className="h-10 bg-surface-container-lowest border border-outline-variant rounded-lg px-3 text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none"
              disabled={isLoading || inventory.length === 0}
              required
            >
              {inventory.length === 0 && <option value="">Loading items...</option>}
              {inventory.map(item => (
                <option key={item._id} value={item.sku}>{item.sku} - {item.description}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-label-md text-secondary">Quantity Received <span className="text-error">*</span></label>
            <input
              type="number"
              min="1"
              step="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="h-10 bg-surface-container-lowest border border-outline-variant rounded-lg px-3 text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none"
              placeholder="e.g. 50"
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
                <span className="material-symbols-outlined text-[18px]">inventory_2</span>
              )}
              {isLoading ? 'Processing...' : 'Receive Goods'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReceiveGoodsModal;
