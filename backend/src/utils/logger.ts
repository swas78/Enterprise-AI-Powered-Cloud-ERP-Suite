import winston from 'winston';
import path from 'path';

// Define custom logging formatting
const logFormat = winston.format.printf(({ timestamp, level, message, ...metadata }) => {
  let metaString = '';
  if (Object.keys(metadata).length > 0) {
    metaString = ` | Meta: ${JSON.stringify(metadata)}`;
  }
  return `[${timestamp}] | ${level.toUpperCase().padEnd(5)} | ${message}${metaString}`;
});

// Configure Winston instances
const logger = winston.createLogger({
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.metadata({ fillExcept: ['message', 'level', 'timestamp'] }),
    logFormat
  ),
  transports: [
    // Console transport (always active)
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        logFormat
      )
    })
  ]
});

// If in production, log details to persistent files
if (process.env.NODE_ENV === 'production') {
  const logDirectory = path.join(process.cwd(), 'logs');
  
  logger.add(
    new winston.transports.File({
      filename: path.join(logDirectory, 'error.log'),
      level: 'error',
      maxsize: 5242880, // 5MB
      maxFiles: 5,
    })
  );

  logger.add(
    new winston.transports.File({
      filename: path.join(logDirectory, 'combined.log'),
      maxsize: 5242880, // 5MB
      maxFiles: 5,
    })
  );
}

export default logger;
