import { Color } from './color';

export type ColorShadesGrey =
  | '0'
  | '0-reversed'
  | 'e0' // elevation 0
  | 'e1' // elevation 1
  | 'e2' // elevation 2
  | 'e3' // elevation 3
  | 'e4' // elevation 4
  | 'e0-grey' // elevation 0 in grey shades for light scheme theme
  | 'e1-grey' // elevation 1 in grey shades for light scheme theme
  | 'e2-grey' // elevation 2 in grey shades for light scheme theme
  | 'e3-grey' // elevation 3 in grey shades for light scheme theme
  | 'e4-grey' // elevation 4 in grey shades for light scheme theme
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

export type ColorPalette<
  Override extends undefined | string = undefined,
  ColorShades extends string = ColorShadesGrey,
  ColorType = Color
> = Record<ColorShades, ColorType> & {
  /**
   * Base color for the palette
   */
  baseHue?: Override extends string ? string : Color['h'];
  baseSat?: Override extends string ? string : Color['s'];
};
