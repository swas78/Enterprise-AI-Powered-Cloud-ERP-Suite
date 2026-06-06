import React, { useState, useEffect } from 'react';
import financeService from '../../services/financeService';

interface Currency {
  _id: string;
  code: string;
  name: string;
  symbol: string;
  exchangeRate: number;
  isBase: boolean;
  lastUpdated: string;
}

export const CurrencyExchange: React.FC = () => {
  const [rates, setRates] = useState<Currency[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSyncing, setIsSyncing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchRates();
  }, []);

  const fetchRates = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await financeService.getCurrencyRates();
      setRates(data);
    } catch (err: any) {
      setError(err.message || 'Failed to load currency rates');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSync = async () => {
    setIsSyncing(true);
    setError(null);
    try {
      await financeService.syncCurrencyRates();
      await fetchRates();
    } catch (err: any) {
      setError(err.message || 'Failed to sync rates');
    } finally {
      setIsSyncing(false);
    }
  };

  const baseCurrency = rates.find(r => r.isBase)?.code || 'USD';
  const lastUpdated = rates.length > 0 ? new Date(rates[0].lastUpdated).toLocaleString() : '';

  return (
    <div className="glass-panel p-6 space-y-4">
      <h3 className="text-xl font-bold flex items-center justify-between text-white">
        <span>FX Exchange Multi-Currency Rates</span>
        <button 
          onClick={handleSync}
          disabled={isSyncing}
          className="p-1.5 bg-indigo-500/10 text-indigo-400 rounded hover:bg-indigo-500/20 disabled:opacity-50 transition-colors"
          title="Force Sync with ECB"
        >
          <span className={`material-symbols-outlined text-[16px] ${isSyncing ? 'animate-spin' : ''}`}>sync</span>
        </button>
      </h3>
      
      {error && (
        <div className="bg-error-container text-on-error-container p-3 rounded-lg text-sm font-medium">
          {error}
        </div>
      )}

      <div className="p-4 bg-slate-900/30 rounded-lg border border-[var(--glass-border)] text-xs text-white relative min-h-[120px]">
        {isLoading ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="material-symbols-outlined animate-spin text-indigo-400 text-[24px] mb-2">progress_activity</span>
            <span className="text-indigo-300">Loading rates...</span>
          </div>
        ) : rates.length > 0 ? (
          <>
            <div className="flex justify-between items-center mb-4">
              <p className="font-semibold text-indigo-300">Active ECB/OpenExchange Rates</p>
              <p className="text-[10px] text-[var(--text-muted)]">Last updated: {lastUpdated}</p>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-[var(--text-secondary)] font-mono text-sm">
              {rates.filter(r => !r.isBase).map(rate => (
                <div key={rate._id} className="flex justify-between items-center p-2 rounded bg-surface-container-low border border-outline-variant/30 hover:border-indigo-500/30 transition-colors">
                  <span className="font-bold text-white">{baseCurrency} / {rate.code}</span>
                  <span className="text-indigo-200">{rate.exchangeRate.toFixed(4)}</span>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center text-[var(--text-muted)] pt-6">
            No currency rates configured. Click sync to fetch.
          </div>
        )}
      </div>
    </div>
  );
};

export default CurrencyExchange;
