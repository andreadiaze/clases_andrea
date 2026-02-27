import { getPermissions } from '@/controllers/permissions.controller';
import { getPermissionsSchema } from '@/lib/zod/schemas/permissions.schema';
import { zodValidator } from '@/middleware/zod-validator';
import { Router } from 'express';

export const permissionsRoutes = Router();

permissionsRoutes.get(
  '/',
  zodValidator({ query: getPermissionsSchema }),
  getPermissions,
);
