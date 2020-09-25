import capsize, { CapsizeStyles } from 'capsize';
import { DesignSystem } from '../design-system';
import { TextStyle } from '../foundations/typography';
import { Colors, ColorIntents } from '../foundations/colors';
import { SizingStep } from '../foundations/sizing';

/**
 * Create a DesignSystem object with sensible defaults.
 */
// export function createDesignSystem({
//   name,
//   variation,
//   colors,
//   colorIntents,
//   sizing,
//   typography,
//   layout,
// }: Partial<DesignSystem> &
//   Pick<DesignSystem, 'name' | 'variation' | 'colors' | 'sizing' | 'typography' | 'layout'>): DesignSystem {
//   return {
//     name,
//     variation,
//     colors,
//     colorIntents: colorIntents ? colorIntents : createDefaultColorIntents(colors),
//     sizing,
//     typography,
//     layout,
//   };
// }

/**
 * Create default color intents.
 */
export function createDefaultColorIntents(colors: Colors): ColorIntents {
  return {
    primary: colors.primary500,
    primaryReversed: colors.greyscale0,
    secondary: colors.primary500,
    secondaryReversed: colors.greyscale0,
    primaryText: colors.greyscale900,
    primaryTextReversed: colors.greyscale0,
    secondaryText: colors.greyscale700,
    secondaryTextReversed: colors.greyscale0,
    tertiaryText: colors.greyscale600,
    tertiaryTextReversed: colors.greyscale0,
    successText: colors.utilityGreen1000,
    successAction: colors.utilityGreen500,
    successBackground: colors.utilityGreen100,
    warningText: colors.utilityYellow1000,
    warningAction: colors.utilityYellow500,
    warningBackground: colors.utilityYellow100,
    dangerText: colors.utilityRed1000,
    dangerAction: colors.utilityRed500,
    dangerBackground: colors.utilityRed100,
    background0: colors.greyscale0,
    background1: colors.greyscale100,
    background2: colors.greyscale200,
  };
}

export function createSizingStep({
  value,
  baseFontSize,
}: Pick<SizingStep, 'value'> & Pick<DesignSystem['sizing'], 'baseFontSize'>): SizingStep {
  return {
    value,
    valuePx: `${value}px`,
    valueRem: `${value / baseFontSize}rem`,
  };
}

/**
 * Create a TextStyle using the Capsize utility.
 *
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

/**
 * Convert a number (in px) into a rem value.
 * @param px value in pixel
 * @param baseUnitPx font-size set on the <html/> element
 */
export function pxToRem({ baseUnitPx, value }: { baseUnitPx: number; value: number }): string {
  return `${value / baseUnitPx}rem`;
}

/**
 * Convert a number (in px) into a em relative value.
 * @param px value in pixel
 * @param fontSize font-size set on the element
 */
export function pxToEm({ fontSize, value }: { fontSize: number; value: number }): string {
  return `${value / fontSize}em`;
}

/**
 * Convert px value (e.g. '15px') into a rem value.
 * @param px value in string px value
 * @param baseUnitPx font-size set on the <html/> element
 */
export function pxStringToRem({ baseFontSize, value }: { baseFontSize: number; value: string }): string {
  if (!value?.length) {
    return '';
  }

  const pxPattern = /(\d+\.?(\d+))/g;
  const match = pxPattern.exec(value);
  if (!(match?.length && match[0]?.length)) {
    return '';
  }
  const conversion = Number(match[0]);
  if (!conversion) {
    return '';
  }

  return `${conversion / baseFontSize}rem`;
}

/**
 * Convert px value (e.g. '15px') into a number value.
 * @param px value in string px value
 */
export function pxStringToNumber({ value }: { value: string }): number | undefined {
  if (!value?.length) {
    return undefined;
  }

  const pxPattern = /(\d+\.?(\d+))/g;
  const match = pxPattern.exec(value);
  if (!(match?.length && match[0]?.length)) {
    return undefined;
  }
  const conversion = Number(match[0]);
  if (conversion === undefined || conversion === NaN || conversion === null) {
    return undefined;
  }

  return conversion;
}
