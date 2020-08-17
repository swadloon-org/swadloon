import { createTheme } from 'treat';
import { DesignSystem, Colors } from 'core-design-system';

const colors: Colors = {};

const theme: DesignSystem = {
  name: 'mir',
  variation: 'light',
  colors: {
    primary100: `rgba(205, 214, 251, 1)`,
    primary300: `rgba(130, 153, 246, 1)`,
    primary500: `rgba(55, 91, 240, 1)`,
    primary700: `rgba(15, 52, 206, 1)`,
    primary1000: `rgba(5, 17, 69, 1)`,

    accent100: `rgba(254, 246, 229, 1)`,
    accent300: `rgba(253, 227, 176, 1)`,
    accent500: `rgba(250, 180, 45, 1)`,
    accent700: `rgba(180, 120, 4, 1)`,
    accent1000: `rgba(108, 72, 3, 1)`,

    greyscale0: `rgba(255, 255, 255, 1)`,
    greyscale100Reversed: `rgba(255, 255, 255, 1)`,
    greyscale100: `rgba(240, 242, 246, 1)`,
    greyscale100Reversed: `rgba(255, 255, 255, 1)`,
    greyscale150: `rgba(228, 231, 236, 1)`,
    greyscale200: `rgba(232, 236, 242, 1)`,
    greyscale200Reversed: `rgba(255, 255, 255, 1)`,
    greyscale300: `rgba(214, 219, 225, 1)`,
    greyscale400: `rgba(184, 193, 203, 1)`,
    greyscale500: `rgba(149, 162, 177, 1)`,
    greyscale600: `rgba(122, 124, 146, 1)`,
    greyscale700: `rgba(94, 96, 115, 1)`,
    greyscale800: `rgba(67, 68, 81, 1)`,
    greyscale900: `rgba(39, 40, 48, 1)`,
    greyscale1000: `rgba(14, 14, 17, 1)`,

    greyscaleTransparent: `rgba(255, 255, 255, 1)`,

    // effectTransparentLight: Color;
    // effectTransparentMedium: Color;
    // effectTransparentHeavy: Color;

    utilityGreen100: `rgba(228, 252, 228, 1)`,
    utilityGreen1000: `rgba(12, 90, 12, 1)`,
    utilityGreen300: `rgba(149, 241, 149, 1)`,
    utilityGreen500: `rgba(43, 227, 43, 1)`,
    utilityGreen700: `rgba(23, 179, 23, 1)`,
    utilityRed100: `rgba(253, 237, 237, 1)`,
    utilityRed1000: `rgba(90, 12, 12, 1)`,
    utilityRed300: `rgba(241, 149, 149, 1)`,
    utilityRed500: `rgba(227, 43, 43, 1)`,
    utilityRed700: `rgba(150, 19, 19, 1)`,
    utilityYellow100: `rgba(253, 249, 227, 1)`,
    utilityYellow1000: `rgba(62, 55, 5, 1)`,
    utilityYellow300: `rgba(243, 226, 117, 1)`,
    utilityYellow500: `rgba(236, 209, 34, 1)`,
    utilityYellow700: `rgba(155, 137, 14, 1)`,

    // primary100: Color;
    // primary300: Color;
    // primary500: Color;
    // primary700: Color;
    // primary1000: Color;
    // accent100: Color;
    // accent300: Color;
    // accent500: Color;
    // accent700: Color;
    // accent1000: Color;
    // greyscale0: Color;
    // greyscale0Reversed: Color;
    // greyscale100: Color;
    // greyscale100Reversed: Color;
    // greyscale150: Color;
    // greyscale200: Color;
    // greyscale300: Color;
    // greyscale400: Color;
    // greyscale500: Color;
    // greyscale600: Color;
    // greyscale700: Color;
    // greyscale800: Color;
    // greyscale900: Color;
    // greyscale1000: Color;
  },
  breakpoints: {
    mobileSmall: 'screen and (min-width: 768px)',
  },
  typography: {},
  scaling: {},
};

export const mirTheme = createTheme(theme, 'mir-theme');
