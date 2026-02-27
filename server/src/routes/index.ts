import { Router } from 'express';
import { authRoutes } from './auth.routes';
import { permissionsRoutes } from './permissions.routes';
import { postsRoutes } from './posts.routes';
import { rolesRoutes } from './roles.routes';
import { usersRoutes } from './users.routes';

export const routes = Router();

// ---------------------------
// ROOT ROUTES
// ---------------------------

routes.get('/', (_, res) => {
  res.json({
    message: 'Backend service',
    version: '1.0',
  });
});

// ---------------------------
// API ROUTES
// ---------------------------

routes.use('/posts', postsRoutes);
routes.use('/auth', authRoutes);
routes.use('/users', usersRoutes);
routes.use('/roles', rolesRoutes);
routes.use('/permissions', permissionsRoutes);
