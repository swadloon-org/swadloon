import { CapsizeStyles, FontMetrics } from 'capsize';
import { FontWeightProperty } from 'csstype';
import { VIEWPORT } from './layout';
import { SizingStep } from './sizing';

/**
 * The main typographic styles.
 */
export enum TYPOGRAPHIC_STYLE {
  SANS = 'SANS',
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
}

/**
 * The label sizes.
 */
export enum LABEL {
  MEDIUM_BOLD_UPPERCASE = 'MEDIUM_BOLD_UPPERCASE',
  MEDIUM_UPPERCASE = 'MEDIUM_UPPERCASE',
  MEDIUM = 'MEDIUM',
  SMALL_BOLD_UPPERCASE = 'SMALL_BOLD_UPPERCASE',
  SMALL_UPPERCASE = 'SMALL_UPPERCASE',
  SMALL = 'SMALL',
}

export interface Font {
  /**
   * Name of the font / font familily
   */
  name: string;
  vendor?: string;
  link?: string;
}

/**
 * Available fonts in the design system.
 */
export type Fonts = { [key in keyof typeof TYPOGRAPHIC_STYLE]: Font };

export interface TextStyle {
  font: Font;
  fontFamily: string;
  fontWeight: FontWeightProperty;

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
   * Font-specific metric for capsize.
   */
  fontMetrics: FontMetrics; // depends on font, capital height and line gap
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
