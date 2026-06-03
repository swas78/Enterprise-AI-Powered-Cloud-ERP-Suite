const leaveRepo = require('../../repositories/hr/leaveRepository');

exports.getAll = () => leaveRepo.findAll('created_at DESC');

exports.getById = async (id) => {
  const leave = await leaveRepo.findById(id);
  if (!leave) throw { status: 404, message: 'Leave request not found' };
  return leave;
};

exports.apply = (data) => leaveRepo.create(data);

exports.updateStatus = async (id, status) => {
  const allowed = ['approved', 'rejected'];
  if (!allowed.includes(status))
    throw { status: 400, message: 'Status must be approved or rejected' };

  const leave = await leaveRepo.updateStatus(id, status);
  if (!leave) throw { status: 404, message: 'Leave request not found' };
  return leave;
};