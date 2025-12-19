import { StatusCodes } from 'http-status-codes';
import { ApiError } from './api-error';

// ---------------------------
// 404 NOT FOUND
// ---------------------------

export const NotFoundError = new ApiError({
  status: StatusCodes.NOT_FOUND,
  message: 'Post not found',
});

export const buildEntityNotFoundError = (entity: string) =>
  new ApiError({
    status: StatusCodes.NOT_FOUND,
    message: `${entity} not found`,
  });

// ---------------------------
// 422 UNPROCESSABLE ENTITY
// ---------------------------

export const buildValidationFailedError = (
  validationErrors: ApiError['validationErrors'],
) =>
  new ApiError({
    status: StatusCodes.UNPROCESSABLE_ENTITY,
    message: 'Validation failed',
    validationErrors,
  });
