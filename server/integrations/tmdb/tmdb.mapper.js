export function mapMovie(movie) {
  return {
    tmdb: {
      id: movie.id,
      type: 'movie'
    },

    title: movie.title,
    originalTitle: movie.original_title,
    overview: movie.overview,

    releaseDate: movie.release_date || null,
    runtime: movie.runtime,
    originalLanguage: movie.original_language,

    popularity: movie.popularity,
    voteAverage: movie.vote_average,
    voteCount: movie.vote_count,

    genres: (movie.genres ?? []).map(genre => ({
      tmdbId: genre.id,
      name: genre.name
    })),

    credits: {
      cast: (movie.credits?.cast ?? []).map(person => ({
        tmdbId: person.id,
        name: person.name,
        character: person.character,
        order: person.order
      })),

      crew: (movie.credits?.crew ?? []).map(person => ({
        tmdbId: person.id,
        name: person.name,
        job: person.job,
        department: person.department
      }))
    },

    images: {
      posters: (movie.images?.posters ?? []).map(image => ({
        filePath: image.file_path,
        width: image.width,
        height: image.height,
        language: image.iso_639_1
      })),

      backdrops: (movie.images?.backdrops ?? []).map(image => ({
        filePath: image.file_path,
        width: image.width,
        height: image.height,
        language: image.iso_639_1
      }))
    },

    videos: (movie.videos?.results ?? []).map(video => ({
      tmdbId: video.id,
      name: video.name,
      site: video.site,
      key: video.key,
      type: video.type
    })),

    lastSyncedAt: new Date()
  };
}
