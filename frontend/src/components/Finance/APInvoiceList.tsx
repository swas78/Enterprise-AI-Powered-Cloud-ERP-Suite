import React, { useState } from 'react';
import financeService from '../../services/financeService';

export const APInvoiceList: React.FC = () => {
  const [apInvoiceNumber, setApInvoiceNumber] = useState('');
  const [apSupplierName, setApSupplierName] = useState('');
  const [apDueDate, setApDueDate] = useState('');
  const [apPoId, setApPoId] = useState('');
  const [apGrId, setApGrId] = useState('');
  const [apItemName, setApItemName] = useState('');
  const [apItemPrice, setApItemPrice] = useState('');
  const [apItemQty, setApItemQty] = useState('');

  const handlePostApInvoice = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!apInvoiceNumber || !apSupplierName || !apDueDate || !apPoId || !apGrId) return;

    try {
      await financeService.postApInvoice({
        invoiceNumber: apInvoiceNumber,
        supplierName: apSupplierName,
        dueDate: apDueDate,
        poId: apPoId,
        grId: apGrId,
        items: [{ 
          name: apItemName || 'FTE Resources', 
          price: Number(apItemPrice) || 1000, 
          quantity: Number(apItemQty) || 1 
        }]
      });

      alert('3-Way Match Verified! AP Invoice processed and matching checks successfully completed.');
      setApInvoiceNumber('');
      setApSupplierName('');
      setApDueDate('');
      setApPoId('');
      setApGrId('');
      setApItemName('');
      setApItemPrice('');
      setApItemQty('');
    } catch (err: any) {
      alert(err.message || 'Failed to process AP invoice');
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="glass-panel p-6 space-y-4 lg:col-span-1">
        <h3 className="text-xl font-bold text-white">AP Invoice Registration</h3>
        <form onSubmit={handlePostApInvoice} className="space-y-3.5">
          <div>
            <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1">Invoice Number</label>
            <input
              type="text"
              required
              placeholder="e.g. INV-2026-99"
              value={apInvoiceNumber}
              onChange={(e) => setApInvoiceNumber(e.target.value)}
              className="w-full p-2.5 bg-slate-900/50 rounded-lg border border-[var(--glass-border)] text-sm text-white"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1">Supplier Name</label>
            <input
              type="text"
              required
              placeholder="e.g. Intel Corp"
              value={apSupplierName}
              onChange={(e) => setApSupplierName(e.target.value)}
              className="w-full p-2.5 bg-slate-900/50 rounded-lg border border-[var(--glass-border)] text-sm text-white"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1">PO Link ID</label>
              <input
                type="text"
                required
                placeholder="e.g. PO ID"
                value={apPoId}
                onChange={(e) => setApPoId(e.target.value)}
                className="w-full p-2.5 bg-slate-900/50 rounded-lg border border-[var(--glass-border)] text-xs text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1">Goods Receipt ID</label>
              <input
                type="text"
                required
                placeholder="e.g. GR ID"
                value={apGrId}
                onChange={(e) => setApGrId(e.target.value)}
                className="w-full p-2.5 bg-slate-900/50 rounded-lg border border-[var(--glass-border)] text-xs text-white"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1">Due Date</label>
            <input
              type="date"
              required
              value={apDueDate}
              onChange={(e) => setApDueDate(e.target.value)}
              className="w-full p-2.5 bg-slate-900/50 rounded-lg border border-[var(--glass-border)] text-sm text-white"
            />
          </div>
          <div className="border-t border-[var(--glass-border)] pt-2.5 space-y-2">
            <p className="text-xs font-bold text-cyan-400">Line Item Detail</p>
            <div className="grid grid-cols-3 gap-1">
              <input
                type="text"
                placeholder="Item Description"
                value={apItemName}
                onChange={(e) => setApItemName(e.target.value)}
                className="p-2 bg-slate-900/50 rounded-lg border border-[var(--glass-border)] text-xs col-span-2 text-white"
              />
              <input
                type="number"
                placeholder="Qty"
                value={apItemQty}
                onChange={(e) => setApItemQty(e.target.value)}
                className="p-2 bg-slate-900/50 rounded-lg border border-[var(--glass-border)] text-xs col-span-1 text-white"
              />
            </div>
            <input
              type="number"
              placeholder="Price per Unit ($)"
              value={apItemPrice}
              onChange={(e) => setApItemPrice(e.target.value)}
              className="w-full p-2 bg-slate-900/50 rounded-lg border border-[var(--glass-border)] text-xs text-white"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2.5 rounded-lg text-xs font-bold tracking-wide uppercase bg-gradient-to-r from-indigo-500 to-cyan-500 text-white"
          >
            Process 3-Way Match Verification
          </button>
        </form>
      </div>

      <div className="glass-panel p-6 space-y-4 lg:col-span-2">
        <h3 className="text-xl font-bold flex items-center justify-between text-white">
          <span>AP Match & Billing Console</span>
          <span className="text-xs font-bold px-2 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded">Mock OCR Active (98% Conf)</span>
        </h3>
        <div className="space-y-4">
          <div className="p-4 bg-slate-900/30 rounded-lg border border-[var(--glass-border)] space-y-2.5 text-xs">
            <p className="font-bold text-indigo-300">System OCR Automation Rationale</p>
            <p className="text-[var(--text-secondary)]">
              The matching subsystem validates the AP invoice lines against the associated Purchase Order quantity and the Goods Receipt logs. Any price variance exceeding a ±2% margin will trigger a match warning and hold the payment block.
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-xs font-bold text-[var(--text-secondary)]">Simulated AP Invoice Pipeline</p>
            {[
              { num: 'INV-2026-88', supplier: 'AMD Semiconductors', amount: '$45,000.00', status: 'Matched', po: 'PO-082', gr: 'GR-112' },
              { num: 'INV-2026-89', supplier: 'Nvidia Corp', amount: '$120,000.00', status: 'Pending Approval', po: 'PO-083', gr: 'GR-113' }
            ].map((item, idx) => (
              <div key={idx} className="p-3 bg-slate-900/50 border border-[var(--glass-border)] rounded-lg flex justify-between items-center text-xs">
                <div>
                  <p className="font-bold text-white">{item.num} - {item.supplier}</p>
                  <p className="text-[var(--text-muted)] text-[10px] mt-0.5">PO: {item.po} | GR: {item.gr}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold font-mono text-cyan-300">{item.amount}</p>
                  <span className={`px-2 py-0.5 rounded text-[9px] font-bold mt-1 inline-block ${
                    item.status === 'Matched' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'
                  }`}>{item.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default APInvoiceList;
