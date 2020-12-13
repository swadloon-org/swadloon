import { NumberType } from '../types';
import { VIEWPORT } from './layout';

/**
 * Unique names for each sizing step.
 */
export enum SIZE {
  x0 = 'x0',
  x1 = 'x1',
  x2 = 'x2',
  x3 = 'x3',
  x4 = 'x4',
  x5 = 'x5',
  x6 = 'x6',
  x7 = 'x7',
  x8 = 'x8',
  x9 = 'x9',
  x10 = 'x10',
}

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

/**
 * Defines in px, rem what a sizing step is.
 * @example 9
 */
export type SizingStep = number;

/**
 * Definition of the sizing steps for each viewport.
 */
export type SizingSteps<Override extends undefined | string = undefined> = {
  [key in keyof typeof VIEWPORT]: { [key in SIZE]: Override extends string ? string : SizingStep };
};

/**
 * A set of predefined sizes from `x1` to `x10`.
 * `x1` usually defines the smallest spacing size to be used and the smallest cap height (text height) (e.g. small label).
 *
 * To optain the next size (e.g. from `x1` -> `x2`), the sizes are multipled by the ratio (e.g. `1.618` the Golden Ratio).
 */
export interface Sizing<Override extends undefined | string = undefined> {
  /**
   * Base font size (in px) to set on the page <html/> element.
   * This defines what `1 rem` is.
   */
  baseFontSize: NumberType<Override>;
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
   * The ratio by which we multiply to calculate the next size step.
   * E.g. 1.618 (Golden Ratio)
   * @see https://alistapart.com/article/more-meaningful-typography/
   * @see https://vimeo.com/17079380
   */
  ratio: number;
  /**
   * Size values for each step.
   */
  sizes: SizingSteps<Override>;
}
