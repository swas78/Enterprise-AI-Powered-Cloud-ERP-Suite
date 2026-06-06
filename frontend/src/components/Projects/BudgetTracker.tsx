import React from 'react';
import { Project } from '../../types/project';

interface BudgetTrackerProps {
  activeProject: Project | null;
}

export const BudgetTracker: React.FC<BudgetTrackerProps> = ({ activeProject }) => {
  if (!activeProject) return null;

  const isOverBudget = activeProject.spent > activeProject.budget;

  return (
    <div className="space-y-4">
      {isOverBudget && (
        <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold flex items-center gap-2 animate-pulse">
          <span className="material-symbols-outlined text-[16px]">warning</span>
          Budget Variance Trigger: Project budget exceeded by ${(activeProject.spent - activeProject.budget).toLocaleString()} (Limit overrun exceeded!).
        </div>
      )}
      <div className="glass-panel p-5 space-y-2">
        <h4 className="text-sm font-bold text-white">Project Financial Health</h4>
        <div className="grid grid-cols-2 gap-4 text-xs">
          <div>
            <p className="text-[var(--text-muted)]">Budget</p>
            <p className="text-lg font-bold text-white font-mono">${activeProject.budget.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-[var(--text-muted)]">Actual Spent</p>
            <p className={`text-lg font-bold font-mono ${isOverBudget ? 'text-rose-400' : 'text-emerald-400'}`}>
              ${activeProject.spent.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetTracker;
