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
 * Defines in px what a ratio is.
 */
export type SizingRatio = number;

/**
 * Defines in px what a sizing step is.
 * @example 9
 */
export type SizingStep = number;

/**
 * Definition of the sizing steps for each viewport.
 */
export type SizingSteps<Override extends undefined | string = undefined> = {
  [key in VIEWPORT]: { [key in SIZE]: Override extends string ? string : SizingStep };
};

/**
 * Ratios for each viewport
 */
export type SizingRatios<Override extends undefined | string = undefined> = {
  [key in VIEWPORT]: Override extends string ? string : SizingRatio;
};

/**
 * A set of predefined sizes from `x1` to `x10`.
 * `x1` usually defines the smallest spacing size to be used and the smallest cap height (text height) (e.g. small label).
 *
 * To optain the next size (e.g. from `x1` -> `x2`), the sizes are multipled by the ratio (e.g. `1.618` the Golden Ratio).
 */
export type Sizing<Override extends undefined | string = undefined> = {
  /**
   * Base font size (in px) to set on the page <html/> element.
   * This defines what `1 rem` is.
   */
  baseFontSize: NumberType<Override>;
  /**
   * The ratio by which we multiply to calculate the next size step.
   * E.g. 1.618 (Golden Ratio)
   * @see https://alistapart.com/article/more-meaningful-typography/
   * @see https://vimeo.com/17079380
   */
  ratio: SizingRatios<Override>;
  /**
   * Size values for each step.
   */
  sizes: SizingSteps<Override>;
};
