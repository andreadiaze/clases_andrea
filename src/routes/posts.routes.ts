import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from '@/controllers/posts.controller';
import { Router } from 'express';

export const postsRoutes = Router();

postsRoutes.get('/', getPosts);
postsRoutes.get('/:id', getPost);
postsRoutes.post('/', createPost);
postsRoutes.patch('/:id', updatePost);
postsRoutes.delete('/:id', deletePost);
