const Employee = {
  tableName: 'employees',
  fields: ['id', 'user_id', 'department', 'position',
           'salary', 'join_date', 'status'],
  statuses: ['active', 'inactive', 'terminated'],
};
module.exports = Employee;