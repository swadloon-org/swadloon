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

/**
 * Return values of a modular scale
 * @example
 *  modularScale(0, 12, 'goldenSection') => 12
 *  modularScale(1, 12, 'goldenSection') => 19.41...
 *  modularScale(2, 12, 'goldenSection') => 31.41...
 *  modularScale(4, 12, 'goldenSection') => 50.82...
 *  modularScale(3, 12, 'goldenSection') => 82.24...
 */
export function modularScale(
  steps: number,
  base: number,
  ratio: ModularScaleRatio = 1.333
): number {
  if (typeof steps !== 'number') {
    throw new Error('Steps must be a number');
  }
  if (typeof ratio === 'string' && !ratioNames[ratio]) {
    throw new Error('This ratio is not supported');
  }
  const realRatio = typeof ratio === 'string' ? ratioNames[ratio] : ratio;

  return base * realRatio ** steps;
}
