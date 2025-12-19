// note: DO NOT RENAME OR MOVE THIS FILE — used by "package.json"

import express from 'express';
import { PORT } from './config/env';
import { errorHandler } from './middleware/error-handler';
import { notFound } from './middleware/not-found';
import { routes } from './routes';

const app = express();

// ---------------------------
// MIDDLEWARES
// ---------------------------

app.use(express.json()); // Body parser
app.use(routes); // Must be placed after req middlewares
app.use(notFound); // Must be placed after routes
app.use(errorHandler); // Must be the placed last

// ---------------------------
// STARTUP
// ---------------------------

app.listen(PORT, () => {
  console.log(`Application started successfully on port ${PORT}`);
});
