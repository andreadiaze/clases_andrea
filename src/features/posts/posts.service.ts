import { db } from '@/libs/drizzle/db';
import { postsTable } from '@/libs/drizzle/schemas';

class PostsService {
  async create() {
    const createdPost = await db
      .insert(postsTable)
      .values({ content: 'Este es el contenido' });

    return createdPost;
  }
}

export const postsService = new PostsService();
