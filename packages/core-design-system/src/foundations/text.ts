import { Font } from './font';

export enum TEXT_TRANSFORM {
  capitalize = 'capitalize',
  lowercase = 'lowercase',
  none = 'none',
  uppercase = 'uppercase',
}

export interface TextStyle<FontWeightType = number, LetterSpacingType = number, TextTransformType = TEXT_TRANSFORM> {
  /**
   * Font object that contains information about the typeface.
   */
  font: Font;
  /**
   * Font family which will be rendered in CSS files.
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
  fontWeight: FontWeightType;
  /**
   * Optional property to set `letter-spacing`.
   * @example '3' becomes '3%'
   */
  letterSpacing?: LetterSpacingType;
  /**
   * Optional property to set `text-transform`.
   *
   * @example 'uppercase'
   */
  textTransform?: TextTransformType;
  /**
   * Desired capital letter height in pixels. (which is usually the height of the capital letter 'X')
   * @see https://seek-oss.github.io/capsize/
   */
  capHeight: number;
  /**
   * Desired line gap in pixels.
   * @see https://seek-oss.github.io/capsize/
   */
  lineGap: number;
}
