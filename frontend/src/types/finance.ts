export interface Account {
  _id: string;
  code: string;
  name: string;
  type: 'Asset' | 'Liability' | 'Equity' | 'Revenue' | 'Expense';
  category?: string;
  isActive?: boolean;
  balance: number;
}

export interface JournalLine {
  accountId: string | Account;
  type: 'Debit' | 'Credit';
  amount: number;
}

export interface JournalEntry {
  _id?: string;
  ref: string;
  description: string;
  date: string | Date;
  lines: JournalLine[];
  isLocked?: boolean;
}

export interface APInvoiceItem {
  name: string;
  price: number;
  quantity: number;
}

export interface APInvoice {
  _id?: string;
  invoiceNumber: string;
  supplierName: string;
  dueDate: string;
  poId: string;
  grId: string;
  items: APInvoiceItem[];
  status?: 'Unpaid' | 'Paid' | 'Processing';
}
