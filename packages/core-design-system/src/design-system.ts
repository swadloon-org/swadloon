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
  };
}
