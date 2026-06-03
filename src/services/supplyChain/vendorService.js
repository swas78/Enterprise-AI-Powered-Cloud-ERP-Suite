const vendorRepo = require('../../repositories/supplyChain/vendorRepository');

exports.getAll = () => vendorRepo.findAll();
exports.getById = async (id) => {
    const v = await vendorRepo.findById(id);
    if (!v) throw { status: 404, message: 'Vendor not found' };
    return v;
};
exports.create = (data) => vendorRepo.create(data);
exports.remove = async (id) => {
    const ok = await vendorRepo.deleteById(id);
    if (!ok) throw { status: 404, message: 'Vendor not found' };
};