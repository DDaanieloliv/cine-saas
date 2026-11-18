import { Media } from './media.model.js';

export const MediaRepository = {
  findByTmdbId(tmdbId, type = 'movie') {
    return Media.findOne({
      'tmdb.id': tmdbId,
      'tmdb.type': type
    });
  },

  saveOrUpdate(data) {
    return Media.findOneAndUpdate(
      {
        'tmdb.id': data.tmdb.id,
        'tmdb.type': data.tmdb.type
      },
      {
        $set: data
      },
      {
        new: true,
        upsert: true,
        runValidators: true
      }
    );
  }
};
