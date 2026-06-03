const invRepo = require('../../repositories/supplyChain/inventoryRepository');

exports.getAll = () => invRepo.findAll();
exports.getById = async (id) => {
    const i = await invRepo.findById(id);
    if (!i) throw { status: 404, message: 'Item not found' };
    return i;
};
exports.create = (data) => invRepo.create(data);
exports.getLowStock = () => invRepo.getLowStock();