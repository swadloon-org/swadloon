import { ColorGradients, ColorIntents, Colors, ColorsColors } from '@newrade/core-design-system';

export type CSSColors = Colors<string>;

/**
 * V2 introduces the following changes
 *  - removes `varNames` and `var` since we generated the names automatically based on the path
 */
export type CSSColorsV2 = Pick<Colors<string>, 'colorScheme'> & {
  /**
   * Raw colors
   */
  colors: Omit<ColorsColors<string>, 'vars'>;

  /**
   * Contextual use of certain colors (text, action, state, etc).
   */
  colorIntents: Omit<ColorIntents<string>, 'vars'>;

  /**
   * Gradients
   */
  gradients: Omit<ColorGradients<string>, 'vars'>;
};
