import React from 'react';

export const WidgetLibrary: React.FC = () => {
  return (
    <div className="glass-panel p-6 space-y-4">
      <h3 className="text-xl font-bold text-white">Widget Library catalog</h3>
      <p className="text-sm text-[var(--text-secondary)]">Available analytics, forecasting models, and reporting modules.</p>
      <div className="p-4 bg-slate-900/30 rounded-lg border border-[var(--glass-border)] border-dashed text-center text-xs text-[var(--text-muted)]">
        Catalog contains: Ledger Widget, HR FTE Roster, LSTM demand forecasting SKU maps.
      </div>
    </div>
  );
};

export default WidgetLibrary;
