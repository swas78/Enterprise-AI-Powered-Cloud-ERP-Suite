const invoiceService = require('../../services/finance/invoiceService');
const { success, error } = require('../../utils/response');

exports.getAll = async (req, res) => {
  try { success(res, await invoiceService.getAll()); }
  catch (err) { error(res, err.message, err.status || 500); }
};

exports.getOne = async (req, res) => {
  try { success(res, await invoiceService.getById(req.params.id)); }
  catch (err) { error(res, err.message, err.status || 500); }
};

exports.create = async (req, res) => {
  try {
    const data = { ...req.body, created_by: req.user.id };
    success(res, await invoiceService.create(data), 201);
  }
  catch (err) { error(res, err.message, err.status || 500); }
};

exports.updateStatus = async (req, res) => {
  try {
    success(res, await invoiceService.updateStatus(req.params.id, req.body.status));
  }
  catch (err) { error(res, err.message, err.status || 500); }
};

exports.getSummary = async (req, res) => {
  try { success(res, await invoiceService.getSummary()); }
  catch (err) { error(res, err.message, err.status || 500); }
};

exports.getByStatus = async (req, res) => {
  try { success(res, await invoiceService.getByStatus(req.params.status)); }
  catch (err) { error(res, err.message, err.status || 500); }
};