import express from 'express';
import cors from 'cors';

import routers from './routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routers);

export default app;