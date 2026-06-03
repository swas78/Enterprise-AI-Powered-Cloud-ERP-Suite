const poRepo = require('../../repositories/supplyChain/purchaseOrderRepository');

exports.getAll = () => poRepo.findAll();
exports.getById = async (id) => {
    const po = await poRepo.findById(id);
    if (!po) throw { status: 404, message: 'Purchase order not found' };
    return po;
};
exports.create = (data) => poRepo.create(data);
exports.updateStatus = async (id, status) => {
    const allowed = ['pending', 'approved', 'delivered', 'cancelled'];
    if (!allowed.includes(status))
        throw { status: 400, message: 'Invalid status value' };
    const po = await poRepo.updateStatus(id, status);
    if (!po) throw { status: 404, message: 'Purchase order not found' };
    return po;
};