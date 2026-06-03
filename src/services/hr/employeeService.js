const employeeRepo = require('../../repositories/hr/employeeRepository');

exports.getAll = () => employeeRepo.findAllWithUser();

exports.getById = async (id) => {
  const emp = await employeeRepo.findById(id);
  if (!emp) throw { status: 404, message: 'Employee not found' };
  return emp;
};

exports.create = (data) => employeeRepo.create(data);

exports.update = async (id, data) => {
  const emp = await employeeRepo.update(id, data);
  if (!emp) throw { status: 404, message: 'Employee not found' };
  return emp;
};

exports.remove = async (id) => {
  const deleted = await employeeRepo.deleteById(id);
  if (!deleted) throw { status: 404, message: 'Employee not found' };
};