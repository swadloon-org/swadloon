import { createStyleObject, FontMetrics, getCapHeight, precomputeValues } from '@capsizecss/core';

import { AppError, ERROR_TYPE } from '@newrade/core-common';
import { CapsizeTextStyle, CapsizeTextStyleV2, TextStyle } from '@newrade/core-design-system';

import { pxStringToRem } from '../utilities-iso/utilities';

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
  return createStyleObject(
    //
    // if font size is provided use it to compute capsize values
    //
    fontSize
      ? ({ fontSize: fontSize, lineGap, fontMetrics } as any)
      : { capHeight, lineGap, fontMetrics }
  );
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
  font,
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
  if (!font) {
    throw new AppError({
      name: ERROR_TYPE.LIB_ERROR,
      message: 'a text style requires a font to be set',
    });
  }
  //
  // we take the first font in the list
  //
  const { fontMetrics } = font[0];
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
      font,
      fontFamily,
      fontWeight,
      fontStyle,
      letterSpacing,
      textTransform,
      textDecoration,
    }),
    font: getCSSFonts(font),
    fontFamily: fontFamily ? fontFamily : font.map((font) => font.name).join(','),
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
  font,
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
  if (!font) {
    throw new AppError({
      name: ERROR_TYPE.LIB_ERROR,
      message: 'a text style requires a font to be set',
    });
  }
  const { fontMetrics } = font[0];
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
      font,
      fontFamily,
      fontWeight,
      fontStyle,
      letterSpacing,
      textTransform,
      textDecoration,
    }),

    capsize: precomputeValues({ capHeight: capHeightNumber, lineGap, fontMetrics }),
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
