const Transaction = {
  tableName: 'transactions',
  fields: ['id', 'amount', 'type', 'category',
           'description', 'created_by', 'created_at'],
  types: ['credit', 'debit'],
};
module.exports = Transaction;