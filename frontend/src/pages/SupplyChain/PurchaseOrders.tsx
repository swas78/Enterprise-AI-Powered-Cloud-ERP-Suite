import React, { useState } from 'react';
import PurchaseOrderList from '../../components/SupplyChain/PurchaseOrderList';
import PurchaseOrderForm from '../../components/SupplyChain/PurchaseOrderForm';
import VendorPortal from '../../components/SupplyChain/VendorPortal';
import InventoryDashboard from '../../components/SupplyChain/InventoryDashboard';
import ReorderAutomation from '../../components/SupplyChain/ReorderAutomation';
import SupplierManagement from '../../components/SupplyChain/SupplierManagement';

export const PurchaseOrders: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'list' | 'add' | 'portal' | 'inventory' | 'reorder' | 'suppliers'>('list');

  return (
    <div className="space-y-6">
      <header className="pb-4 border-b border-[var(--glass-border)]">
        <h1 className="text-3xl font-extrabold tracking-tight text-white">Supply Chain & Procurement</h1>
        <p className="text-[var(--text-secondary)] mt-1 font-medium">Purchase requisition workflow, AVCO/FIFO inventory costing, and vendor channels.</p>
      </header>

      {/* Sub Tabs */}
      <div className="flex gap-2 border-b border-[var(--glass-border)] pb-2 overflow-x-auto">
        {[
          { id: 'list', label: 'Purchase Orders' },
          { id: 'add', label: 'Create Requisition' },
          { id: 'portal', label: 'Vendor Portal' },
          { id: 'inventory', label: 'Inventory Costing' },
          { id: 'reorder', label: 'Reorder limits' },
          { id: 'suppliers', label: 'Supplier Registers' }
        ].map(sub => (
          <button
            key={sub.id}
            onClick={() => setActiveTab(sub.id as any)}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all duration-200 ${
              activeTab === sub.id
                ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                : 'text-[var(--text-secondary)] hover:text-white'
            }`}
          >
            {sub.label}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {activeTab === 'list' && <PurchaseOrderList />}
        {activeTab === 'add' && <PurchaseOrderForm />}
        {activeTab === 'portal' && <VendorPortal />}
        {activeTab === 'inventory' && <InventoryDashboard />}
        {activeTab === 'reorder' && <ReorderAutomation />}
        {activeTab === 'suppliers' && <SupplierManagement />}
      </div>
    </div>
  );
};

export default PurchaseOrders;
