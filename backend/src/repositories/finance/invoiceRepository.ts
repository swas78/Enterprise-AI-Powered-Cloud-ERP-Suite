import { BaseRepository } from '../baseRepository';
import { Invoice, IInvoice } from '../../models/finance/Invoice';

export class InvoiceRepository extends BaseRepository<IInvoice> {
  constructor() {
    super(Invoice);
  }
}

export const invoiceRepository = new InvoiceRepository();
export default invoiceRepository;
