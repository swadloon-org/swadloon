import { VIEWPORT } from './layout';

/**
 * Unique names for each sizing step.
 */
export enum SIZING {
  X1 = 'X1',
  X2 = 'X2',
  X3 = 'X3',
  X4 = 'X4',
  X5 = 'X5',
  X6 = 'X6',
  X7 = 'X7',
  X8 = 'X8',
  X9 = 'X9',
  X10 = 'X10',
}

export type SizeCSSVarNames = { [key in keyof typeof SIZING]: string };

/**
 * Defines in px, rem what a sizing step is.
 *
 * Note: `valueRem` should be used to set CSS variables.
 * Note: variable names should be set according to SizeCSSVarNames.
 *
 * @example
 *  ```css
 *  :root {
 *    --sizing-x1: 9rem
 *  }
 *  ```
 */
export interface SizingStep {
  /**
   * @example 9
   */
  value: number;
  /**
   * @example `9px`
   */
  valuePx: string;
  /**
   * @example `1rem`
   */
  valueRem: string;
}

/**
 * Definition of the sizing steps for each viewport.
 */
export type SizingSteps = { [key in keyof typeof VIEWPORT]: SizingStep };

/**
 * A set of predefined sizes from `X1` to `X10`.
 * `X1` usually defines the smallest spacing size to be used and the smallest cap height (text height) (e.g. small label).
 *
 * To optain the next size (e.g. from `X1` -> `X2`), the sizes are multipled by the ratio (e.g. `1.618` the Golden Ratio).
 */
export interface Sizing {
  /**
   * Base font size (in px) to set on the page <html/> element.
   * This defines what `1 rem` is.
   */
  baseFontSize: number;
  /**
   * The ratio by which we multiply to calculate the next size step.
   * E.g. 1.618 (Golden Ratio)
   * @see https://alistapart.com/article/more-meaningful-typography/
   * @see https://vimeo.com/17079380
   */
  ratio: number;
  /**
   * CSS variable name for each step.
   */
  sizeCSSVarNames: SizeCSSVarNames;
  /**
   * Size values for each step.
   */
  sizingSteps: { [key in SIZING]: SizingSteps };
}
