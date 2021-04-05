import { ColorGradients } from './color-gradients';
import { ColorsColors } from './colors-colors';
import { ColorIntents } from './color-intents';

/**
 * Every color defined in the system.
 */
export interface Colors<Override extends undefined | string = undefined> {
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
}
