import { Font, Fonts, TEXT_TRANSFORM, Typography } from '@newrade/core-design-system';
import { defaultTypography } from '@newrade/core-react-ui/lib/default-theme';

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
        capHeight: 28,
        lineGap: 18,
      },
      h2: {
        capHeight: 24,
        lineGap: 16,
      },
      h3: {
        capHeight: 22,
        lineGap: 14,
      },
      h4: {
        capHeight: 20,
        lineGap: 14,
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
    fontWeight: 600,
    styles: {
      bold: {
        fontWeight: 600,
      },
      boldUppercase: {
        fontWeight: 600,
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
        capHeight: 11,
        lineGap: 12,
      },
      xSmall: {
        capHeight: 9,
        lineGap: 12,
      },
    },
  },
};
