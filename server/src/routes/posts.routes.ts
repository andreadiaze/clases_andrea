import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from '@/controllers/posts.controller';
import {
  createPostSchema,
  getPostsSchema,
  postsParamsSchema,
  updatePostSchema,
} from '@/libs/zod/schemas/posts.schema';
import { zodValidator } from '@/middleware/zod-validator';
import { Router } from 'express';

export const postsRoutes = Router();

postsRoutes.get('/', zodValidator({ query: getPostsSchema }), getPosts);
postsRoutes.get('/:id', zodValidator({ params: postsParamsSchema }), getPost);
postsRoutes.post('/', zodValidator({ body: createPostSchema }), createPost);

postsRoutes.patch(
  '/:id',
  zodValidator({ params: postsParamsSchema, body: updatePostSchema }),
  updatePost,
);

postsRoutes.delete(
  '/:id',
  zodValidator({ params: postsParamsSchema }),
  deletePost,
);
