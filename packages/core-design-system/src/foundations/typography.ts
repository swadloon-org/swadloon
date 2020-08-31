import { CapsizeStyles, FontMetrics } from 'capsize';
import { FontWeightProperty, TextTransformProperty, LetterSpacingProperty } from 'csstype';
import { VIEWPORT } from './layout';
import { SizingStep } from './sizing';

/**
 * The main typographic styles.
 */
export enum TYPOGRAPHIC_STYLE {
  SANS = 'SANS',
  SANS_ALTERNATE = 'SANS_ALTERNATE',
  SERIF = 'SERIF',
  MONOSPACE = 'MONOSPACE',
}

/**
 * The headings (e.g. <h1/>, <h2/>...) levels.
 */
export enum HEADING_LEVEL {
  H1 = 'H1',
  H2 = 'H2',
  H3 = 'H3',
  H4 = 'H4',
}

/**
 * The paragraph sizes.
 */
export enum PARAGRAPH {
  LARGE = 'LARGE',
  MEDIUM = 'MEDIUM',
  SMALL = 'SMALL',
  X_SMALL = 'X_SMALL',
}

/**
 * The label sizes.
 */
export enum LABEL {
  MEDIUM_BOLD_UPPERCASE = 'MEDIUM_BOLD_UPPERCASE',
  MEDIUM_UPPERCASE = 'MEDIUM_UPPERCASE',
  MEDIUM_BOLD = 'MEDIUM_BOLD',
  MEDIUM_REGULAR = 'MEDIUM_REGULAR',
  SMALL_BOLD_UPPERCASE = 'SMALL_BOLD_UPPERCASE',
  SMALL_UPPERCASE = 'SMALL_UPPERCASE',
  SMALL_BOLD = 'SMALL_BOLD',
  SMALL_REGULAR = 'SMALL_REGULAR',
  X_SMALL_BOLD_UPPERCASE = 'X_SMALL_BOLD_UPPERCASE',
  X_SMALL_UPPERCASE = 'X_SMALL_UPPERCASE',
  X_SMALL_BOLD = 'X_SMALL_BOLD',
  X_SMALL_REGULAR = 'X_SMALL_REGULAR',
}

export interface Font {
  /**
   * Name of the font / font familily
   */
  name: string;
  vendor?: string;
  link?: string;
  /**
   * Font-specific metric for capsize.
   */
  fontMetrics: FontMetrics;
}

/**
 * Available fonts in the design system.
 */
export type Fonts = { [key in keyof typeof TYPOGRAPHIC_STYLE]?: Font };

export interface TextStyle {
  /**
   * Font object that contains information about the typeface.
   */
  font: Font;
  /**
   * Font family which will be rendered in CSS files.
   *
   * @example 'Montserrat-Bold'
   */
  fontFamily: string;
  /**
   * Specify the font weight in number.
   *
   * @example 500
   */
  fontWeight: FontWeightProperty;
  /**
   * Optional property to set `letter-spacing`.
   * Note that only percentage (x%) values are allowed right now.
   *
   * @example '3%' becomes '0.48em'
   */
  letterSpacing?: LetterSpacingProperty<any>;
  /**
   * Optional property to set `text-transform`.
   *
   * @example 'uppercase'
   */
  textTransform?: TextTransformProperty;
  /**
   * Desired capital letter height in pixels. (which is usually the height of the letter 'X')
   * @see https://seek-oss.github.io/capsize/
   */
  capHeight: SizingStep | number;
  /**
   * Desired line gap in pixels.
   */
  lineGap: number;
  /**
   * Direct output of capsize (values are in px).
   */
  capsizePx: CapsizeStyles;
  /**
   * Converted capsize values in `rem` unit.
   */
  capsizeRem: CapsizeStyles;
}

/**
 * TODO
 */
export type Headings = { [key in keyof typeof HEADING_LEVEL]: TextStyle };

/**
 * TODO
 */
export type Paragraphs = { [key in keyof typeof PARAGRAPH]: TextStyle };

/**
 * TODO
 */
export type Labels = { [key in keyof typeof LABEL]: TextStyle };

export interface Typography {
  /**
   * Available fonts in the design system.
   */
  fonts: Fonts;
  /**
   * TODO
   */
  headings: { [key in keyof typeof VIEWPORT]: Headings };
  /**
   * TODO
   */
  paragraphs: { [key in keyof typeof VIEWPORT]: Paragraphs };
  /**
   * TODO
   */
  labels: { [key in keyof typeof VIEWPORT]: Labels };
}
