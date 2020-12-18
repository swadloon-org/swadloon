/**
 * Wrapper for Objects.keys
 */
export function keys<T extends object>(object: T) {
  return Object.keys(object) as (keyof T)[];
}

/**
 * Convert a number into a px string.
 * @param px value in pixel
 */
export function px({ value }: { value: number }): string {
  return `${value}px`;
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
