import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from '@/controllers/posts.controller';
import { createPostSchema } from '@/libs/zod/schemas/posts.schema';
import { zodValidator } from '@/middleware/zod-validator';
import { Router } from 'express';

export const postsRoutes = Router();

postsRoutes.get('/', getPosts);
postsRoutes.get('/:id', getPost);
postsRoutes.post('/', zodValidator({ body: createPostSchema }), createPost);
postsRoutes.patch('/:id', updatePost);
postsRoutes.delete('/:id', deletePost);
