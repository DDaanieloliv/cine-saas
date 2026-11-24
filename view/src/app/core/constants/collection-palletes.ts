export const COLLECTION_PALETTES = {
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

export type CollectionPalette =
  (typeof COLLECTION_PALETTES)[keyof typeof COLLECTION_PALETTES];

export const COLLECTION_PALETTE_LIST: readonly CollectionPalette[] =
  Object.values(COLLECTION_PALETTES);
