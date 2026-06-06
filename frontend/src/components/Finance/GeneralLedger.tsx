import React, { useState, useEffect } from 'react';
import financeService from '../../services/financeService';
import { Account, JournalEntry, JournalLine } from '../../types/finance';

export const GeneralLedger: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'ledger' | 'coa' | 'lock'>('ledger');
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [ledgerEntries, setLedgerEntries] = useState<JournalEntry[]>([]);
  const [periodLock, setPeriodLock] = useState<any>(null);

  // Filters
  const [coaFilterType, setCoaFilterType] = useState('All Types');

  // Forms
  const [ledgerRef, setLedgerRef] = useState('');
  const [ledgerDesc, setLedgerDesc] = useState('');
  const [ledgerLines, setLedgerLines] = useState<Partial<JournalLine>[]>([
    { accountId: '', type: 'Debit', amount: 0 },
    { accountId: '', type: 'Credit', amount: 0 }
  ]);

  // Drawer state for Create Account
  const [showDrawer, setShowDrawer] = useState(false);
  const [newAccCode, setNewAccCode] = useState('');
  const [newAccName, setNewAccName] = useState('');
  const [newAccType, setNewAccType] = useState<'Asset' | 'Liability' | 'Equity' | 'Revenue' | 'Expense'>('Asset');

  const [lockDateInput, setLockDateInput] = useState('');

  const loadData = async () => {
    try {
      const accs = await financeService.getAccounts();
      setAccounts(accs);
      const entries = await financeService.getLedgerEntries();
      setLedgerEntries(entries);
      const lock = await financeService.getPeriodLock();
      setPeriodLock(lock);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handlePostLedger = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!ledgerRef || !ledgerDesc) return;

    const formattedLines = ledgerLines.map(l => ({
      accountId: l.accountId as string,
      type: l.type as 'Debit' | 'Credit',
      amount: Number(l.amount || 0)
    }));

    try {
      await financeService.postLedgerEntry({
        ref: ledgerRef,
        description: ledgerDesc,
        date: new Date(),
        lines: formattedLines
      });

      alert('Journal Entry posted successfully!');
      setLedgerRef('');
      setLedgerDesc('');
      setLedgerLines([
        { accountId: '', type: 'Debit', amount: 0 },
        { accountId: '', type: 'Credit', amount: 0 }
      ]);
      loadData();
    } catch (err: any) {
      if (err.message === 'OFFLINE_SAVED') {
        alert('📶 Client is Offline. Transaction safely queued in local IndexedDB. It will automatically sync once connection is restored!');
        setLedgerRef('');
        setLedgerDesc('');
        setLedgerLines([
          { accountId: '', type: 'Debit', amount: 0 },
          { accountId: '', type: 'Credit', amount: 0 }
        ]);
      } else {
        alert(err.message || 'Failed to post entry.');
      }
    }
  };

  const handleCreateAccount = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAccCode || !newAccName) return;

    try {
      await financeService.createAccount({
        code: newAccCode,
        name: newAccName,
        type: newAccType,
        balance: 0
      });

      alert('Account added successfully to Chart of Accounts!');
      setNewAccCode('');
      setNewAccName('');
      setShowDrawer(false);
      loadData();
    } catch (err: any) {
      alert(err.message);
    }
  };

  const handleUpdatePeriodLock = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!lockDateInput) return;

    try {
      await financeService.updatePeriodLock(lockDateInput);
      alert('Accounting period lock date updated successfully.');
      setLockDateInput('');
      loadData();
    } catch (err: any) {
      alert(err.message);
    }
  };

  const filteredAccounts = accounts.filter(acc => {
    if (coaFilterType === 'All Types') return true;
    return acc.type.toLowerCase() === coaFilterType.toLowerCase();
  });

  return (
    <div className="space-y-lg w-full">
      {/* Breadcrumbs & Navigation tabs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-md pb-xs border-b border-outline-variant mb-md">
        <div className="flex items-center gap-xs text-secondary font-label-md">
          <span>AMDOX</span>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="text-on-surface font-semibold">Finance & General Ledger</span>
        </div>
        <div className="flex gap-sm">
          {[
            { id: 'ledger', label: 'Ledger Postings' },
            { id: 'coa', label: 'Chart of Accounts' },
            { id: 'lock', label: 'Period Close Control' }
          ].map(sub => (
            <button
              key={sub.id}
              onClick={() => setActiveSubTab(sub.id as any)}
              className={`px-md py-sm rounded text-xs font-bold transition-all duration-150 ${
                activeSubTab === sub.id
                  ? 'bg-primary-fixed text-on-primary-fixed border border-primary'
                  : 'text-secondary hover:text-primary hover:bg-surface-container-low border border-transparent'
              }`}
            >
              {sub.label}
            </button>
          ))}
        </div>
      </div>

      {activeSubTab === 'ledger' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg items-start">
          {/* Create Entry Panel */}
          <div className="lg:col-span-1 bg-surface-container-lowest p-lg rounded-xl border border-outline-variant space-y-md">
            <div className="flex items-center gap-xs pb-xs border-b border-outline-variant">
              <span className="material-symbols-outlined text-primary">edit_note</span>
              <h3 className="font-title-lg text-title-lg text-on-surface">New Journal Entry</h3>
            </div>
            <form className="space-y-md" onSubmit={handlePostLedger}>
              <div className="flex flex-col gap-xs">
                <label className="text-label-md uppercase tracking-widest text-on-surface-variant font-bold">Reference Code</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. JE-0021" 
                  value={ledgerRef}
                  onChange={(e) => setLedgerRef(e.target.value)}
                  className="w-full bg-white border border-outline-variant px-md py-sm rounded focus:ring-2 focus:ring-primary-container/30 focus:border-primary outline-none transition-all"
                />
              </div>

              <div className="flex flex-col gap-xs">
                <label className="text-label-md uppercase tracking-widest text-on-surface-variant font-bold">Description</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Office supplies" 
                  value={ledgerDesc}
                  onChange={(e) => setLedgerDesc(e.target.value)}
                  className="w-full bg-white border border-outline-variant px-md py-sm rounded focus:ring-2 focus:ring-primary-container/30 focus:border-primary outline-none transition-all"
                />
              </div>

              <div className="space-y-sm pt-xs border-t border-outline-variant">
                <div className="flex justify-between items-center">
                  <label className="text-label-md uppercase tracking-widest text-primary font-bold">Journal Lines</label>
                  <button
                    type="button"
                    onClick={() => setLedgerLines([...ledgerLines, { accountId: '', type: 'Debit', amount: 0 }])}
                    className="px-sm py-xs bg-primary-container/10 border border-primary-container/20 rounded text-[10px] font-bold text-primary flex items-center gap-1 hover:bg-primary-container/20"
                  >
                    <span className="material-symbols-outlined text-[14px]">add</span> Add Line
                  </button>
                </div>

                {ledgerLines.map((line, idx) => (
                  <div key={idx} className="grid grid-cols-12 gap-sm items-center">
                    <div className="col-span-5">
                      <select
                        required
                        value={typeof line.accountId === 'object' ? line.accountId?._id : line.accountId}
                        onChange={(e) => {
                          const newLines = [...ledgerLines];
                          newLines[idx].accountId = e.target.value;
                          setLedgerLines(newLines);
                        }}
                        className="w-full bg-white border border-outline-variant px-sm py-xs rounded text-xs focus:ring-1 focus:ring-primary focus:border-primary"
                      >
                        <option value="">Select Account</option>
                        {accounts.map(acc => (
                          <option key={acc._id} value={acc._id}>{acc.code} - {acc.name}</option>
                        ))}
                      </select>
                    </div>
                    <div className="col-span-3">
                      <select
                        value={line.type}
                        onChange={(e) => {
                          const newLines = [...ledgerLines];
                          newLines[idx].type = e.target.value as 'Debit' | 'Credit';
                          setLedgerLines(newLines);
                        }}
                        className="w-full bg-white border border-outline-variant px-sm py-xs rounded text-xs focus:ring-1 focus:ring-primary"
                      >
                        <option value="Debit">Debit</option>
                        <option value="Credit">Credit</option>
                      </select>
                    </div>
                    <div className="col-span-3">
                      <input
                        type="number"
                        required
                        placeholder="0.00"
                        value={line.amount || ''}
                        onChange={(e) => {
                          const newLines = [...ledgerLines];
                          newLines[idx].amount = Number(e.target.value);
                          setLedgerLines(newLines);
                        }}
                        className="w-full bg-white border border-outline-variant px-sm py-xs rounded text-xs text-right"
                      />
                    </div>
                    <div className="col-span-1 text-center">
                      <button
                        type="button"
                        onClick={() => setLedgerLines(ledgerLines.filter((_, i) => i !== idx))}
                        className="text-error hover:brightness-90 bg-transparent border-0"
                      >
                        <span className="material-symbols-outlined text-[18px]">delete</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <button 
                type="submit"
                className="w-full h-10 bg-primary text-on-primary font-bold rounded flex items-center justify-center gap-sm hover:brightness-110 active:scale-95 shadow-sm transition-all"
              >
                Post Balanced Transaction
              </button>
            </form>
          </div>

          {/* List Entries Panel */}
          <div className="lg:col-span-2 bg-surface-container-lowest p-lg rounded-xl border border-outline-variant space-y-md">
            <div className="flex items-center gap-xs pb-xs border-b border-outline-variant">
              <span className="material-symbols-outlined text-primary">view_list</span>
              <h3 className="font-title-lg text-title-lg text-on-surface">Recent Transactional Entries</h3>
            </div>
            <div className="space-y-sm max-h-[500px] overflow-y-auto pr-sm">
              {ledgerEntries.length > 0 ? (
                ledgerEntries.map((je, idx) => (
                  <div key={idx} className="p-md bg-surface-container-low/50 border border-outline-variant rounded-lg flex justify-between items-center text-xs">
                    <div>
                      <p className="font-bold text-primary text-sm">{je.ref}</p>
                      <p className="text-on-surface-variant font-medium mt-0.5">{je.description}</p>
                      <p className="text-[10px] text-secondary mt-1">{new Date(je.date).toLocaleDateString()}</p>
                    </div>
                    <div className="text-right space-y-1">
                      {je.lines?.map((line, lIdx) => {
                        const acc = typeof line.accountId === 'object' ? line.accountId as Account : null;
                        const accCode = acc ? acc.code : '';
                        return (
                          <p key={lIdx} className="font-mono text-[10px] text-on-surface">
                            {line.type}: <span className={line.type === 'Debit' ? 'text-primary font-bold' : 'text-secondary font-bold'}>${line.amount.toFixed(2)}</span> {accCode && `(${accCode})`}
                          </p>
                        );
                      })}
                      <span className="inline-flex items-center gap-xs text-[9px] font-bold text-[#16A34A] bg-[#16A34A]/10 px-sm py-0.5 rounded-full">
                        <span className="w-1 h-1 rounded-full bg-[#16A34A]"></span>
                        BALANCED
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-xs text-secondary text-center py-12">No ledger entries posted yet.</p>
              )}
            </div>
          </div>
        </div>
      )}

      {activeSubTab === 'coa' && (
        <div className="space-y-md">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-md">
            <div>
              <div className="flex items-center gap-sm mb-xs">
                <span className="material-symbols-outlined text-primary">account_balance</span>
                <h2 className="font-headline-lg text-headline-lg">Chart of Accounts</h2>
              </div>
              <p className="text-on-surface-variant font-body-md">Precision ledger management for fiscal year 2024</p>
            </div>
            <div className="flex gap-sm">
              <button 
                onClick={() => {
                  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(accounts, null, 2));
                  const downloadAnchor = document.createElement('a');
                  downloadAnchor.setAttribute("href",     dataStr);
                  downloadAnchor.setAttribute("download", "chart_of_accounts.json");
                  document.body.appendChild(downloadAnchor);
                  downloadAnchor.click();
                  downloadAnchor.remove();
                }}
                className="px-md h-10 border border-outline text-primary font-bold rounded flex items-center gap-sm hover:bg-surface-container-low transition-all bg-white cursor-pointer"
              >
                <span className="material-symbols-outlined">download</span>
                Export
              </button>
              <button 
                onClick={() => setShowDrawer(true)}
                className="px-md h-10 bg-primary text-on-primary font-bold rounded flex items-center gap-sm hover:brightness-110 active:scale-95 shadow-sm transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined">add</span>
                Create Account
              </button>
            </div>
          </div>

          {/* Filters & Table Container */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden flex flex-col">
            {/* Table Actions Row */}
            <div className="p-md flex items-center justify-between border-b border-outline-variant bg-surface-container-low/30">
              <div className="flex gap-md items-center">
                <div className="flex items-center gap-xs px-sm py-1 border border-outline-variant rounded bg-surface">
                  <span className="text-label-md text-on-surface-variant">Type:</span>
                  <select 
                    value={coaFilterType}
                    onChange={(e) => setCoaFilterType(e.target.value)}
                    className="bg-transparent border-none text-body-md py-0 focus:ring-0 cursor-pointer"
                  >
                    <option>All Types</option>
                    <option>Asset</option>
                    <option>Liability</option>
                    <option>Equity</option>
                    <option>Revenue</option>
                    <option>Expense</option>
                  </select>
                </div>
              </div>
              <div className="text-body-md text-on-surface-variant">
                Showing <strong>{filteredAccounts.length}</strong> accounts
              </div>
            </div>

            {/* High Density Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low border-b border-outline-variant">
                    <th className="px-md py-sm font-label-md text-on-surface-variant tracking-wider uppercase">Account Code</th>
                    <th className="px-md py-sm font-label-md text-on-surface-variant tracking-wider uppercase">Name</th>
                    <th className="px-md py-sm font-label-md text-on-surface-variant tracking-wider uppercase">Type</th>
                    <th className="px-md py-sm font-label-md text-on-surface-variant tracking-wider uppercase">Currency</th>
                    <th className="px-md py-sm font-label-md text-on-surface-variant tracking-wider uppercase text-right">Balance</th>
                    <th className="px-md py-sm font-label-md text-on-surface-variant tracking-wider uppercase">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                  {filteredAccounts.length > 0 ? (
                    filteredAccounts.map((acc, idx) => (
                      <tr key={idx} className="hover:bg-surface-container-low transition-colors group cursor-default">
                        <td className="px-md py-sm font-title-lg text-primary">{acc.code}</td>
                        <td className="px-md py-sm font-medium">{acc.name}</td>
                        <td className="px-md py-sm">
                          <span className="px-sm py-xs bg-surface-container-high rounded text-body-md text-on-surface font-semibold">{acc.type}</span>
                        </td>
                        <td className="px-md py-sm font-body-md">USD</td>
                        <td className="px-md py-sm font-bold text-right tabular-nums">${acc.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                        <td className="px-md py-sm">
                          <span className="inline-flex items-center gap-xs text-xs font-bold text-[#16A34A] bg-[#16A34A]/10 px-sm py-0.5 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]"></span>
                            LIVE
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="text-center py-12 text-secondary">No chart accounts found matching filter.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeSubTab === 'lock' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg">
          <div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant space-y-md">
            <div className="flex items-center gap-xs pb-xs border-b border-outline-variant">
              <span className="material-symbols-outlined text-primary">lock_clock</span>
              <h3 className="font-title-lg text-title-lg text-on-surface">Period Close Lock</h3>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Setting a lock date disables posting of any Journal Entries dated on or before the selected date. Only Tenant Administrators can override this restriction when editing the general ledger.
            </p>
            <form onSubmit={handleUpdatePeriodLock} className="space-y-md pt-2">
              <div className="flex flex-col gap-xs">
                <label className="text-label-md uppercase tracking-widest text-on-surface-variant font-bold">Cut-Off Close Date</label>
                <input
                  type="date"
                  required
                  value={lockDateInput}
                  onChange={(e) => setLockDateInput(e.target.value)}
                  className="w-full bg-white border border-outline-variant px-md py-sm rounded focus:ring-2 focus:ring-primary-container/30 focus:border-primary outline-none transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full h-10 bg-primary text-on-primary font-bold rounded flex items-center justify-center gap-sm hover:brightness-110 active:scale-95 shadow-sm transition-all"
              >
                Enforce Close Lock
              </button>
            </form>
          </div>

          <div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-xs pb-xs border-b border-outline-variant">
                <span className="material-symbols-outlined text-primary">verified_user</span>
                <h3 className="font-title-lg text-title-lg text-on-surface">Active Lock Status</h3>
              </div>
              <div className="mt-4 p-4 rounded-xl border border-outline-variant bg-surface-container-low flex items-center gap-4">
                {periodLock ? (
                  <>
                    <div className="p-3 bg-error-container text-error rounded-xl border border-error-container/20">
                       <span className="material-symbols-outlined text-[24px] animate-pulse">lock</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-on-surface">Period Locked Cut-Off</p>
                      <p className="text-xs text-on-surface-variant mt-0.5">
                        Locked up to: <span className="font-bold text-error font-mono">{new Date(periodLock.lockedDate).toLocaleDateString()}</span>
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="p-3 bg-success/10 text-[#16A34A] rounded-xl border border-success/20">
                       <span className="material-symbols-outlined text-[24px]">lock_open</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-on-surface">Ledger Unlocked</p>
                      <p className="text-xs text-on-surface-variant mt-0.5">No close lock date set for this tenant.</p>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="text-xs text-secondary border-t border-outline-variant pt-md mt-lg">
              Audit logs are generated automatically for all period updates to remain SOC 2 and GDPR compliant.
            </div>
          </div>
        </div>
      )}

      {/* Create Account Side Drawer */}
      {showDrawer && (
        <>
          <div 
            onClick={() => setShowDrawer(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60] transition-opacity duration-300 pointer-events-auto"
          />
          <div className="fixed top-0 right-0 h-full w-full max-w-[440px] bg-surface-container-lowest z-[70] shadow-2xl transition-transform duration-300 translate-x-0 flex flex-col">
            {/* Drawer Header */}
            <div className="p-lg border-b border-outline-variant flex items-center justify-between">
              <div>
                <h3 className="font-headline-md text-headline-md text-primary">Create New Account</h3>
                <p className="text-on-surface-variant text-body-md">Enter ledger details and hierarchy</p>
              </div>
              <button 
                onClick={() => setShowDrawer(false)}
                className="p-2 hover:bg-surface-container-low rounded-full transition-colors bg-transparent border-0 cursor-pointer"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            {/* Drawer Body */}
            <form onSubmit={handleCreateAccount} className="flex-1 flex flex-col justify-between">
              <div className="p-lg space-y-lg overflow-y-auto">
                <div className="space-y-md">
                  <div className="flex flex-col gap-xs">
                    <label className="text-label-md uppercase tracking-widest text-on-surface-variant font-bold">Account Code</label>
                    <input 
                      required
                      placeholder="e.g. 1100-001" 
                      type="text"
                      value={newAccCode}
                      onChange={(e) => setNewAccCode(e.target.value)}
                      className="w-full bg-white border border-outline-variant px-md py-sm rounded focus:ring-2 focus:ring-primary-container/30 focus:border-primary outline-none transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-xs">
                    <label className="text-label-md uppercase tracking-widest text-on-surface-variant font-bold">Account Name</label>
                    <input 
                      required
                      placeholder="e.g. Cash at Bank" 
                      type="text"
                      value={newAccName}
                      onChange={(e) => setNewAccName(e.target.value)}
                      className="w-full bg-white border border-outline-variant px-md py-sm rounded focus:ring-2 focus:ring-primary-container/30 focus:border-primary outline-none transition-all"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-md">
                    <div className="flex flex-col gap-xs">
                      <label className="text-label-md uppercase tracking-widest text-on-surface-variant font-bold">Category</label>
                      <select 
                        required
                        value={newAccType}
                        onChange={(e) => setNewAccType(e.target.value as any)}
                        className="w-full bg-white border border-outline-variant px-md py-sm rounded focus:ring-2 focus:ring-primary-container/30 focus:border-primary outline-none transition-all cursor-pointer"
                      >
                        <option value="Asset">Asset</option>
                        <option value="Liability">Liability</option>
                        <option value="Equity">Equity</option>
                        <option value="Revenue">Revenue</option>
                        <option value="Expense">Expense</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-xs">
                      <label className="text-label-md uppercase tracking-widest text-on-surface-variant font-bold">Currency</label>
                      <select className="w-full bg-white border border-outline-variant px-md py-sm rounded focus:ring-2 focus:ring-primary-container/30 focus:border-primary outline-none transition-all cursor-pointer">
                        <option>USD</option>
                        <option>EUR</option>
                        <option>GBP</option>
                        <option>JPY</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Informational Alert */}
                <div className="bg-primary-container/10 p-md rounded flex gap-md border border-primary-container/20 mt-md">
                  <span className="material-symbols-outlined text-primary">info</span>
                  <p className="text-on-primary-container text-body-md leading-relaxed">
                    Once created, the <strong>Account Code</strong> can only be changed by an administrator via the Global Audit log.
                  </p>
                </div>
              </div>

              {/* Drawer Footer */}
              <div className="p-lg border-t border-outline-variant bg-surface-container-low/30 flex gap-md">
                <button 
                  type="button"
                  onClick={() => setShowDrawer(false)}
                  className="flex-1 h-11 border border-outline text-on-surface font-bold rounded hover:bg-surface-container-high transition-all bg-white"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="flex-1 h-11 bg-primary text-on-primary font-bold rounded shadow-lg hover:brightness-110 active:scale-95 transition-all"
                >
                  Save Account
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default GeneralLedger;
