import cors from 'cors';
import express from 'express';

import bookCatalogRouter from './modules/bookCatalog/routers/v1/bookCatalog.route';
import bookstoreRouter from './modules/bookstore/routers/v1/bookstore.route';
import eventLogRouter from './modules/eventLog/routers/v1/eventLog.route';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/bookstore', bookstoreRouter);
app.use('/api/v1/event-logs', eventLogRouter);
app.use('/api/v1/books', bookCatalogRouter);

export default app;
