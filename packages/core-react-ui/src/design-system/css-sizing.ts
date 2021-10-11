import { SIZE, Sizing, VIEWPORT } from '@newrade/core-design-system';

/**
 * Contains CSS variable names for each sizing step
 * @example `--sizing-x1`
 */
export type SizingVarNames = { [key in SIZE]: string };

/**
 * Contains CSS statement to access CSS variables
 * @example `var(--sizing-x1)`
 */
export type SizingVars = { [key in SIZE]: string };

/**
 * Contains CSS variable names for each ratio
 * @example `--sizing-ratio-mobile`
 */
export type SizingRatioVarNames = { [key in VIEWPORT]: string };

/**
 * Contains CSS statement to access CSS sizing ratio
 * @example `var(--sizing-ratio-mobile)`
 */
export type SizingRatioVars = { [key in VIEWPORT]: string };

export type CSSSizing = Sizing<string> & {
  /**
   * CSS variable name for each step.
   * @example `--sizing-x1`
   */
  varNames: SizingVarNames;
  /**
   * CSS statement to access CSS variables
   * @example `var(--sizing-x1)`
   */
  var: SizingVars;
};

/**
 * String only representation of the Sizing object
 *
 * for v2:
 *  - varNames is a constant
 *  - added ratioVarNames & ratioVar
 */
export type CSSSizingV2 = Sizing<string> & {
  /**
   * CSS variable name for each step.
   * @example `--sizing-x1`
   */
  varNames: SizingVarNames;
  /**
   * CSS statement to access CSS variables
   * @example `var(--sizing-x1)`
   */
  var: SizingVars;
  /**
   * CSS variable name for each sizing ratio.
   * @example `--sizing-ratio-mobile`
   */
  ratioVarNames: SizingRatioVarNames;
  /**
   * CSS statement to access CSS sizing ratio
   * @example `var(--sizing-ratio-mobile)`
   */
  ratioVar: SizingRatioVars;
};
