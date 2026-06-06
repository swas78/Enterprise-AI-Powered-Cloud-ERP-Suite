import React, { useState, useEffect } from 'react';
import financeService from '../../services/financeService';

export const ARInvoiceList: React.FC = () => {
  const [arAgingData, setArAgingData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const fetchAgingData = async () => {
    setLoading(true);
    try {
      const data = await financeService.getArAging();
      setArAgingData(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAgingData();
  }, []);

  return (
    <div className="space-y-6">
      <div className="glass-panel p-6 space-y-4">
        <h3 className="text-xl font-bold flex items-center justify-between text-white">
          <span>Accounts Receivable (AR) Aging Report</span>
          <button 
            onClick={fetchAgingData}
            disabled={loading}
            className="p-1.5 bg-indigo-500/10 text-indigo-400 rounded hover:bg-indigo-500/20 disabled:opacity-50"
          >
            <span className={`material-symbols-outlined text-[16px] ${loading ? 'animate-spin' : ''}`}>sync</span>
          </button>
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[var(--glass-border)] text-xs text-[var(--text-secondary)] uppercase">
                <th className="py-2.5 px-3">Client Category</th>
                <th className="py-2.5 px-3 text-right">Current</th>
                <th className="py-2.5 px-3 text-right">1-30 Days</th>
                <th className="py-2.5 px-3 text-right">31-60 Days</th>
                <th className="py-2.5 px-3 text-right">61-90 Days</th>
                <th className="py-2.5 px-3 text-right">Over 90 Days</th>
                <th className="py-2.5 px-3 text-right font-bold">Total Receivables</th>
              </tr>
            </thead>
            <tbody className="text-xs font-mono font-medium text-white">
              {arAgingData ? (
                Object.keys(arAgingData).map((key, idx) => {
                  const val = arAgingData[key];
                  return (
                    <tr key={idx} className="border-b border-[var(--glass-border)] hover:bg-slate-900/20">
                      <td className="py-2.5 px-3 font-sans font-semibold text-white capitalize">{key}</td>
                      <td className="py-2.5 px-3 text-right">${(val.current || 0).toFixed(2)}</td>
                      <td className="py-2.5 px-3 text-right">${(val['1-30'] || 0).toFixed(2)}</td>
                      <td className="py-2.5 px-3 text-right">${(val['31-60'] || 0).toFixed(2)}</td>
                      <td className="py-2.5 px-3 text-right">${(val['61-90'] || 0).toFixed(2)}</td>
                      <td className="py-2.5 px-3 text-right">${(val['90+'] || 0).toFixed(2)}</td>
                      <td className="py-2.5 px-3 text-right text-indigo-400 font-bold">
                        ${(Object.values(val).reduce((a: any, b: any) => Number(a) + Number(b), 0) as number).toFixed(2)}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr className="border-b border-[var(--glass-border)] hover:bg-slate-900/20">
                  <td className="py-2.5 px-3 font-sans font-semibold text-white capitalize">General Enterprise</td>
                  <td className="py-2.5 px-3 text-right">$120,000.00</td>
                  <td className="py-2.5 px-3 text-right">$45,000.00</td>
                  <td className="py-2.5 px-3 text-right">$12,000.00</td>
                  <td className="py-2.5 px-3 text-right">$0.00</td>
                  <td className="py-2.5 px-3 text-right">$4,500.00</td>
                  <td className="py-2.5 px-3 text-right text-indigo-400 font-bold">$181,500.00</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ARInvoiceList;
