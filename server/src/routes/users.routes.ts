import {
  deleteUser,
  getUser,
  getUserMe,
  getUsers,
  updateUser,
  updateUserMe,
  updateUserMeEmail,
  updateUserMePassword,
} from '@/controllers/users.controller';
import {
  getUsersSchema,
  updateUserMeEmailSchema,
  updateUserMePasswordSchema,
  updateUserMeSchema,
  updateUserSchema,
  usersParamsSchema,
} from '@/lib/zod/schemas/users.schema';
import { zodValidator } from '@/middleware/zod-validator';
import { Router } from 'express';

export const usersRoutes = Router();

// ---------------------------
// ROUTES: /users/me
// ---------------------------

usersRoutes.get('/me', getUserMe);

usersRoutes.patch(
  '/me',
  zodValidator({ body: updateUserMeSchema }),
  updateUserMe,
);

usersRoutes.patch(
  '/me/password',
  zodValidator({ body: updateUserMePasswordSchema }),
  updateUserMePassword,
);

usersRoutes.patch(
  '/me/email',
  zodValidator({ body: updateUserMeEmailSchema }),
  updateUserMeEmail,
);

// ---------------------------
// ROUTES: /users + /users/:id
// ---------------------------

usersRoutes.get('/', zodValidator({ query: getUsersSchema }), getUsers);

usersRoutes.get('/:id', zodValidator({ params: usersParamsSchema }), getUser);

usersRoutes.patch(
  '/:id',
  zodValidator({ params: usersParamsSchema, body: updateUserSchema }),
  updateUser,
);

usersRoutes.delete(
  '/:id',
  zodValidator({ params: usersParamsSchema }),
  deleteUser,
);
