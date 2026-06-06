import { IEmployee } from '../../models/hr/Employee';
import { attendanceRepository } from '../../repositories/hr/attendanceRepository';
import logger from '../../utils/logger';

export interface IPayrollCalculationResult {
  employeeId: string;
  grossPay: number;
  taxAmount: number;
  deductions: number; // Statutory + pension deductions
  netPay: number;
}

export class PayrollEngine {
  
  // Computes gross-to-net salary allocations, factoring overtime attendance
  public static async calculateEmployeeSalary(
    tenantId: string,
    employee: IEmployee,
    startDate: Date,
    endDate: Date
  ): Promise<IPayrollCalculationResult> {
    logger.debug(`🧮 Calculating salary computations for employee: ${employee.name} | Tenant: ${tenantId}`);

    // 1. Calculate Base monthly salary rate
    const baseMonthlySalary = employee.salary / 12;

    // 2. Fetch attendance logs to calculate overtime bonuses
    const attendanceLogs = await attendanceRepository.find({
      tenantId,
      employeeId: employee._id,
      date: { $gte: startDate, $lte: endDate },
    });

    let totalOvertimeHours = 0;
    attendanceLogs.forEach((log) => {
      totalOvertimeHours += log.overtimeHours || 0;
    });

    // 3. Compute Overtime pay: standard rate * 1.5
    // Standard work capacity is 160 hours per month
    const hourlyRate = baseMonthlySalary / 160;
    const overtimeRate = hourlyRate * 1.5;
    const overtimeBonus = totalOvertimeHours * overtimeRate;

    const grossPay = baseMonthlySalary + overtimeBonus;

    // 4. Calculate Income tax slabs (monthly brackets)
    let taxAmount = 0;
    if (grossPay <= 4000) {
      taxAmount = grossPay * 0.10; // 10%
    } else if (grossPay <= 8000) {
      taxAmount = 4000 * 0.10 + (grossPay - 4000) * 0.15; // 15%
    } else {
      taxAmount = 4000 * 0.10 + 4000 * 0.15 + (grossPay - 8000) * 0.25; // 25%
    }

    // 5. Statutory Deductions
    const socialSecurity = grossPay * 0.062; // 6.2% FICA
    const medicare = grossPay * 0.0145; // 1.45% Medicare
    const pensionContribution = grossPay * 0.04; // 4% Corporate Pension

    const deductions = socialSecurity + medicare + pensionContribution;

    // 6. Net salary calculation
    const netPay = grossPay - taxAmount - deductions;

    logger.debug(`🧮 Calculation complete for ${employee.name}: Gross $${grossPay.toFixed(2)} | Deductions $${deductions.toFixed(2)} | Net $${netPay.toFixed(2)}`);

    return {
      employeeId: employee._id.toString(),
      grossPay: Number(grossPay.toFixed(2)),
      taxAmount: Number(taxAmount.toFixed(2)),
      deductions: Number(deductions.toFixed(2)),
      netPay: Number(netPay.toFixed(2)),
    };
  }
}
export default PayrollEngine;
