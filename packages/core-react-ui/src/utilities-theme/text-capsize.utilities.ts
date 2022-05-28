import { createStyleObject, FontMetrics, getCapHeight, precomputeValues } from '@capsizecss/core';
import { CapsizeOptions, ComputedValues } from '@capsizecss/core/dist/declarations/src/types';

import { AppError, ERROR_TYPE } from '@newrade/core-common';
import { CapsizeTextStyle, CapsizeTextStyleV2, TextStyle } from '@newrade/core-design-system';

import { pxStringToNumber, pxStringToRem } from '../utilities-iso/utilities';
import { getScaledValue, ModularScaleOptions, round } from '../utilities-iso/utilities-iso';

import { getCSSFonts } from './font.utilities';
import { createCSSTextStyle } from './text.utilities';

/**
 *
 * Capsize utility functions
 *
 * @see https://seek-oss.github.io/capsize/
 * @see https://github.com/seek-oss/capsize
 *
 */

/**
 * Create a capsize style object (with `fontSize` set or only `capHeight`)
 *
 * @see https://github.com/seek-oss/capsize#createstyleobject
 */
export function getCapsizeStyles({
  capHeight,
  fontSize,
  lineGap,
  fontMetrics,
}: {
  capHeight?: number;
  fontSize?: number;
  lineGap?: number;
  fontMetrics: FontMetrics;
}) {
  const capsizeStyles = createStyleObject(
    //
    // if font size is provided use it to compute capsize values
    //
    fontSize
      ? ({ fontSize: fontSize, lineGap, fontMetrics } as any)
      : { capHeight, lineGap, fontMetrics }
  );

  console.log(fontSize);

  if (fontSize === undefined) {
    return capsizeStyles;
  }

  const roundedFontNumber = fontSize;
  const roundedFontSize = Math.round(100 * roundedFontNumber) / 100;

  return { ...capsizeStyles, fontSize: `${roundedFontSize}px` };
}

/**
 * Create a capsize style object (with `fontSize` set or only `capHeight`)
 *
 * @see https://github.com/seek-oss/capsize#createstyleobject
 */
export function getPrecomputedCapsizeValues(options: CapsizeOptions): ComputedValues {
  const capsizePrecomputedValues = precomputeValues(options);

  if (capsizePrecomputedValues.fontSize === undefined) {
    return capsizePrecomputedValues;
  }

  const roundedFontNumber = pxStringToNumber({ value: capsizePrecomputedValues.fontSize });

  if (roundedFontNumber == undefined) {
    return capsizePrecomputedValues;
  }

  const roundedFontSize = Math.round(100 * roundedFontNumber) / 100;
  return { ...capsizePrecomputedValues, fontSize: `${roundedFontSize}px` };
}

/**
 *
 * Additional types for capsize
 *
 */

export type CapsizeStyles = {
  fontSize: string;
  lineHeight: string;
  '::before': {
    content: string;
    marginBottom: string;
    display: string;
  };
  '::after': {
    content: string;
    marginTop: string;
    display: string;
  };
};

type CapsizeTextStyleOptions = { baseFontSize: number } & TextStyle & CapsizeTextStyle;

/**
 * Convert TextStyle into a CSS compatible Capsize object
 */
export function createCSSCapsizeTextStyle({
  baseFontSize,
  fontFamily,
  fontWeight,
  fontStyle,
  letterSpacing,
  textTransform,
  textDecoration,
  capHeight,
  fontSize,
  lineGap,
}: CapsizeTextStyleOptions): TextStyle<string> & CapsizeTextStyle<string> {
  const compatibleCapHeight: number | undefined = capHeight;
  if (!fontFamily) {
    throw new AppError({
      name: ERROR_TYPE.LIB_ERROR,
      message: 'a text style requires a font to be set',
    });
  }
  //
  // we take the first font in the list
  //
  const { fontMetrics } = fontFamily[0];
  //
  // when fontSize is used instead of capHeight, we get
  // the cap height based on the font size and metrics
  //
  const capHeightNumber = capHeight
    ? capHeight
    : fontSize !== undefined && fontSize > 0
    ? (getCapHeight({ fontSize, fontMetrics }) as number)
    : 16;

  return {
    ...createCSSTextStyle({
      baseFontSize,
      fontFamily,
      fontWeight,
      fontStyle,
      letterSpacing,
      textTransform,
      textDecoration,
    }),
    fontFamily: getCSSFonts(fontFamily),
    fontSize: fontSize?.toString() || '',
    capHeight: capHeightNumber?.toString() || '',
    lineGap: lineGap?.toString() || '',
    capsize: getCapsizeStyles({ fontSize, lineGap, fontMetrics, capHeight: compatibleCapHeight }),
  };
}

