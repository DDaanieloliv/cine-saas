import express from 'express';

import mediaRoutes from './modules/media/media.routes.js';

const server = express();

server.use(express.json());

server.use('/api', mediaRoutes);

export default server;
