import { Properties, Color } from 'csstype';

type BasicCSSProperties = Properties<string | number>;

export interface DesignSystem {
  name: string;
  colors: {
    primary: {
      0: Color;
      100: Color;
      500: Color;
      1000: Color;
    };
    greyscale: {
      '0': Color;
      100: Color;
      150: Color;
      200: Color;
      300: Color;
      400: Color;
      500: Color;
      600: Color;
      700: Color;
      800: Color;
      900: Color;
      1000: Color;
    };
  };
  typography: any;
  scaling: any;
  breakpoints: {
    mobileSmall: string;
  };
  components?: {
    button: {
      borderColor: Color;
    };
    link: {
      color: Color;
      visited: Color;
      hover: Color;
      active: Color;
    };
  };
}
