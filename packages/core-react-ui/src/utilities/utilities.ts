import { ColorIntents, Colors } from '@newrade/core-design-system';

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
