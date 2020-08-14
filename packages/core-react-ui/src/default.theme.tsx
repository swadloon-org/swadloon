import { createTheme } from 'treat';
import { DesignSystem } from 'core-design-system';

const theme: DesignSystem = {
  name: 'mir',
  colors: {
    primary: {
      0: 'red',
      100: 'red',
      500: 'red',
      1000: 'red',
    },
    greyscale: {
      '0': 'white',
      100: 'white',
      150: 'white',
      200: 'white',
      300: 'white',
      400: 'white',
      500: 'white',
      600: 'white',
      700: 'white',
      800: 'white',
      900: 'white',
      1000: 'white',
    },
  },
  breakpoints: {
    mobileSmall: 'screen and (min-width: 768px)',
  },
  typography: {},
  scaling: {},
};

export const mirTheme = createTheme(theme, 'default-theme');
