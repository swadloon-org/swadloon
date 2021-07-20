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
    fontWeight: 700,
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
    fontWeight: 700,
    letterSpacing: -2,
    mobile: {
      h1: {
        capHeight: 26,
        lineGap: 20,
        letterSpacing: -3,
      },
      h2: {
        capHeight: 20,
        lineGap: 18,
      },
      h3: {
        capHeight: 16,
        lineGap: 16,
        fontWeight: 600,
      },
      h4: {
        capHeight: 14,
        lineGap: 14,
        fontWeight: 600,
      },
    },
    tablet: {
      h1: {
        capHeight: 26,
        lineGap: 20,
        letterSpacing: -3,
      },
      h2: {
        capHeight: 20,
        lineGap: 18,
      },
      h3: {
        capHeight: 16,
        lineGap: 16,
        fontWeight: 600,
      },
      h4: {
        capHeight: 14,
        lineGap: 14,
        fontWeight: 600,
      },
    },
    desktop: {
      h1: {
        fontSize: 36,
        lineGap: 18,
        letterSpacing: -3,
      },
      h2: {
        fontSize: 28,
        lineGap: 16,
      },
      h3: {
        fontSize: 20,
        lineGap: 14,
        fontWeight: 600,
      },
      h4: {
        fontSize: 16,
        lineGap: 14,
        fontWeight: 600,
      },
    },
  },
  paragraphs: {
    font: [fonts.defaultSansFont, ...fonts.defaultFallbackSansFonts],
    fontWeight: 400,
    styles: {
      bold: {
        fontWeight: 600,
      },
      italic: {
        fontWeight: 400,
        fontStyle: 'italic',
      },
    },
    mobile: {
      large: {
        fontSize: 18,
        lineGap: 16,
      },
      medium: {
        fontSize: 16,
        lineGap: 14,
      },
      small: {
        fontSize: 14,
        lineGap: 12,
      },
      xSmall: {
        fontSize: 12,
        lineGap: 10,
      },
    },
    tablet: {
      large: {
        fontSize: 18,
        lineGap: 16,
      },
      medium: {
        fontSize: 16,
        lineGap: 14,
      },
      small: {
        fontSize: 14,
        lineGap: 12,
      },
      xSmall: {
        fontSize: 12,
        lineGap: 10,
      },
    },
    desktop: {
      large: {
        fontSize: 18,
        lineGap: 16,
      },
      medium: {
        fontSize: 16,
        lineGap: 14,
      },
      small: {
        fontSize: 14,
        lineGap: 12,
      },
      xSmall: {
        fontSize: 12,
        lineGap: 10,
      },
    },
  },
  labels: {
    font: [fonts.defaultSansFont, ...fonts.defaultFallbackSansFonts],
    fontWeight: 600,
    styles: {
      bold: {
        fontWeight: 600,
      },
      boldUppercase: {
        fontWeight: 600,
        textTransform: TEXT_TRANSFORM.uppercase,
        letterSpacing: 6,
      },
      uppercase: {
        fontWeight: 400,
        textTransform: TEXT_TRANSFORM.uppercase,
        letterSpacing: 6,
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
