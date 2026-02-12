// note: DO NOT RENAME OR MOVE THIS FILE — used by "package.json"

import { app } from './app';
import { PORT } from './config/env';
import { logger } from './lib/logger/winston';

// ---------------------------
// STARTUP
// ---------------------------

// Server
const server = app.listen(PORT, () => {
  logger.info(`Application started successfully on port ${PORT}`);
});
server.on('error', (err) => {
  logger.error(`startup:failed ${err}`);
  process.exit(1);
});
