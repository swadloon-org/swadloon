import { CapsizeStyles } from 'capsize';
import { Color } from '../primitives/color';
import { FontWeightType, LetterSpacingType, TextDecorationType, TextTransformType } from '../types';
import { Font } from './font';

export enum TEXT_TRANSFORM {
  capitalize = 'capitalize',
  lowercase = 'lowercase',
  none = 'none',
  uppercase = 'uppercase',
}

export enum TEXT_DECORATION_LINE {
  none = 'none',
  underline = 'underline',
  overline = 'overline',
  lineThrough = 'line-through',
  blink = 'blink',
}

export enum TEXT_DECORATION_STYLE {
  solid = 'solid',
  double = 'double',
  dotted = 'dotted',
  dashed = 'dashed',
  wavy = 'wavy',
}

export type TextDecoration<ColorType = Color> = {
  color: ColorType;
  line: [TEXT_DECORATION_LINE];
  style: TEXT_DECORATION_STYLE;
};

/**
 * @see https://seek-oss.github.io/capsize/
 */
export type CapsizeTextStyle<Override extends undefined | string = undefined> = {
  /**
   * Desired capital letter height in pixels. (which is usually the height of the capital letter 'X')
   */
  capHeight?: number;
  /**
   * Desired font size in pixels. If both the `capHeight` and `fontSize` are specified, only `fontSize` is considered.
   */
  fontSize?: number;
  /**
   * Desired line gap in pixels.
   * @see https://seek-oss.github.io/capsize/
   */
  lineGap: number;
  /**
   * Cap
   */
  capsize?: Override extends string | undefined ? CapsizeStyles : undefined;
};

export type TextStyle<Override extends undefined | string = undefined> = {
  /**
   * Array of font object that contains information about the typeface.
   */
  font?: Font[];
  /**
   * Font family to use.
   *
   * @example 'Montserrat-Bold'
   * @default font.name
   */
  fontFamily?: string;
  /**
   * Specify the font weight in number.
   *
   * @example 500
   */
  fontWeight?: FontWeightType<Override>;
  /**
   * Todo
   *
   * @example 'italic'
   */
  fontStyle?: 'normal' | 'italic';
  /**
   * Optional property to set `letter-spacing`.
   * @example 3 becomes '3%'
   */
  letterSpacing?: LetterSpacingType<Override>;
  /**
   * Optional property to set `text-transform`.
   *
   * @example 'uppercase'
   */
  textTransform?: TextTransformType<Override>;
  /**
   * Optional property to set `text-decoration`.
   * @example { color: red, line: underline, style'underline'}
   */
  textDecoration?: TextDecorationType<Override>;
};
