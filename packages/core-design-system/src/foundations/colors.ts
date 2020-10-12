import { Color } from '../primitives/color';
import { ColorPalette, ColorShades5 } from '../primitives/color-palette';
import { ColorShadesGrey } from './../primitives/color-palette';

/**
 * Every color defined in the system.
 */
export interface Colors<ColorType = Color> {
  primary: ColorPalette<ColorShades5, ColorType>;

  accent1: ColorPalette<ColorShades5, ColorType>;
  accent2: ColorPalette<ColorShades5, ColorType>;
  accent3: ColorPalette<ColorShades5, ColorType>;

  transparent: ColorType;
  grey: ColorPalette<ColorShadesGrey, ColorType>;

  effectTransparentLight: ColorType;
  effectTransparentMedium: ColorType;
  effectTransparentHeavy: ColorType;

  utilityGreen: ColorPalette<ColorShades5, ColorType>;
  utilityYellow: ColorPalette<ColorShades5, ColorType>;
  utilityRed: ColorPalette<ColorShades5, ColorType>;
}
