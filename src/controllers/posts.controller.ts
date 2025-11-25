// import { postsService } from '@/features/posts/posts.service';
import { postsService } from '@/features/posts/posts.service';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export const getPosts = (
  req: Request<unknown, unknown, unknown, { limit: string }>,
  res: Response,
) => {
  const result = postsService.getAll(req.query);
  res.json(result);
};

export const getPost = (req: Request, res: Response) => {
  const result = postsService.get(req.params.id);
  res.json(result);
};

export const createPost = async (
  req: Request<unknown, unknown, { content: string }, unknown>,
  res: Response,
) => {
  await postsService.create(req.body);
  res
    .status(StatusCodes.CREATED)
    .json({ message: 'Post created successfully' });
};

export const updatePost = (
  req: Request<{ id: string }, unknown, { name: string }, unknown>,
  res: Response,
) => {
  postsService.update(req.params.id, req.body);
  res.json({ message: 'Post updated successfully' });
};

export const deletePost = (req: Request, res: Response) => {
  postsService.delete(req.params.id);
  res.sendStatus(StatusCodes.NO_CONTENT);
};
