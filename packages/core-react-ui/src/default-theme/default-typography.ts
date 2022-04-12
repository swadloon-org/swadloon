import { DefaultTypographyV2, Fonts, TEXT_TRANSFORM } from '@newrade/core-design-system';

import { cssVar } from '../utilities-iso/css-variables.utilities';

import * as fonts from './default-fonts';

/**
 * @deprecated (will be removed once getCSSTypography is replaced with getCSSTypographyV2)
 */
export const defaultFontVars: Fonts<string> = {
  sans: '--font-family-monospace',
  sansAlternate: '--font-family-sans',
  serif: '--font-family-sans-alternate',
  monospace: '--font-family-serif',
};

/**
 * @deprecated (will be removed once getCSSTypography is replaced with getCSSTypographyV2)
 */
export const defaultFontVarNames: Fonts<string> = {
  sans: cssVar('--font-family-monospace'),
  sansAlternate: cssVar('--font-family-sans'),
  serif: cssVar('--font-family-sans-alternate'),
  monospace: cssVar('--font-family-serif'),
};

export const defaultTypography: DefaultTypographyV2 = {
  fonts: {
    serif: [fonts.defaultSerifFont, ...fonts.defaultFallbackSerifFonts],
    sans: [fonts.defaultSansFont, ...fonts.defaultFallbackSansFonts],
    sansAlternate: [fonts.defaultSansAlternateFont, ...fonts.defaultFallbackSansFonts],
    monospace: [...fonts.defaultFallbackMonospaceFonts],
  },
  titles: {
    fontFamily: [fonts.defaultSerifFont, ...fonts.defaultFallbackSerifFonts],
    fontWeight: 700,
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
  },
  headings: {
    fontFamily: [fonts.defaultSansFont, ...fonts.defaultFallbackSansFonts],
    fontWeight: 700,
    letterSpacing: -2,
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
        letterSpacing: 0,
      },
      h4: {
        fontSize: 16,
        lineGap: 14,
        letterSpacing: 0,
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
        letterSpacing: 0,
      },
      h4: {
        capHeight: 14,
        lineGap: 14,
        letterSpacing: 0,
      },
    },
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
        letterSpacing: 0,
      },
      h4: {
        capHeight: 14,
        lineGap: 14,
        letterSpacing: 0,
      },
    },
  },
  paragraphs: {
    fontFamily: [fonts.defaultSansFont, ...fonts.defaultFallbackSansFonts],
    fontWeight: 400,
    styles: {
      normal: {
        fontWeight: 400,
      },
      bold: {
        fontWeight: 500,
      },
      italic: {
        fontWeight: 400,
        fontStyle: 'italic',
      },
      boldUppercase: {
        fontWeight: 500,
        textTransform: TEXT_TRANSFORM.uppercase,
        letterSpacing: 5,
      },
      uppercase: {
        textTransform: TEXT_TRANSFORM.uppercase,
        letterSpacing: 5,
      },
      italicBold: {
        fontStyle: 'italic',
        fontWeight: 500,
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
        lineGap: 18,
      },
      medium: {
        fontSize: 16,
        lineGap: 16,
      },
      small: {
        fontSize: 14,
        lineGap: 14,
      },
      xSmall: {
        fontSize: 12,
        lineGap: 12,
      },
    },
  },
  labels: {
    fontFamily: [fonts.defaultSansFont, ...fonts.defaultFallbackSansFonts],
    fontWeight: 600,
    styles: {
      normal: {
        fontWeight: 600,
      },
      italic: { fontStyle: 'italic' },
      bold: {
        fontWeight: 600,
      },
      italicBold: {
        fontStyle: 'italic',
      },
      boldUppercase: {
        fontWeight: 600,
        textTransform: TEXT_TRANSFORM.uppercase,
        letterSpacing: 5,
      },
      uppercase: {
        fontWeight: 500,
        textTransform: TEXT_TRANSFORM.uppercase,
        letterSpacing: 5,
      },
    },
    desktop: {
      medium: {
        fontSize: 15,
        lineGap: 12,
      },
      small: {
        fontSize: 13,
        lineGap: 12,
      },
      xSmall: {
        fontSize: 12,
        lineGap: 12,
      },
    },
    tablet: {
      medium: {
        fontSize: 15,
        lineGap: 15,
      },
      small: {
        fontSize: 13,
        lineGap: 13,
      },
      xSmall: {
        fontSize: 12,
        lineGap: 12,
      },
    },
    mobile: {
      medium: {
        fontSize: 16,
        lineGap: 16,
      },
      small: {
        fontSize: 14,
        lineGap: 14,
      },
      xSmall: {
        fontSize: 13,
        lineGap: 13,
      },
    },
  },
};
