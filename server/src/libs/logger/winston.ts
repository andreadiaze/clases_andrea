// docs: https://github.com/winstonjs/winston?tab=readme-ov-file#logging

import { isDevelopment, isTest } from '@/config/env';
import winston from 'winston';

const consoleFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format.colorize(),
  winston.format.printf(
    (el) => `${String(el.timestamp)} [${el.level}]: ${String(el.message)}`,
  ),
);

export const logger = winston.createLogger({
  silent: isTest, // Enable/disable logs
  level: isDevelopment ? 'debug' : 'http', // Enable/disable verbose logs
  transports: [new winston.transports.Console({ format: consoleFormat })],
});
