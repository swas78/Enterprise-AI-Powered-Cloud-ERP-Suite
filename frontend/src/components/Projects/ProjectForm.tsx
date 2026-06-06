import React, { useState } from 'react';

interface ProjectFormProps {
  onCreateProject: (name: string, budget: number) => void;
}

export const ProjectForm: React.FC<ProjectFormProps> = ({ onCreateProject }) => {
  const [name, setName] = useState('');
  const [budget, setBudget] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !budget) return;
    onCreateProject(name, Number(budget));
    setName('');
    setBudget('');
  };

  return (
    <div className="glass-panel p-5 space-y-4">
      <h3 className="text-md font-bold text-white">New Project</h3>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          required
          placeholder="Project Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 bg-slate-900/50 rounded-lg border border-[var(--glass-border)] text-xs text-white"
        />
        <input
          type="number"
          required
          placeholder="Budget ($)"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="w-full p-2 bg-slate-900/50 rounded-lg border border-[var(--glass-border)] text-xs text-white"
        />
        <button
          type="submit"
          className="w-full py-2 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white rounded-lg text-xs font-bold"
        >
          Initialize Project
        </button>
      </form>
    </div>
  );
};

export default ProjectForm;
