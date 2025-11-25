// note: express error handler must have 4 parameters
// docs: https://expressjs.com/en/guide/error-handling.html

import { ApiError } from '@/errors/api-error';
import { NextFunction, Request, Response } from 'express';

export const errorHandler = (
  err: ApiError,
  _: Request,
  res: Response,
  // Disabled eslint: to not being forced to use "_next"
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction,
) => {
  res.status(err.status).json({ message: err.message || 'Error global' });
};
