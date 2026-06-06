import React, { useState, useEffect } from 'react';
import hrService from '../../services/hrService';
import { Employee } from '../../types/hr';

const PROFILE_IMAGES = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA3OamDL7gLtzI7jyx4d9JBvQh-iz-gIStCuXAtrvuP4-kclNEgHptgAhDwJ2gBG7Y0T4C38q55nvBqN2vJ8vwlN-6COUMdxGgy0DHUQqdwi7ajFkhC3tuWGgxD4Aa8U7UWmzH2AutizJYrnveJiGuO6VQ6ZWW-CQJdTISuzMcwGV6O31tOXkCDkCBRxzVqsLjSVxbTCzAodVm-IM9Ray9LPo7xiZTb6sbxjTLLPVS4yrXq-FNMBFPLQoZ30F77kBfNHvXFAQD9GEo',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCeusrWNgtt2Gkeo48adXscjtuZG0COTJv00GQ9sMN3DTlCrFpk7pF2z-ErVM1KxSEut1bPnKksO64K3Uw2XVX-NbHrnxEuSpKVCEIIyS8cRaDTq7o9KJl8XJ5jJ-IDeYXUz0J39xb7xycigx1o7UnFtxE08in_0WddMANRsrwb211sFLi302a8HGa7JE_gfRtl_ef_Ky1A22MMQNahH0ZOSPLzPB-DkLPM5t4eVi3l8z-q2o41M3yPRY2adJJf7NUFEP3YIEpkXeQ',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDv77BgHcz46hUzk3IgD4eCbtckSo7Qv9P6FdIDIMgTK6pZ743gSsRolP69zmRmYNVzlxWgqoDtghhiRhl1EAxEz-CHeDH263ehkYkLCcP7LlAMXh93d9GFh58EDhD9o1eSTJUP964VhBpjk_sze5QbzmyazW5dOs4len16pZqatbc9fl7ooV51MTf01-R8cR5uhTRta77pfEi1R7DTI_qkhRivF-PE6T7bs1Lw16yiJBa6Hu7zLXmiJDggWOSEwEs1-C8AfJusC1c',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDaLGkGHzhLqVLTqwzB9knsM4sz0v8Lec4SMSlLzZk8eCsxZTJYn582yqxV-YF8e4xjbhA8Q3Lu6IyyfDbdqdD7-aQR_Ckw1kq6trI7qmz7egUK1n26PPcUQb0ljTG8ECdNHhneaoOGNVXnCVtIRbCo8Dml6Lc2mTQ9hxTdPGWPhwctA_D2udVgj_2Sn-YMSmiAoo18Be2DEFxtX3QqoCMGfTXCyzKgEQMUJVviiDNw75KKQVXtPpztXol04sw19evDVhjB7Kot_gs',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDD5IoOmZxohKiCmIMW7KZLpAs-l7q7RZRxjl5TWYXzOPczapQGzCDK-DWypG317eowZGmPW8kjzYHSrhRhcXR2mDulwmj1Iu_dXTM7ZMVTgAZK91YcaRk5kPfN6Kp2G-pi--jSyJbEbm48MHCrrYVraxTi0_6LS3-FEqwxfSsPwJ0ryBVKCwy9k3oo3voWoAla3R6EedzQuMHAAABWWbImVvlIcDU3ylrKuMMXqrAc4kXmXdehMp_FvjaM_t9e7xF-u_3gWkSW2xY',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuNhWmurZMzkmuJ7o4i5C9b6ZiXp_gxZ1Q39kEUlMBgNMFRyhKlsSnVI1TNTWAK6SUqykdUTqmBhcbvsmTZVEhv6hx9s1pFgcJExPXOTlXQdJAFBXXdHL9aR-_P0PmKQUeBjZxgamOuQZQoJAa_PtMTABLNFcnEZghTSiORABtE_V5jB8HIAteMNC72LOKmDGP7FnnrqLB3rONtL7iT5jhAhsoauaLu1eZMVR0IYgMQGVDTsbqLbwO-rz9Y2DTj57jWHymc5Uqfp1Q'
];

