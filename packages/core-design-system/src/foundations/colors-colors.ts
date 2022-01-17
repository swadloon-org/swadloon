import { ColorPalette, ColorShades5, ColorShadesGrey } from '../primitives/color-palette';
import { ColorType } from '../types';

import { CodeColors } from './code-colors';
import { DataVizColors } from './data-viz-colors';

export type ColorsColors<Override extends undefined | string = undefined> = {
  /**
   *
   * Brand
   *
   */

  primary: ColorPalette<Override, ColorShades5, ColorType<Override>>;

  accent1: ColorPalette<Override, ColorShades5, ColorType<Override>>;
  accent2: ColorPalette<Override, ColorShades5, ColorType<Override>>;
  accent3: ColorPalette<Override, ColorShades5, ColorType<Override>>;
  accent4: ColorPalette<Override, ColorShades5, ColorType<Override>>;
  accent5: ColorPalette<Override, ColorShades5, ColorType<Override>>;
  accent6: ColorPalette<Override, ColorShades5, ColorType<Override>>;
  accent7: ColorPalette<Override, ColorShades5, ColorType<Override>>;

  /**
   *
   * Greyscale
   *
   */

  current: string;
  transparent: ColorType<Override>;
  grey: ColorPalette<Override, ColorShadesGrey, ColorType<Override>>;

  /**
   *
   * Effects
   *
   */

  effectTransparentLight: ColorType<Override>;
  effectTransparentMedium: ColorType<Override>;
  effectTransparentHeavy: ColorType<Override>;

  /**
   *
   * Utility
   *
   */

  utilityNeutral: ColorPalette<Override, ColorShades5, ColorType<Override>>;
  utilityGreen: ColorPalette<Override, ColorShades5, ColorType<Override>>;
  utilityYellow: ColorPalette<Override, ColorShades5, ColorType<Override>>;
  utilityRed: ColorPalette<Override, ColorShades5, ColorType<Override>>;

  /**
   *
   * Data Visualization-specific colors
   *
   */

  // dataviz: DataVizColors<Override>;

  /**
   *
   * Code and development colors
   *
   */

  code: CodeColors<Override>;
};
