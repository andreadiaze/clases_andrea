import { permissionsService } from '@/features/permissions/permissions.service';
import { GetPermissions } from '@/lib/zod/schemas/permissions.schema';
import { TypedRequest } from '@/types/typed-request';
import { Response } from 'express';

export const getPermissions = async (
  req: TypedRequest<{ query: GetPermissions }>,
  res: Response,
) => {
  const result = await permissionsService.getAll(req.query);
  res.json(result);
};
