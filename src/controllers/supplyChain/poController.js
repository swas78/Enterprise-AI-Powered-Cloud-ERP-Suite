const poService  = require('../../services/supplyChain/poService');
const auditLog   = require('../../utils/auditLogger');
const { success, error } = require('../../utils/response');

exports.getAll = async (req, res) => {
  try { success(res, await poService.getAll()); }
  catch (e) { error(res, e.message, e.status || 500); }
};

exports.getOne = async (req, res) => {
  try { success(res, await poService.getById(req.params.id)); }
  catch (e) { error(res, e.message, e.status || 500); }
};

exports.create = async (req, res) => {
  try {
    const data = { ...req.body, created_by: req.user.id };
    const po   = await poService.create(data);
    await auditLog(req.user.id, 'CREATE', 'purchase_orders', po.id);
    success(res, po, 201);
  } catch (e) { error(res, e.message, e.status || 500); }
};

exports.updateStatus = async (req, res) => {
  try {
    const po = await poService.updateStatus(req.params.id, req.body.status);
    await auditLog(req.user.id, 'UPDATE', 'purchase_orders', po.id);
    success(res, po);
  } catch (e) { error(res, e.message, e.status || 500); }
};
