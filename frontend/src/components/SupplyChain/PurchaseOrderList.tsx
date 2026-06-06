import React, { useState, useEffect } from 'react';
import supplyChainService from '../../services/supplyChainService';
import { PurchaseOrderModal } from './PurchaseOrderModal';

interface PurchaseOrder {
  id: string;
  vendor: string;
  dateIssued: string;
  amount: string;
  status: 'Approved' | 'In Review' | 'Draft' | 'Error' | 'Completed';
  matchState: 'MATCHED' | 'PENDING' | 'N/A' | 'MISMATCH';
}

export const PurchaseOrderList: React.FC = () => {
  const [selectedVendor, setSelectedVendor] = useState('All Vendors');
  const [selectedStatus, setSelectedStatus] = useState('All Statuses');
  const [minAmount, setMinAmount] = useState('');
  const [maxAmount, setMaxAmount] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [initialOrders, setInitialOrders] = useState<PurchaseOrder[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isNewPOModalOpen, setIsNewPOModalOpen] = useState(false);
  const [activePopover, setActivePopover] = useState<string | null>(null);

  const handleExport = () => {
    if (filteredOrders.length === 0) return;
    
    const headers = ['PO ID', 'Vendor', 'Date Issued', 'Total Amount', 'Status', '3-Way Match'];
    const csvContent = [
      headers.join(','),
      ...filteredOrders.map(o => 
        `"${o.id}","${o.vendor}","${o.dateIssued}","${o.amount}","${o.status}","${o.matchState}"`
      )
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `purchase_orders_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await supplyChainService.getPurchaseOrders();
      const mapped = data.map((po: any) => ({
        id: po.poNumber,
        vendor: po.vendorId?.name || 'Unknown Vendor',
        dateIssued: new Date(po.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        amount: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(po.totalAmount),
        status: po.status,
        matchState: (po.status === 'Approved' ? 'MATCHED' : (po.status === 'Draft' ? 'N/A' : 'PENDING')) as 'MATCHED' | 'PENDING' | 'N/A' | 'MISMATCH',
      }));
      setInitialOrders(mapped);
    } catch (err: any) {
      setError(err.message || 'Failed to load purchase orders');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRowSelect = (id: string) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter(r => r !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const handleSelectAll = () => {
    if (selectedRows.length === filteredOrders.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(filteredOrders.map(o => o.id));
    }
  };

  // Filter logic
  const filteredOrders = initialOrders.filter(order => {
    if (selectedVendor !== 'All Vendors' && order.vendor !== selectedVendor) return false;
    if (selectedStatus !== 'All Statuses' && order.status !== selectedStatus) return false;
    
    const amt = parseFloat(order.amount.replace(/[^0-9.]/g, ''));
    if (minAmount && amt < parseFloat(minAmount)) return false;
    if (maxAmount && amt > parseFloat(maxAmount)) return false;

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      return order.id.toLowerCase().includes(term) || order.vendor.toLowerCase().includes(term);
    }
    
    return true;
  });

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Approved': return 'bg-green-100 text-[#16A34A]';
      case 'In Review': return 'bg-slate-100 text-[#475569]';
      case 'Draft': return 'bg-slate-100 text-[#475569]';
      case 'Error': return 'bg-red-100 text-error';
      case 'Completed': return 'bg-blue-100 text-primary';
      default: return 'bg-slate-100 text-[#475569]';
    }
  };

  const getMatchIcon = (state: string) => {
    switch (state) {
      case 'MATCHED':
        return (
          <div className="inline-flex items-center gap-xs text-[#16A34A]">
            <span className="material-symbols-outlined text-[18px]">check_circle</span>
            <span className="font-label-md text-[11px]">MATCHED</span>
          </div>
        );
      case 'PENDING':
        return (
          <div className="inline-flex items-center gap-xs text-amber-500">
            <span className="material-symbols-outlined text-[18px] animate-spin" style={{ animationDuration: '3s' }}>sync</span>
            <span className="font-label-md text-[11px]">PENDING</span>
          </div>
        );
      case 'N/A':
        return (
          <div className="inline-flex items-center gap-xs text-outline opacity-40">
            <span className="material-symbols-outlined text-[18px]">radio_button_unchecked</span>
            <span className="font-label-md text-[11px]">N/A</span>
          </div>
        );
      case 'MISMATCH':
        return (
          <div className="inline-flex items-center gap-xs text-error">
            <span className="material-symbols-outlined text-[18px]">warning</span>
            <span className="font-label-md text-[11px]">MISMATCH</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col gap-lg w-full">
      {/* Top Search bar */}
      <div className="flex justify-between items-center bg-surface p-sm border-b border-outline-variant -mt-6 -mx-lg mb-4 px-lg h-[48px]">
        <div className="relative flex items-center">
          <span className="material-symbols-outlined absolute left-sm text-outline">search</span>
          <input 
            className="pl-xl pr-md py-xs bg-surface-container-low border border-outline-variant rounded-lg text-body-md w-[320px] focus:outline-none focus:border-primary transition-colors" 
            placeholder="Search orders, vendors, or SKUs (CMD+K)" 
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-md relative">
          <button 
            onClick={() => setActivePopover(activePopover === 'cloud' ? null : 'cloud')}
            className="p-xs text-on-surface-variant hover:bg-surface-container-low rounded-full transition-colors"
          >
            <span className="material-symbols-outlined">cloud_done</span>
          </button>
          {activePopover === 'cloud' && (
            <div className="absolute top-12 right-32 w-48 bg-surface rounded-lg shadow-lg border border-outline-variant p-3 z-50 animate-in fade-in slide-in-from-top-2">
              <p className="font-label-md font-bold text-on-surface">System Status</p>
              <p className="text-xs text-secondary mt-1 flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500"></span> All services online</p>
              <p className="text-xs text-secondary mt-1">Last synced: Just now</p>
            </div>
          )}
          
          <button 
            onClick={() => setActivePopover(activePopover === 'notifications' ? null : 'notifications')}
            className="p-xs text-on-surface-variant hover:bg-surface-container-low rounded-full transition-colors relative"
          >
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full"></span>
          </button>
          {activePopover === 'notifications' && (
            <div className="absolute top-12 right-20 w-64 bg-surface rounded-lg shadow-lg border border-outline-variant p-3 z-50 animate-in fade-in slide-in-from-top-2">
              <p className="font-label-md font-bold text-on-surface mb-2">Notifications</p>
              <div className="bg-surface-container-low p-2 rounded text-xs border border-outline-variant">
                <span className="text-error font-bold flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">warning</span> PO Mismatch detected</span>
                <p className="text-secondary mt-1">PO-1002 amount differs from invoice.</p>
              </div>
            </div>
          )}

          <button 
            onClick={() => setActivePopover(activePopover === 'help' ? null : 'help')}
            className="p-xs text-on-surface-variant hover:bg-surface-container-low rounded-full transition-colors"
          >
            <span className="material-symbols-outlined">help</span>
          </button>
          {activePopover === 'help' && (
            <div className="absolute top-12 right-8 w-48 bg-surface rounded-lg shadow-lg border border-outline-variant p-3 z-50 animate-in fade-in slide-in-from-top-2">
              <p className="font-label-md font-bold text-on-surface">Help & Support</p>
              <ul className="text-xs text-secondary mt-2 flex flex-col gap-2">
                <li className="hover:text-primary cursor-pointer flex items-center gap-2"><span className="material-symbols-outlined text-[14px]">menu_book</span> Documentation</li>
                <li className="hover:text-primary cursor-pointer flex items-center gap-2"><span className="material-symbols-outlined text-[14px]">support_agent</span> Contact Support</li>
              </ul>
            </div>
          )}

          <div className="w-px h-6 bg-outline-variant mx-1"></div>

          <button 
            onClick={() => setActivePopover(activePopover === 'profile' ? null : 'profile')}
            className="w-8 h-8 rounded-full bg-[#1E3A40] flex items-center justify-center border-2 border-outline-variant hover:border-primary transition-colors relative"
          >
            <span className="material-symbols-outlined text-[#5DD0EB] text-[18px]">person</span>
          </button>
          {activePopover === 'profile' && (
            <div className="absolute top-12 right-0 w-48 bg-surface rounded-lg shadow-lg border border-outline-variant p-3 z-50 animate-in fade-in slide-in-from-top-2">
              <p className="font-label-md font-bold text-on-surface">Administrator</p>
              <p className="text-xs text-secondary">admin@amdox.com</p>
              <hr className="my-2 border-outline-variant" />
              <button className="text-xs text-error font-bold hover:underline w-full text-left">Sign Out</button>
            </div>
          )}
        </div>
      </div>

      {/* Page Header Actions */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="font-display text-[32px] font-extrabold text-on-surface">Purchase Orders</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Manage and track enterprise procurement lifecycle.</p>
        </div>
        <div className="flex gap-sm">
          <button 
            onClick={handleExport}
            className="flex items-center gap-xs px-md h-10 bg-surface border border-outline-variant text-on-surface-variant font-semibold rounded hover:bg-surface-container-low transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">ios_share</span>
            Export
          </button>
          <button 
            onClick={() => setIsNewPOModalOpen(true)}
            className="flex items-center gap-xs px-md h-10 bg-primary text-white font-semibold rounded hover:bg-primary-fixed-dim transition-transform active:scale-95 duration-150"
          >
            <span className="material-symbols-outlined text-[20px]">add</span>
            New Purchase Order
          </button>
        </div>
      </div>

      {/* Advanced Filters Bar */}
      <div className="bg-surface-container-lowest p-md rounded-xl border border-outline-variant flex flex-wrap items-center gap-md">
        <div className="flex flex-col gap-1">
          <label className="font-label-md text-label-md text-secondary ml-1">Vendor</label>
          <select 
            className="h-10 bg-surface border border-outline-variant rounded-lg px-md min-w-[200px] text-body-md focus:ring-0 focus:border-primary transition-all"
            value={selectedVendor}
            onChange={(e) => setSelectedVendor(e.target.value)}
          >
            <option>All Vendors</option>
            <option>Global Logistics Corp</option>
            <option>Quantum Parts SA</option>
            <option>Omni-Dynamics Inc</option>
            <option>Titan Heavy Ind.</option>
            <option>Nexus Core Supply</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-label-md text-label-md text-secondary ml-1">Date Range</label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-outline text-[18px]">calendar_today</span>
            <input className="h-10 pl-xl pr-md bg-surface border border-outline-variant rounded-lg min-w-[240px] text-body-md focus:ring-0 focus:border-primary transition-all" placeholder="Oct 01 - Oct 31, 2023" type="text" />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-label-md text-label-md text-secondary ml-1">Status</label>
          <select 
            className="h-10 bg-surface border border-outline-variant rounded-lg px-md min-w-[160px] text-body-md focus:ring-0 focus:border-primary transition-all"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option>All Statuses</option>
            <option>Draft</option>
            <option>In Review</option>
            <option>Approved</option>
            <option>Completed</option>
            <option>Error</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-label-md text-label-md text-secondary ml-1">Amount Range</label>
          <div className="flex items-center gap-xs">
            <input 
              className="h-10 w-24 bg-surface border border-outline-variant rounded-lg px-md text-body-md focus:ring-0 focus:border-primary transition-all" 
              placeholder="$0" 
              type="text"
              value={minAmount}
              onChange={(e) => setMinAmount(e.target.value)}
            />
            <span className="text-outline">-</span>
            <input 
              className="h-10 w-24 bg-surface border border-outline-variant rounded-lg px-md text-body-md focus:ring-0 focus:border-primary transition-all" 
              placeholder="$1M+" 
              type="text"
              value={maxAmount}
              onChange={(e) => setMaxAmount(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col gap-1 self-end">
          <button className="h-10 px-md bg-secondary-container text-on-secondary-container font-semibold rounded-lg hover:bg-outline-variant transition-colors">
            Apply Filters
          </button>
        </div>

        <button 
          className="h-10 px-md text-primary font-semibold hover:bg-surface-container-low rounded-lg transition-colors mt-auto"
          onClick={() => {
            setSelectedVendor('All Vendors');
            setSelectedStatus('All Statuses');
            setMinAmount('');
            setMaxAmount('');
            setSearchTerm('');
          }}
        >
          Clear
        </button>
      </div>

      {/* Data Table */}
      <div className="bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden flex flex-col flex-1">
        <div className="overflow-x-auto custom-scrollbar flex-1">
          <table className="w-full text-left border-collapse">
            <thead className="sticky top-0 bg-surface-container-low border-b border-outline-variant z-10">
              <tr>
                <th className="p-md font-label-md text-label-md text-secondary border-r border-outline-variant/30 w-[40px]">
                  <input 
                    className="rounded border-outline-variant text-primary focus:ring-primary" 
                    type="checkbox"
                    checked={filteredOrders.length > 0 && selectedRows.length === filteredOrders.length}
                    onChange={handleSelectAll}
                  />
                </th>
                <th className="p-md font-label-md text-label-md text-secondary cursor-pointer">
                  PO ID <span className="material-symbols-outlined text-[14px]">arrow_downward</span>
                </th>
                <th className="p-md font-label-md text-label-md text-secondary">Vendor</th>
                <th className="p-md font-label-md text-label-md text-secondary">Date Issued</th>
                <th className="p-md font-label-md text-label-md text-secondary text-right">Total Amount</th>
                <th className="p-md font-label-md text-label-md text-secondary text-center">Status</th>
                <th className="p-md font-label-md text-label-md text-secondary text-center">3-Way Match</th>
                <th className="p-md font-label-md text-label-md text-secondary text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/30">
              {isLoading ? (
                <tr>
                  <td colSpan={8} className="p-lg text-center">
                    <div className="flex flex-col items-center gap-sm">
                      <span className="material-symbols-outlined animate-spin text-primary text-[32px]">progress_activity</span>
                      <span className="font-body-md text-secondary">Loading purchase orders...</span>
                    </div>
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan={8} className="p-lg">
                    <div className="bg-error-container text-on-error-container p-md rounded-lg flex flex-col items-center gap-sm max-w-md mx-auto">
                      <span className="material-symbols-outlined text-[32px]">error</span>
                      <span className="font-bold">Error Loading Data</span>
                      <span className="font-body-md text-center">{error}</span>
                      <button onClick={fetchOrders} className="mt-2 bg-error text-on-error px-md py-xs rounded-full font-bold hover:bg-error-container hover:text-on-error-container border border-error transition-colors">
                        Retry
                      </button>
                    </div>
                  </td>
                </tr>
              ) : filteredOrders.length > 0 ? (
                filteredOrders.map(order => (
                  <tr key={order.id} className="hover:bg-surface-container-low transition-colors group">
                    <td className="p-md border-r border-outline-variant/30">
                      <input 
                        className="rounded border-outline-variant text-primary focus:ring-primary" 
                        type="checkbox"
                        checked={selectedRows.includes(order.id)}
                        onChange={() => handleRowSelect(order.id)}
                      />
                    </td>
                    <td className="p-md font-code-sm text-code-sm text-primary font-bold">{order.id}</td>
                    <td className="p-md font-body-md text-body-md">{order.vendor}</td>
                    <td className="p-md font-body-md text-body-md">{order.dateIssued}</td>
                    <td className="p-md font-body-md text-body-md text-right font-semibold">{order.amount}</td>
                    <td className="p-md text-center">
                      <span className={`status-pill px-2 py-0.5 rounded text-[11px] font-bold ${getStatusClass(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="p-md text-center">
                      {getMatchIcon(order.matchState)}
                    </td>
                    <td className="p-md text-right">
                      <button className="p-xs hover:bg-surface-container-high rounded transition-colors text-outline group-hover:text-primary">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} className="p-lg text-center text-on-surface-variant font-medium">
                    No purchase orders match the selected filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="p-md bg-surface-container-low border-t border-outline-variant flex justify-between items-center">
          <div className="flex items-center gap-lg">
            <div className="flex items-center gap-sm">
              <span className="font-label-md text-label-md text-secondary">Results per page:</span>
              <select className="h-8 bg-surface border border-outline-variant rounded px-sm text-label-md focus:ring-0">
                <option>10</option>
                <option selected>25</option>
                <option>50</option>
              </select>
            </div>
            <span className="font-label-md text-label-md text-secondary">Showing 1 - {filteredOrders.length} of {filteredOrders.length} results</span>
          </div>
          <div className="flex items-center gap-xs">
            <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-surface-container-high text-outline-variant disabled:opacity-30" disabled>
              <span className="material-symbols-outlined">first_page</span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-surface-container-high text-outline-variant disabled:opacity-30" disabled>
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <div className="flex items-center gap-xs px-md">
              <span className="font-label-md text-label-md text-primary font-bold">1</span>
              <span className="font-label-md text-label-md text-secondary">of 1</span>
            </div>
            <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-surface-container-high text-outline-variant disabled:opacity-30" disabled>
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-surface-container-high text-outline-variant disabled:opacity-30" disabled>
              <span className="material-symbols-outlined">last_page</span>
            </button>
          </div>
        </div>
      </div>

      {/* Dashboard Summary Cards (Asymmetric Layout) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-gutter">
        <div className="col-span-1 md:col-span-2 bg-surface-container-low rounded-xl border border-outline-variant p-lg flex justify-between relative overflow-hidden">
          <div className="z-10">
            <h3 className="font-display text-[18px] text-on-surface mb-xs font-bold">Matching Efficiency</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-md">Current auto-matching success rate across all entities.</p>
            <div className="flex items-baseline gap-sm">
              <span className="text-[48px] font-bold text-primary">94.2%</span>
              <span className="text-[#16A34A] font-bold flex items-center gap-xs">
                <span className="material-symbols-outlined text-[18px]">trending_up</span>
                +2.4%
              </span>
            </div>
          </div>
          <div className="w-48 h-full opacity-10 absolute right-0 top-0">
            <div className="w-full h-full bg-gradient-to-br from-primary to-transparent"></div>
          </div>
        </div>
        <div className="bg-primary text-white rounded-xl p-lg flex flex-col justify-between shadow-lg">
          <div>
            <h3 className="font-display text-[18px] mb-xs opacity-90 font-bold">Pending Review</h3>
            <p className="font-body-md text-body-md opacity-70">Action required for approval.</p>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[40px] font-bold text-white">14</span>
            <button className="bg-white/20 hover:bg-white/30 p-sm rounded-full transition-colors text-white flex items-center justify-center">
              <span className="material-symbols-outlined text-white">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Action Button (FAB) */}
      <button 
        onClick={() => setIsNewPOModalOpen(true)}
        className="fixed bottom-lg right-lg w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-150 z-50"
      >
        <span className="material-symbols-outlined text-[32px] text-white">post_add</span>
      </button>

      {/* New Purchase Order Modal */}
      <PurchaseOrderModal 
        isOpen={isNewPOModalOpen} 
        onClose={() => setIsNewPOModalOpen(false)} 
        onSuccess={fetchOrders} 
      />
    </div>
  );
};

export default PurchaseOrderList;
