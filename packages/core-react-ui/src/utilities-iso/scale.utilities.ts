import { ModularScaleRatio, modularScaleRatioValues } from '@newrade/core-design-system';

import { round } from './math.utilities.js';

export type ModularScaleOptions = {
  step: number;
  base: number;
  ratio: ModularScaleRatio;
  precision?: number;
};

/**
 * Return values of a modular scale
 */
export function getScaledValue({ step, base, ratio, precision }: ModularScaleOptions): number {
  if (typeof step !== 'number') {
    throw new Error('Steps must be a number');
  }
  if (typeof ratio === 'string' && !modularScaleRatioValues[ratio]) {
    throw new Error('This ratio is not supported');
  }
  const realRatio = typeof ratio === 'string' ? modularScaleRatioValues[ratio] : ratio;

  const value = base * realRatio ** step;

  if (precision !== undefined) {
    return round({ value, precision });
  }

  return round({ value, precision: 4 });
}
