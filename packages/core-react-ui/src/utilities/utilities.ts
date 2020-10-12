import { ColorIntents, Colors } from '@newrade/core-design-system';

/**
 * Create default color intents.
 */
export function createDefaultColorIntents(colors: Colors): ColorIntents {
  return {
    primary: colors.primary['500'],
    primaryReversed: colors.grey['0-reversed'],
    secondary: colors.accent1['500'],
    secondaryReversed: colors.grey['0-reversed'],
    primaryText: colors.grey['900'],
    primaryTextReversed: colors.grey['0-reversed'],
    secondaryText: colors.grey['800'],
    secondaryTextReversed: colors.grey['0-reversed'],
    tertiaryText: colors.grey['700'],
    tertiaryTextReversed: colors.grey['0-reversed'],
    successText: colors.utilityGreen['900'],
    successAction: colors.utilityGreen['500'],
    successBackground: colors.utilityGreen['100'],
    warningText: colors.utilityYellow['900'],
    warningAction: colors.utilityYellow['500'],
    warningBackground: colors.utilityYellow['100'],
    dangerText: colors.utilityRed['900'],
    dangerAction: colors.utilityRed['500'],
    dangerBackground: colors.utilityRed['100'],
    background0: colors.grey['0'],
    background1: colors.grey['25'],
    background2: colors.grey['50'],
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
