// note: express error handler must have 4 parameters
// docs: https://expressjs.com/en/guide/error-handling.html

import { ApiError } from '@/errors/api-error';
import { logger } from '@/libs/logger/winston';
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export const errorHandler = (
  err: Error,
  _: Request,
  res: Response,
  // Disabled eslint: to not being forced to use "_next"
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction,
) => {
  // Default values
  let status = StatusCodes.INTERNAL_SERVER_ERROR;
  let message = 'Server error';
  let validationErrors: ApiError['validationErrors'];

  // Check api error
  if (err instanceof ApiError) {
    status = err.status;
    message = err.message;
    validationErrors = err.validationErrors;
  }

  logger.error(err.stack ?? message);
  res.status(status).json({ message, validationErrors });
};
