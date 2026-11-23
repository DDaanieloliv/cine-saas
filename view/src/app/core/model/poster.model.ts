export interface Poster {
  id: number;
  poster_title: string;
  type: 'Film' | 'Series';
  year: number;
  countries: string;
  genre: string;
  language: string;
  editor_pick: boolean;
  byCollection: string[];
}
