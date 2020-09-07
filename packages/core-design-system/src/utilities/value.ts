/**
 * Primitive type representing a basic CSS value.
 */
export interface Value {
  /**
   * Value in number
   * @example 300
   */
  value: number;
  /**
   * Value in pixel
   * @example '300px'
   */
  px: string;
}

export type ValueString = string;
