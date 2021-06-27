import { ColorPalette, ColorShades5, ColorShadesGrey } from '../primitives/color-palette';
import { ColorType } from '../types';

export interface ColorsColors<Override extends undefined | string = undefined> {
  primary: ColorPalette<ColorShades5, ColorType<Override>>;

  accent1: ColorPalette<ColorShades5, ColorType<Override>>;
  accent2: ColorPalette<ColorShades5, ColorType<Override>>;
  accent3: ColorPalette<ColorShades5, ColorType<Override>>;
  accent4: ColorPalette<ColorShades5, ColorType<Override>>;
  accent5: ColorPalette<ColorShades5, ColorType<Override>>;
  accent6: ColorPalette<ColorShades5, ColorType<Override>>;
  accent7: ColorPalette<ColorShades5, ColorType<Override>>;

  current: string;
  transparent: ColorType<Override>;
  grey: ColorPalette<ColorShadesGrey, ColorType<Override>>;

  effectTransparentLight: ColorType<Override>;
  effectTransparentMedium: ColorType<Override>;
  effectTransparentHeavy: ColorType<Override>;

  utilityNeutral: ColorPalette<ColorShades5, ColorType<Override>>;
  utilityGreen: ColorPalette<ColorShades5, ColorType<Override>>;
  utilityYellow: ColorPalette<ColorShades5, ColorType<Override>>;
  utilityRed: ColorPalette<ColorShades5, ColorType<Override>>;
}
