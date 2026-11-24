import { CollectionPalette } from "../constants/collection-palletes";

export interface Collection {
  id: number;
  name: string;
}

export interface CollectionCard {
  id: number;
  name: string;
  count: number;
  filmCount: number;
  seriesCount: number;
  palette: CollectionPalette;
}
