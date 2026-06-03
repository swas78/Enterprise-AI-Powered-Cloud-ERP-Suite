const bcrypt   = require('bcrypt');
const jwt      = require('jsonwebtoken');
const userRepo = require('../repositories/userRepository');
const env      = require('../config/env');

exports.signup = async ({ name, email, password, role }) => {
  const existing = await userRepo.findByEmail(email);
  if (existing) throw { status: 409, message: 'Email already registered' };

  const hashed = await bcrypt.hash(password, 12);
  return userRepo.create({ name, email, password: hashed, role });
};

exports.login = async ({ email, password }) => {
  const user = await userRepo.findByEmail(email);
  if (!user) throw { status: 404, message: 'User not found' };

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) throw { status: 401, message: 'Incorrect password' };

  const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    env.jwt.secret,
    { expiresIn: env.jwt.expiresIn }
  );
  return {
    token,
    user: { id: user.id, name: user.name, email: user.email, role: user.role }
  };
};