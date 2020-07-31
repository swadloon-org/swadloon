import { Properties } from 'csstype';
import { ScaleStep, TypographicScale } from './modular-scale';

type BasicCSSProperties = Properties<string | number>;

/**
 * Represent a text style.
 */
export interface Typograph {
  fontFamily: string;
  /**
   * In px
   */
  fontSize: ScaleStep['size'];
  /**
   * In % of fontSize
   */
  lineHeight: number;
  /**
   * In % of fontSize
   */
  letterSpacing: number;
  /**
   * The distance (in px) between block of text when a <br> or return is encountered.
   */
  paragraphSpacing: number;
  // alignment: BasicCSSProperties; // TODO
  // decoration: never[]; // TODO
}

/**
 * The main typographic styles defined in a design system.
 */
export enum TYPOGRAPHIC_STYLE {
  SANS = 'SANS',
  SERIF = 'SERIF',
  MONOSPACE = 'MONOSPACE',
}

/**
 * Built-in headings.
 */
export enum HEADING_NAME {
  H1,
  H2,
  H3,
  H4,
}

/**
 * Sizes name for paragraphs, links, labels.
 */
export enum TYPE_SIZE {
  LARGE,
  MEDIUM,
  SMALL,
}

/**
 * The design system typography configuration object.
 */
export interface Typography {
  headings: {
    [HEADING_NAME.H1]: Typograph;
    [HEADING_NAME.H2]: Typograph;
    [HEADING_NAME.H3]: Typograph;
    [HEADING_NAME.H4]: Typograph;
  };
  // paragraphs: {
  //   large: Typograph;
  //   medium: Typograph;
  //   small: Typograph;
  // };
  // links: {
  //   large: Typograph;
  //   medium: Typograph;
  //   small: Typograph;
  // };
  // labels: {
  //   large: Typograph;
  //   medium: Typograph;
  //   small: Typograph;
  // };
}

export interface TypographySystem {
  [TYPOGRAPHIC_STYLE.SANS]: Typography;
  [TYPOGRAPHIC_STYLE.SERIF]?: Typography;
  [TYPOGRAPHIC_STYLE.MONOSPACE]?: Typography;
}

/**
 * CSS style to set the `font-family` property to use the user's default system sans-serif font.
 */
export const CSS_SYSTEM_SANS_FONTS = `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif`;
