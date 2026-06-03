const inventoryService = require('../../services/supplyChain/inventoryService');
const auditLog = require('../../utils/auditLogger');
const { success, error } = require('../../utils/response');

exports.getAll = async (req, res) => {
    try { success(res, await inventoryService.getAll()); }
    catch (e) { error(res, e.message, e.status || 500); }
};
exports.getOne = async (req, res) => {
    try { success(res, await inventoryService.getById(req.params.id)); }
    catch (e) { error(res, e.message, e.status || 500); }
};
exports.getLowStock = async (req, res) => {
    try { success(res, await inventoryService.getLowStock()); }
    catch (e) { error(res, e.message, e.status || 500); }
};
exports.create = async (req, res) => {
    try {
        const item = await inventoryService.create(req.body);
        await auditLog(req.user.id, 'CREATE', 'inventory', item.id);
        success(res, item, 201);
    } catch (e) { error(res, e.message, e.status || 500); }
};