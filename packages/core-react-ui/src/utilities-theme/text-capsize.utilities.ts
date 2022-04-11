import { createStyleObject, FontMetrics, getCapHeight, precomputeValues } from '@capsizecss/core';
import { CapsizeOptions, ComputedValues } from '@capsizecss/core/dist/declarations/src/types';

import { AppError, ERROR_TYPE } from '@newrade/core-common';
import { CapsizeTextStyle, CapsizeTextStyleV2, TextStyle } from '@newrade/core-design-system';

import { round } from '../utilities-iso';
import { pxStringToNumber, pxStringToRem } from '../utilities-iso/utilities';

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
  options: Partial<CapsizeTextStyle>,
  { lineGapRatio }: { lineGapRatio: number } = { lineGapRatio: 0.5 }
): CapsizeTextStyle {
  if (options.fontSize !== undefined) {
    return {
      fontSize: options.fontSize,
      lineGap: round({
        value: options.fontSize * lineGapRatio,
        precision: 0,
      }),
    };
  }
  if (options.capHeight !== undefined) {
    return {
      capHeight: options.capHeight,
      lineGap: round({
        value: options.capHeight / 2,
        precision: 0,
      }),
    };
  }
  return {
    fontSize: 16,
    lineGap: 16,
  };
}
