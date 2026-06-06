import { dashboardRepository } from '../../repositories/dashboard/dashboardRepository';
import { chartOfAccountsRepository } from '../../repositories/finance/chartOfAccountsRepository';
import { employeeRepository } from '../../repositories/hr/employeeRepository';
import { poRepository } from '../../repositories/supplyChain/poRepository';
import { projectRepository } from '../../repositories/project/projectRepository';
import { ledgerRepository } from '../../repositories/finance/ledgerRepository';
import { ExcelGenerator } from '../../utils/excelGenerator';
import logger from '../../utils/logger';

export class DashboardService {
  
  // Save or update custom widgets grid layout
  public static async saveDashboardLayout(tenantId: string, name: string, widgets: any[]) {
    logger.info(`📊 Saving Custom Dashboard Layout [${name}] | Tenant: ${tenantId}`);
    
    let dashboard = await dashboardRepository.findOne({ tenantId, name });
    
    if (dashboard) {
      dashboard.widgets = widgets;
      await dashboard.save();
    } else {
      dashboard = await dashboardRepository.create({
        tenantId,
        name,
        widgets,
      });
    }

    return dashboard;
  }

  // Get active dashboard widgets
  public static async getDashboardLayout(tenantId: string) {
    let dashboard = await dashboardRepository.findOne({ tenantId, isDefault: true });
    
    // If no default exists, initialize a sample layout structure
    if (!dashboard) {
      dashboard = await dashboardRepository.create({
        tenantId,
        name: 'Executive Overview',
        isDefault: true,
        widgets: [
          { title: 'General Ledger Cash', type: 'Metric', dataSource: '/finance/ledger/accounts', gridConfig: { x: 0, y: 0, w: 3, h: 2 } },
          { title: 'SCM Purchase Orders', type: 'Bar', dataSource: '/supply-chain/po', gridConfig: { x: 3, y: 0, w: 6, h: 4 } },
        ],
      });
    }
    
    return dashboard;
  }

  // Compile real-time metrics for widgets & SSE streams
  public static async compileRealTimeMetrics(tenantId: string) {
    // 1. Fetch total Cash (Asset accounts with code '1000')
    const cashAccount = await chartOfAccountsRepository.findOne({ tenantId, code: '1000' });
    const cashBalance = cashAccount ? cashAccount.balance : 0;

    // 2. Fetch headcount
    const activeStaff = await employeeRepository.countDocuments({ tenantId, status: 'Active' });

    // 3. Fetch SCM items
    const poCount = await poRepository.countDocuments({ tenantId, status: 'Draft' });

    // 4. Fetch Projects
    const projectCount = await projectRepository.countDocuments({ tenantId, status: 'Active' });

    return {
      cashBalance: Number(cashBalance.toFixed(2)),
      activeStaff,
      pendingPOs: poCount,
      activeProjects: projectCount,
      timestamp: new Date(),
    };
  }

  // Prepare ledger report CSV stream
  public static async exportLedgerToCsv(tenantId: string): Promise<string> {
    const entries = await ledgerRepository.find({ tenantId }, null, { sort: { date: -1 }, populate: 'lines.accountId' });
    
    const formatted = entries.map(entry => ({
      ref: entry.ref,
      description: entry.description,
      date: entry.date,
      status: entry.status,
      lines: entry.lines.map(line => {
        const acc = line.accountId as any;
        return {
          accountName: acc ? `${acc.code} - ${acc.name}` : 'Unknown Account',
          type: line.type,
          amount: line.amount,
        };
      }),
    }));

    return ExcelGenerator.generateLedgerCsv(formatted);
  }
}
export default DashboardService;
