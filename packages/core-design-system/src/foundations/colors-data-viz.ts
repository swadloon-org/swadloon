import { ColorPalette, ColorShades5, ColorShades10 } from '../primitives/color-palette.js';
import { ColorType, DeepPartial } from '../types.js';

export interface ColorsDataViz<Override extends undefined | string = undefined> {
  combo1: ColorPalette<Override, ColorShades5, ColorType<Override>>;
  combo2: ColorPalette<Override, ColorShades5, ColorType<Override>>;
  combo3: ColorPalette<Override, ColorShades5, ColorType<Override>>;

  label: ColorType<Override>;
  axis: ColorType<Override>;
  tick: ColorType<Override>;
  line: ColorType<Override>;
  gridPrimary: ColorType<Override>;
  gridSecondary: ColorType<Override>;

  colorPalette1: ColorPalette<Override, ColorShades10, ColorType<Override>>;
  colorPalette2: ColorPalette<Override, ColorShades10, ColorType<Override>>;
  colorPalette3: ColorPalette<Override, ColorShades10, ColorType<Override>>;
  colorPalette4: ColorPalette<Override, ColorShades10, ColorType<Override>>;
  colorPalette5: ColorPalette<Override, ColorShades10, ColorType<Override>>;
  colorPalette6: ColorPalette<Override, ColorShades10, ColorType<Override>>;
  colorPalette7: ColorPalette<Override, ColorShades10, ColorType<Override>>;

  /**
   * Reference to variables (string) to be used in place of defined values when a theme is created.
   * This should not be used for default themes since they are used to generate the base contracts.
   */
  vars?: Omit<DeepPartial<ColorsDataViz<string>>, 'vars'>;
}

/**
 * ColorsColors object without the `vars` property which is used only
 * in application-defined theme configuration
 */
export type DefaultColorsDataViz = Omit<ColorsDataViz, 'vars'>;
