import { ColorType, PercentType } from '../types.js';

import { Angle } from './angle.js';

export type ColorGradient<Override extends undefined | string = undefined> = {
  /**
   * Angle of the gradient
   * @example
   *  ```ts
   *  { value: 45, unit: 'deg' }
   *  ```
   */
  angle: Angle<Override>;
  /**
   * Stops of the gradient
   * @example
   *  ```ts
   *  [{color: 'red', position: 0}, {color: 'blue', position: 100]
   *  ```
   */
  stops: ColorStop<Override>[];
};

export type ColorStop<Override extends undefined | string = undefined> = {
  /**
   * Color of the stop
   */
  color: ColorType<Override>;
  /**
   * Position of the stop between 0-100
   */
  position?: PercentType<Override>;
};
