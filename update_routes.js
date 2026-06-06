const fs = require('fs');
const path = require('path');

const pagesToCreate = {
  Auth: ['MfaVerification', 'TenantSelection', 'SessionExpired', 'Unauthorized401', 'AccessDenied', 'UserProfileSettings'],
  Finance: ['ChartOfAccounts', 'CreateJournalEntry', 'ApInvoices', 'ArInvoicing', 'FxRates', 'PeriodClose', 'AgingReport', 'PaymentRuns'],
  HR: ['AttendanceTimeTracking', 'LeaveManagement', 'EmployeeProfile', 'OrgChart'],
  Payroll: ['RunDashboard', 'RunDetails', 'AuditTrail', 'Payslips'],
  SupplyChain: ['PurchaseRequisitions', 'ProcurementTimeline', 'GoodsReceipt', 'Warehouses', 'StockLevels', 'InventoryCatalog', 'ThreeWayMatching', 'ReorderAutomation', 'VendorDirectory', 'VendorPortal'],
  ProjectManagement: ['ProjectDetail', 'GanttChart', 'BudgetTracking', 'ResourceAllocation'],
  Compliance: ['GdprRequests'],
  Admin: ['SystemHealth', 'TenantConsole'],
  Integrations: ['WebhookManagement', 'ApiGateway'],
  BI: ['ExecutiveAnalytics', 'DashboardBuilder', 'ReportScheduling', 'ExportHistory', 'DrillDownDetail'],
  AI: ['ModelStatus', 'ForecastingDashboard'],
  Global: ['GlobalSearch', 'NotificationsInbox', 'NotificationPreferences', 'OfflineStatus', 'PwaSyncStatus']
};

let imports = `import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/Auth/PrivateRoute';
import Layout from './components/common/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Ledger from './pages/Finance/Ledger';
import Employees from './pages/HR/Employees';
import ProjectsList from './pages/Projects/ProjectsList';
import PurchaseOrders from './pages/SupplyChain/PurchaseOrders';
import AuditLog from './components/Reports/AuditLog';
import NotFound from './pages/NotFound';
`;

let routes = `          <Route path="/login" element={<Login />} />
          <Route path="/mfa" element={<MfaVerification />} />
          <Route path="/tenant-selection" element={<TenantSelection />} />
          <Route path="/session-expired" element={<SessionExpired />} />
          <Route path="/unauthorized" element={<Unauthorized401 />} />
          <Route path="/access-denied" element={<AccessDenied />} />

          <Route
            path="/"
            element={
              <PrivateRoute>
                <Layout />
              </PrivateRoute>
            }
          >
            <Route index element={<Dashboard />} />
            
            {/* Original Routes */}
            <Route path="finance" element={<Ledger />} />
            <Route path="hr" element={<Employees />} />
            <Route path="projects" element={<ProjectsList />} />
            <Route path="supply-chain" element={<PurchaseOrders />} />
            <Route path="compliance" element={<AuditLog />} />
            
            {/* New Routes */}
`;

Object.entries(pagesToCreate).forEach(([moduleName, pages]) => {
  pages.forEach(page => {
    imports += `import ${page} from './pages/${moduleName}/${page}';\n`;
    
    // Add to specific sub-paths or just root
    const routePath = moduleName.toLowerCase() + '/' + page.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    
    // We already added some auth pages outside PrivateRoute, skip them here
    if (moduleName !== 'Auth' || page === 'UserProfileSettings') {
        routes += `            <Route path="${routePath}" element={<${page} />} />\n`;
    }
  });
});

routes += `            <Route path="*" element={<NotFound />} />
          </Route>`;

const appTsxContent = imports + '\\n' + `export const App: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
` + routes + `
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
`;

const appTsxPath = path.join(__dirname, 'frontend', 'src', 'App.tsx');
fs.writeFileSync(appTsxPath, appTsxContent);
console.log('App.tsx updated successfully.');
