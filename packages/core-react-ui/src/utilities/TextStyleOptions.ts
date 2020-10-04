import { TextStyle } from '@newrade/core-design-system';
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
  const compatibleCapHeight: number = typeof capHeight === 'number' ? capHeight : capHeight.value;
  const { fontMetrics } = font;

  const capsizePx = capsize({ capHeight: compatibleCapHeight, lineGap, fontMetrics });
  return {
    font,
    fontFamily,
    fontWeight,
    letterSpacing: convertLetterSpacingToEM({
      value: letterSpacing,
      fontSize: capsizePx.fontSize,
    }),
    textTransform,
    capHeight,
    lineGap,
    capsizePx,
    capsizeRem: convertCapsizeValuesToRem({ baseFontSize, capsizePx }),
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
