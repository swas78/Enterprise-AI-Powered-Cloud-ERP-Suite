import fs from 'fs';
import path from 'path';
import logger from './logger';

export class PdfGenerator {
  
  // Compiles and stores mock HTML payslips to storage
  public static async generatePayslipPdf(data: {
    tenantId: string;
    employeeName: string;
    employeeEmail: string;
    department: string;
    role: string;
    batchNumber: string;
    grossPay: number;
    deductions: number;
    taxAmount: number;
    netPay: number;
  }): Promise<string> {
    const fileName = `payslip_${data.batchNumber}_${data.employeeName.replace(/\s+/g, '_')}.html`;
    const storageDir = path.join(process.cwd(), 'dist', 'storage', 'payslips');
    
    // Ensure storage path directories exist
    fs.mkdirSync(storageDir, { recursive: true });
    
    const filePath = path.join(storageDir, fileName);

    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Payslip - ${data.employeeName}</title>
  <style>
    body { font-family: sans-serif; background: #fafafa; padding: 2rem; color: #333; }
    .card { background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.05); max-width: 600px; margin: auto; }
    h1 { color: #6366f1; border-bottom: 2px solid #eee; padding-bottom: 0.5rem; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 1.5rem 0; }
    .label { font-weight: bold; color: #666; }
    .amount { font-family: monospace; font-size: 1.1rem; text-align: right; }
    .divider { border-bottom: 1px solid #eee; margin: 1rem 0; }
    .net-box { background: #f3f4f6; padding: 1rem; border-radius: 6px; display: flex; justify-content: space-between; align-items: center; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Amdox Enterprise Payslip</h1>
    <div class="grid">
      <div><span class="label">Employee Name:</span> ${data.employeeName}</div>
      <div><span class="label">Pay Period Batch:</span> ${data.batchNumber}</div>
      <div><span class="label">Department:</span> ${data.department}</div>
      <div><span class="label">Title/Role:</span> ${data.role}</div>
    </div>
    
    <div class="divider"></div>
    
    <div class="grid">
      <div><span class="label">Gross Base Salary:</span></div>
      <div class="amount">$${data.grossPay.toFixed(2)}</div>
      
      <div><span class="label">Statutory Deductions:</span></div>
      <div class="amount">-$${data.deductions.toFixed(2)}</div>
      
      <div><span class="label">Federal Income Tax:</span></div>
      <div class="amount">-$${data.taxAmount.toFixed(2)}</div>
    </div>
    
    <div class="divider"></div>
    
    <div class="net-box">
      <span class="label" style="font-size: 1.2rem; color: #111;">Net Pay Disbursed:</span>
      <span class="amount" style="font-size: 1.5rem; font-weight: bold; color: #10b981;">$${data.netPay.toFixed(2)}</span>
    </div>
  </div>
</body>
</html>
    `;

    await fs.promises.writeFile(filePath, htmlContent, 'utf8');
    logger.debug(`📄 Generated mock payslip HTML document at: ${filePath}`);
    
    // Return relative URL for static hosting routes
    return `/storage/payslips/${fileName}`;
  }
}
export default PdfGenerator;
