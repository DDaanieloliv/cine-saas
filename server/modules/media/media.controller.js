import { findMovie } from './media.service.js';

export async function getMovieController(req, res) {
  try {
    const tmdbId = Number(req.params.tmdbId);

    if (!Number.isSafeInteger(tmdbId) || tmdbId <= 0) {
      return res.status(400).json({
        error: 'Invalid TMDB movie ID'
      });
    }

    const movie = await findMovie(tmdbId);

    return res.status(200).json(movie);

  } catch (error) {
    next(error);
  }
}
