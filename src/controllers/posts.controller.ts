// import { postsService } from '@/features/posts/posts.service';
import { postsService } from '@/features/posts/posts.service';
import { CreatePost } from '@/libs/zod/schemas/posts.schema';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export const getPosts = async (
  req: Request<unknown, unknown, unknown, { limit: string }>,
  res: Response,
) => {
  const result = await postsService.getAll(req.query);
  res.json(result);
};

export const getPost = async (req: Request, res: Response) => {
  const result = await postsService.get(req.params.id);
  res.json(result);
};

export const createPost = async (
  req: Request<unknown, unknown, CreatePost, unknown>,
  res: Response,
) => {
  await postsService.create(req.body);
  res
    .status(StatusCodes.CREATED)
    .json({ message: 'Post created successfully' });
};

export const updatePost = async (
  req: Request<{ id: string }, unknown, { content: string }, unknown>,
  res: Response,
) => {
  await postsService.update(req.params.id, req.body);
  res.json({ message: 'Post updated successfully' });
};

export const deletePost = async (req: Request, res: Response) => {
  await postsService.delete(req.params.id);
  res.sendStatus(StatusCodes.NO_CONTENT);
};
