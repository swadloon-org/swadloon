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
  name: 'Acumin Pro',
  fontMetrics: {
    capHeight: 696,
    ascent: 735,
    descent: -265,
    lineGap: 200,
    unitsPerEm: 1000,
  },
};

export const fonts: Fonts = {
  ...defaultTypography.fonts,
  sans: [fontSans, ...defaultTypography.fonts.sans],
  sansAlternate: [fontSansAlternate, ...defaultTypography.fonts.sansAlternate],
};

export const typography: Typography = {
  fonts,
  titles: {
    font: [fontSans, ...defaultTypography.fonts.sans],
    fontWeight: 600,
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
    font: [fontSans, ...defaultTypography.fonts.sans],
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
        capHeight: 16,
        lineGap: 14,
      },
    },
    desktop: {
      h1: {
        capHeight: 34,
        lineGap: 30,
      },
      h2: {
        capHeight: 26,
        lineGap: 20,
      },
      h3: {
        capHeight: 20,
        lineGap: 14,
      },
      h4: {
        capHeight: 16,
        lineGap: 14,
      },
    },
  },
  paragraphs: {
    font: [fontSansAlternate, ...defaultTypography.fonts.sansAlternate],
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
        fontSize: 20,
        lineGap: 16,
      },
      medium: {
        fontSize: 18,
        lineGap: 14,
      },
      small: {
        fontSize: 16,
        lineGap: 12,
      },
      xSmall: {
        fontSize: 14,
        lineGap: 10,
      },
    },
    tablet: {
      large: {
        fontSize: 20,
        lineGap: 16,
      },
      medium: {
        fontSize: 18,
        lineGap: 14,
      },
      small: {
        fontSize: 16,
        lineGap: 12,
      },
      xSmall: {
        fontSize: 14,
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
        lineGap: 10,
      },
    },
  },
  labels: {
    font: [fontSans, ...defaultTypography.fonts.sans],
    fontWeight: 400,
    styles: {
      bold: {
        fontWeight: 600,
      },
      boldUppercase: {
        fontWeight: 600,
        textTransform: TEXT_TRANSFORM.uppercase,
        letterSpacing: 8,
      },
      uppercase: {
        fontWeight: 400,
        textTransform: TEXT_TRANSFORM.uppercase,
        letterSpacing: 8,
      },
    },
    mobile: {
      medium: {
        fontSize: 18,
        lineGap: 12,
      },
      small: {
        fontSize: 16,
        lineGap: 12,
      },
      xSmall: {
        fontSize: 14,
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
        fontSize: 14,
        lineGap: 10,
      },
      small: {
        fontSize: 13,
        lineGap: 8,
      },
      xSmall: {
        fontSize: 12,
        lineGap: 8,
      },
    },
  },
};
