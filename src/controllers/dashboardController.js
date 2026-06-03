const dashRepo = require('../repositories/dashboardRepository');
const { success, error } = require('../utils/response');

exports.getSummary = async (req, res) => {
  try { success(res, await dashRepo.getSummary()); }
  catch (err) { error(res, err.message, 500); }
};