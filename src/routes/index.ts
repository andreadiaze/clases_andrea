import { Router } from 'express';
import { postsRoutes } from './posts.routes';

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