/**
 *
 * Convert TextStyle into a CSS compatible Capsize object
 *
 * @version
 *  - v2: uses css vars instead of raw value
 */
export function createCSSCapsizeTextStyleV2({
  baseFontSize,
  fontFamily,
  fontWeight,
  fontStyle,
  letterSpacing,
  textTransform,
  textDecoration,
  capHeight,
  fontSize,
  lineGap,
}: CapsizeTextStyleOptions): TextStyle<string> & CapsizeTextStyleV2<string> {
  const compatibleCapHeight: number | undefined = capHeight;
  if (!fontFamily) {
    throw new AppError({
      name: ERROR_TYPE.LIB_ERROR,
      message: 'a text style requires a font to be set',
    });
  }
  const { fontMetrics } = fontFamily[0];
  //
  // when fontSize is used instead of capHeight, we get
  // the capHeight based on the font size and metrics and assign it
  //
  const capHeightNumber = capHeight
    ? capHeight
    : fontSize !== undefined && fontSize > 0
    ? (getCapHeight({ fontSize, fontMetrics }) as number)
    : 16;

  return {
    ...createCSSTextStyle({
      baseFontSize,
      fontFamily,
      fontWeight,
      fontStyle,
      letterSpacing,
      textTransform,
      textDecoration,
    }),

    capsize: getPrecomputedCapsizeValues({ capHeight: capHeightNumber, lineGap, fontMetrics }),
  };
}

/**
 * Converts capsize styles from px to rem
 */
export function convertCapsizeValuesToRem({
  baseFontSize,
  capsizePx,
}: {
  baseFontSize: number;
  capsizePx: CapsizeStyles;
}): CapsizeStyles {
  return {
    ...capsizePx,
    fontSize: pxStringToRem({ value: capsizePx.fontSize, baseFontSize }),
    lineHeight: pxStringToRem({ value: capsizePx.lineHeight, baseFontSize }),
  };
}

/**
 * Given a fontSize or capHeight, returns a default size for lineGap
 */
export function getCapsizeTextForRatio(
  textStyles: Partial<CapsizeTextStyle>,
  { lineGapRatio }: { lineGapRatio: number } = { lineGapRatio: 0.5 }
): CapsizeTextStyle {
  if (textStyles.fontSize !== undefined) {
    return {
      fontSize: textStyles.fontSize,
      lineGap: round({
        value: textStyles.fontSize * lineGapRatio,
        precision: 0,
      }),
    };
  }
  if (textStyles.capHeight !== undefined) {
    return {
      capHeight: textStyles.capHeight,
      lineGap: round({
        value: textStyles.capHeight / 2,
        precision: 0,
      }),
    };
  }
  return {
    fontSize: 16,
    lineGap: 16,
  };
}

const defaultCapsizeScaleOptions: CapsizeScaleOptions = {
  lineGapRatio: 0.5,
};

type CapsizeScaleOptions = {
  /**
   * Ratio to fontsize to set the line gap
   * @example 0.5 with a fontsize of 16 would mean a linegap of 8
   */
  lineGapRatio: number;
};

const defaultModularScaleOptions: Required<
  Pick<ModularScaleOptions, 'step' | 'ratio' | 'precision'>
> = {
  step: 0,
  ratio: 'goldenSection',
  precision: 0,
};

type TypographicScaledTextOptions = Partial<TextStyle> &
  Partial<CapsizeTextStyle> &
  CapsizeScaleOptions &
  Pick<ModularScaleOptions, 'step' | 'ratio' | 'precision'>;

/**
 * Given a starting fontsize (or capsize) and a power ratio, returns scaled
 * values the choosen base, power and step
 */
export function getTypographicScaledText(options: TypographicScaledTextOptions): CapsizeTextStyle {
  const { fontSize, capHeight, lineGapRatio, ratio, step, precision, ...validatedOptions } = {
    ...defaultModularScaleOptions,
    ...defaultCapsizeScaleOptions,
    ...options,
  };

  if (fontSize !== undefined) {
    const scaledFontSize = getScaledValue({
      base: fontSize,
      ratio,
      step,
      precision,
    });
    return {
      ...validatedOptions,
      fontSize: scaledFontSize,
      lineGap: round({
        value: scaledFontSize * lineGapRatio,
        precision,
      }),
    };
  }

  if (capHeight !== undefined) {
    const scaledCapheight = getScaledValue({
      base: capHeight,
      ratio,
      step,
      precision,
    });

    return {
      ...validatedOptions,
      capHeight: scaledCapheight,
      lineGap: round({
        value: scaledCapheight * lineGapRatio,
        precision,
      }),
    };
  }

  return {
    fontSize: 16,
    lineGap: 16,
  };
}
