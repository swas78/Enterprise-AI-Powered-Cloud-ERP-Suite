import { Schema, model, Document } from 'mongoose';

export interface IInvoiceItem {
  sku: string;
  description: string;
  quantity: number;
  unitPrice: number;
}

export interface IInvoice extends Document {
  tenantId: Schema.Types.ObjectId;
  invoiceNumber: string; // e.g. "INV-10022"
  type: 'AP' | 'AR'; // Accounts Payable vs Accounts Receivable
  partyName: string; // Customer name (AR) or Vendor name (AP)
  issueDate: Date;
  dueDate: Date;
  items: IInvoiceItem[];
  totalAmount: number;
  balanceDue: number;
  status: 'Draft' | 'Unpaid' | 'Paid' | 'Overdue';
  poId?: Schema.Types.ObjectId; // AP reference
  grId?: Schema.Types.ObjectId; // AP reference
  createdAt: Date;
  updatedAt: Date;
}

const InvoiceItemSchema = new Schema<IInvoiceItem>({
  sku: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: [1, 'Quantity must be at least 1'],
  },
  unitPrice: {
    type: Number,
    required: true,
    min: [0.01, 'Unit price must be greater than zero'],
  },
});

const InvoiceSchema = new Schema<IInvoice>(
  {
    tenantId: {
      type: Schema.Types.ObjectId,
      ref: 'Tenant',
      required: true,
    },
    invoiceNumber: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      enum: ['AP', 'AR'],
      required: true,
    },
    partyName: {
      type: String,
      required: [true, 'Customer or Supplier party name is required'],
      trim: true,
    },
    issueDate: {
      type: Date,
      default: Date.now,
    },
    dueDate: {
      type: Date,
      required: [true, 'Invoice due date is required'],
    },
    items: [InvoiceItemSchema],
    totalAmount: {
      type: Number,
      required: true,
      default: 0,
    },
    balanceDue: {
      type: Number,
      required: true,
      default: 0,
    },
    status: {
      type: String,
      enum: ['Draft', 'Unpaid', 'Paid', 'Overdue'],
      default: 'Unpaid',
    },
    poId: {
      type: Schema.Types.ObjectId,
      ref: 'PurchaseOrder',
    },
    grId: {
      type: Schema.Types.ObjectId,
      ref: 'GoodsReceipt',
    },
  },
  {
    timestamps: true,
  }
);

// Pre-save hook to ensure mathematical integrity on amounts
InvoiceSchema.pre<IInvoice>('save', function (next) {
  this.totalAmount = this.items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
  
  if (this.isNew) {
    this.balanceDue = this.totalAmount;
  }
  
  // Set overdue status if applicable
  if (this.balanceDue > 0 && new Date() > this.dueDate) {
    this.status = 'Overdue';
  }

  next();
});

// Indexes
InvoiceSchema.index({ tenantId: 1 });
InvoiceSchema.index({ tenantId: 1, invoiceNumber: 1 }, { unique: true });
InvoiceSchema.index({ type: 1 });
InvoiceSchema.index({ status: 1 });

export const Invoice = model<IInvoice>('Invoice', InvoiceSchema);
export default Invoice;
