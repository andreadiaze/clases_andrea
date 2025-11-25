import { ApiError } from '@/errors/api-error';
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export const notFound = (_: Request, _res: Response, next: NextFunction) => {
  next(new ApiError({ message: 'Not Found', status: StatusCodes.NOT_FOUND }));
};
