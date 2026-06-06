const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'frontend', 'src');
const pagesDir = path.join(srcDir, 'pages');

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

function generateComponentCode(moduleName, pageName) {
  const formattedTitle = pageName.replace(/([A-Z])/g, ' $1').trim();
  return `import React from 'react';

const ${pageName}: React.FC = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">${formattedTitle}</h1>
        <p className="text-sm text-slate-500 mt-1">${moduleName} / ${formattedTitle}</p>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 min-h-[400px] flex items-center justify-center">
        <p className="text-slate-400">Content for ${formattedTitle} goes here. This screen is scaffolded and ready for detailed UI implementation.</p>
      </div>
    </div>
  );
};

export default ${pageName};
`;
}

// Create directories and files
Object.entries(pagesToCreate).forEach(([moduleName, pages]) => {
  const moduleDir = path.join(pagesDir, moduleName);
  if (!fs.existsSync(moduleDir)) {
    fs.mkdirSync(moduleDir, { recursive: true });
  }

  pages.forEach(page => {
    const filePath = path.join(moduleDir, `${page}.tsx`);
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, generateComponentCode(moduleName, page));
      console.log(`Created ${moduleName}/${page}.tsx`);
    }
  });
});

console.log('Scaffolding complete. Now you should update App.tsx manually or with another script.');
