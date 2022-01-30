import { Buttons } from '@newrade/core-design-system';

/**
 * Contains CSS variable names for each color
 * @example `--color-primary-500`
 */
export type CSSButtonsVarNames = Buttons<string>;

/**
 * Contains CSS statement to access CSS variables
 * @example `var(--color-primary-500)`
 */
export type CSSButtonsVars = Buttons<string>;

export type CSSButtons = Buttons<string> & {
  // /**
  //  * CSS variable name for each color.
  //  * @example `--button-primary-text`
  //  */
  // varNames: CSSButtonsVarNames;
  // /**
  //  * CSS statement to access CSS variables
  //  * @example `var(--color-primary-500)`
  //  */
  // var: CSSButtonsVars;
};
