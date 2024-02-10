import cors from 'cors';
import express from 'express';

import bookstoreRouter from './modules/bookstore/routers/v1/bookstore.route';
import eventLogRouter from './modules/eventLog/routers/v1/eventLog.route';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/bookstore', bookstoreRouter);
app.use('/api/v1/event-logs', eventLogRouter);

export default app;
