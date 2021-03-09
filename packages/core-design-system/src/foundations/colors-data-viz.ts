import { ColorPalette, ColorShades10, ColorShades5 } from '../primitives/color-palette';
import { ColorType } from '../types';

export interface ColorsDataViz<Override extends undefined | string = undefined> {
  combo1: ColorPalette<ColorShades5, ColorType<Override>>;
  combo2: ColorPalette<ColorShades5, ColorType<Override>>;
  combo3: ColorPalette<ColorShades5, ColorType<Override>>;

  label: ColorType<Override>;
  axis: ColorType<Override>;
  line: ColorType<Override>;

  colorPalette1: ColorPalette<ColorShades10, ColorType<Override>>;
  colorPalette2: ColorPalette<ColorShades10, ColorType<Override>>;
  colorPalette3: ColorPalette<ColorShades10, ColorType<Override>>;
  colorPalette4: ColorPalette<ColorShades10, ColorType<Override>>;
  colorPalette5: ColorPalette<ColorShades10, ColorType<Override>>;
  colorPalette6: ColorPalette<ColorShades10, ColorType<Override>>;
  colorPalette7: ColorPalette<ColorShades10, ColorType<Override>>;
}
