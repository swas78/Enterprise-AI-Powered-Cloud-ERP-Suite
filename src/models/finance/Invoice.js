const Invoice = {
  tableName: 'invoices',
  fields: ['id', 'invoice_no', 'client_name',
           'amount', 'status', 'due_date', 'created_by'],
  statuses: ['unpaid', 'paid', 'overdue'],
};
module.exports = Invoice;