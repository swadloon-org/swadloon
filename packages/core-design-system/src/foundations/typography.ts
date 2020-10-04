import { Font } from './font';
import { VIEWPORT } from './layout';
import { TextStyle, TEXT_TRANSFORM } from './text';

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
  h1 = 'h1',
  h2 = 'h2',
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
export enum PARAGRAPH {
  large = 'large',
  medium = 'medium',
  small = 'small',
  xSmall = 'xSmall',
}

/**
 * The label sizes.
 */
export enum LABEL {
  mediumBoldUppercase = 'mediumBoldUppercase',
  mediumUppercase = 'mediumUppercase',
  mediumBold = 'mediumBold',
  mediumRegular = 'mediumRegular',
  smallBoldUppercase = 'smallBoldUppercase',
  smallUppercase = 'smallUppercase',
  smallBold = 'smallBold',
  smallRegular = 'smallRegular',
  xSmallBoldUppercase = 'xSmallBoldUppercase',
  xSmallUppercase = 'xSmallUppercase',
  xSmallBold = 'xSmallBold',
  xSmallRegular = 'xSmallRegular',
}

/**
 * Available fonts in the design system.
 */
export type Fonts = { [key in keyof typeof TYPOGRAPHIC_STYLE]?: Font };

/**
 * TODO
 */
export type Titles<FontWeightType = number, LetterSpacingType = number, TextTransformType = TEXT_TRANSFORM> = {
  [key in keyof typeof TITLE]: {
    [key in keyof typeof TYPOGRAPHIC_STYLE]?: TextStyle<FontWeightType, LetterSpacingType, TextTransformType>;
  };
};

/**
 * TODO
 */
export type Headings<FontWeightType = number, LetterSpacingType = number, TextTransformType = TEXT_TRANSFORM> = {
  [key in keyof typeof HEADING]: {
    [key in keyof typeof TYPOGRAPHIC_STYLE]?: TextStyle<FontWeightType, LetterSpacingType, TextTransformType>;
  };
};

/**
 * TODO
 */
export type Paragraphs<FontWeightType = number, LetterSpacingType = number, TextTransformType = TEXT_TRANSFORM> = {
  [key in keyof typeof PARAGRAPH]: {
    [key in keyof typeof TYPOGRAPHIC_STYLE]?: TextStyle<FontWeightType, LetterSpacingType, TextTransformType>;
  };
};

/**
 * TODO
 */
export type Labels<FontWeightType = number, LetterSpacingType = number, TextTransformType = TEXT_TRANSFORM> = {
  [key in keyof typeof LABEL]: {
    [key in keyof typeof TYPOGRAPHIC_STYLE]?: TextStyle<FontWeightType, LetterSpacingType, TextTransformType>;
  };
};

export interface Typography<FontWeightType = number, LetterSpacingType = number, TextTransformType = TEXT_TRANSFORM> {
  /**
   * Available fonts in the design system.
   */
  fonts: Fonts;
  /**
   *
   */
  titles: { [key in keyof typeof VIEWPORT]: Titles<FontWeightType, LetterSpacingType, TextTransformType> };
  /**
   * TODO
   */
  headings: { [key in keyof typeof VIEWPORT]: Headings<FontWeightType, LetterSpacingType, TextTransformType> };
  /**
   * TODO
   */
  paragraphs: { [key in keyof typeof VIEWPORT]: Paragraphs<FontWeightType, LetterSpacingType, TextTransformType> };
  /**
   * TODO
   */
  labels: { [key in keyof typeof VIEWPORT]: Labels<FontWeightType, LetterSpacingType, TextTransformType> };
}
