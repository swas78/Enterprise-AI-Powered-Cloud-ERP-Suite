export class DateUtils {
  public static formatDate(date: Date, format: string = 'YYYY-MM-DD'): string {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    
    return format
      .replace('YYYY', String(year))
      .replace('MM', month)
      .replace('DD', day);
  }

  public static diffDays(d1: Date, d2: Date): number {
    const diffMs = Math.abs(new Date(d1).getTime() - new Date(d2).getTime());
    return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  }
}

export default DateUtils;
