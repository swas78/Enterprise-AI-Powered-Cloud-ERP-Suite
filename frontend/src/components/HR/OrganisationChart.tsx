import React, { useState, useEffect } from 'react';
import hrService from '../../services/hrService';

interface OrgNode {
  id: string;
  name: string;
  email: string;
  department: string;
  role: string;
  status: string;
  reports: OrgNode[];
}

export const OrganisationChart: React.FC = () => {
  const [orgData, setOrgData] = useState<OrgNode[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchOrgChart();
  }, []);

  const fetchOrgChart = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await hrService.getOrgChart();
      setOrgData(data);
    } catch (err: any) {
      setError(err.message || 'Failed to load organization chart');
    } finally {
      setIsLoading(false);
    }
  };

  const renderNode = (node: OrgNode, depth: number = 0) => {
    return (
      <div key={node.id} className={`flex flex-col ${depth > 0 ? 'ml-8 md:ml-12 border-l-2 border-outline-variant/50 pl-4 md:pl-6 relative' : ''} mt-4`}>
        {depth > 0 && (
          <div className="absolute w-4 md:w-6 h-0 border-t-2 border-outline-variant/50 -left-[2px] top-8"></div>
        )}
        <div className="glass-panel p-4 rounded-xl border border-outline-variant hover:border-primary/50 transition-colors w-full max-w-sm group">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h4 className="font-bold text-on-surface text-lg group-hover:text-primary transition-colors">{node.name}</h4>
              <p className="text-primary font-semibold text-sm">{node.role}</p>
            </div>
            <span className={`status-pill px-2 py-0.5 rounded text-[10px] font-bold ${node.status === 'Active' ? 'bg-green-100 text-[#16A34A]' : 'bg-surface-container-high text-on-surface-variant'}`}>
              {node.status || 'Active'}
            </span>
          </div>
          <div className="flex flex-col gap-1 text-xs text-on-surface-variant">
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">domain</span>
              <span>{node.department || 'N/A'}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">mail</span>
              <span className="truncate">{node.email}</span>
            </div>
          </div>
        </div>
        
        {node.reports && node.reports.length > 0 && (
          <div className="flex flex-col gap-2 mt-2">
            {node.reports.map(report => renderNode(report, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-lg w-full">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="font-display text-[32px] font-extrabold text-on-surface">Organisation Chart</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Visual hierarchy tree from C-Suite to departmental staff.</p>
        </div>
        <button 
          onClick={fetchOrgChart}
          className="flex items-center gap-xs px-md h-10 bg-surface-container border border-outline text-on-surface font-semibold rounded hover:bg-surface-container-high transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">refresh</span>
          Refresh
        </button>
      </div>

      {error && (
        <div className="bg-error-container text-on-error-container p-md rounded-lg flex items-center gap-sm">
          <span className="material-symbols-outlined">error</span>
          <span>{error}</span>
        </div>
      )}

      <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-6 overflow-x-auto custom-scrollbar min-h-[400px]">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center h-full min-h-[300px] gap-sm">
            <span className="material-symbols-outlined animate-spin text-primary text-[40px]">progress_activity</span>
            <span className="font-body-md text-secondary font-medium">Loading organization structure...</span>
          </div>
        ) : orgData.length > 0 ? (
          <div className="flex flex-col pt-2 pb-8">
            {orgData.map(root => renderNode(root, 0))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full min-h-[300px] gap-sm text-on-surface-variant">
            <span className="material-symbols-outlined text-[48px] opacity-50">account_tree</span>
            <span className="font-body-md font-medium">No organizational data found. Ensure employees are assigned managers.</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrganisationChart;
