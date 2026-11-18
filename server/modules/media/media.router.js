import { Router } from 'express';

import {
  getMovieController
} from './media.controller.js';

const router = Router();

router.get('/movies/:tmdbId', getMovieController);

export default router;
