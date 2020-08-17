import capsize, { CapsizeStyles } from 'capsize';
import { DesignSystem } from './design-system';
import { TextStyle } from './typography';
import { Colors, ColorIntents } from './colors';

/**
 * Create a DesignSystem object with sensible defaults.
 */
export function createDesignSystem({
  name,
  variation,
  colors,
  colorIntents,
  sizing,
  typography,
  layout,
}: Partial<DesignSystem> &
  Pick<DesignSystem, 'name' | 'variation' | 'colors' | 'sizing' | 'typography' | 'layout'>): DesignSystem {
  return {
    name,
    variation,
    colors,
    colorIntents: colorIntents ? colorIntents : createDefaultColorIntents(colors),
    sizing,
    typography,
    layout,
  };
}

/**
 * Create default color intents.
 */
export function createDefaultColorIntents(colors: Colors): ColorIntents {
  return {
    primary: colors.primary500,
    primaryReversed: colors.greyscale0Reversed,
    secondary: colors.primary500,
    secondaryReversed: colors.greyscale0Reversed,
    primaryText: colors.greyscale900,
    primaryTextReversed: colors.greyscale0Reversed,
    secondaryText: colors.greyscale700,
    secondaryTextReversed: colors.greyscale0Reversed,
    tertiaryText: colors.greyscale600,
    tertiaryTextReversed: colors.greyscale0Reversed,
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

/**
 * Create a TextStyle using the Capsize utility.
 *
 * @see https://seek-oss.github.io/capsize/
 */
export function createTextStyle({
  baseFontSize,
  font,
  fontFamily,
  fontWeight,
  fontMetrics,
  capHeight,
  lineGap,
}: { baseFontSize: number } & Pick<
  TextStyle,
  'font' | 'fontFamily' | 'fontWeight' | 'fontMetrics' | 'capHeight' | 'lineGap'
>): TextStyle {
  const compatibleCapHeight: number = typeof capHeight === 'number' ? capHeight : capHeight.value;

  const capsizePx = capsize({ capHeight: compatibleCapHeight, lineGap, fontMetrics });
  return {
    font,
    fontFamily,
    fontWeight,
    fontMetrics,
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
 * Convert a number (in px) into a rem value.
 * @param px value in pixel
 * @param baseUnitPx font-size set on the <html/> element
 */
export function pxToRem({ baseUnitPx, value }: { baseUnitPx: number; value: number }): string {
  return `${value / baseUnitPx}rem`;
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
