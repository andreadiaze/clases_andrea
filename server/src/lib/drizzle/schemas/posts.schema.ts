import { pgTable, uuid, varchar } from 'drizzle-orm/pg-core';

export const postsTable = pgTable('posts', {
  id: uuid().primaryKey().defaultRandom(),
  content: varchar('content', { length: 255 }).notNull(),
});
