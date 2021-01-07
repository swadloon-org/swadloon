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
        capHeight: 29,
        lineGap: 15,
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
        capHeight: 59,
        lineGap: 19,
      },
      t2: {
        capHeight: 34,
        lineGap: 19,
      },
    },
  },
  headings: {
    font: [fontSansAlternate, ...defaultTypography.fonts.sans],
    fontWeight: 500,
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
        capHeight: 26,
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
        capHeight: 30,
        lineGap: 10,
      },
      h2: {
        capHeight: 17,
        lineGap: 9,
      },
      h3: {
        capHeight: 13,
        lineGap: 13,
      },
      h4: {
        capHeight: 12,
        lineGap: 8,
      },
    },
  },
  paragraphs: {
    font: [fontSans, ...defaultTypography.fonts.sans],
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
        capHeight: 15,
        lineGap: 15,
      },
      medium: {
        capHeight: 11,
        lineGap: 11,
      },
      small: {
        capHeight: 10,
        lineGap: 10,
      },
      xSmall: {
        capHeight: 8,
        lineGap: 8,
      },
    },
    tablet: {
      large: {
        capHeight: 21,
        lineGap: 10,
      },
      medium: {
        capHeight: 11,
        lineGap: 11,
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
        capHeight: 14,
        lineGap: 14,
      },
      medium: {
        capHeight: 11,
        lineGap: 17,
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
        fontWeight: 400,
        textTransform: TEXT_TRANSFORM.uppercase,
        letterSpacing: 10,
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
