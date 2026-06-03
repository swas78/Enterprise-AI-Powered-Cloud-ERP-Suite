const txRepo = require('../../repositories/finance/transactionRepository');

exports.getAll = () => txRepo.findAll('created_at DESC');

exports.getById = async (id) => {
  const tx = await txRepo.findById(id);
  if (!tx) throw { status: 404, message: 'Transaction not found' };
  return tx;
};

exports.create = (data) => txRepo.create(data);

exports.getSummary = () => txRepo.getSummary();