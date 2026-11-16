const requestLogger = (req, res, next) => {
  const time = new Date().toISOString();
  console.log(`[${time}] ${req.method} ${req.originalUrl}`);

  // Pass control to the next middleware or route handler
  next();
};

module.exports = requestLogger;