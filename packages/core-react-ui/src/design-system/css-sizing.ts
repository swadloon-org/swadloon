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
 * V2:
 *  - no need for `varNames` or `var` since they are constants
 */
export type CSSSizingV2 = Sizing<string>;
