// import { postsService } from '@/features/posts/posts.service';
import { postsService } from '@/features/posts/posts.service';
import {
  CreatePost,
  GetPosts,
  PostsParams,
  UpdatePost,
} from '@/libs/zod/schemas/posts.schema';
import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { TypedRequest } from 'types/typed-request';

export const getPosts = async (
  req: TypedRequest<{ query: GetPosts }>,
  res: Response,
) => {
  const result = await postsService.getAll(req.query);
  res.json(result);
};

export const getPost = async (
  req: TypedRequest<{ params: PostsParams }>,
  res: Response,
) => {
  const result = await postsService.get(req.params.id);
  res.json(result);
};

export const createPost = async (
  req: TypedRequest<{ body: CreatePost }>,
  res: Response,
) => {
  await postsService.create(req.body);
  res
    .status(StatusCodes.CREATED)
    .json({ message: 'Post created successfully' });
};

export const updatePost = async (
  req: TypedRequest<{ params: PostsParams; body: UpdatePost }>,
  res: Response,
) => {
  await postsService.update(req.params.id, req.body);
  res.json({ message: 'Post updated successfully' });
};

export const deletePost = async (
  req: TypedRequest<{ params: PostsParams }>,
  res: Response,
) => {
  await postsService.delete(req.params.id);
  res.sendStatus(StatusCodes.NO_CONTENT);
};
