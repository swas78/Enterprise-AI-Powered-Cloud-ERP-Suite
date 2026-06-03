const transactionService = require('../../services/finance/transactionService');
const { success, error } = require('../../utils/response');

exports.getAll = async (req, res) => {
  try { success(res, await transactionService.getAll()); }
  catch (err) { error(res, err.message, err.status || 500); }
};

exports.getOne = async (req, res) => {
  try { success(res, await transactionService.getById(req.params.id)); }
  catch (err) { error(res, err.message, err.status || 500); }
};

exports.create = async (req, res) => {
  try {
    const data = { ...req.body, created_by: req.user.id };
    success(res, await transactionService.create(data), 201);
  }
  catch (err) { error(res, err.message, err.status || 500); }
};

exports.getSummary = async (req, res) => {
  try { success(res, await transactionService.getSummary()); }
  catch (err) { error(res, err.message, err.status || 500); }
};