import { db } from '@/libs/drizzle/db';
import { postsTable } from '@/libs/drizzle/schemas';

interface GetAllProps {
  limit: string;
}
class PostsService {
  getAll({ limit }: GetAllProps) {
    return limit;
  }

  get(id: string) {
    return id;
  }

  async create(props: { content: string }) {
    const [createdPost] = await db.insert(postsTable).values(props).returning();
    return createdPost;
  }

  update(id: string, props: { name: string }) {
    return { id, ...props };
  }

  delete(id: string) {
    return id;
  }
}

export const postsService = new PostsService();
