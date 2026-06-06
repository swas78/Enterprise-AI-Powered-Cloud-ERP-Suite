import React from 'react';

export const PurchaseOrderForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Purchase Requisition draft registered.');
  };

  return (
    <div className="glass-panel p-6 space-y-4">
      <h3 className="text-xl font-bold text-white">Create Purchase Requisition</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1">Supplier Selection</label>
          <input
            type="text"
            required
            placeholder="e.g. AMD Semiconductors"
            className="w-full p-2.5 bg-slate-900/50 rounded-lg border border-[var(--glass-border)] text-sm text-white"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1">Total Est Amount ($)</label>
          <input
            type="number"
            required
            placeholder="e.g. 50000"
            className="w-full p-2.5 bg-slate-900/50 rounded-lg border border-[var(--glass-border)] text-sm text-white"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2.5 rounded-lg text-xs font-bold bg-gradient-to-r from-indigo-500 to-cyan-500 text-white"
        >
          Initialize PO Draft
        </button>
      </form>
    </div>
  );
};

export default PurchaseOrderForm;
