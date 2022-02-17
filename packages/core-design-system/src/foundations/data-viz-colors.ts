import { ColorPalette, ColorShades7 } from '../primitives/color-palette';
import { ColorType } from '../types';

export type DataVizColors<Override extends undefined | string = undefined> = {
  1: ColorPalette<Override, ColorShades7, ColorType<Override>>;
  2: ColorPalette<Override, ColorShades7, ColorType<Override>>;
  3: ColorPalette<Override, ColorShades7, ColorType<Override>>;
  4: ColorPalette<Override, ColorShades7, ColorType<Override>>;
  5: ColorPalette<Override, ColorShades7, ColorType<Override>>;
  6: ColorPalette<Override, ColorShades7, ColorType<Override>>;
  7: ColorPalette<Override, ColorShades7, ColorType<Override>>;
  8: ColorPalette<Override, ColorShades7, ColorType<Override>>;
  9: ColorPalette<Override, ColorShades7, ColorType<Override>>;
};
