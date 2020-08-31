import { Fonts, TYPOGRAPHIC_STYLE } from 'core-design-system';

export const fonts: Fonts = {
  [TYPOGRAPHIC_STYLE.SANS]: {
    name: 'Montserrat',
    link: 'https://fonts.google.com/specimen/Montserrat',
    fontMetrics: {
      capHeight: 700,
      ascent: 968,
      descent: -251,
      lineGap: 0,
      unitsPerEm: 1000,
    },
  },
  [TYPOGRAPHIC_STYLE.SANS_ALTERNATE]: {
    name: 'Open Sans',
    link: 'https://fonts.google.com/specimen/Open+Sans?query=open+sans',
    fontMetrics: {
      capHeight: 1462,
      ascent: 2189,
      descent: -600,
      lineGap: 0,
      unitsPerEm: 2048,
    },
  },
};
