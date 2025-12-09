import { Request } from 'express';

export type TypedRequest<
  T extends { params?: unknown; body?: unknown; query?: unknown },
> = Request<T['params'], unknown, T['body'], T['query']>;
