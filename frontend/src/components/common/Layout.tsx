import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import { getOfflineTransactions, clearOfflineTransactions } from '../../utils/indexedDb';
import { apiFetch } from '../../services/api';
import ErrorBoundary from './ErrorBoundary';
import Chatbot from './Chatbot';

export const Layout: React.FC = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  const syncOfflineTransactions = async () => {
    try {
      const txs = await getOfflineTransactions();
      if (txs.length === 0) return;

      console.log(`👷 [PWA Sync] Reconnect triggered. Syncing ${txs.length} offline transactions...`);
      for (const tx of txs) {
        if (tx.type === 'ledger') {
          await apiFetch('/api/v1/finance/ledger/entries', {
            method: 'POST',
            body: JSON.stringify(tx.data)
          });
        }
      }

      await clearOfflineTransactions();
      alert('📶 Connection Restored: Offline queued transactions synced successfully!');
      window.location.reload();
    } catch (err) {
      console.error('Offline transaction synchronization failed:', err);
    }
  };

  useEffect(() => {
    const handleOnline = () => {
      setIsOffline(false);
      syncOfflineTransactions();
    };
    const handleOffline = () => {
      setIsOffline(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background flex text-on-surface w-full">
      <Sidebar />
      <main className="flex-1 flex flex-col min-h-screen bg-background overflow-y-auto relative">
        {/* Offline Banner alert */}
        {isOffline && (
          <div className="bg-error-container text-on-error-container py-3 px-6 text-xs font-semibold flex items-center gap-2 justify-center relative z-20">
            <span className="material-symbols-outlined text-[16px] animate-bounce">wifi_off</span>
            Running in Offline Mode. Journal postings will be safely cached inside client IndexedDB and synced on reconnect.
          </div>
        )}

        <Header />

        {/* Main Route Content Viewport */}
        <section className="p-lg md:p-xl flex-1 max-w-[1400px] mx-auto w-full relative">
          <ErrorBoundary>
            <Outlet />
          </ErrorBoundary>
        </section>

        {/* Global Chatbot */}
        <Chatbot />
      </main>
    </div>
  );
};

export default Layout;
