import { DeepPartial, NumberType } from '../types';

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

export enum TEXT_SPACING {
  before = 'before',
  after = 'after',
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

export type Typography<Override extends undefined | string = undefined> = {
  /**
   * Available fonts in the design system.
   */
  fonts: Fonts<Override>;

  /**
   * Titles are larger version of Headings
   */
  titles: {
    [key in VIEWPORT]: Titles<Override>;
  } &
    TextStyle<Override>;

  /**
   * Text styles for headings (1-4)
   */
  headings: {
    [key in VIEWPORT]: Headings<Override>;
  } &
    TextStyle<Override>;

  /**
   * Text styles for paragraphs
   */
  paragraphs: {
    [key in VIEWPORT]: Paragraphs<Override>;
  } &
    TextStyle<Override> & { styles: TextVariantStyles<Override> };

  /**
   * Text styles for labels
   */
  labels: {
    [key in VIEWPORT]: Labels<Override>;
  } &
    TextStyle<Override> & { styles: TextVariantStyles<Override> };

  vars?: Omit<Typography<string>, 'vars'>;
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

/**
 * Text spacing object
 */
export type TextSpacing<Override extends undefined | string = undefined> = {
  /**
   * Spacing before and after a text style, relative to font size
   *
   * @example 0 would mean no space, 1 is 1em
   */
  [key in TEXT_SPACING]: NumberType<Override>;
};

/**
 * Config for spacing around Titles
 */
export type TitlesSpaces<Override extends undefined | string = undefined> = {
  [key in TITLE]: TextSpacing<Override>;
};

/**
 * Config for spacing around Headings
 */
export type HeadingSpaces<Override extends undefined | string = undefined> = {
  [key in HEADING]: TextSpacing<Override>;
};

/**
 * Config for spacing around Paragraphs
 */
export type ParagraphSpaces<Override extends undefined | string = undefined> = {
  [key in PARAGRAPH_SIZE]: TextSpacing<Override>;
};

/**
 * Config for all text related spacing
 */
export type TextSpaces<Override extends undefined | string = undefined> = {
  titles: TitlesSpaces<Override>;
  headings: HeadingSpaces<Override>;
  paragraphs: ParagraphSpaces<Override>;
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

  /**
   * Titles are larger version of Headings
   */
  titles: {
    [key in VIEWPORT]: TitlesV2<Override>;
  } &
    TextStyle<Override>;

  /**
   * Text styles for headings (1-4)
   */
  headings: {
    [key in VIEWPORT]: HeadingsV2<Override>;
  } &
    TextStyle<Override>;

  /**
   * Text styles for paragraphs
   */
  paragraphs: {
    [key in VIEWPORT]: ParagraphsV2<Override>;
  } &
    TextStyle<Override> & { styles: TextVariantStyles<Override> };

  /**
   * Text styles for labels
   */
  labels: {
    [key in VIEWPORT]: LabelsV2<Override>;
  } &
    TextStyle<Override> & { styles: TextVariantStyles<Override> };

  /**
   * Variables to hold relative spacing (before and after) for text styles
   *
   * @example for h1, before could be 2em, and after could be 1em
   */
  spaces: TextSpaces<Override>;

  /**
   * Reference to variables (string) to be used in place of defined values when a theme is created.
   * This should not be used for default themes since they are used to generate the base contracts.
   */
  vars?: Omit<DeepPartial<TypographyV2<string>>, 'vars'>;
};

/**
 * TypographyV2 object without the `vars` property which is used only
 * in application-defined theme configuration
 */
export type DefaultTypographyV2 = Omit<TypographyV2, 'vars'>;
