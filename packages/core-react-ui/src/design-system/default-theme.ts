import { DesignSystem } from '@newrade/core-design-system';
import { CSSDesignSystem } from './css-design-system';
import { defaultMonospaceFont, defaultSansAlternateFont, defaultSansFont, defaultSerifFont } from './default-fonts';

const defaultTheme: Partial<DesignSystem> = {
  name: 'core-react-ui',
  themes: 'light',
  typography: {
    fonts: {
      serif: defaultSerifFont,
      sans: defaultSansFont,
      sansAlternate: defaultSansAlternateFont,
      monospace: defaultMonospaceFont,
    },
    titles: {
      mobile: {
        h1: {
          serif: {
            font: defaultSerifFont,
            fontWeight: 400,
            capHeight: 55,
            lineGap: 19,
          },
        },
        h2: {
          serif: {
            font: defaultSerifFont,
            fontWeight: 400,
            capHeight: 55,
            lineGap: 19,
          },
        },
      },
      tablet: {
        h1: {
          serif: {
            font: defaultSerifFont,
            fontWeight: 400,
            capHeight: 55,
            lineGap: 19,
          },
        },
        h2: {
          serif: {
            font: defaultSerifFont,
            fontWeight: 400,
            capHeight: 55,
            lineGap: 19,
          },
        },
      },
      desktop: {
        h1: {
          serif: {
            font: defaultSerifFont,
            fontWeight: 400,
            capHeight: 55,
            lineGap: 19,
          },
        },
        h2: {
          serif: {
            font: defaultSerifFont,
            fontWeight: 400,
            capHeight: 55,
            lineGap: 19,
          },
        },
      },
    },
  },
};

const defaultCSSTheme: Partial<CSSDesignSystem> = {
  name: 'core-react-ui',
  themes: 'light',
};
