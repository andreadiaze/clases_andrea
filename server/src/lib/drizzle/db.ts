// docs: https://orm.drizzle.team/docs/connect-overview

import { DATABASE_URL } from '@/config/env';
import { logger } from '@/lib/logger/winston';
import { Logger } from 'drizzle-orm/logger';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schemas from './schemas';

// ---------------------------
// POOL
// ---------------------------

export const pool = new Pool({ connectionString: DATABASE_URL });

// ---------------------------
// UTILS
// ---------------------------

class DrizzleLogger implements Logger {
  logQuery(query: string, params: unknown[]) {
    logger.debug(`${query} -- params: ${JSON.stringify(params)}`);
  }
}

// ---------------------------
// DRIZZLE INSTANCE
// ---------------------------

export const db = drizzle({
  client: pool,
  logger: new DrizzleLogger(),
  schema: schemas, // Enable "db.query" for all schemas
});
