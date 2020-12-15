import { Font } from './font';
import { VIEWPORT } from './layout';
import { TextStyle } from './text';

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
  // h5 = 'h5',
  // h6 = 'h6',
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
  italic = 'italic',
  bold = 'bold',
  uppercase = 'uppercase',
  boldUppercase = 'boldUppercase',
  italicBold = 'italicBold',
}

/**
 * Available fonts in the design system.
 */
export type Fonts = { [key in keyof typeof TYPOGRAPHIC_STYLE]: Font[] } & {
  /**
   * CSS variable name for font famility.
   * @example `--font-sans-alternate`
   */
  varNames: FontVarNames;
  /**
   * CSS statement to access font CSS variables
   * @example `var(--font-sans-alternate)`
   */
  var: FontVars;
};

/**
 * Contains CSS variable names to set font-family
 * @example `--font-monospace`
 */
export type FontVarNames = string[];

/**
 * Contains CSS statement to access CSS variables
 * @example `var(--font-monospace)`
 */
export type FontVars = string[];

type PartialTextStyle<Override extends undefined | string = undefined> = Omit<
  TextStyle<Override>,
  'capHeight' | 'lineGap'
>;

/**
 * TODO
 */
export type Titles<Override extends undefined | string = undefined> = {
  [key in keyof typeof TITLE]: TextStyle<Override>;
};

/**
 * TODO
 */
export type Headings<Override extends undefined | string = undefined> = {
  [key in keyof typeof HEADING]: TextStyle<Override>;
};

/**
 * TODO
 */
export type Paragraphs<Override extends undefined | string = undefined> = {
  [key in keyof typeof PARAGRAPH_SIZE]: TextStyle<Override>;
};

/**
 * TODO
 */
export type Labels<Override extends undefined | string = undefined> = {
  [key in keyof typeof LABEL_SIZE]: TextStyle<Override>;
};

export interface Typography<Override extends undefined | string = undefined> {
  /**
   * Available fonts in the design system.
   */
  fonts: Fonts;

  /**
   *
   */
  titles: {
    [key in keyof typeof VIEWPORT]: Titles<Override>;
  } &
    PartialTextStyle<Override>;

  /**
   * TODO
   */
  headings: {
    [key in keyof typeof VIEWPORT]: Headings<Override>;
  } &
    PartialTextStyle<Override>;

  /**
   * TODO
   */
  paragraphs: {
    [key in keyof typeof VIEWPORT]: Paragraphs<Override>;
  } &
    PartialTextStyle<Override> & {
      styles: {
        [TEXT_STYLE.bold]: PartialTextStyle<Override>;
        [TEXT_STYLE.italic]: PartialTextStyle<Override>;
      };
    };

  /**
   * TODO
   */
  labels: {
    [key in keyof typeof VIEWPORT]: Labels<Override>;
  } &
    PartialTextStyle<Override> & {
      styles: {
        [TEXT_STYLE.bold]: PartialTextStyle<Override>;
        [TEXT_STYLE.uppercase]: PartialTextStyle<Override>;
        [TEXT_STYLE.boldUppercase]: PartialTextStyle<Override>;
      };
    };
}
