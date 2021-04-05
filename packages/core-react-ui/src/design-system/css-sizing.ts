import { SIZE, Sizing } from '@newrade/core-design-system';

/**
 * Contains CSS variable names for each sizing step
 * @example `--sizing-x1`
 */
export type SizingVarNames = { [key in keyof typeof SIZE]: string };

/**
 * Contains CSS statement to access CSS variables
 * @example `var(--sizing-x1)`
 */
export type SizingVars = { [key in keyof typeof SIZE]: string };

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
