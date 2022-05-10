/**
 * Representation of a color in HSL (cylindrical-coordinates)
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
 * @see https://en.wikipedia.org/wiki/HSL_and_HSV
 */
export interface Color {
  h: number;
  s: number;
  l: number;
  /**
   * Alpha-channel transparency value between 0 and 100
   * @example e.g. a value of 50 means 50% or 0.5 in CSS
   */
  a?: number;
}

/**
 * RGB cubic-coordinates
 *
 * @see https://en.wikipedia.org/wiki/RGB_color_model#Geometric_representation
 */
export interface ColorRGB {
  r: number;
  g: number;
  b: number;
}

/**
 * Hexadecimal representation of the color
 * @example #fffff
 */
export interface ColorHEX {
  hex: string;
}

/**
 * Color formats
 *
 * @see https://en.wikipedia.org/wiki/Color_space
 */
export enum COLOR_FORMAT {
  HSL = 'HSL',
  RGBA = 'RGBA',
  HEX = 'HEX',
}
