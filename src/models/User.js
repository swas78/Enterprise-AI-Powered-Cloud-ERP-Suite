// Defines the shape of a User object in the system
const User = {
  tableName: 'users',
  fields: ['id', 'name', 'email', 'password', 'role', 'is_active', 'created_at'],
  safeFields: ['id', 'name', 'email', 'role', 'is_active', 'created_at'],
  // safeFields = what we return to frontend (no password!)
  roles: ['admin', 'manager', 'employee'],
};
module.exports = User;