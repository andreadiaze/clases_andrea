import express from 'express';
import { morganMiddleware } from './libs/logger/morgan';
import { errorHandler } from './middleware/error-handler';
import { notFound } from './middleware/not-found';
import { routes } from './routes';

export const app = express();

app.use(morganMiddleware);
app.use(express.json()); // Body parser
app.use(routes); // Must be placed after req middlewares
app.use(notFound); // Must be placed after routes
app.use(errorHandler); // Must be the placed last
