import { TextStyle } from '@newrade/core-design-system';
import { AppError, ERROR_TYPE } from '@newrade/core-utils';
import capsize, { CapsizeStyles } from 'capsize';
import { pxStringToNumber, pxStringToRem } from './utilities';

/**
 * Create a TextStyle using the Capsize utility.
 * @see https://seek-oss.github.io/capsize/
 */
type TextStyleOptions = { baseFontSize: number } & Pick<
  TextStyle,
  'font' | 'fontFamily' | 'fontWeight' | 'letterSpacing' | 'textTransform' | 'capHeight' | 'lineGap'
>;

export function createTextStyle({
  baseFontSize,
  font,
  fontFamily,
  fontWeight,
  letterSpacing,
  textTransform,
  capHeight,
  lineGap,
}: TextStyleOptions): TextStyle {
  const compatibleCapHeight: number = capHeight;
  if (!font) {
    throw new AppError({
      name: ERROR_TYPE.LIB_ERROR,
      message: 'a text style requires a font to be set',
    });
  }
  const { fontMetrics } = font;

  const capsizePx = capsize({ capHeight: compatibleCapHeight, lineGap, fontMetrics });
  return {
    font,
    fontFamily,
    fontWeight,
    // letterSpacing: convertLetterSpacingToEM({
    //   value: letterSpacing as any, // todo convert to %
    //   fontSize: capsizePx.fontSize,
    // }),
    textTransform,
    capHeight,
    lineGap,
    // capsizePx,
    // capsizeRem: convertCapsizeValuesToRem({ baseFontSize, capsizePx }),
  };
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
