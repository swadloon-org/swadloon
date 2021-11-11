import { Fonts } from '@newrade/core-design-system';

/**
 * Contains CSS variable names to set font-family
 * @example `--font-monospace`
 */
export type FontVarNames = Fonts<string>;

/**
 * Contains CSS statement to access CSS variables
 * @example `var(--font-monospace)`
 */
export type FontVars = Fonts<string>;

export type CSSFonts = Fonts<string> & {
  /**
   * CSS variable name for font famility.
   * @example `--font-sans-alternate`
   */
  varNames: FontVarNames;
  /**
   * CSS statement to access font CSS variables
   * @example `var(--font-sans-alternate)`
   */
  var: FontVars;
};
