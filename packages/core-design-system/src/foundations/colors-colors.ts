import { ColorPalette, ColorShades5, ColorShadesGrey } from '../primitives/color-palette.js';
import { ColorType, DeepPartial } from '../types.js';

import { CodeColors } from './code-colors.js';
import { DataVizColors } from './data-viz-colors.js';

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

  /**
   * Reference to variables (string) to be used in place of defined values when a theme is created.
   * This should not be used for default themes since they are used to generate the base contracts.
   */
  vars?: Omit<DeepPartial<ColorsColors<string>>, 'vars'>;
};

/**
 * ColorsColors object without the `vars` property which is used only
 * in application-defined theme configuration
 */
export type DefaultColorsColors = Omit<ColorsColors, 'vars'>;
