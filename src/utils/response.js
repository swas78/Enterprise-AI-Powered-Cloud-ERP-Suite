exports.success = (res, data, status = 200) =>
  res.status(status).json({ success: true, data });

exports.error = (res, message, status = 500) =>
  res.status(status).json({ success: false, error: message });

exports.paginated = (res, data, total, page, limit) =>
  res.json({ success: true, data, meta: { total, page, limit,
    pages: Math.ceil(total / limit) } });