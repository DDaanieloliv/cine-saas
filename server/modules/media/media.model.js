import mongoose from "mongoose";

const { Scheme, model } = mongoose;

const GenreSchema = new Schema({
  tmdbId: Number,
  name: String
}, { _id: false });

const ImageSchema = new Schema({
  filePath: String,
  width: Number,
  height: Number,
  language: String
}, { _id: false });

const CreditSchema = new Schema({
  tmdbId: Number,
  name: String,
  character: String,
  job: String,
  department: String,
  order: Number
}, { _id: false });

const MediaSchema = new Schema({
  tmdb: {
    id: {
      type: Number,
      required: true
    },
    type: {
      type: String,
      enum: ['movie', 'tv'],
      required: true
    }
  },

  title: String,
  originalTitle: String,
  overview: String,
  releaseDate: Date,
  runtime: Number,
  originalLanguage: String,

  popularity: Number,
  voteAverage: Number,
  voteCount: Number,

  genres: [GenreSchema],

  credits: {
    cast: [CreditSchema],
    crew: [CreditSchema]
  },

  images: {
    posters: [ImageSchema],
    backdrops: [ImageSchema]
  },

  videos: [{
    tmdbId: String,
    name: String,
    site: String,
    key: String,
    type: String
  }],

  lastSyncedAt: Date

}, {
  timestamps: true,
  collection: 'media'
});

MediaSchema.index(
  { 'tmdb.type': 1, 'tmdb.id': 1 },
  { unique: true }
);

export const Media = model('Media', MediaSchema);

