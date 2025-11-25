// docs: https://orm.drizzle.team/docs/connect-overview

import { DATABASE_URL } from '@/config/env';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schemas from './schemas';

export const pool = new Pool({ connectionString: DATABASE_URL });
export const db = drizzle({
  client: pool,
  schema: schemas, // Enable "db.query" for all schemas
});
