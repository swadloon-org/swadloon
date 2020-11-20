import { Typography } from '../../../core-design-system/src';
import { defaultMonospaceFont, defaultSansAlternateFont, defaultSansFont, defaultSerifFont } from './default-fonts';

export const defaultTypography: Typography = {
  fonts: {
    serif: defaultSerifFont,
    sans: defaultSansFont,
    sansAlternate: defaultSansAlternateFont,
    monospace: defaultMonospaceFont,
    var: ['--font-family-monospace', '--font-family-sans', '--font-family-sans-alternate', '--font-family-serif'],
    varNames: ['--font-family-monospace', '--font-family-sans', '--font-family-sans-alternate', '--font-family-serif'],
  },
  // TODO: complete
  titles: {
    mobile: {
      t1: {
        serif: {
          font: defaultSerifFont,
          fontWeight: 400,
          capHeight: 55,
          lineGap: 19,
        },
      },
      t2: {
        serif: {
          font: defaultSerifFont,
          fontWeight: 400,
          capHeight: 55,
          lineGap: 19,
        },
      },
    },
    tablet: {
      t1: {
        serif: {
          font: defaultSerifFont,
          fontWeight: 400,
          capHeight: 55,
          lineGap: 19,
        },
      },
      t2: {
        serif: {
          font: defaultSerifFont,
          fontWeight: 400,
          capHeight: 55,
          lineGap: 19,
        },
      },
    },
    desktop: {
      t1: {
        serif: {
          font: defaultSerifFont,
          fontWeight: 400,
          capHeight: 55,
          lineGap: 19,
        },
      },
      t2: {
        serif: {
          font: defaultSerifFont,
          fontWeight: 400,
          capHeight: 55,
          lineGap: 19,
        },
      },
    },
  },
  // TODO: complete
  headings,
  paragraphs,
  labels,
};
