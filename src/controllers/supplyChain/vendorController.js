const vendorService = require('../../services/supplyChain/vendorService');
const auditLog = require('../../utils/auditLogger');
const { success, error } = require('../../utils/response');

exports.getAll = async (req, res) => {
    try { success(res, await vendorService.getAll()); }
    catch (e) { error(res, e.message, e.status || 500); }
};
exports.getOne = async (req, res) => {
    try { success(res, await vendorService.getById(req.params.id)); }
    catch (e) { error(res, e.message, e.status || 500); }
};
exports.create = async (req, res) => {
    try {
        const v = await vendorService.create(req.body);
        await auditLog(req.user.id, 'CREATE', 'vendors', v.id);
        success(res, v, 201);
    } catch (e) { error(res, e.message, e.status || 500); }
};
exports.remove = async (req, res) => {
    try {
        await vendorService.remove(req.params.id);
        await auditLog(req.user.id, 'DELETE', 'vendors', req.params.id);
        success(res, { message: 'Vendor deleted' });
    } catch (e) { error(res, e.message, e.status || 500); }
};