import { MediaRepository } from './media.repository.js';

import { getMovie } from '../../integrations/tmdb/tmdb.client.js';
import { mapMovie } from '../../integrations/tmdb/tmdb.mapper.js';

const CACHE_DURATION = 24 * 60 * 60 * 1000;

export async function findMovie(tmdbId) {
  const existing = await MediaRepository.findByTmdbId(tmdbId);

  const isExpired = !existing?.lastSyncedAt ||
    Date.now() - existing.lastSyncedAt.getTime() > CACHE_DURATION;

  if (existing && !isExpired) {
    return existing;
  }

  const tmdbMovie = await getMovie(tmdbId);

  const movieData = mapMovie(tmdbMovie);

  return MediaRepository.saveOrUpdate(movieData);
}
