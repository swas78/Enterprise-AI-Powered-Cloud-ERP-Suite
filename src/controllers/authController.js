const authService = require('../services/authService');
const { success, error } = require('../utils/response');
const userRepo = require('../repositories/userRepository');

exports.signup = async (req, res) => {
  try {
    const user = await authService.signup(req.body);
    success(res, user, 201);
  } catch (err) {
    error(res, err.message, err.status || 500);
  }
};

exports.login = async (req, res) => {
  try {
    const result = await authService.login(req.body);
    success(res, result);
  } catch (err) {
    error(res, err.message, err.status || 500);
  }
};

exports.getMe = async (req, res) => {
  try {
    const user = await userRepo.findById(req.user.id);
    success(res, user);
  } catch (err) {
    error(res, err.message, 500);
  }
};