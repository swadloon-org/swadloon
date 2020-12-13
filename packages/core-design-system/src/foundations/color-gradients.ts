import { ColorGradient } from '../primitives/color-gradient';

/**
 * Gradients
 */
export interface ColorGradients<Override extends undefined | string = undefined> {
  gradient1: ColorGradient<Override>;
  gradient2: ColorGradient<Override>;
  gradient3: ColorGradient<Override>;
}
