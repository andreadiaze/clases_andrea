import {
  createRole,
  deleteRole,
  getRole,
  getRoles,
  updateRole,
} from '@/controllers/roles.controller';
import {
  createRoleSchema,
  getRolesSchema,
  rolesParamsSchema,
  updateRoleSchema,
} from '@/lib/zod/schemas/roles.schema';
import { zodValidator } from '@/middleware/zod-validator';
import { Router } from 'express';

export const rolesRoutes = Router();

rolesRoutes.get('/', zodValidator({ query: getRolesSchema }), getRoles);

rolesRoutes.get('/:id', zodValidator({ params: rolesParamsSchema }), getRole);

rolesRoutes.post('/', zodValidator({ body: createRoleSchema }), createRole);

rolesRoutes.patch(
  '/:id',
  zodValidator({ params: rolesParamsSchema, body: updateRoleSchema }),
  updateRole,
);

rolesRoutes.delete(
  '/:id',
  zodValidator({ params: rolesParamsSchema }),
  deleteRole,
);
