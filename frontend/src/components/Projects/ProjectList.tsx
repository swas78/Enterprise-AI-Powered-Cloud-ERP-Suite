import React from 'react';
import { Project } from '../../types/project';

interface ProjectListProps {
  projects: Project[];
  selectedProjectId: string;
  onSelectProject: (id: string) => void;
}

export const ProjectList: React.FC<ProjectListProps> = ({ 
  projects, 
  selectedProjectId, 
  onSelectProject 
}) => {
  return (
    <div className="glass-panel p-5 space-y-4">
      <h3 className="text-md font-bold text-white">Active Contract</h3>
      <div className="space-y-2">
        {projects.map((p) => (
          <button
            key={p._id}
            onClick={() => onSelectProject(p._id)}
            className={`w-full text-left p-3 rounded-lg text-xs font-bold transition-all duration-200 border ${
              selectedProjectId === p._id
                ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40'
                : 'bg-slate-900/30 text-[var(--text-secondary)] border-[var(--glass-border)] hover:bg-slate-900/60'
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
