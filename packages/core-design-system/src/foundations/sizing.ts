import { BooleanType, NumberType } from '../types.js';

import { VIEWPORT } from './layout.js';
import { ModularScaleRatio } from './sizing-modular-scale.js';

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
 * Defines the ratio (can be one of the predefined value or a number)
 */
export type SizingRatio = ModularScaleRatio;

/**
 * Defines in px what a sizing step is.
 * @example 9,12,16
 */
export type SizingStepValue = number;

/**
 * Defines values for each step
 */
export type SizingStep<Override extends undefined | string = undefined> = {
  [key in SIZE]: Override extends string ? string : SizingStepValue;
};

/**
 * Definition of the sizing steps for each viewport.
 */
export type SizingSteps<Override extends undefined | string = undefined> = {
  [key in VIEWPORT]: SizingStep<Override>;
};

/**
 * Ratios for each viewport
 */
export type SizingRatios<Override extends undefined | string = undefined> = {
  [key in VIEWPORT]: Override extends string ? string : SizingRatio;
};

/**
 * A set of predefined sizes from `x1` to `x10` to size and spacing components
 * and layouts in the system.
 *
 * `x1` usually defines the smallest spacing size to be used and the
 * smallest cap height (text height) (e.g. small label).
 *
 * When power ratios are used, the next size (e.g. from 6 at `x1` -> ? at `x2`) is optained by multiplying
 * the power ratio (e.g. `6 * 1.618 ^ 1` the Golden Ratio).
 */
export type Sizing<Override extends undefined | string = undefined> = {
  /**
   * Base font size (in px) to set on the page <html/> element.
   * This defines what `1 rem` globally
   */
  baseFontSize: NumberType<Override>;
  /**
   * When true, sizes (for each viewport) will be computed using the defined ratios
   * @default false
   */
  useRatiosForSizes: BooleanType<Override>;
  /**
   * The ratio by which we multiply to calculate the next size step.
   * E.g. 1.618 (Golden Ratio)
   * @see https://alistapart.com/article/more-meaningful-typography/
   * @see https://vimeo.com/17079380
   */
  ratios: SizingRatios<Override>;
  /**
   * Size values for each step.
   * @see when `useRatiosForSizes` is true, the sizes values will be computed using modular scale and the
   * ratios defined
   */
  sizes: SizingSteps<Override>;
};
