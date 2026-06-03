const invoiceRepo = require('../../repositories/finance/invoiceRepository');

exports.getAll = () => invoiceRepo.findAll('created_at DESC');

exports.getById = async (id) => {
  const invoice = await invoiceRepo.findById(id);
  if (!invoice) throw { status: 404, message: 'Invoice not found' };
  return invoice;
};

exports.create = async (data) => {
  if (!data.invoice_no)
    throw { status: 400, message: 'Invoice number is required' };
  return invoiceRepo.create(data);
};

exports.updateStatus = async (id, status) => {
  const allowed = ['unpaid', 'paid', 'overdue'];
  if (!allowed.includes(status))
    throw { status: 400, message: 'Status must be unpaid, paid, or overdue' };

  const invoice = await invoiceRepo.updateStatus(id, status);
  if (!invoice) throw { status: 404, message: 'Invoice not found' };
  return invoice;
};

exports.getSummary = () => invoiceRepo.getSummary();

exports.getByStatus = (status) => invoiceRepo.findByStatus(status);