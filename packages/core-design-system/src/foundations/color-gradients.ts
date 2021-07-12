import { ColorGradient } from '../primitives/color-gradient';

/**
 * Gradients
 */
export type ColorGradients<Override extends undefined | string = undefined> = {
  gradient1: Override extends string ? string : ColorGradient<Override>;
  gradient2: Override extends string ? string : ColorGradient<Override>;
  gradient3: Override extends string ? string : ColorGradient<Override>;
};
