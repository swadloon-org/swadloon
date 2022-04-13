import { round } from './math.utilities';

export type ModularScaleRatio =
  | number
  | 'minorSecond'
  | 'majorSecond'
  | 'minorThird'
  | 'majorThird'
  | 'perfectFourth'
  | 'augFourth'
  | 'perfectFifth'
  | 'minorSixth'
  | 'goldenSection'
  | 'majorSixth'
  | 'minorSeventh'
  | 'majorSeventh'
  | 'octave'
  | 'majorTenth'
  | 'majorEleventh'
  | 'majorTwelfth'
  | 'doubleOctave';

export const ratioNames: { [key in ModularScaleRatio]: number } = {
  minorSecond: 1.067,
  majorSecond: 1.125,
  minorThird: 1.2,
  majorThird: 1.25,
  perfectFourth: 1.333,
  augFourth: 1.414,
  perfectFifth: 1.5,
  minorSixth: 1.6,
  goldenSection: 1.618,
  majorSixth: 1.667,
  minorSeventh: 1.778,
  majorSeventh: 1.875,
  octave: 2,
  majorTenth: 2.5,
  majorEleventh: 2.667,
  majorTwelfth: 3,
  doubleOctave: 4,
};

export type ModularScaleOptions = {
  step: number;
  base: number;
  ratio: ModularScaleRatio;
  precision?: number;
};

/**
 * Return values of a modular scale
 * @example
 *  getScaledValue(0, 12, 'goldenSection') => 12
 *  getScaledValue(1, 12, 'goldenSection') => 19.41...
 *  getScaledValue(2, 12, 'goldenSection') => 31.41...
 *  getScaledValue(4, 12, 'goldenSection') => 50.82...
 *  getScaledValue(4, 12, 'goldenSection', true) => 51...
 *  getScaledValue(3, 12, 'goldenSection') => 82.24...
 */
export function getScaledValue({ step, base, ratio, precision }: ModularScaleOptions): number {
  if (typeof step !== 'number') {
    throw new Error('Steps must be a number');
  }
  if (typeof ratio === 'string' && !ratioNames[ratio]) {
    throw new Error('This ratio is not supported');
  }
  const realRatio = typeof ratio === 'string' ? ratioNames[ratio] : ratio;

  const value = base * realRatio ** step;

  if (precision !== undefined) {
    return round({ value, precision });
  }

  return round({ value, precision: 4 });
}
