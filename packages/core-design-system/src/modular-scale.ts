export type ScaleRange = Number[];

export interface ScaleStep {
  /*
   * Unique name of the step. E.g. X1, X2, ... XN
   */
  name: SCALE_STEP_NAME | string;
  /*
   * Size of the step in pixel.
   */
  size: number;
}

/**
 * Can't use this because diez does not support enum yet: https://github.com/diez/diez/issues/132
 */
export enum SCALE_STEP_NAME {
  X1 = 'X1',
  X2 = 'X2',
  X3 = 'X3',
  X4 = 'X4',
  X5 = 'X5',
  // X6 = 'X6',
  // X7 = 'X7',
  // X8 = 'X8',
  // X9 = 'X9',
  // X10 = 'X10',
}

/**
 * A set of predefined sizes from X1 to X10.
 * X1 usually defines the smallest spacing size to be used and the smallest text height (e.g. small label).
 * The size property of a scale step is the actual height of the text ignoring line-height.
 * For each size, a corresponding fontSize is provided to create the typographic styles.
 *
 * To optain the next size (e.g. from X1 -> X2), the sizes are multipled by the ratio (e.g. 1.618 the Golden Ratio).
 */
export interface SizingScale {
  /**
   * The smallest size usable in the design system (X1).
   */
  baseSize: number;
  /**
   * The default ratio by which we multiply to calculate the next size step.
   * E.g. 1.618 (Golden Ratio)
   * @see https://alistapart.com/article/more-meaningful-typography/
   * @see https://vimeo.com/17079380
   */
  ratio: number;
  steps: { [key in SCALE_STEP_NAME]: ScaleStep };
}

export interface TypographicScale extends SizingScale {
  /**
   * The font size to set the smallest text size usable (X1). This will also
   * set the base font-size defining what 1 rem is.
   */
  baseFontSize: number;
}
