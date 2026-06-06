import { apiFetch } from './api';
import { Account, JournalEntry, APInvoice } from '../types/finance';

export const financeService = {
  getAccounts: async (): Promise<Account[]> => {
    const res = await apiFetch('/api/v1/finance/ledger/accounts');
    if (!res.ok) throw new Error('Failed to fetch accounts');
    const json = await res.json();
    return json.data;
  },

  createAccount: async (account: Partial<Account>): Promise<Account> => {
    const res = await apiFetch('/api/v1/finance/ledger/accounts', {
      method: 'POST',
      body: JSON.stringify(account),
    });
    const json = await res.json();
    if (!res.ok) throw new Error(json.message || 'Failed to create account');
    return json.data;
  },

  getLedgerEntries: async (): Promise<JournalEntry[]> => {
    const res = await apiFetch('/api/v1/finance/ledger/entries');
    if (!res.ok) throw new Error('Failed to fetch ledger entries');
    const json = await res.json();
    return json.data;
  },

  postLedgerEntry: async (entry: JournalEntry): Promise<JournalEntry> => {
    const res = await apiFetch('/api/v1/finance/ledger/entries', {
      method: 'POST',
      body: JSON.stringify(entry),
    });
    if (!res.ok) {
      const json = await res.json();
      throw new Error(json.message || 'Failed to post entry');
    }
    const json = await res.json();
    return json.data;
  },

  getPeriodLock: async (): Promise<any> => {
    const res = await apiFetch('/api/v1/finance/ledger/period-lock');
    if (!res.ok) throw new Error('Failed to fetch period lock');
    const json = await res.json();
    return json.data;
  },

  updatePeriodLock: async (lockedDate: string): Promise<any> => {
    const res = await apiFetch('/api/v1/finance/ledger/period-lock', {
      method: 'POST',
      body: JSON.stringify({ lockedDate }),
    });
    const json = await res.json();
    if (!res.ok) throw new Error(json.message || 'Failed to update period lock');
    return json.data;
  },

  getArAging: async (): Promise<any> => {
    const res = await apiFetch('/api/v1/finance/ar/aging');
    if (!res.ok) throw new Error('Failed to fetch AR aging data');
    const json = await res.json();
    return json.data;
  },

  getApInvoices: async (): Promise<any[]> => {
    const res = await apiFetch('/api/v1/finance/ap/invoices');
    if (!res.ok) throw new Error('Failed to fetch AP invoices');
    const json = await res.json();
    return json.data;
  },

  postApInvoice: async (invoice: APInvoice): Promise<any> => {
    const res = await apiFetch('/api/v1/finance/ap/invoice', {
      method: 'POST',
      body: JSON.stringify(invoice),
    });
    const json = await res.json();
    if (!res.ok) throw new Error(json.message || 'Failed to process AP invoice');
    return json.data;
  },

  runPayment: async (invoiceIds: string[]): Promise<any> => {
    const res = await apiFetch('/api/v1/finance/ap/pay', {
      method: 'POST',
      body: JSON.stringify({ invoiceIds }),
    });
    const json = await res.json();
    if (!res.ok) throw new Error(json.message || 'Failed to run payment');
    return json.data;
  },

  getCurrencyRates: async (): Promise<any[]> => {
    const res = await apiFetch('/api/v1/finance/currency/rates');
    if (!res.ok) throw new Error('Failed to fetch currency rates');
    const json = await res.json();
    return json.data;
  },

  syncCurrencyRates: async (): Promise<any> => {
    const res = await apiFetch('/api/v1/finance/currency/sync', {
      method: 'POST',
    });
    const json = await res.json();
    if (!res.ok) throw new Error(json.message || 'Failed to sync currency rates');
    return json.data;
  },
};

export default financeService;
