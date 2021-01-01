import { AppError, ERROR_TYPE } from '@newrade/core-common';
import { TextStyle } from '@newrade/core-design-system';
import capsize, { CapsizeStyles } from 'capsize';
import { TextDecorationProperty, TextTransformProperty } from 'csstype';
import { pxStringToNumber, pxStringToRem } from './utilities';

/**
 * Create a TextStyle using the Capsize utility.
 * @see https://seek-oss.github.io/capsize/
 */
type TextStyleOptions = { baseFontSize: number } & Pick<
  TextStyle,
  'font' | 'fontFamily' | 'fontWeight' | 'letterSpacing' | 'textTransform' | 'capHeight' | 'lineGap'
>;

export function createCSSTextStyle({
  baseFontSize,
  font,
  fontFamily,
  fontWeight,
  letterSpacing,
  textTransform,
  capHeight,
  lineGap,
}: TextStyleOptions): TextStyle<string> {
  const compatibleCapHeight: number = capHeight;
  if (!font) {
    throw new AppError({
      name: ERROR_TYPE.LIB_ERROR,
      message: 'a text style requires a font to be set',
    });
    // throw Error();
  }
  const { fontMetrics } = font[0];

  const capsizePx = capsize({ capHeight: compatibleCapHeight, lineGap, fontMetrics });
  return {
    font,
    fontFamily: fontFamily ? fontFamily : font.map((font) => font.name).join(','),
    fontWeight: fontWeight ? fontWeight : 400,
    letterSpacing: convertLetterSpacingToPercent({ letterSpacing, fontSize: capsizePx.fontSize }),
    textTransform,
    capHeight,
    lineGap,
    capsize: capsizePx,
    // capsizeRem: convertCapsizeValuesToRem({ baseFontSize, capsizePx }),
  };
}

/**
 * Converts capsize styles from px to rem.
 */
export function convertLetterSpacingToPercent({
  letterSpacing,
  fontSize,
}: {
  letterSpacing: number | undefined;
  fontSize: string;
}): string {
  if (letterSpacing === undefined) {
    return `0px`;
  }

  const fontSizeNumber = pxStringToNumber({ value: fontSize });

  if (fontSizeNumber === undefined) {
    return `0px`;
  }
  const percent = (letterSpacing / 100) * fontSizeNumber;
  return `${percent}px`;
}

/**
 * Converts capsize styles from px to rem.
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
 * Converts capsize styles from px to rem.
 */
export function convertLetterSpacingToEM({ value, fontSize }: { value: string; fontSize: string }): string | undefined {
  const exp = /(^\d+(\.\d+)?)/;

  const match = exp.exec(value);
  if (!match) {
    console.warn(`${value}, did not match`);
    return undefined;
  }

  const numbericValue = match[0];
  if (!numbericValue) {
    return undefined;
  }

  const convertedValue = Number(numbericValue);
  if (!convertedValue) {
    return undefined;
  }

  const numericFontSize = pxStringToNumber({ value: fontSize });

  if (!numericFontSize) {
    return undefined;
  }

  return `${convertedValue / 100}em`;
}

/**
 * Return a Treat compatible style object from a theme text style
 */
export function getCSSTextStyles(textStyle: TextStyle<string>) {
  return {
    fontWeight: textStyle.fontWeight,
    textTransform: textStyle.textTransform as TextTransformProperty,
    fontFamily: textStyle.fontFamily,
    fontStyle: textStyle.fontStyle,
    letterSpacing: textStyle.letterSpacing,
    textDecoration: textStyle.textDecoration as TextDecorationProperty<any>,
    ...textStyle.capsize,
  };
}
