import logger from '../../utils/logger';

export class ExportService {
  /**
   * Convert an array of JSON objects to a CSV string buffer
   */
  static async exportToCSV(data: Record<string, any>[], fields?: string[]): Promise<Buffer> {
    logger.info(`📊 ExportService: Exporting ${data.length} records to CSV`);
    
    if (data.length === 0) {
      return Buffer.from('');
    }

    const headers = fields || Object.keys(data[0]);
    const csvRows: string[] = [];

    // Add header row
    csvRows.push(headers.join(','));

    // Add data rows
    for (const item of data) {
      const values = headers.map(header => {
        const value = item[header];
        // Handle strings with commas or quotes
        const valStr = value !== undefined && value !== null ? String(value) : '';
        if (valStr.includes(',') || valStr.includes('"') || valStr.includes('\n')) {
          return `"${valStr.replace(/"/g, '""')}"`;
        }
        return valStr;
      });
      csvRows.push(values.join(','));
    }

    return Buffer.from(csvRows.join('\n'));
  }

  /**
   * Generate simple PDF report (mock format or simple layout)
   */
  static async exportToPDF(title: string, data: Record<string, any>[]): Promise<Buffer> {
    logger.info(`📊 ExportService: Generating mock PDF export for: ${title}`);
    
    // Create a text-based mockup of PDF content as a buffer
    let docContent = `--- ${title.toUpperCase()} REPORT ---\n`;
    docContent += `Generated at: ${new Date().toISOString()}\n\n`;
    
    for (const [idx, item] of data.entries()) {
      docContent += `Record #${idx + 1}:\n`;
      for (const [key, val] of Object.entries(item)) {
        docContent += `  ${key}: ${val}\n`;
      }
      docContent += `--------------------\n`;
    }

    return Buffer.from(docContent);
  }
}

export default ExportService;
