import React from 'react';
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
import MfaVerification from './pages/Auth/MfaVerification';
import TenantSelection from './pages/Auth/TenantSelection';
import SessionExpired from './pages/Auth/SessionExpired';
import Unauthorized401 from './pages/Auth/Unauthorized401';
import AccessDenied from './pages/Auth/AccessDenied';
import UserProfileSettings from './pages/Auth/UserProfileSettings';
import ChartOfAccounts from './pages/Finance/ChartOfAccounts';
import CreateJournalEntry from './pages/Finance/CreateJournalEntry';
import ApInvoices from './pages/Finance/ApInvoices';
import ArInvoicing from './pages/Finance/ArInvoicing';
import FxRates from './pages/Finance/FxRates';
import PeriodClose from './pages/Finance/PeriodClose';
import AgingReport from './pages/Finance/AgingReport';
import PaymentRuns from './pages/Finance/PaymentRuns';
import AttendanceTimeTracking from './pages/HR/AttendanceTimeTracking';
import LeaveManagement from './pages/HR/LeaveManagement';
import EmployeeProfile from './pages/HR/EmployeeProfile';
import OrgChart from './pages/HR/OrgChart';
import RunDashboard from './pages/Payroll/RunDashboard';
import RunDetails from './pages/Payroll/RunDetails';
import AuditTrail from './pages/Payroll/AuditTrail';
import Payslips from './pages/Payroll/Payslips';
import PurchaseRequisitions from './pages/SupplyChain/PurchaseRequisitions';
import ProcurementTimeline from './pages/SupplyChain/ProcurementTimeline';
import GoodsReceipt from './pages/SupplyChain/GoodsReceipt';
import Warehouses from './pages/SupplyChain/Warehouses';
import StockLevels from './pages/SupplyChain/StockLevels';
import InventoryCatalog from './pages/SupplyChain/InventoryCatalog';
import ThreeWayMatching from './pages/SupplyChain/ThreeWayMatching';
import ReorderAutomation from './pages/SupplyChain/ReorderAutomation';
import VendorDirectory from './pages/SupplyChain/VendorDirectory';
import VendorPortal from './pages/SupplyChain/VendorPortal';
import ProjectDetail from './pages/ProjectManagement/ProjectDetail';
import GanttChart from './pages/ProjectManagement/GanttChart';
import BudgetTracking from './pages/ProjectManagement/BudgetTracking';
import ResourceAllocation from './pages/ProjectManagement/ResourceAllocation';
import GdprRequests from './pages/Compliance/GdprRequests';
import SystemHealth from './pages/Admin/SystemHealth';
import TenantConsole from './pages/Admin/TenantConsole';
import WebhookManagement from './pages/Integrations/WebhookManagement';
import ApiGateway from './pages/Integrations/ApiGateway';
import ExecutiveAnalytics from './pages/BI/ExecutiveAnalytics';
import DashboardBuilder from './pages/BI/DashboardBuilder';
import ReportScheduling from './pages/BI/ReportScheduling';
import ExportHistory from './pages/BI/ExportHistory';
import DrillDownDetail from './pages/BI/DrillDownDetail';
import ModelStatus from './pages/AI/ModelStatus';
import ForecastingDashboard from './pages/AI/ForecastingDashboard';
import GlobalSearch from './pages/Global/GlobalSearch';
import NotificationsInbox from './pages/Global/NotificationsInbox';
import NotificationPreferences from './pages/Global/NotificationPreferences';
import OfflineStatus from './pages/Global/OfflineStatus';
import PwaSyncStatus from './pages/Global/PwaSyncStatus';

import { initCsrf } from './services/api';

export const App: React.FC = () => {
  React.useEffect(() => {
    initCsrf();
  }, []);

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
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
            <Route path="auth/user-profile-settings" element={<UserProfileSettings />} />
            <Route path="finance/chart-of-accounts" element={<ChartOfAccounts />} />
            <Route path="finance/create-journal-entry" element={<CreateJournalEntry />} />
            <Route path="finance/ap-invoices" element={<ApInvoices />} />
            <Route path="finance/ar-invoicing" element={<ArInvoicing />} />
            <Route path="finance/fx-rates" element={<FxRates />} />
            <Route path="finance/period-close" element={<PeriodClose />} />
            <Route path="finance/aging-report" element={<AgingReport />} />
            <Route path="finance/payment-runs" element={<PaymentRuns />} />
            <Route path="hr/attendance-time-tracking" element={<AttendanceTimeTracking />} />
            <Route path="hr/leave-management" element={<LeaveManagement />} />
            <Route path="hr/employee-profile" element={<EmployeeProfile />} />
            <Route path="hr/org-chart" element={<OrgChart />} />
            <Route path="payroll/run-dashboard" element={<RunDashboard />} />
            <Route path="payroll/run-details" element={<RunDetails />} />
            <Route path="payroll/audit-trail" element={<AuditTrail />} />
            <Route path="payroll/payslips" element={<Payslips />} />
            <Route path="supplychain/purchase-requisitions" element={<PurchaseRequisitions />} />
            <Route path="supplychain/procurement-timeline" element={<ProcurementTimeline />} />
            <Route path="supplychain/goods-receipt" element={<GoodsReceipt />} />
            <Route path="supplychain/warehouses" element={<Warehouses />} />
            <Route path="supplychain/stock-levels" element={<StockLevels />} />
            <Route path="supplychain/inventory-catalog" element={<InventoryCatalog />} />
            <Route path="supplychain/three-way-matching" element={<ThreeWayMatching />} />
            <Route path="supplychain/reorder-automation" element={<ReorderAutomation />} />
            <Route path="supplychain/vendor-directory" element={<VendorDirectory />} />
            <Route path="supplychain/vendor-portal" element={<VendorPortal />} />
            <Route path="projectmanagement/project-detail" element={<ProjectDetail />} />
            <Route path="projectmanagement/gantt-chart" element={<GanttChart />} />
            <Route path="projectmanagement/budget-tracking" element={<BudgetTracking />} />
            <Route path="projectmanagement/resource-allocation" element={<ResourceAllocation />} />
            <Route path="compliance/gdpr-requests" element={<GdprRequests />} />
            <Route path="admin/system-health" element={<SystemHealth />} />
            <Route path="admin/tenant-console" element={<TenantConsole />} />
            <Route path="integrations/webhook-management" element={<WebhookManagement />} />
            <Route path="integrations/api-gateway" element={<ApiGateway />} />
            <Route path="bi/executive-analytics" element={<ExecutiveAnalytics />} />
            <Route path="bi/dashboard-builder" element={<DashboardBuilder />} />
            <Route path="bi/report-scheduling" element={<ReportScheduling />} />
            <Route path="bi/export-history" element={<ExportHistory />} />
            <Route path="bi/drill-down-detail" element={<DrillDownDetail />} />
            <Route path="ai/model-status" element={<ModelStatus />} />
            <Route path="ai/forecasting-dashboard" element={<ForecastingDashboard />} />
            <Route path="global/global-search" element={<GlobalSearch />} />
            <Route path="global/notifications-inbox" element={<NotificationsInbox />} />
            <Route path="global/notification-preferences" element={<NotificationPreferences />} />
            <Route path="global/offline-status" element={<OfflineStatus />} />
            <Route path="global/pwa-sync-status" element={<PwaSyncStatus />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
