import cors from 'cors';
import express from 'express';

import bookstoreRouter from './modules/bookstore/routers/v1/bookstore.route';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/bookstore', bookstoreRouter);

export default app;
