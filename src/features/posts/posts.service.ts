import { ApiError } from '@/errors/api-error';
import { db } from '@/libs/drizzle/db';
import { postsTable } from '@/libs/drizzle/schemas';
import { CreatePost } from '@/libs/zod/schemas/posts.schema';
import { eq } from 'drizzle-orm';
import { StatusCodes } from 'http-status-codes';

interface GetAllProps {
  limit: string;
}

class PostsService {
  async getAll({ limit }: GetAllProps) {
    const posts = await db.query.postsTable.findMany({ limit: Number(limit) });
    return posts;
  }

  // SELECT MODE
  // async get(id: string) {
  //   const posts = await db
  //     .select()
  //     .from(postsTable)
  //     .where(eq(postsTable.id, id));
  //   if (!posts.length)
  //     throw new ApiError({
  //       message: 'Post not found',
  //       status: StatusCodes.NOT_FOUND,
  //     });

  //   return posts[0];
  // }

  // QUERY MODE
  async get(id: string) {
    const post = await db.query.postsTable.findFirst({
      where: eq(postsTable.id, id),
    });
    if (!post)
      throw new ApiError({
        message: 'Post not found',
        status: StatusCodes.NOT_FOUND,
      });

    return post;
  }

  async create(props: CreatePost) {
    const [createdPost] = await db.insert(postsTable).values(props).returning();
    return createdPost;
  }

  async update(id: string, props: { content: string }) {
    const updatedPosts = await db
      .update(postsTable)
      .set(props)
      .where(eq(postsTable.id, id))
      .returning();
    if (!updatedPosts.length)
      throw new ApiError({
        message: 'Post not found',
        status: StatusCodes.NOT_FOUND,
      });

    return updatedPosts[0];
  }

  async delete(id: string) {
    const deletedPosts = await db
      .delete(postsTable)
      .where(eq(postsTable.id, id))
      .returning();
    if (!deletedPosts.length)
      throw new ApiError({
        message: 'Post not found',
        status: StatusCodes.NOT_FOUND,
      });

    return deletedPosts[0];
  }
}

export const postsService = new PostsService();
