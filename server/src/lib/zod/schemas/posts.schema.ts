import { content, limit, page, search, uuid } from '@/lib/zod/utils/fields';
import * as z from 'zod';

// ---------------------------
// TYPES
// ---------------------------

export type PostsParams = z.infer<typeof postsParamsSchema>;
export type GetPosts = z.infer<typeof getPostsSchema>;
export type CreatePost = z.infer<typeof createPostSchema>;
export type UpdatePost = z.infer<typeof updatePostSchema>;

// ---------------------------
// FIELDS
// ---------------------------

const id = uuid;

// ---------------------------
// SCHEMAS
// ---------------------------

export const postsParamsSchema = z.strictObject({ id });
export const getPostsSchema = z.strictObject({ limit, page, search }).partial();
export const createPostSchema = z.strictObject({ content });
export const updatePostSchema = z.strictObject({ content }).partial();
