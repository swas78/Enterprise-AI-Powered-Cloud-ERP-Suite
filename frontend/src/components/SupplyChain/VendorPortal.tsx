import React, { useState, useEffect } from 'react';
import supplyChainService from '../../services/supplyChainService';
import { VendorModal } from './VendorModal';

interface Vendor {
  _id: string;
  name: string;
  email: string;
  code: string;
  status: 'Active' | 'Inactive';
  createdAt: string;
}

export const VendorPortal: React.FC = () => {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isVendorModalOpen, setIsVendorModalOpen] = useState(false);

  useEffect(() => {
    fetchVendors();
  }, []);

  const fetchVendors = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await supplyChainService.getVendors();
      setVendors(data);
    } catch (err: any) {
      setError(err.message || 'Failed to load vendors');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-lg w-full">
      {/* Page Header Actions */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="font-display text-[32px] font-extrabold text-on-surface">Vendor Portal</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Manage supplier contacts and view registered vendors.</p>
        </div>
        <div className="flex gap-sm">
          <button 
            onClick={() => setIsVendorModalOpen(true)}
            className="flex items-center gap-xs px-md h-10 bg-primary text-white font-semibold rounded hover:bg-primary-fixed-dim transition-transform active:scale-95 duration-150"
          >
            <span className="material-symbols-outlined text-[20px]">add</span>
            Register Vendor
          </button>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden flex flex-col flex-1">
        <div className="overflow-x-auto custom-scrollbar flex-1">
          <table className="w-full text-left border-collapse">
            <thead className="sticky top-0 bg-surface-container-low border-b border-outline-variant z-10">
              <tr>
                <th className="p-md font-label-md text-label-md text-secondary">Vendor Code</th>
                <th className="p-md font-label-md text-label-md text-secondary">Name</th>
                <th className="p-md font-label-md text-label-md text-secondary">Email</th>
                <th className="p-md font-label-md text-label-md text-secondary text-center">Status</th>
                <th className="p-md font-label-md text-label-md text-secondary text-right">Registered</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/30">
              {isLoading ? (
                <tr>
                  <td colSpan={5} className="p-lg text-center">
                    <div className="flex flex-col items-center gap-sm">
                      <span className="material-symbols-outlined animate-spin text-primary text-[32px]">progress_activity</span>
                      <span className="font-body-md text-secondary">Loading vendors...</span>
                    </div>
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan={5} className="p-lg">
                    <div className="bg-error-container text-on-error-container p-md rounded-lg flex flex-col items-center gap-sm max-w-md mx-auto">
                      <span className="material-symbols-outlined text-[32px]">error</span>
                      <span className="font-bold">Error Loading Data</span>
                      <span className="font-body-md text-center">{error}</span>
                      <button onClick={fetchVendors} className="mt-2 bg-error text-on-error px-md py-xs rounded-full font-bold hover:bg-error-container hover:text-on-error-container border border-error transition-colors">
                        Retry
                      </button>
                    </div>
                  </td>
                </tr>
              ) : vendors.length > 0 ? (
                vendors.map(vendor => (
                  <tr key={vendor._id} className="hover:bg-surface-container-low transition-colors group">
                    <td className="p-md font-code-sm text-code-sm text-primary font-bold">{vendor.code}</td>
                    <td className="p-md font-body-md text-body-md font-semibold">{vendor.name}</td>
                    <td className="p-md font-body-md text-body-md">{vendor.email}</td>
                    <td className="p-md text-center">
                      <span className={`status-pill px-2 py-0.5 rounded text-[11px] font-bold ${vendor.status === 'Active' ? 'bg-green-100 text-[#16A34A]' : 'bg-slate-100 text-[#475569]'}`}>
                        {vendor.status}
                      </span>
                    </td>
                    <td className="p-md font-body-md text-body-md text-right text-secondary">
                      {new Date(vendor.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="p-lg text-center text-on-surface-variant font-medium">
                    No vendors registered yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <VendorModal 
        isOpen={isVendorModalOpen} 
        onClose={() => setIsVendorModalOpen(false)} 
        onSuccess={fetchVendors} 
      />
    </div>
  );
};

export default VendorPortal;
