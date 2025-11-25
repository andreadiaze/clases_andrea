// import { postsService } from '@/features/posts/posts.service';
import { Request, Response } from 'express';

export const getPosts = (req: Request, res: Response) => {
  res.json(req.query);
};

export const getPost = (req: Request, res: Response) => {
  const paramsId = req.params.id;
  res.json({ message: paramsId });
};

export const createPost = (req: Request, res: Response) => {
  // const createdPost = await postsService.create();

  res.json(req.body);
};

export const updatePost = (req: Request, res: Response) => {
  const paramsId = req.params.id;
  res.json({ ...req.body, paramsId });
};

export const deletePost = (req: Request, res: Response) => {
  const paramsId = req.params.id;
  res.json({ message: paramsId });
};
