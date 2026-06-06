import React, { useState, useEffect } from 'react';
import financeService from '../../services/financeService';

interface APInvoice {
  _id: string;
  invoiceNumber: string;
  partyName: string;
  dueDate: string;
  totalAmount: number;
  balanceDue: number;
  status: string;
}

export const PaymentRun: React.FC = () => {
  const [invoices, setInvoices] = useState<APInvoice[]>([]);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isPaying, setIsPaying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  useEffect(() => {
    fetchInvoices();
  }, []);

  const fetchInvoices = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await financeService.getApInvoices();
      // Only show unpaid or overdue AP invoices
      setInvoices(data.filter((inv: any) => inv.type === 'AP' && (inv.status === 'Unpaid' || inv.status === 'Overdue')));
    } catch (err: any) {
      setError(err.message || 'Failed to load AP invoices');
    } finally {
      setIsLoading(false);
    }
  };

  const toggleSelection = (id: string) => {
    setSelectedIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const handleRunPayments = async () => {
    if (selectedIds.length === 0) return;
    setIsPaying(true);
    setError(null);
    setSuccessMsg(null);
    try {
      await financeService.runPayment(selectedIds);
      setSuccessMsg(`Successfully processed payment run for ${selectedIds.length} invoices.`);
      setSelectedIds([]);
      await fetchInvoices();
    } catch (err: any) {
      setError(err.message || 'Payment run failed');
    } finally {
      setIsPaying(false);
    }
  };

  const totalSelectedAmount = invoices
    .filter(inv => selectedIds.includes(inv._id))
    .reduce((sum, inv) => sum + inv.balanceDue, 0);

  return (
    <div className="flex flex-col gap-lg w-full">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="font-display text-[32px] font-extrabold text-on-surface">Payment Run</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Automate payouts matching confirmed AP invoices.</p>
        </div>
        <div className="flex gap-sm">
          <button 
            onClick={handleRunPayments}
            disabled={selectedIds.length === 0 || isPaying}
            className="flex items-center gap-xs px-md h-10 bg-primary text-white font-semibold rounded hover:bg-primary-fixed-dim transition-transform active:scale-95 duration-150 disabled:opacity-50 disabled:active:scale-100"
          >
            <span className={`material-symbols-outlined text-[20px] ${isPaying ? 'animate-spin' : ''}`}>
              {isPaying ? 'progress_activity' : 'payments'}
            </span>
            {isPaying ? 'Processing...' : `Run Payments (${selectedIds.length})`}
          </button>
        </div>
      </div>

      {error && (
        <div className="bg-error-container text-on-error-container p-md rounded-lg flex items-center gap-sm">
          <span className="material-symbols-outlined">error</span>
          <span>{error}</span>
        </div>
      )}
      
      {successMsg && (
        <div className="bg-green-100 text-[#16A34A] p-md rounded-lg flex items-center gap-sm">
          <span className="material-symbols-outlined">check_circle</span>
          <span>{successMsg}</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-gutter">
        <div className="col-span-1 bg-surface-container-low rounded-xl border border-outline-variant p-lg flex flex-col justify-center">
          <p className="font-body-md text-body-md text-on-surface-variant mb-xs">Selected Payment Total</p>
          <span className="text-[32px] font-bold text-primary">
            {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalSelectedAmount)}
          </span>
        </div>
      </div>

      <div className="bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden flex flex-col flex-1">
        <div className="overflow-x-auto custom-scrollbar flex-1">
          <table className="w-full text-left border-collapse">
            <thead className="sticky top-0 bg-surface-container-low border-b border-outline-variant z-10">
              <tr>
                <th className="p-md w-[50px] text-center">
                  <input 
                    type="checkbox" 
                    className="rounded border-outline-variant text-primary focus:ring-primary"
                    checked={invoices.length > 0 && selectedIds.length === invoices.length}
                    onChange={(e) => setSelectedIds(e.target.checked ? invoices.map(i => i._id) : [])}
                  />
                </th>
                <th className="p-md font-label-md text-label-md text-secondary">Invoice #</th>
                <th className="p-md font-label-md text-label-md text-secondary">Vendor</th>
                <th className="p-md font-label-md text-label-md text-secondary text-right">Due Date</th>
                <th className="p-md font-label-md text-label-md text-secondary text-right">Balance Due</th>
                <th className="p-md font-label-md text-label-md text-secondary text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/30">
              {isLoading ? (
                <tr>
                  <td colSpan={6} className="p-lg text-center">
                    <div className="flex flex-col items-center gap-sm">
                      <span className="material-symbols-outlined animate-spin text-primary text-[32px]">progress_activity</span>
                      <span className="font-body-md text-secondary">Loading invoices...</span>
                    </div>
                  </td>
                </tr>
              ) : invoices.length > 0 ? (
                invoices.map(inv => (
                  <tr key={inv._id} className="hover:bg-surface-container-low transition-colors">
                    <td className="p-md text-center">
                      <input 
                        type="checkbox"
                        className="rounded border-outline-variant text-primary focus:ring-primary"
                        checked={selectedIds.includes(inv._id)}
                        onChange={() => toggleSelection(inv._id)}
                      />
                    </td>
                    <td className="p-md font-code-sm text-code-sm text-primary font-bold">{inv.invoiceNumber}</td>
                    <td className="p-md font-body-md text-body-md font-semibold">{inv.partyName}</td>
                    <td className="p-md font-body-md text-body-md text-right">
                      {new Date(inv.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </td>
                    <td className="p-md font-body-md text-body-md text-right font-bold text-error">
                      {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(inv.balanceDue)}
                    </td>
                    <td className="p-md text-center">
                      <span className={`status-pill px-2 py-0.5 rounded text-[11px] font-bold ${inv.status === 'Overdue' ? 'bg-error-container text-on-error-container' : 'bg-slate-100 text-[#475569]'}`}>
                        {inv.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="p-lg text-center text-on-surface-variant font-medium">
                    No pending invoices for payment.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentRun;
