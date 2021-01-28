import { Font, Fonts, TEXT_TRANSFORM, Typography } from '@newrade/core-design-system';
import { defaultTypography } from '@newrade/core-react-ui';

const fontSans: Font = {
  name: 'AvenirNext LT Pro',
  fontMetrics: {
    capHeight: 708,
    ascent: 756,
    descent: -244,
    lineGap: 200,
    unitsPerEm: 1000,
  },
};

const fontSansAlternate: Font = {
  name: 'Neue Montreal',
  fontMetrics: {
    capHeight: 715,
    ascent: 975,
    descent: -225,
    lineGap: 0,
    unitsPerEm: 1000,
  },
};

export const fonts: Fonts = {
  ...defaultTypography.fonts,
  sans: [fontSans, ...defaultTypography.fonts.sans],
  sansAlternate: [fontSansAlternate, ...defaultTypography.fonts.sans],
};

export const typography: Typography = {
  fonts,
  titles: {
    font: [fontSansAlternate, ...defaultTypography.fonts.sans],
    fontWeight: 500,
    mobile: {
      t1: {
        capHeight: 28,
        lineGap: 20,
      },
      t2: {
        capHeight: 24,
        lineGap: 20,
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
        capHeight: 55,
        lineGap: 34,
      },
      t2: {
        capHeight: 36,
        lineGap: 32,
      },
    },
  },
  headings: {
    font: [fontSansAlternate, ...defaultTypography.fonts.sans],
    fontWeight: 500,
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
        capHeight: 16,
        lineGap: 14,
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
        capHeight: 20,
        lineGap: 14,
      },
      h4: {
        capHeight: 18,
        lineGap: 14,
      },
    },
    desktop: {
      h1: {
        capHeight: 34,
        lineGap: 30,
      },
      h2: {
        capHeight: 24,
        lineGap: 20,
      },
      h3: {
        capHeight: 20,
        lineGap: 14,
      },
      h4: {
        capHeight: 18,
        lineGap: 14,
      },
    },
  },
  paragraphs: {
    font: [fontSans, ...defaultTypography.fonts.sans],
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
        capHeight: 11,
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
  },
  labels: {
    font: [fontSans, ...defaultTypography.fonts.sans],
    fontWeight: 500,
    styles: {
      bold: {
        fontWeight: 500,
      },
      boldUppercase: {
        fontWeight: 500,
        textTransform: TEXT_TRANSFORM.uppercase,
        letterSpacing: 10,
      },
      uppercase: {
        fontWeight: 500,
        textTransform: TEXT_TRANSFORM.uppercase,
        letterSpacing: 10,
      },
    },
    mobile: {
      medium: {
        capHeight: 12,
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
        lineGap: 10,
      },
      small: {
        capHeight: 11,
        lineGap: 8,
      },
      xSmall: {
        capHeight: 9,
        lineGap: 7,
      },
    },
  },
};
