import { Font } from './font';
import { VIEWPORT } from './layout';
import { CapsizeTextStyle, CapsizeTextStyleV2, TextStyle } from './text';

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
 *
 * V1
 *
 */

/**
 * Available fonts in the design system.
 */
export type Fonts<Override extends undefined | string = undefined> = {
  [key in TYPOGRAPHIC_STYLE]: Override extends string ? string : Font[];
};

/**
 * Config for titles, which are 2 additional larger headings
 */
export type Titles<Override extends undefined | string = undefined> = {
  [key in TITLE]: CapsizeTextStyle<Override> & TextStyle<Override>;
};

/**
 * Config for headings
 */
export type Headings<Override extends undefined | string = undefined> = {
  [key in HEADING]: CapsizeTextStyle<Override> & TextStyle<Override>;
};

/**
 * Config for paragraphs
 */
export type Paragraphs<Override extends undefined | string = undefined> = {
  [key in PARAGRAPH_SIZE]: CapsizeTextStyle<Override> & TextStyle<Override>;
};

/**
 * Config for labels
 */
export type Labels<Override extends undefined | string = undefined> = {
  [key in LABEL_SIZE]: CapsizeTextStyle<Override> & TextStyle<Override>;
};

/**
 *
 * V2
 *
 */

/**
 * Available fonts in the design system.
 *
 * @version
 *  -v2: intead of having fonts information as an array, the css version will just be a string
 */
export type FontsV2<Override extends undefined | string = undefined> = {
  [key in TYPOGRAPHIC_STYLE]: Override extends string ? string : Font[];
};

/**
 * Config for titles, which are 2 additional larger headings
 *
 * @version
 *  -v2: uses CapsizeTextStyleV2 which removes the computed capsize property
 */
export type TitlesV2<Override extends undefined | string = undefined> = {
  [key in TITLE]: CapsizeTextStyleV2<Override> & TextStyle<Override>;
};

/**
 * Config for headings
 *
 * @version
 *  -v2: uses CapsizeTextStyleV2 which removes the computed capsize property
 */
export type HeadingsV2<Override extends undefined | string = undefined> = {
  [key in HEADING]: CapsizeTextStyleV2<Override> & TextStyle<Override>;
};

/**
 * Config for paragraphs
 *
 * @version
 *  -v2: uses CapsizeTextStyleV2 which removes the computed capsize property
 */
export type ParagraphsV2<Override extends undefined | string = undefined> = {
  [key in PARAGRAPH_SIZE]: CapsizeTextStyleV2<Override> & TextStyle<Override>;
};

/**
 * Config for labels
 *
 * @version
 *  -v2: uses CapsizeTextStyleV2 which removes the computed capsize property
 */
export type LabelsV2<Override extends undefined | string = undefined> = {
  [key in LABEL_SIZE]: CapsizeTextStyleV2<Override> & TextStyle<Override>;
};

export type TextVariantStyles<Override extends undefined | string> = {
  [key in TEXT_STYLE]: TextStyle<Override>;
};

export type Typography<Override extends undefined | string = undefined> = {
  /**
   * Available fonts in the design system.
   */
  fonts: Fonts<Override>;

  titles: {
    [key in VIEWPORT]: Titles<Override>;
  } &
    TextStyle<Override>;

  headings: {
    [key in VIEWPORT]: Headings<Override>;
  } &
    TextStyle<Override>;

  paragraphs: {
    [key in VIEWPORT]: Paragraphs<Override>;
  } &
    TextStyle<Override> & { styles: TextVariantStyles<Override> };

  labels: {
    [key in VIEWPORT]: Labels<Override>;
  } &
    TextStyle<Override> & { styles: TextVariantStyles<Override> };
};

/**
 * @version
 *  - v2: uses version 2 of Fonts, Titles, Headings, Paragraphs, Labels
 */
export type TypographyV2<Override extends undefined | string = undefined> = {
  /**
   * Available fonts in the design system.
   */
  fonts: FontsV2<Override>;

  titles: {
    [key in VIEWPORT]: TitlesV2<Override>;
  } &
    TextStyle<Override>;

  headings: {
    [key in VIEWPORT]: HeadingsV2<Override>;
  } &
    TextStyle<Override>;

  paragraphs: {
    [key in VIEWPORT]: ParagraphsV2<Override>;
  } &
    TextStyle<Override> & { styles: TextVariantStyles<Override> };

  labels: {
    [key in VIEWPORT]: LabelsV2<Override>;
  } &
    TextStyle<Override> & { styles: TextVariantStyles<Override> };
};
