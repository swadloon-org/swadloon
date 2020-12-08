import { Font } from './font';
import { VIEWPORT } from './layout';
import { TextDecoration, TextStyle, TEXT_TRANSFORM } from './text';

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
export type Fonts = { [key in keyof typeof TYPOGRAPHIC_STYLE]?: Font } & {
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

type PartialTextStyle<FontWeightType, LetterSpacingType, TextTransformType, TextDecorationType> = Omit<
  TextStyle<FontWeightType, LetterSpacingType, TextTransformType, TextDecorationType>,
  'capHeight' | 'lineGap'
>;

/**
 * TODO
 */
export type Titles<
  FontWeightType = number,
  LetterSpacingType = number,
  TextTransformType = TEXT_TRANSFORM,
  TextDecorationType = TextDecoration
> = {
  [key in keyof typeof TITLE]: TextStyle<FontWeightType, LetterSpacingType, TextTransformType, TextDecorationType>;
};

/**
 * TODO
 */
export type Headings<
  FontWeightType = number,
  LetterSpacingType = number,
  TextTransformType = TEXT_TRANSFORM,
  TextDecorationType = TextDecoration
> = {
  [key in keyof typeof HEADING]: TextStyle<FontWeightType, LetterSpacingType, TextTransformType, TextDecorationType>;
};

/**
 * TODO
 */
export type Paragraphs<
  FontWeightType = number,
  LetterSpacingType = number,
  TextTransformType = TEXT_TRANSFORM,
  TextDecorationType = TextDecoration
> = {
  [key in keyof typeof PARAGRAPH_SIZE]: TextStyle<
    FontWeightType,
    LetterSpacingType,
    TextTransformType,
    TextDecorationType
  >;
};

/**
 * TODO
 */
export type Labels<
  FontWeightType = number,
  LetterSpacingType = number,
  TextTransformType = TEXT_TRANSFORM,
  TextDecorationType = TextDecoration
> = {
  [key in keyof typeof LABEL_SIZE]: TextStyle<FontWeightType, LetterSpacingType, TextTransformType, TextDecorationType>;
};

export interface Typography<
  FontWeightType = number,
  LetterSpacingType = number,
  TextTransformType = TEXT_TRANSFORM,
  TextDecorationType = TextDecoration
> {
  /**
   * Available fonts in the design system.
   */
  fonts: Fonts;
  /**
   *
   */
  titles: {
    [key in keyof typeof VIEWPORT]: Titles<FontWeightType, LetterSpacingType, TextTransformType, TextDecorationType>;
  } &
    PartialTextStyle<FontWeightType, LetterSpacingType, TextTransformType, TextDecorationType>;
  /**
   * TODO
   */
  headings: {
    [key in keyof typeof VIEWPORT]: Headings<FontWeightType, LetterSpacingType, TextTransformType, TextDecorationType>;
  } &
    PartialTextStyle<FontWeightType, LetterSpacingType, TextTransformType, TextDecorationType>;
  /**
   * TODO
   */
  paragraphs: {
    [key in keyof typeof VIEWPORT]: Paragraphs<
      FontWeightType,
      LetterSpacingType,
      TextTransformType,
      TextDecorationType
    >;
  } &
    PartialTextStyle<FontWeightType, LetterSpacingType, TextTransformType, TextDecorationType> & {
      styles: {
        [TEXT_STYLE.bold]: PartialTextStyle<FontWeightType, LetterSpacingType, TextTransformType, TextDecorationType>;
        [TEXT_STYLE.italic]: PartialTextStyle<FontWeightType, LetterSpacingType, TextTransformType, TextDecorationType>;
      };
    };
  /**
   * TODO
   */
  labels: {
    [key in keyof typeof VIEWPORT]: Labels<FontWeightType, LetterSpacingType, TextTransformType, TextDecorationType>;
  } &
    PartialTextStyle<FontWeightType, LetterSpacingType, TextTransformType, TextDecorationType> & {
      styles: {
        [TEXT_STYLE.bold]: PartialTextStyle<FontWeightType, LetterSpacingType, TextTransformType, TextDecorationType>;
        [TEXT_STYLE.uppercase]: PartialTextStyle<
          FontWeightType,
          LetterSpacingType,
          TextTransformType,
          TextDecorationType
        >;
        [TEXT_STYLE.boldUppercase]: PartialTextStyle<
          FontWeightType,
          LetterSpacingType,
          TextTransformType,
          TextDecorationType
        >;
      };
    };
}
