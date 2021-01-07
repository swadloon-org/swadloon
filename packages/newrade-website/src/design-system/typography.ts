import { Font, Fonts, TEXT_TRANSFORM, Typography } from '@newrade/core-design-system';
import { defaultTypography } from '@newrade/core-react-ui';

const fontSans: Font = {
  name: 'Gilroy',
  fontMetrics: {
    capHeight: 700,
    ascent: 920,
    descent: -240,
    lineGap: 0,
    unitsPerEm: 1000,
  },
};

const fontSansAlternate: Font = {
  name: 'Blatant',
  fontMetrics: {
    capHeight: 559,
    ascent: 700,
    descent: -201,
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
        capHeight: 30,
        lineGap: 25,
      },
      t2: {
        capHeight: 24,
        lineGap: 20,
      },
    },
    tablet: {
      t1: {
        capHeight: 48,
        lineGap: 35,
      },
      t2: {
        capHeight: 36,
        lineGap: 28,
      },
    },
    desktop: {
      t1: {
        capHeight: 60,
        lineGap: 45,
      },
      t2: {
        capHeight: 48,
        lineGap: 32,
      },
    },
  },
  headings: {
    font: [fontSansAlternate, ...defaultTypography.fonts.sans],
    fontWeight: 500,
    mobile: {
      h1: {
        capHeight: 22,
        lineGap: 18,
      },
      h2: {
        capHeight: 20,
        lineGap: 16,
      },
      h3: {
        capHeight: 18,
        lineGap: 14,
      },
      h4: {
        capHeight: 16,
        lineGap: 14,
      },
    },
    tablet: {
      h1: {
        capHeight: 32,
        lineGap: 28,
      },
      h2: {
        capHeight: 24,
        lineGap: 20,
      },
      h3: {
        capHeight: 20,
        lineGap: 16,
      },
      h4: {
        capHeight: 18,
        lineGap: 14,
      },
    },
    desktop: {
      h1: {
        capHeight: 40,
        lineGap: 45,
      },
      h2: {
        capHeight: 36,
        lineGap: 30,
      },
      h3: {
        capHeight: 24,
        lineGap: 20,
      },
      h4: {
        capHeight: 20,
        lineGap: 15,
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
        capHeight: 18,
        lineGap: 14,
      },
      medium: {
        capHeight: 16,
        lineGap: 12,
      },
      small: {
        capHeight: 14,
        lineGap: 10,
      },
      xSmall: {
        capHeight: 12,
        lineGap: 8,
      },
    },
    tablet: {
      large: {
        capHeight: 18,
        lineGap: 14,
      },
      medium: {
        capHeight: 16,
        lineGap: 12,
      },
      small: {
        capHeight: 15,
        lineGap: 10,
      },
      xSmall: {
        capHeight: 14,
        lineGap: 8,
      },
    },
    desktop: {
      large: {
        capHeight: 18,
        lineGap: 14,
      },
      medium: {
        capHeight: 16,
        lineGap: 12,
      },
      small: {
        capHeight: 14,
        lineGap: 10,
      },
      xSmall: {
        capHeight: 12,
        lineGap: 8,
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
        capHeight: 14,
        lineGap: 10,
      },
      small: {
        capHeight: 12,
        lineGap: 8,
      },
      xSmall: {
        capHeight: 8,
        lineGap: 6,
      },
    },
    tablet: {
      medium: {
        capHeight: 16,
        lineGap: 12,
      },
      small: {
        capHeight: 14,
        lineGap: 10,
      },
      xSmall: {
        capHeight: 12,
        lineGap: 8,
      },
    },
    desktop: {
      medium: {
        capHeight: 16,
        lineGap: 12,
      },
      small: {
        capHeight: 14,
        lineGap: 10,
      },
      xSmall: {
        capHeight: 12,
        lineGap: 8,
      },
    },
  },
};
