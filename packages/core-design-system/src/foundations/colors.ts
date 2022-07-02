import { ColorGradients } from './color-gradients.js';
import { ColorIntents } from './color-intents.js';
import { COLOR_SCHEME } from './color-scheme.js';
import { ColorsColors } from './colors-colors.js';

/**
 * Every color defined in the system.
 */
export type Colors<Override extends undefined | string = undefined> = {
  /**
   * Whether the color scheme is using light or dark
   */
  colorScheme: COLOR_SCHEME;

  /**
   * Raw colors
   */
  colors: ColorsColors<Override>;

  /**
   * Contextual use of certain colors (text, action, state, etc).
   */
  colorIntents: ColorIntents<Override>;

  /**
   * Gradients
   */
  gradients: ColorGradients<Override>;
};
