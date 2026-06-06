import React, { useState, useEffect } from 'react';
import supplyChainService from '../../services/supplyChainService';
import { ReceiveGoodsModal } from './ReceiveGoodsModal';

interface InventoryItem {
  _id: string;
  sku: string;
  description: string;
  quantityOnHand: number;
  unitCost: number;
  reorderPoint: number;
}

export const InventoryDashboard: React.FC = () => {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isReceiveModalOpen, setIsReceiveModalOpen] = useState(false);

  useEffect(() => {
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await supplyChainService.getInventory();
      setInventory(data);
    } catch (err: any) {
      setError(err.message || 'Failed to load inventory');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-lg w-full">
      {/* Page Header Actions */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="font-display text-[32px] font-extrabold text-on-surface">Inventory Dashboard</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Real-Time SKU Levels & FIFO/AVCO costing.</p>
        </div>
        <div className="flex gap-sm">
          <button 
            onClick={() => setIsReceiveModalOpen(true)}
            className="flex items-center gap-xs px-md h-10 bg-primary text-white font-semibold rounded hover:bg-primary-fixed-dim transition-transform active:scale-95 duration-150"
          >
            <span className="material-symbols-outlined text-[20px]">add</span>
            Receive Goods
          </button>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden flex flex-col flex-1">
        <div className="overflow-x-auto custom-scrollbar flex-1">
          <table className="w-full text-left border-collapse">
            <thead className="sticky top-0 bg-surface-container-low border-b border-outline-variant z-10">
              <tr>
                <th className="p-md font-label-md text-label-md text-secondary">SKU</th>
                <th className="p-md font-label-md text-label-md text-secondary">Description</th>
                <th className="p-md font-label-md text-label-md text-secondary text-right">Quantity on Hand</th>
                <th className="p-md font-label-md text-label-md text-secondary text-right">Unit Cost</th>
                <th className="p-md font-label-md text-label-md text-secondary text-right">Total Value</th>
                <th className="p-md font-label-md text-label-md text-secondary text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/30">
              {isLoading ? (
                <tr>
                  <td colSpan={6} className="p-lg text-center">
                    <div className="flex flex-col items-center gap-sm">
                      <span className="material-symbols-outlined animate-spin text-primary text-[32px]">progress_activity</span>
                      <span className="font-body-md text-secondary">Loading inventory...</span>
                    </div>
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan={6} className="p-lg">
                    <div className="bg-error-container text-on-error-container p-md rounded-lg flex flex-col items-center gap-sm max-w-md mx-auto">
                      <span className="material-symbols-outlined text-[32px]">error</span>
                      <span className="font-bold">Error Loading Data</span>
                      <span className="font-body-md text-center">{error}</span>
                      <button onClick={fetchInventory} className="mt-2 bg-error text-on-error px-md py-xs rounded-full font-bold hover:bg-error-container hover:text-on-error-container border border-error transition-colors">
                        Retry
                      </button>
                    </div>
                  </td>
                </tr>
              ) : inventory.length > 0 ? (
                inventory.map(item => (
                  <tr key={item._id} className="hover:bg-surface-container-low transition-colors group">
                    <td className="p-md font-code-sm text-code-sm text-primary font-bold">{item.sku}</td>
                    <td className="p-md font-body-md text-body-md font-semibold">{item.description}</td>
                    <td className="p-md font-body-md text-body-md text-right">{item.quantityOnHand}</td>
                    <td className="p-md font-body-md text-body-md text-right">
                      {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.unitCost)}
                    </td>
                    <td className="p-md font-body-md text-body-md text-right font-bold">
                      {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.unitCost * item.quantityOnHand)}
                    </td>
                    <td className="p-md text-center">
                      <span className={`status-pill px-2 py-0.5 rounded text-[11px] font-bold ${item.quantityOnHand <= item.reorderPoint ? 'bg-error-container text-on-error-container' : 'bg-green-100 text-[#16A34A]'}`}>
                        {item.quantityOnHand <= item.reorderPoint ? 'Low Stock' : 'In Stock'}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="p-lg text-center text-on-surface-variant font-medium">
                    No inventory items found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <ReceiveGoodsModal 
        isOpen={isReceiveModalOpen} 
        onClose={() => setIsReceiveModalOpen(false)} 
        onSuccess={fetchInventory} 
      />
    </div>
  );
};

export default InventoryDashboard;
