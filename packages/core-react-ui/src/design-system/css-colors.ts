import { Colors } from '@newrade/core-design-system';

/**
 * Contains CSS variable names for each color
 * @example `--color-primary-500`
 */
export type CSSColorsVarNames = Pick<Colors<string>, 'colors' | 'colorIntents'>;

/**
 * Contains CSS statement to access CSS variables
 * @example `var(--color-primary-500)`
 */
export type CSSColorsVars = Pick<Colors<string>, 'colors' | 'colorIntents'>;

export type CSSColors = Colors<string> & {
  /**
   * CSS variable name for each color.
   * @example `--color-primary-500`
   */
  varNames: CSSColorsVarNames;
  /**
   * CSS statement to access CSS variables
   * @example `var(--color-primary-500)`
   */
  var: CSSColorsVars;
};

export type CSSColorsV2 = Colors<string>;
