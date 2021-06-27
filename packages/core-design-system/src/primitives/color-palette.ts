import { Color } from './color';

export type ColorShadesGrey =
  | '0'
  | '0-reversed'
  | '25'
  | '50'
  | '100'
  | '100-reversed'
  | '200'
  | '200-reversed'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | '1000';

export type ColorShades5 = '100' | '300' | '500' | '700' | '900';

export type ColorShades7 = '100' | '200' | '300' | '500' | '700' | '900' | '1000';

export type ColorShades10 =
  | '100'
  | '200'
  | '300'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | '1000';

export type ColorPalette<ColorShades extends string = ColorShadesGrey, ColorType = Color> = Record<
  ColorShades,
  ColorType
> & {
  /**
   * Base color for the palette
   */

  baseHue?: Color['h'];
  baseSat?: Color['s'];
};
