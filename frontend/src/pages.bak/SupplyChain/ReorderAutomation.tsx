import React, { useState, useEffect } from 'react';
import { apiFetch } from '../../services/api';

const ReorderAutomation: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Generic fetch simulation or actual if route exists
        const res = await apiFetch('/api/v1/supplychain/reorderautomation').catch(() => ({ ok: true, json: async () => ({ data: [] }) }));
        const json = await (res.json ? res.json() : { data: [] });
        setData(json.data || []);
      } catch (err: any) {
        setError(err.message || 'Failed to load data');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-6 w-full max-w-7xl mx-auto">
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wider">
            <span>SupplyChain</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-blue-600">Reorder Automation</span>
          </nav>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Reorder Automation</h1>
          <p className="text-sm text-slate-500 mt-2 max-w-2xl">Manage and monitor your reorder automation records across the organization.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-sm flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">download</span> Export
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-sm flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">add</span> Create New
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 text-red-700 border border-red-200 rounded-xl flex items-center gap-3">
          <span className="material-symbols-outlined">error</span>
          <p className="text-sm font-medium">{error}</p>
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full min-h-[400px]">
        {/* Toolbar */}
        <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">search</span>
            <input 
              type="text" 
              placeholder="Search records..." 
              className="pl-9 pr-4 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none w-64 bg-white shadow-sm"
            />
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
            <span className="material-symbols-outlined text-[18px]">filter_list</span> Filter
          </div>
        </div>

        {/* Data Area */}
        <div className="flex-1 p-8 flex flex-col items-center justify-center text-center bg-slate-50/30">
          {loading ? (
            <div className="flex flex-col items-center animate-pulse">
              <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
              <p className="text-slate-500 font-medium">Loading records...</p>
            </div>
          ) : data.length === 0 ? (
            <div className="max-w-sm flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[32px]">dataset</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">No Records Found</h3>
              <p className="text-sm text-slate-500 mb-6">There are currently no active records in this view. Get started by creating a new entry.</p>
              <button className="text-blue-600 font-semibold hover:text-blue-700 hover:underline text-sm">
                Learn more about this module &rarr;
              </button>
            </div>
          ) : (
            <div className="w-full h-full overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-100 text-slate-600">
                  <tr>
                    <th className="px-6 py-3 font-semibold">ID</th>
                    <th className="px-6 py-3 font-semibold">Details</th>
                    <th className="px-6 py-3 font-semibold">Date</th>
                    <th className="px-6 py-3 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {data.map((item, i) => (
                    <tr key={i} className="hover:bg-slate-50">
                      <td className="px-6 py-4 font-mono text-xs">{item._id || 'ID-' + i}</td>
                      <td className="px-6 py-4 font-medium">{item.name || 'Record Entry'}</td>
                      <td className="px-6 py-4 text-slate-500">{new Date().toLocaleDateString()}</td>
                      <td className="px-6 py-4"><span className="px-2 py-1 rounded bg-green-100 text-green-700 text-xs font-bold">Active</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReorderAutomation;
