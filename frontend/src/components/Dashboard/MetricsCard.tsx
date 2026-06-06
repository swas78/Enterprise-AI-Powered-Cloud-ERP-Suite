import React from 'react';

interface MetricsCardProps {
  label: string;
  value: string;
  change: string;
  icon: string;
  color: string;
}

export const MetricsCard: React.FC<MetricsCardProps> = ({ 
  label, 
  value, 
  change, 
  icon, 
  color 
}) => {
  return (
    <div className="glass-panel p-5 transition-all duration-300 hover:scale-[1.02] cursor-pointer">
      <div className="flex justify-between items-start">
        <span className="text-[var(--text-secondary)] text-sm font-semibold">{label}</span>
        <span className={`material-symbols-outlined ${color}`}>{icon}</span>
      </div>
      <div className="mt-4">
        <h3 className="text-2xl font-bold font-display text-white">{value}</h3>
        <p className="text-xs text-[var(--text-muted)] mt-1">{change}</p>
      </div>
    </div>
  );
};

export default MetricsCard;