export const EmployeeList: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Filters state
  const [filterDept, setFilterDept] = useState('All Departments');
  const [filterLoc, setFilterLoc] = useState('All Locations');
  const [filterStatus, setFilterStatus] = useState('Any Status');

  const fallbackEmployees = [
    { name: 'Sarah Drasner', department: 'Engineering', role: 'Principal UI Engineer', salary: 145000, status: 'Active', location: 'New York, USA', tenure: '4.2 Years' },
    { name: 'James Wilson', department: 'HR', role: 'Global HR Director', salary: 115000, status: 'On Leave', location: 'London, UK', tenure: '8.5 Years' },
    { name: 'Alex Rivera', department: 'Design', role: 'Lead Product Designer', salary: 95000, status: 'Active', location: 'Berlin, DE', tenure: '1.8 Years' },
    { name: 'Maya Patel', department: 'Finance', role: 'Strategic Finance Lead', salary: 124000, status: 'Active', location: 'Mumbai, IN', tenure: '5.0 Years' },
    { name: 'Sophia Rossi', department: 'Supply Chain', role: 'Operations Manager', salary: 105000, status: 'Active', location: 'Rome, IT', tenure: '6.7 Years' },
    { name: 'Chen Wei', department: 'Engineering', role: 'Sr. Data Architect', salary: 192000, status: 'On Leave', location: 'Beijing, CN', tenure: '3.2 Years' }
  ];

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const data = await hrService.getEmployees();
        // Merge location & tenure attributes if not present
        const extended = data.map((emp, idx) => ({
          ...emp,
          status: (emp as any).status || (idx % 3 === 0 ? 'On Leave' : 'Active'),
          location: (emp as any).location || (idx % 2 === 0 ? 'New York, USA' : 'London, UK'),
          tenure: (emp as any).tenure || `${(idx + 1) * 1.5} Years`
        }));
        setEmployees(extended);
      } catch (err) {
        console.error(err);
      }
    };
    fetchEmployees();
  }, []);

  const listToRender = employees.length > 0 ? employees : fallbackEmployees;

  // Apply filters
  const filteredList = listToRender.filter(emp => {
    const matchesDept = filterDept === 'All Departments' || emp.department.toLowerCase() === filterDept.toLowerCase();
    const matchesLoc = filterLoc === 'All Locations' || (emp as any).location?.toLowerCase().includes(filterLoc.toLowerCase().split(',')[0]);
    const matchesStatus = filterStatus === 'Any Status' || (emp as any).status?.toLowerCase() === filterStatus.toLowerCase();
    return matchesDept && matchesLoc && matchesStatus;
  });

  const handleClearFilters = () => {
    setFilterDept('All Departments');
    setFilterLoc('All Locations');
    setFilterStatus('Any Status');
  };

  return (
    <div className="space-y-lg w-full">
      {/* Header Actions */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-lg mb-md">
        <div className="space-y-xs">
          <nav className="flex items-center gap-xs text-outline font-label-md">
            <span>HR</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-on-surface-variant font-semibold">Employee Directory</span>
          </nav>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Employee Directory</h2>
          <p className="text-on-surface-variant font-body-md">Manage and view all organization members across all global territories.</p>
        </div>
        <div className="flex items-center gap-md">
          <div className="flex bg-surface-container-low p-xs rounded border border-outline-variant">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-xs rounded flex items-center justify-center transition-all cursor-pointer bg-transparent border-0 ${viewMode === 'grid' ? 'bg-surface shadow-sm text-primary' : 'text-secondary hover:text-primary'}`}
            >
              <span className="material-symbols-outlined">grid_view</span>
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`p-xs rounded flex items-center justify-center transition-all cursor-pointer bg-transparent border-0 ${viewMode === 'list' ? 'bg-surface shadow-sm text-primary' : 'text-secondary hover:text-primary'}`}
            >
              <span className="material-symbols-outlined">format_list_bulleted</span>
            </button>
          </div>
          <button className="bg-primary hover:bg-[#0B7DFF] text-white px-lg py-sm rounded font-semibold flex items-center gap-sm transition-colors cursor-pointer border-0">
            <span className="material-symbols-outlined">person_add</span>
            <span>Add Employee</span>
          </button>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="bg-surface-container-lowest border border-outline-variant p-md rounded-xl flex flex-wrap items-center gap-lg shadow-sm">
        <div className="flex items-center gap-sm text-on-surface-variant font-label-md min-w-[120px]">
          <span className="material-symbols-outlined scale-90">filter_alt</span>
          <span>Filters:</span>
        </div>
        <div className="relative min-w-[200px]">
          <select 
            value={filterDept}
            onChange={(e) => setFilterDept(e.target.value)}
            className="w-full bg-surface border border-outline-variant rounded py-sm pl-md pr-xl text-body-md appearance-none focus:outline-none focus:border-primary cursor-pointer"
          >
            <option>All Departments</option>
            <option>Engineering</option>
            <option>Design</option>
            <option>Finance</option>
            <option>Supply Chain</option>
            <option>HR</option>
          </select>
          <span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 pointer-events-none text-outline">expand_more</span>
        </div>
        <div className="relative min-w-[200px]">
          <select 
            value={filterLoc}
            onChange={(e) => setFilterLoc(e.target.value)}
            className="w-full bg-surface border border-outline-variant rounded py-sm pl-md pr-xl text-body-md appearance-none focus:outline-none focus:border-primary cursor-pointer"
          >
            <option>All Locations</option>
            <option>New York, USA</option>
            <option>London, UK</option>
            <option>Berlin, DE</option>
            <option>Mumbai, IN</option>
            <option>Rome, IT</option>
          </select>
          <span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 pointer-events-none text-outline">expand_more</span>
        </div>
        <div className="relative min-w-[200px]">
          <select 
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="w-full bg-surface border border-outline-variant rounded py-sm pl-md pr-xl text-body-md appearance-none focus:outline-none focus:border-primary cursor-pointer"
          >
            <option>Any Status</option>
            <option>Active</option>
            <option>On Leave</option>
          </select>
          <span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 pointer-events-none text-outline">expand_more</span>
        </div>
        <div className="ml-auto">
          <button 
            onClick={handleClearFilters}
            className="text-primary font-label-md flex items-center gap-xs hover:underline bg-transparent border-0 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">restart_alt</span>
            Clear Filters
          </button>
        </div>
      </div>

      {viewMode === 'grid' ? (
        /* Employee Bento Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-lg">
          {filteredList.map((emp, idx) => {
            const profileImage = PROFILE_IMAGES[idx % PROFILE_IMAGES.length];
            const isOnline = (emp as any).status === 'Active';
            return (
              <div key={idx} className="employee-card bg-surface-container-lowest border border-outline-variant rounded-xl p-lg flex flex-col items-center text-center space-y-md">
                <div className="relative">
                  <img 
                    alt={emp.name} 
                    className="w-24 h-24 rounded-full object-cover border-4 border-surface shadow-sm" 
                    src={profileImage}
                  />
                  <div className={`absolute bottom-1 right-1 w-5 h-5 border-2 border-surface rounded-full ${isOnline ? 'bg-green-500' : 'bg-[#F59E0B]'}`} />
                </div>
                <div className="space-y-xs">
                  <h3 className="font-title-lg text-title-lg text-on-surface">{emp.name}</h3>
                  <p className="text-primary font-label-md">{emp.role}</p>
                </div>
                <div className="flex flex-wrap justify-center gap-xs">
                  <span className={`text-[10px] font-bold px-sm py-xs rounded-full uppercase tracking-wider ${isOnline ? 'bg-[#16A34A]/10 text-[#16A34A]' : 'bg-[#F59E0B]/10 text-[#F59E0B]'}`}>
                    {(emp as any).status}
                  </span>
                  <span className="bg-surface-container text-on-surface-variant text-[10px] font-bold px-sm py-xs rounded-full uppercase tracking-wider">
                    {emp.department}
                  </span>
                </div>
                <div className="w-full grid grid-cols-2 gap-sm pt-md border-t border-outline-variant">
                  <div className="text-left">
                    <p className="text-[10px] text-outline uppercase font-bold">Location</p>
                    <p className="text-body-md font-medium">{(emp as any).location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-outline uppercase font-bold">Tenure</p>
                    <p className="text-body-md font-medium">{(emp as any).tenure}</p>
                  </div>
                </div>
                <button className="w-full border border-primary text-primary font-semibold py-sm rounded bg-transparent hover:bg-primary-container/10 transition-colors cursor-pointer">
                  View Profile
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        /* Employee Table View */
        <div className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden flex flex-col">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low border-b border-outline-variant">
                  <th className="px-md py-sm font-label-md text-on-surface-variant tracking-wider uppercase">Name</th>
                  <th className="px-md py-sm font-label-md text-on-surface-variant tracking-wider uppercase">Department</th>
                  <th className="px-md py-sm font-label-md text-on-surface-variant tracking-wider uppercase">Role</th>
                  <th className="px-md py-sm font-label-md text-on-surface-variant tracking-wider uppercase">Location</th>
                  <th className="px-md py-sm font-label-md text-on-surface-variant tracking-wider uppercase text-right">Tenure</th>
                  <th className="px-md py-sm font-label-md text-on-surface-variant tracking-wider uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {filteredList.map((emp, idx) => (
                  <tr key={idx} className="hover:bg-surface-container-low transition-colors group cursor-default">
                    <td className="px-md py-sm font-title-lg text-primary font-bold">{emp.name}</td>
                    <td className="px-md py-sm">{emp.department}</td>
                    <td className="px-md py-sm text-secondary font-medium">{emp.role}</td>
                    <td className="px-md py-sm text-on-surface-variant">{(emp as any).location}</td>
                    <td className="px-md py-sm text-right tabular-nums">{(emp as any).tenure}</td>
                    <td className="px-md py-sm">
                      <span className={`inline-flex items-center gap-xs text-xs font-bold px-sm py-0.5 rounded-full ${(emp as any).status === 'Active' ? 'text-[#16A34A] bg-[#16A34A]/10' : 'text-[#F59E0B] bg-[#F59E0B]/10'}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${(emp as any).status === 'Active' ? 'bg-[#16A34A]' : 'bg-[#F59E0B]'}`}></span>
                        {(emp as any).status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Pagination Footer */}
      <div className="flex flex-col md:flex-row items-center justify-between border-t border-outline-variant pt-lg gap-md mt-lg">
        <p className="font-body-md text-on-surface-variant">Showing <span className="font-bold text-on-surface">1 - {filteredList.length}</span> of <span className="font-bold text-on-surface">{filteredList.length}</span> employees</p>
        <div className="flex items-center gap-xs">
          <button className="p-sm text-outline hover:text-primary transition-colors disabled:opacity-50 border-0 bg-transparent cursor-pointer" disabled>
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button className="w-10 h-10 bg-primary text-white rounded font-bold transition-all cursor-pointer">1</button>
          <button className="p-sm text-outline hover:text-primary transition-colors border-0 bg-transparent cursor-pointer" disabled>
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
