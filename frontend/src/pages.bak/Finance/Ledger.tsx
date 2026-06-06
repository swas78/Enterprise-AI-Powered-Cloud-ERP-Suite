import React, { useState } from 'react';
import GeneralLedger from '../../components/Finance/GeneralLedger';
import APInvoiceList from '../../components/Finance/APInvoiceList';
import ARInvoiceList from '../../components/Finance/ARInvoiceList';
import PaymentRun from '../../components/Finance/PaymentRun';
import CurrencyExchange from '../../components/Finance/CurrencyExchange';

export const Ledger: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'gl' | 'ap' | 'ar' | 'payments' | 'fx'>('gl');

  return (
    <div className="space-y-6">
      <header className="pb-4 border-b border-[var(--glass-border)]">
        <h1 className="text-3xl font-extrabold tracking-tight text-white">Finance & General Ledger</h1>
        <p className="text-[var(--text-secondary)] mt-1">Double-entry record ledger balancing ($\sum$ Debits == $\sum$ Credits).</p>
      </header>

      {/* Main Tab selector */}
      <div className="flex gap-2 border-b border-[var(--glass-border)] pb-2 overflow-x-auto">
        {[
          { id: 'gl', label: 'General Ledger Console' },
          { id: 'ap', label: 'Accounts Payable (AP)' },
          { id: 'ar', label: 'Accounts Receivable (AR)' },
          { id: 'payments', label: 'Payment Runs' },
          { id: 'fx', label: 'Currency FX' }
        ].map(sub => (
          <button
            key={sub.id}
            onClick={() => setActiveTab(sub.id as any)}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all duration-200 ${
              activeTab === sub.id
                ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                : 'text-[var(--text-secondary)] hover:text-white'
            }`}
          >
            {sub.label}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {activeTab === 'gl' && <GeneralLedger />}
        {activeTab === 'ap' && <APInvoiceList />}
        {activeTab === 'ar' && <ARInvoiceList />}
        {activeTab === 'payments' && <PaymentRun />}
        {activeTab === 'fx' && <CurrencyExchange />}
      </div>
    </div>
  );
};

export default Ledger;
