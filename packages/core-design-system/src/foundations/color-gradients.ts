import { ColorGradient } from '../primitives/color-gradient';
import { DeepPartial } from '../types';

/**
 * Predefined gradients
 */
export type ColorGradients<Override extends undefined | string = undefined> = {
  gradient1: Override extends string ? string : ColorGradient<Override>;
  gradient2: Override extends string ? string : ColorGradient<Override>;
  gradient3: Override extends string ? string : ColorGradient<Override>;

  /**
   * Reference to variables (string) to be used in place of defined values when a theme is created.
   * This should not be used for default themes since they are used to generate the base contracts.
   */
  vars?: Omit<DeepPartial<ColorGradients<string>>, 'vars'>;
};

/**
 * ColorGradients object without the `vars` property which is used only
 * in application-defined theme configuration
 */
export type DefaultColorGradients = Omit<ColorGradients, 'vars'>;
