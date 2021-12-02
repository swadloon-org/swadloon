import { ColorGradients } from './color-gradients';
import { ColorIntents } from './color-intents';
import { ColorsColors } from './colors-colors';

/**
 * Every color defined in the system.
 */
export type Colors<Override extends undefined | string = undefined> = {
  /**
   * Whether the color scheme is using light or dark
   */
  colorScheme: 'light' | 'dark';
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
