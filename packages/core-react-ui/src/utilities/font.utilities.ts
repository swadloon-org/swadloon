import { Font, Fonts } from '@newrade/core-design-system';

export function getCSSFont(font?: Font): string {
  return font?.name || '';
}

export function getCSSFonts(fonts: Font[]): string {
  return fonts.map((font) => font.name).join(',');
}

export function getCSSFontsObject(fonts: Fonts): Fonts<string> {
  return {
    sans: getCSSFonts(fonts.sans),
    sansAlternate: getCSSFonts(fonts.sansAlternate),
    serif: getCSSFonts(fonts.serif),
    monospace: getCSSFonts(fonts.monospace),
  };
}
