/**
 * Representation of a color
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
 */
export interface Color {
  // /**
  //  * RGB cubic-coordinates
  //  * @see https://en.wikipedia.org/wiki/RGB_color_model#Geometric_representation
  //  */
  // r: number;
  // g: number;
  // b: number;
  /**
   * HSL cylindrical-coordinates
   * @see https://en.wikipedia.org/wiki/HSL_and_HSV
   */
  h: number;
  s: number;
  l: number;
  // /**
  //  * Hexadecimal representation of the color
  //  * @example #fffff
  //  */
  // hex: string;
  /**
   * alpha-channel transparency value
   * @example 0.5
   */
  a?: number;
}
