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
    fontWeight: 400,
    letterSpacing: 6,
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
        fontWeight: 400,
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
    font: [fonts.defaultSerifFont, ...fonts.defaultFallbackSansFonts],
    fontWeight: 400,
    letterSpacing: 6,
    mobile: {
      h1: {
        capHeight: 55,
        lineGap: 19,
      },
      h2: {
        capHeight: 55,
        lineGap: 19,
      },
      h3: {
        capHeight: 55,
        lineGap: 19,
      },
      h4: {
        capHeight: 55,
        lineGap: 19,
      },
    },
    tablet: {
      h1: {
        capHeight: 55,
        lineGap: 19,
      },
      h2: {
        capHeight: 55,
        lineGap: 19,
      },
      h3: {
        capHeight: 55,
        lineGap: 19,
      },
      h4: {
        capHeight: 55,
        lineGap: 19,
      },
    },
    desktop: {
      h1: {
        capHeight: 55,
        lineGap: 19,
      },
      h2: {
        capHeight: 55,
        lineGap: 19,
      },
      h3: {
        capHeight: 55,
        lineGap: 19,
      },
      h4: {
        capHeight: 55,
        lineGap: 19,
      },
    },
  },
  paragraphs: {
    font: [fonts.defaultSerifFont, ...fonts.defaultFallbackSansFonts],
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
    desktop: {
      large: {
        capHeight: 55,
        lineGap: 19,
      },
      medium: {
        capHeight: 55,
        lineGap: 19,
      },
      small: {
        capHeight: 55,
        lineGap: 19,
      },
      xSmall: {
        capHeight: 55,
        lineGap: 19,
      },
    },
    tablet: {
      large: {
        capHeight: 55,
        lineGap: 19,
      },
      medium: {
        capHeight: 55,
        lineGap: 19,
      },
      small: {
        capHeight: 55,
        lineGap: 19,
      },
      xSmall: {
        capHeight: 55,
        lineGap: 19,
      },
    },
    mobile: {
      large: {
        capHeight: 55,
        lineGap: 19,
      },
      medium: {
        capHeight: 55,
        lineGap: 19,
      },
      small: {
        capHeight: 55,
        lineGap: 19,
      },
      xSmall: {
        capHeight: 55,
        lineGap: 19,
      },
    },
  },
  labels: {
    font: [fonts.defaultSerifFont, ...fonts.defaultFallbackSansFonts],
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
    desktop: {
      medium: {
        capHeight: 55,
        lineGap: 19,
      },
      small: {
        capHeight: 55,
        lineGap: 19,
      },
      xSmall: {
        capHeight: 55,
        lineGap: 19,
      },
    },
    tablet: {
      medium: {
        capHeight: 55,
        lineGap: 19,
      },
      small: {
        capHeight: 55,
        lineGap: 19,
      },
      xSmall: {
        capHeight: 55,
        lineGap: 19,
      },
    },
    mobile: {
      medium: {
        capHeight: 55,
        lineGap: 19,
      },
      small: {
        capHeight: 55,
        lineGap: 19,
      },
      xSmall: {
        capHeight: 55,
        lineGap: 19,
      },
    },
  },
};
