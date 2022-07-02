import { NumberType } from '../types.js';

/**
 * Represents an angle value expressed in degrees, gradians, radians, or turns
 * @see https://devdocs.io/css/angle
 */
export type Angle<Override extends undefined | string = undefined> = {
  value: NumberType<Override>;
  unit: ANGLE_UNIT;
};

export enum ANGLE_UNIT {
  DEG = 'deg',
  GRAD = 'grad',
  RAD = 'rad',
  TURN = 'turn',
}
