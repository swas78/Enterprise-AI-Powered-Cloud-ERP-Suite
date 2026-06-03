const employeeService = require('../../services/hr/employeeService');
const { success, error } = require('../../utils/response');

exports.getAll   = async (req, res) => {
  try { success(res, await employeeService.getAll()); }
  catch (err) { error(res, err.message, err.status || 500); }
};
exports.getOne   = async (req, res) => {
  try { success(res, await employeeService.getById(req.params.id)); }
  catch (err) { error(res, err.message, err.status || 500); }
};
exports.create   = async (req, res) => {
  try { success(res, await employeeService.create(req.body), 201); }
  catch (err) { error(res, err.message, err.status || 500); }
};
exports.update   = async (req, res) => {
  try { success(res, await employeeService.update(req.params.id, req.body)); }
  catch (err) { error(res, err.message, err.status || 500); }
};
exports.remove   = async (req, res) => {
  try {
    await employeeService.remove(req.params.id);
    success(res, { message: 'Employee deleted' });
  } catch (err) { error(res, err.message, err.status || 500); }
};