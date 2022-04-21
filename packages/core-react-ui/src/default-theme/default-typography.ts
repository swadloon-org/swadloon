import { DefaultTypographyV2, Fonts, TEXT_TRANSFORM } from '@newrade/core-design-system';

import { cssVar } from '../utilities-iso/css-variables.utilities';
import { getTypographicScaledText } from '../utilities-theme';

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
    fontFamily: [fonts.defaultSansFont, ...fonts.defaultFallbackSansFonts],
    fontWeight: 700,
    desktop: {
      t1: getTypographicScaledText({
        fontSize: 40,
        lineGapRatio: 0.5,
        step: 1,
        ratio: 'goldenSection',
      }),
      t2: getTypographicScaledText({
        fontSize: 40,
        lineGapRatio: 0.5,
        step: 0,
        ratio: 'goldenSection',
      }),
    },
    tablet: {
      t1: getTypographicScaledText({
        fontSize: 36,
        lineGapRatio: 0.5,
        step: 1,
        ratio: 'perfectFourth',
      }),
      t2: getTypographicScaledText({
        fontSize: 36,
        lineGapRatio: 0.5,
        step: 0,
        ratio: 'perfectFourth',
      }),
    },
    mobile: {
      t1: getTypographicScaledText({
        fontSize: 34,
        lineGapRatio: 0.5,
        step: 1,
        ratio: 'minorThird',
      }),
      t2: getTypographicScaledText({
        fontSize: 34,
        lineGapRatio: 0.5,
        step: 0,
        ratio: 'minorThird',
      }),
    },
  },
  headings: {
    fontFamily: [fonts.defaultSansFont, ...fonts.defaultFallbackSansFonts],
    fontWeight: 700,
    letterSpacing: -2,
    desktop: {
      h1: getTypographicScaledText({
        fontSize: 16,
        letterSpacing: -3,
        lineGapRatio: 0.5,
        step: 3,
        ratio: 'perfectFourth',
      }),
      h2: getTypographicScaledText({
        fontSize: 16,
        letterSpacing: -2,
        lineGapRatio: 0.5,
        step: 2,
        ratio: 'perfectFourth',
      }),
      h3: getTypographicScaledText({
        fontSize: 16,
        letterSpacing: -1,
        lineGapRatio: 0.5,
        step: 1,
        ratio: 'perfectFourth',
      }),
      h4: getTypographicScaledText({
        fontSize: 16,
        letterSpacing: 0,
        lineGapRatio: 0.5,
        step: 0,
        ratio: 'perfectFourth',
      }),
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
  spaces: {
    titles: {
      t1: {
        before: 2,
        after: 1,
      },
      t2: {
        before: 2,
        after: 1,
      },
    },
    headings: {
      h1: {
        before: 2,
        after: 1,
      },
      h2: {
        before: 2,
        after: 1,
      },
      h3: {
        before: 2,
        after: 1,
      },
      h4: {
        before: 2,
        after: 1,
      },
    },
    paragraphs: {
      large: {
        before: 1,
        after: 1,
      },
      medium: {
        before: 1,
        after: 1,
      },
      small: {
        before: 1,
        after: 1,
      },
      xSmall: {
        before: 1,
        after: 1,
      },
    },
  },
};
