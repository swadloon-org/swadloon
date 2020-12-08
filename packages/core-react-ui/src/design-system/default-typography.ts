import { TEXT_TRANSFORM, Typography } from '@newrade/core-design-system';
import { defaultMonospaceFont, defaultSansAlternateFont, defaultSansFont, defaultSerifFont } from './default-fonts';

export const defaultTypography: Typography = {
  fonts: {
    serif: defaultSerifFont,
    sans: defaultSansFont,
    sansAlternate: defaultSansAlternateFont,
    monospace: defaultMonospaceFont,
    var: ['--font-family-monospace', '--font-family-sans', '--font-family-sans-alternate', '--font-family-serif'],
    varNames: ['--font-family-monospace', '--font-family-sans', '--font-family-sans-alternate', '--font-family-serif'],
  },
  titles: {
    font: defaultSerifFont,
    fontWeight: 400,
    letterSpacing: 6,
    mobile: {
      t1: {
        capHeight: 55,
        lineGap: 19,
      },
      t2: {
        capHeight: 55,
        lineGap: 19,
      },
    },
    tablet: {
      t1: {
        capHeight: 55,
        lineGap: 19,
      },
      t2: {
        capHeight: 55,
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
        capHeight: 55,
        lineGap: 19,
      },
    },
  },
  headings: {
    font: defaultSerifFont,
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
    font: defaultSerifFont,
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
    font: defaultSerifFont,
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
