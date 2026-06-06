import { BaseRepository } from '../../repositories/baseRepository';
import { Budget, IBudget } from '../../models/project/Budget';
import { CreateBudgetDTO, BudgetVarianceReport } from '../../types/project';

const budgetRepo = new BaseRepository<IBudget>(Budget);

export class BudgetService {
  static async getBudgetByProject(projectId: string, tenantId: string): Promise<IBudget | null> {
    return budgetRepo.findOne({ projectId, tenantId });
  }

  static async createBudget(dto: CreateBudgetDTO): Promise<IBudget> {
    const existing = await budgetRepo.findOne({ projectId: dto.projectId, tenantId: dto.tenantId });
    if (existing) throw new Error('A budget already exists for this project.');
    return budgetRepo.create({ ...dto, totalSpent: 0, status: 'draft' });
  }

  static async approveBudget(projectId: string, tenantId: string, approverId: string): Promise<IBudget | null> {
    return budgetRepo.update(
      { projectId, tenantId, status: 'draft' },
      { $set: { status: 'approved', approvedBy: approverId, approvedAt: new Date() } }
    );
  }

  static async recordExpenditure(
    projectId: string,
    tenantId: string,
    categoryName: string,
    amount: number
  ): Promise<IBudget | null> {
    const budget = await this.getBudgetByProject(projectId, tenantId);
    if (!budget) throw new Error('No budget found for this project.');

    const newTotalSpent = budget.totalSpent + amount;
    const overrun = newTotalSpent > budget.totalBudget;

    return budgetRepo.update(
      { projectId, tenantId, 'categories.name': categoryName },
      {
        $inc: {
          totalSpent: amount,
          'categories.$.spentAmount': amount,
        },
        $set: { status: overrun ? 'overrun' : 'active' },
      }
    );
  }

  static async getVarianceReport(projectId: string, tenantId: string): Promise<BudgetVarianceReport> {
    const budget = await this.getBudgetByProject(projectId, tenantId);
    if (!budget) throw new Error('No budget found for this project.');

    const variance = budget.totalBudget - budget.totalSpent;
    const variancePercentage = budget.totalBudget > 0 ? (variance / budget.totalBudget) * 100 : 0;

    return {
      projectId,
      totalBudget: budget.totalBudget,
      totalSpent: budget.totalSpent,
      variance,
      variancePercentage,
      categories: budget.categories.map((c) => ({
        name: c.name,
        allocated: c.allocatedAmount,
        spent: c.spentAmount,
        variance: c.allocatedAmount - c.spentAmount,
      })),
    };
  }

  static async closeBudget(projectId: string, tenantId: string): Promise<IBudget | null> {
    return budgetRepo.update({ projectId, tenantId }, { $set: { status: 'closed' } });
  }
}

export default BudgetService;
