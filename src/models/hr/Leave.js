const Leave = {
  tableName: 'leave_requests',
  fields: ['id', 'employee_id', 'leave_type',
           'start_date', 'end_date', 'status', 'reason'],
  types:    ['sick', 'casual', 'annual', 'maternity'],
  statuses: ['pending', 'approved', 'rejected'],
};
module.exports = Leave;