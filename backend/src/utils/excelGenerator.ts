import logger from './logger';

export class ExcelGenerator {
  
  // Converts ledger entries to formatted CSV buffer
  public static generateLedgerCsv(
    entries: {
      ref: string;
      description: string;
      date: Date;
      status: string;
      lines: { accountName: string; type: string; amount: number }[];
    }[]
  ): string {
    logger.info('📊 Building CSV export stream for General Ledger entries...');
    
    const headers = ['Entry Ref', 'Description', 'Date', 'Status', 'Account Code/Name', 'Entry Type', 'Amount ($)'];
    const rows = [headers.join(',')];

    for (const entry of entries) {
      const dateStr = new Date(entry.date).toISOString().split('T')[0];
      
      // Loop through lines to output individual ledger transactions
      entry.lines.forEach((line, idx) => {
        const row = [
          idx === 0 ? `"${entry.ref}"` : '""',
          idx === 0 ? `"${entry.description.replace(/"/g, '""')}"` : '""',
          idx === 0 ? `"${dateStr}"` : '""',
          idx === 0 ? `"${entry.status}"` : '""',
          `"${line.accountName}"`,
          `"${line.type}"`,
          line.amount.toFixed(2),
        ];
        rows.push(row.join(','));
      });
    }

    logger.info('📊 CSV Stream generated successfully.');
    return rows.join('\n');
  }
}
export default ExcelGenerator;
