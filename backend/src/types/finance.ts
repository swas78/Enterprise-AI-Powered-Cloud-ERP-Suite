import { Schema } from 'mongoose';

export type AccountType = 'asset' | 'liability' | 'equity' | 'revenue' | 'expense';
export type JournalStatus = 'draft' | 'posted' | 'void';
export type InvoiceStatus = 'draft' | 'sent' | 'partial' | 'paid' | 'overdue' | 'void';
export type PaymentMethod = 'bank_transfer' | 'cash' | 'cheque' | 'card' | 'crypto';
export type PaymentStatus = 'pending' | 'completed' | 'failed' | 'refunded';

export interface CreateJournalEntryDTO {
  date: Date;
  description: string;
  reference?: string;
  lines: JournalLineDTO[];
  tenantId: string;
  createdBy: string;
}

export interface JournalLineDTO {
  accountId: Schema.Types.ObjectId | string;
  description?: string;
  debit: number;
  credit: number;
  currency?: string;
}

export interface CreateInvoiceDTO {
  type: 'AP' | 'AR';
  vendorOrCustomerId: string;
  invoiceDate: Date;
  dueDate: Date;
  lineItems: InvoiceLineItemDTO[];
  currency?: string;
  notes?: string;
  tenantId: string;
}

export interface InvoiceLineItemDTO {
  description: string;
  quantity: number;
  unitPrice: number;
  taxRate?: number;
  accountId?: string;
}

export interface CreatePaymentDTO {
  invoiceId: string;
  amount: number;
  currency: string;
  method: PaymentMethod;
  paymentDate: Date;
  reference?: string;
  tenantId: string;
  createdBy: string;
}

export interface CurrencyConversionDTO {
  fromCurrency: string;
  toCurrency: string;
  amount: number;
  date?: Date;
}

export interface TrialBalanceResult {
  accounts: {
    accountCode: string;
    accountName: string;
    type: AccountType;
    debit: number;
    credit: number;
  }[];
  totalDebit: number;
  totalCredit: number;
  balanced: boolean;
}

export interface ProfitLossResult {
  revenue: number;
  expenses: number;
  netProfit: number;
  period: { from: Date; to: Date };
}

export interface BalanceSheetResult {
  assets: number;
  liabilities: number;
  equity: number;
  balanced: boolean;
  period: Date;
}
