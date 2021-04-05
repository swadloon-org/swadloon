import { TEXT_TRANSFORM, Typography } from '@newrade/core-design-system';
import * as fonts from './default-fonts';

export const defaultFontVars = [
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
  },
  titles: {
    font: [fonts.defaultSerifFont, ...fonts.defaultFallbackSerifFonts],
    fontWeight: 500,
    mobile: {
      t1: {
        capHeight: 34,
        lineGap: 24,
      },
      t2: {
        capHeight: 28,
        lineGap: 22,
      },
    },
    tablet: {
      t1: {
        capHeight: 38,
        lineGap: 28,
      },
      t2: {
        capHeight: 32,
        lineGap: 26,
      },
    },
    desktop: {
      t1: {
        capHeight: 42,
        lineGap: 45,
      },
      t2: {
        capHeight: 36,
        lineGap: 32,
      },
    },
  },
  headings: {
    font: [fonts.defaultSansFont, ...fonts.defaultFallbackSansFonts],
    fontWeight: 600,
    mobile: {
      h1: {
        capHeight: 24,
        lineGap: 20,
      },
      h2: {
        capHeight: 20,
        lineGap: 18,
      },
      h3: {
        capHeight: 18,
        lineGap: 16,
      },
      h4: {
        capHeight: 14,
        lineGap: 14,
        fontWeight: 500,
      },
    },
    tablet: {
      h1: {
        capHeight: 26,
        lineGap: 18,
      },
      h2: {
        capHeight: 22,
        lineGap: 16,
      },
      h3: {
        capHeight: 18,
        lineGap: 14,
      },
      h4: {
        capHeight: 14,
        lineGap: 14,
        fontWeight: 500,
      },
    },
    desktop: {
      h1: {
        capHeight: 35,
        lineGap: 18,
      },
      h2: {
        capHeight: 24,
        lineGap: 16,
      },
      h3: {
        capHeight: 18,
        lineGap: 14,
      },
      h4: {
        capHeight: 14,
        lineGap: 14,
        fontWeight: 500,
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
        capHeight: 14,
        lineGap: 16,
      },
      medium: {
        capHeight: 12,
        lineGap: 16,
      },
      small: {
        capHeight: 10,
        lineGap: 14,
      },
      xSmall: {
        capHeight: 9,
        lineGap: 12,
      },
    },
    tablet: {
      large: {
        capHeight: 14,
        lineGap: 16,
      },
      medium: {
        capHeight: 12,
        lineGap: 16,
      },
      small: {
        capHeight: 10,
        lineGap: 14,
      },
      xSmall: {
        capHeight: 9,
        lineGap: 12,
      },
    },
    desktop: {
      large: {
        capHeight: 12,
        lineGap: 16,
      },
      medium: {
        capHeight: 11,
        lineGap: 16,
      },
      small: {
        capHeight: 10,
        lineGap: 14,
      },
      xSmall: {
        capHeight: 9,
        lineGap: 12,
      },
    },
  },
  labels: {
    font: [fonts.defaultSansFont, ...fonts.defaultFallbackSansFonts],
    fontWeight: 500,
    styles: {
      bold: {
        fontWeight: 500,
      },
      boldUppercase: {
        fontWeight: 600,
        textTransform: TEXT_TRANSFORM.uppercase,
        letterSpacing: 10,
      },
      uppercase: {
        fontWeight: 400,
        textTransform: TEXT_TRANSFORM.uppercase,
        letterSpacing: 10,
      },
    },
    mobile: {
      medium: {
        capHeight: 13,
        lineGap: 12,
      },
      small: {
        capHeight: 11,
        lineGap: 12,
      },
      xSmall: {
        capHeight: 9,
        lineGap: 12,
      },
    },
    tablet: {
      medium: {
        capHeight: 13,
        lineGap: 12,
      },
      small: {
        capHeight: 11,
        lineGap: 12,
      },
      xSmall: {
        capHeight: 9,
        lineGap: 12,
      },
    },
    desktop: {
      medium: {
        capHeight: 13,
        lineGap: 12,
      },
      small: {
        capHeight: 10,
        lineGap: 12,
      },
      xSmall: {
        capHeight: 8,
        lineGap: 12,
      },
    },
  },
};
