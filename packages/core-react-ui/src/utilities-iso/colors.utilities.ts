import { Property } from 'csstype';

/**
 * Create a CSS color string from CSS variables or values
 */
export function getCSSColorVar({
  h,
  s,
  l,
  a,
}: {
  h?: number | string;
  s?: number | string;
  l?: number | string;
  /**
   * Transparency in % (5 => 0.05)
   */
  a?: number | string;
}): Property.Color {
  const sat = s ? (/var/gi.test(s.toString()) ? s : `${s}%`) : '';
  const lum = l ? (/var/gi.test(l.toString()) ? l : `${l}%`) : '';

  const transparency = Number(a);
  const parsedTransparency = isNaN(transparency) ? 1 : transparency;

  return `hsl(${h}, ${sat}, ${lum}, ${a === undefined ? 1 : parsedTransparency / 100})`;
}
