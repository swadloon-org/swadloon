import { ComputedValues } from '@capsizecss/core/dist/declarations/src/types';

import { Color } from '../primitives/color.js';
import {
  FontVariantNumericType,
  FontWeightType,
  LetterSpacingType,
  TextDecorationType,
  TextTransformType,
} from '../types.js';

import { Font } from './font.js';

export enum TEXT_TRANSFORM {
  capitalize = 'capitalize',
  lowercase = 'lowercase',
  none = 'none',
  uppercase = 'uppercase',
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-numeric
 */
export enum FONT_VARIANT_NUMERIC {
  /**
   * This keyword leads to the deactivation of the use of such alternate glyphs.
   */
  normal = 'normal',
  /**
   * This keyword forces the use of special glyphs for the ordinal markers,
   * like 1st, 2nd, 3rd, 4th in English or a 1a in Italian. It corresponds to the OpenType values ordn.
   */
  ordinal = 'ordinal',
  /**
   * This keyword forces the use of a 0 with a slash;
   * this is useful when a clear distinction between O and 0 is needed. It corresponds to the OpenType values zero.
   */
  slashedZero = 'slashed-zero',
  /**
   * activating the set of figures where numbers are all lying on the baseline
   */
  liningNums = 'lining-nums',
  /**
   * activating the set of figures where some numbers, like 3, 4, 7, 9 have descenders. It corresponds to the OpenType values
   */
  oldstyleNums = 'oldstyle-nums',
  /**
   * activating the set of figures where numbers are not all of the same size
   */
  proportionalNums = 'proportional-nums',
  /**
   * activating the set of figures where numbers are all of the same size, allowing them to be easily aligned like in tables
   */
  tabularNums = 'tabular-nums',
  /**
   * activating the set of figures where the numerator and denominator are made smaller and separated by a slash
   */
  diagonalFractions = 'diagonal-fractions',
  /**
   * activating the set of figures where the numerator and denominator are made smaller, stacked and separated by a horizontal line
   */
  stackedFractions = 'stacked-fractions',
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
  line: TEXT_DECORATION_LINE;
  style: TEXT_DECORATION_STYLE;
};

/**
 * @see https://seek-oss.github.io/capsize/
 */
export type CapsizeTextStyle<Override extends undefined | string = undefined> = {
  /**
   * Desired capital letter height in pixels. (which is usually the height of the capital letter 'X')
   */
  capHeight?: Override extends string ? string : number;
  /**
   * Desired font size in pixels. If both the `capHeight` and `fontSize` are specified, only `fontSize` is considered.
   */
  fontSize?: Override extends string ? string : number;
  /**
   * Desired line gap in pixels.
   */
  lineGap: Override extends string ? string : number;
  /**
   * Capsize properties (only for CSS)
   */
  capsize?: CapsizeStyles;
};

type CapsizeStyles = {
  fontSize: string;
  lineHeight: string;
  '::before': {
    content: string;
    marginBottom: string;
    display: string;
  };
  '::after': {
    content: string;
    marginTop: string;
    display: string;
  };
};

/**
 * @see https://seek-oss.github.io/capsize/
 *
 * @version
 *  - v2: since we are using vanilla-extract to generate css variables from our tokens so we use capsize precomputed values for the
 *        capsize property
 */
export type CapsizeTextStyleV2<Override extends undefined | string = undefined> =
  Override extends string
    ? {
        /**
         * Precomputed Capsize properties
         */
        capsize: ComputedValues;
      }
    : {
        /**
         * Desired font size in pixels. If both the `capHeight` and `fontSize` are specified, only `fontSize` is considered.
         */
        fontSize?: Override extends string ? string : number;
        /**
         * Desired capital letter height in pixels. (which is usually the height of the capital letter 'X')
         *
         * if `fontSize` is set, then capHeight will be computed and set afterwards
         */
        capHeight?: Override extends string ? string : number;
        /**
         * Desired line gap in pixels.
         */
        lineGap: Override extends string ? string : number;
      };

export type TextStyle<Override extends undefined | string = undefined> = {
  /**
   * Array of font objects that contains information about the typeface.
   */
  fontFamily?: Override extends string ? string : Font[];
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
   * @example { color: red, line: underline, style: 'underline'}
   */
  textDecoration?: TextDecorationType<Override>;
  /**
   * Controls the usage of alternate glyphs for numbers, fractions, and ordinal markers.
   */
  fontVariantNumeric?: FontVariantNumericType<Override>;
};
