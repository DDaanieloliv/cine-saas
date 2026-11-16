
import { Component } from '@angular/core';

const COLLECTION_PALETTES = {
  sage: {
    background: '#DCE6D5',
    text: '#1A1A1A',
    label: '#B03A2E',
    labelOpacity: 1,
    countOpacity: 0.55,
  },

  dustyBlue: {
    background: '#C7DDE0',
    text: '#1A1A1A',
    label: '#B03A2E',
    labelOpacity: 1,
    countOpacity: 0.55,
  },

  burgundy: {
    background: '#713B36',
    text: '#FFFFFF',
    label: '#FFFFFF',
    labelOpacity: 0.7,
    countOpacity: 0.7,
  },

  forest: {
    background: '#263C36',
    text: '#FFFFFF',
    label: '#FFFFFF',
    labelOpacity: 0.7,
    countOpacity: 0.7,
  },

  terracotta: {
    background: '#E8C7B8',
    text: '#1A1A1A',
    label: '#B03A2E',
    labelOpacity: 1,
    countOpacity: 0.55,
  },

  antiqueSand: {
    background: '#E7D9B8',
    text: '#1A1A1A',
    label: '#B03A2E',
    labelOpacity: 1,
    countOpacity: 0.55,
  },

  paleOchre: {
    background: '#F0D7A8',
    text: '#1A1A1A',
    label: '#B03A2E',
    labelOpacity: 1,
    countOpacity: 0.55,
  },

  slateBlue: {
    background: '#34466B',
    text: '#FFFFFF',
    label: '#FFFFFF',
    labelOpacity: 0.7,
    countOpacity: 0.7,
  },

  darkCocoa: {
    background: '#573B36',
    text: '#FFFFFF',
    label: '#FFFFFF',
    labelOpacity: 0.7,
    countOpacity: 0.7,
  },

  tobacco: {
    background: '#6B4938',
    text: '#FFFFFF',
    label: '#FFFFFF',
    labelOpacity: 0.7,
    countOpacity: 0.7,
  },

  mutedLavender: {
    background: '#D8D0E2',
    text: '#1A1A1A',
    label: '#B03A2E',
    labelOpacity: 1,
    countOpacity: 0.55,
  },

  softOlive: {
    background: '#D7DDC2',
    text: '#1A1A1A',
    label: '#B03A2E',
    labelOpacity: 1,
    countOpacity: 0.55,
  },

  dustyRose: {
    background: '#E6C9CC',
    text: '#1A1A1A',
    label: '#B03A2E',
    labelOpacity: 1,
    countOpacity: 0.55,
  },

  deepTeal: {
    background: '#28565A',
    text: '#FFFFFF',
    label: '#FFFFFF',
    labelOpacity: 0.7,
    countOpacity: 0.7,
  },

  charcoal: {
    background: '#343638',
    text: '#FFFFFF',
    label: '#FFFFFF',
    labelOpacity: 0.7,
    countOpacity: 0.7,
  },
} as const;

type CollectionPalette =
  (typeof COLLECTION_PALETTES)[keyof typeof COLLECTION_PALETTES];

@Component({
  selector: 'app-collection-grid',
  imports: [],
  templateUrl: './collection-grid.html',
  styleUrl: './collection-grid.scss',
})
export class CollectionGrid {

  protected readonly palettes: readonly CollectionPalette[] =
    Object.values(COLLECTION_PALETTES);

  private getPalette(id: number): CollectionPalette {
    const index = (id - 1) % this.palettes.length;

    return this.palettes[index] ?? COLLECTION_PALETTES.sage;
  }

  protected collections = [
    { id: 1, name: 'High-Tension Thrillers', count: 24 },
    { id: 2, name: 'Films That Touch Your Heart', count: 18 },
    { id: 3, name: 'Nordic Series', count: 12 },
    { id: 4, name: 'Organised Crime', count: 16 },
    { id: 5, name: 'Summer Times', count: 20 },
    { id: 6, name: 'Noir Classics', count: 14 },
    { id: 7, name: 'European Cinema', count: 32 },
    { id: 8, name: 'Mystery Stories', count: 19 },
    { id: 9, name: 'Independent Films', count: 21 },
    { id: 10, name: 'Historical Dramas', count: 15 },
    { id: 11, name: 'Coming of Age', count: 17 },
    { id: 12, name: 'Modern Classics', count: 28 },
    { id: 13, name: 'Romantic Stories', count: 13 },
    { id: 14, name: 'Crime Chronicles', count: 22 },
    { id: 15, name: 'Dark Fiction', count: 11 },
    { id: 16, name: 'World Cinema', count: 26 },
  ].map((collection) => ({
    ...collection,
    palette: this.getPalette(collection.id),
  }));

}
