import { ApiError } from '@/errors/api-error';
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ZodObject } from 'zod';

interface ZodValidatorProps {
  params?: ZodObject;
  query?: ZodObject;
  body?: ZodObject;
}

export const zodValidator =
  ({ params, query, body }: ZodValidatorProps) =>
  (req: Request, _: Response, next: NextFunction) => {
    try {
      params?.parse(req.params);
      query?.parse(req.query);
      body?.parse(req.body);

      next();
    } catch {
      throw new ApiError({
        status: StatusCodes.UNPROCESSABLE_ENTITY,
        message: 'Validation failed',
      });
    }
  };
