import { TEXT_TRANSFORM, Typography } from '@newrade/core-design-system';
import { cssVar } from '../utilities/css-variable.utilities';
import * as fonts from './default-fonts';

const defaultFontVars = [
  '--font-family-monospace',
  '--font-family-sans',
  '--font-family-sans-alternate',
  '--font-family-serif',
];

export const defaultTypography: Typography = {
  fonts: {
    serif: [fonts.defaultSerifFont, ...fonts.defaultFallbackSerifFonts],
    sans: [fonts.defaultSansFont, ...fonts.defaultFallbackSansFonts],
    sansAlternate: [fonts.defaultSansAlternateFont, ...fonts.defaultFallbackSansFonts],
    monospace: [fonts.defaultMonospaceFont, ...fonts.defaultFallbackMonospaceFonts],
    var: defaultFontVars,
    varNames: defaultFontVars.map((varName) => cssVar(varName)),
  },
  titles: {
    font: [fonts.defaultSerifFont, ...fonts.defaultFallbackSerifFonts],
    fontWeight: 500,
    mobile: {
      t1: {
        capHeight: 55,
        lineGap: 19,
      },
      t2: {
        capHeight: 34,
        lineGap: 19,
      },
    },
    tablet: {
      t1: {
        capHeight: 55,
        lineGap: 19,
      },
      t2: {
        capHeight: 34,
        lineGap: 19,
      },
    },
    desktop: {
      t1: {
        capHeight: 55,
        lineGap: 19,
      },
      t2: {
        capHeight: 34,
        lineGap: 19,
      },
    },
  },
  headings: {
    font: [fonts.defaultSansFont, ...fonts.defaultFallbackSansFonts],
    fontWeight: 600,
    mobile: {
      h1: {
        capHeight: 25,
        lineGap: 10,
      },
      h2: {
        capHeight: 17,
        lineGap: 9,
      },
      h3: {
        capHeight: 14,
        lineGap: 7,
      },
      h4: {
        capHeight: 12,
        lineGap: 8,
      },
    },
    tablet: {
      h1: {
        capHeight: 25,
        lineGap: 10,
      },
      h2: {
        capHeight: 17,
        lineGap: 9,
      },
      h3: {
        capHeight: 14,
        lineGap: 7,
      },
      h4: {
        capHeight: 12,
        lineGap: 8,
      },
    },
    desktop: {
      h1: {
        capHeight: 25,
        lineGap: 10,
      },
      h2: {
        capHeight: 17,
        lineGap: 9,
      },
      h3: {
        capHeight: 14,
        lineGap: 7,
      },
      h4: {
        capHeight: 12,
        lineGap: 8,
      },
    },
  },
  paragraphs: {
    font: [fonts.defaultSansFont, ...fonts.defaultFallbackSansFonts],
    fontWeight: 400,
    styles: {
      bold: {
        fontWeight: 500,
      },
      italic: {
        fontWeight: 400,
        fontStyle: 'italic',
      },
    },
    mobile: {
      large: {
        capHeight: 15,
        lineGap: 12,
      },
      medium: {
        capHeight: 11,
        lineGap: 11,
      },
      small: {
        capHeight: 10,
        lineGap: 8,
      },
      xSmall: {
        capHeight: 8,
        lineGap: 7,
      },
    },
    tablet: {
      large: {
        capHeight: 21,
        lineGap: 10,
      },
      medium: {
        capHeight: 13,
        lineGap: 13,
      },
      small: {
        capHeight: 10,
        lineGap: 10,
      },
      xSmall: {
        capHeight: 9,
        lineGap: 9,
      },
    },
    desktop: {
      large: {
        capHeight: 21,
        lineGap: 10,
      },
      medium: {
        capHeight: 13,
        lineGap: 13,
      },
      small: {
        capHeight: 10,
        lineGap: 10,
      },
      xSmall: {
        capHeight: 9,
        lineGap: 9,
      },
    },
  },
  labels: {
    font: [fonts.defaultSansFont, ...fonts.defaultFallbackSansFonts],
    fontWeight: 400,
    styles: {
      bold: {
        fontWeight: 500,
      },
      boldUppercase: {
        fontWeight: 500,
        textTransform: TEXT_TRANSFORM.uppercase,
      },
      uppercase: {
        fontWeight: 400,
        textTransform: TEXT_TRANSFORM.uppercase,
      },
    },
    mobile: {
      medium: {
        capHeight: 13,
        lineGap: 9,
      },
      small: {
        capHeight: 10,
        lineGap: 8,
      },
      xSmall: {
        capHeight: 6,
        lineGap: 8,
      },
    },
    tablet: {
      medium: {
        capHeight: 13,
        lineGap: 9,
      },
      small: {
        capHeight: 10,
        lineGap: 8,
      },
      xSmall: {
        capHeight: 6,
        lineGap: 8,
      },
    },
    desktop: {
      medium: {
        capHeight: 13,
        lineGap: 9,
      },
      small: {
        capHeight: 10,
        lineGap: 8,
      },
      xSmall: {
        capHeight: 6,
        lineGap: 8,
      },
    },
  },
};
