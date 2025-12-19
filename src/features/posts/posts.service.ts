import { buildEntityNotFoundError } from '@/errors/api-errors';
import { db } from '@/libs/drizzle/db';
import { postsTable } from '@/libs/drizzle/schemas';
import {
  CreatePost,
  GetPosts,
  UpdatePost,
} from '@/libs/zod/schemas/posts.schema';
import { eq } from 'drizzle-orm';

const PostNotFoundError = buildEntityNotFoundError('Post');

class PostsService {
  async getAll({ limit }: GetPosts) {
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
    if (!post) throw PostNotFoundError;

    return post;
  }

  async create(props: CreatePost) {
    const [createdPost] = await db.insert(postsTable).values(props).returning();
    return createdPost;
  }

  async update(id: string, props: UpdatePost) {
    const updatedPosts = await db
      .update(postsTable)
      .set(props)
      .where(eq(postsTable.id, id))
      .returning();
    if (!updatedPosts.length) throw PostNotFoundError;

    return updatedPosts[0];
  }

  async delete(id: string) {
    const deletedPosts = await db
      .delete(postsTable)
      .where(eq(postsTable.id, id))
      .returning();
    if (!deletedPosts.length) throw PostNotFoundError;

    return deletedPosts[0];
  }
}

export const postsService = new PostsService();
