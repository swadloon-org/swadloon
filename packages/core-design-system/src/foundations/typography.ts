import { Font } from './font';
import { VIEWPORT } from './layout';
import { CapsizeTextStyle, TextStyle } from './text';

/**
 * The main typographic styles.
 */
export enum TYPOGRAPHIC_STYLE {
  sans = 'sans',
  sansAlternate = 'sansAlternate',
  serif = 'serif',
  monospace = 'monospace',
}

/**
 * Levels for bigger titles, ususally for landing pages.
 */
export enum TITLE {
  t1 = 't1',
  t2 = 't2',
}

/**
 * The headings (e.g. <h1/>, <h2/>...) levels.
 */

export enum HEADING {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
}

/**
 * The paragraph sizes.
 */
export enum PARAGRAPH_SIZE {
  large = 'large',
  medium = 'medium',
  small = 'small',
  xSmall = 'xSmall',
}

/**
 * The label sizes.
 */
export enum LABEL_SIZE {
  medium = 'medium',
  small = 'small',
  xSmall = 'xSmall',
}

/**
 * The text styles.
 */
export enum TEXT_STYLE {
  normal = 'normal',
  italic = 'italic',
  bold = 'bold',
  uppercase = 'uppercase',
  boldUppercase = 'boldUppercase',
  italicBold = 'italicBold',
}

/**
 * Available fonts in the design system.
 */
export type Fonts<Override extends undefined | string = undefined> = {
  [key in TYPOGRAPHIC_STYLE]: Override extends string ? string : Font[];
};

/**
 * TODO
 */
export type Titles<Override extends undefined | string = undefined> = {
  [key in TITLE]: CapsizeTextStyle<Override> & TextStyle<Override>;
};

/**
 * TODO
 */
export type Headings<Override extends undefined | string = undefined> = {
  [key in HEADING]: CapsizeTextStyle<Override> & TextStyle<Override>;
};

/**
 * TODO
 */
export type Paragraphs<Override extends undefined | string = undefined> = {
  [key in PARAGRAPH_SIZE]: CapsizeTextStyle<Override> & TextStyle<Override>;
};

/**
 * TODO
 */
export type Labels<Override extends undefined | string = undefined> = {
  [key in LABEL_SIZE]: CapsizeTextStyle<Override> & TextStyle<Override>;
};

export type TextVariantStyles<Override extends undefined | string> = {
  [key in TEXT_STYLE]?: TextStyle<Override>;
};

export type Typography<Override extends undefined | string = undefined> = {
  /**
   * Available fonts in the design system.
   */
  fonts: Fonts<Override>;

  /**
   *
   */
  titles: {
    [key in VIEWPORT]: Titles<Override>;
  } &
    TextStyle<Override>;

  /**
   * TODO
   */
  headings: {
    [key in VIEWPORT]: Headings<Override>;
  } &
    TextStyle<Override>;

  /**
   * TODO
   */
  paragraphs: {
    [key in VIEWPORT]: Paragraphs<Override>;
  } &
    TextStyle<Override> & { styles: TextVariantStyles<Override> };

  /**
   * TODO
   */
  labels: {
    [key in VIEWPORT]: Labels<Override>;
  } &
    TextStyle<Override> & { styles: TextVariantStyles<Override> };
};
