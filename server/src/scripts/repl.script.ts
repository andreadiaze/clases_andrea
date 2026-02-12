// note: DO NOT RENAME OR MOVE THIS FILE — used by "package.json"
// docs: https://nodejs.org/en/learn/command-line/how-to-use-the-nodejs-repl

import { isProduction } from '@/config/env';
import { db } from '@/lib/drizzle/db';
import * as schemas from '@/lib/drizzle/schemas';
import * as orm from 'drizzle-orm';
import repl from 'node:repl';

// ---------------------------
// GUARDS
// ---------------------------

if (isProduction) throw new Error('Script not allowed in production');

// ---------------------------
// SCRIPT
// ---------------------------

const replServer = repl.start();

// Expose values to REPL context
replServer.context.db = db; // Load drizzle instance
replServer.context.schemas = schemas; // Load drizzle schemas
replServer.context.orm = orm; // Load drizzle orm exports
