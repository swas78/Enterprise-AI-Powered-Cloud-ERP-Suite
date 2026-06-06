import { apInvoiceSchema } from '../../../src/validators/finance.validator';

describe('Unit Test: Finance Validators', () => {
  const validPayload = {
    invoiceNumber: 'INV-1234',
    supplierName: 'Silicon Distributors',
    dueDate: '2026-07-03T00:00:00.000Z',
    poId: '507f1f77bcf86cd799439011', // valid 24-char ObjectId hex
    grId: '507f1f77bcf86cd799439012',
    items: [
      {
        sku: 'SKU-CPU-TEST',
        description: 'Test CPU description',
        quantity: 10,
        unitPrice: 150.0,
      },
    ],
  };

  it('should pass validation for a valid AP Invoice payload', () => {
    const parseResult = apInvoiceSchema.safeParse(validPayload);
    expect(parseResult.success).toBe(true);
  });

  it('should fail validation if invoice number is missing', () => {
    const invalidPayload = { ...validPayload, invoiceNumber: '' };
    const parseResult = apInvoiceSchema.safeParse(invalidPayload);
    expect(parseResult.success).toBe(false);
  });

  it('should fail validation if items list is empty', () => {
    const invalidPayload = { ...validPayload, items: [] };
    const parseResult = apInvoiceSchema.safeParse(invalidPayload);
    expect(parseResult.success).toBe(false);
  });

  it('should fail validation if quantity is negative', () => {
    const invalidPayload = {
      ...validPayload,
      items: [
        {
          sku: 'SKU-CPU-TEST',
          quantity: -5,
          unitPrice: 150.0,
        },
      ],
    };
    const parseResult = apInvoiceSchema.safeParse(invalidPayload);
    expect(parseResult.success).toBe(false);
  });
});
