import * as z from 'zod';

// ---------------------------
// TYPES
// ---------------------------

export type PostsParams = z.infer<typeof postsParamsSchema>;
export type GetPosts = z.infer<typeof getPostsSchema>;
export type CreatePost = z.infer<typeof createPostSchema>;
export type UpdatePost = z.infer<typeof updatePostSchema>;

// ---------------------------
// SCHEMAS
// ---------------------------

export const postsParamsSchema = z.strictObject({ id: z.string() });

export const getPostsSchema = z.strictObject({ limit: z.string() });

export const createPostSchema = z.strictObject({
  content: z.string().min(1).max(5),
});

export const updatePostSchema = z.strictObject({ content: z.string() });
