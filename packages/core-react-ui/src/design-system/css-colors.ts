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

/**
 * Representation of a CSS color in HSL (cylindrical-coordinates)
 *
 * @see {Color} in the design system
 */
export type CSSColor = {
  h?: number | string;
  s?: number | string;
  l?: number | string;
  /**
   * Alpha-channel transparency value between 0 and 100
   * @example e.g. a value of 50 means 50% or 0.5 in CSS
   */
  a?: number | string;
};
