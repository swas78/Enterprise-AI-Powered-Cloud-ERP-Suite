const leaveService = require('../../services/hr/leaveService');
const { success, error } = require('../../utils/response');

exports.getAll = async (req, res) => {
  try { success(res, await leaveService.getAll()); }
  catch (err) { error(res, err.message, err.status || 500); }
};

exports.getOne = async (req, res) => {
  try { success(res, await leaveService.getById(req.params.id)); }
  catch (err) { error(res, err.message, err.status || 500); }
};

exports.apply = async (req, res) => {
  try { success(res, await leaveService.apply(req.body), 201); }
  catch (err) { error(res, err.message, err.status || 500); }
};

exports.updateStatus = async (req, res) => {
  try {
    success(res, await leaveService.updateStatus(req.params.id, req.body.status));
  }
  catch (err) { error(res, err.message, err.status || 500); }
};