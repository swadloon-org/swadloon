import { kebab } from 'case';
import { Property } from 'csstype';
import parseToHsl from 'polished/lib/color/parseToHsl';
import parseToRgb from 'polished/lib/color/parseToRgb';
import toColorString from 'polished/lib/color/toColorString';
import { HslaColor } from 'polished/lib/types/color';

import * as DS from '@newrade/core-design-system';
import { CodeColors, Color, COLOR_SCHEME, ColorPalette } from '@newrade/core-design-system';

import { CSSColors, CSSColorsVarNames, CSSColorsVars } from '../design-system';
import { keys } from '../utilities-iso/utilities';

/**
 * for vanilla css
 */
export function getCSSColorsV2(colors: DS.Colors): DS.Colors<string> {
  const cssColors = {
    current: 'currentColor',
    transparent: getCSSColor(colors.colors.transparent),
    primary: getCSSColorPalette({
      palette: colors.colors.primary,
      baseHue: colors.colors.primary.baseHue,
      baseSat: colors.colors.primary.baseSat,
    }),
    accent1: getCSSColorPalette({
      palette: colors.colors.accent1,
      baseHue: colors.colors.accent1.baseHue,
      baseSat: colors.colors.accent1.baseSat,
    }),
    accent2: getCSSColorPalette({
      palette: colors.colors.accent2,
      baseHue: colors.colors.accent2.baseHue,
      baseSat: colors.colors.accent2.baseSat,
    }),
    accent3: getCSSColorPalette({
      palette: colors.colors.accent3,
      baseHue: colors.colors.accent3.baseHue,
      baseSat: colors.colors.accent3.baseSat,
    }),
    accent4: getCSSColorPalette({
      palette: colors.colors.accent4,
      baseHue: colors.colors.accent4.baseHue,
      baseSat: colors.colors.accent4.baseSat,
    }),
    accent5: getCSSColorPalette({
      palette: colors.colors.accent5,
      baseHue: colors.colors.accent5.baseHue,
      baseSat: colors.colors.accent5.baseSat,
    }),
    accent6: getCSSColorPalette({
      palette: colors.colors.accent6,
      baseHue: colors.colors.accent6.baseHue,
      baseSat: colors.colors.accent6.baseSat,
    }),
    accent7: getCSSColorPalette({
      palette: colors.colors.accent7,
      baseHue: colors.colors.accent7.baseHue,
      baseSat: colors.colors.accent7.baseSat,
    }),
    grey: getCSSColorPalette({
      palette: colors.colors.grey,
      baseHue: colors.colors.grey.baseHue,
      baseSat: colors.colors.grey.baseSat,
    }),
    effectTransparentLight: getCSSColor(colors.colors.effectTransparentLight),
    effectTransparentMedium: getCSSColor(colors.colors.effectTransparentMedium),
    effectTransparentHeavy: getCSSColor(colors.colors.effectTransparentHeavy),
    utilityNeutral: getCSSColorPalette({
      palette: colors.colors.utilityNeutral,
      baseHue: colors.colors.utilityNeutral.baseHue,
      baseSat: colors.colors.utilityNeutral.baseSat,
    }),
    utilityGreen: getCSSColorPalette({
      palette: colors.colors.utilityGreen,
      baseHue: colors.colors.utilityGreen.baseHue,
      baseSat: colors.colors.utilityGreen.baseSat,
    }),
    utilityYellow: getCSSColorPalette({
      palette: colors.colors.utilityYellow,
      baseHue: colors.colors.utilityYellow.baseHue,
      baseSat: colors.colors.utilityYellow.baseSat,
    }),
    utilityRed: getCSSColorPalette({
      palette: colors.colors.utilityRed,
      baseHue: colors.colors.utilityRed.baseHue,
      baseSat: colors.colors.utilityRed.baseSat,
    }),
    code: getCodeColors(colors.colors.code),
  };

  return {
    colorScheme: colors.colorScheme,
    colors: cssColors,
    colorIntents: getDefaultCSSVarColorIntents({
      colors: cssColors,
      isLight: colors.colorScheme === COLOR_SCHEME.LIGHT,
    }),
    gradients: getCSSColorGradients(colors.gradients),
  };
}

/**
 * Create a CSS colors from raw color objects
 */
export function getCSSColors(colors: DS.Colors): CSSColors {
  const colorVar = getCSSVarForColors({
    colors: colors.colors,
    colorIntents: colors.colorIntents,
  });
  const colorVarNames = getCSSVarNamesForColors({
    colors: colors.colors,
    colorIntents: colors.colorIntents,
  });

  return {
    colorScheme: colors.colorScheme,
    var: colorVar,
    varNames: colorVarNames,
    colors: {
      current: 'currentColor',
      transparent: getCSSColor(colors.colors.transparent),
      primary: getCSSColorPalette({
        palette: colors.colors.primary,
        baseHue: colorVar.colors.primary.baseHue,
        baseSat: colorVar.colors.primary.baseSat,
      }),
      accent1: getCSSColorPalette({
        palette: colors.colors.accent1,
        baseHue: colorVar.colors.accent1.baseHue,
        baseSat: colorVar.colors.accent1.baseSat,
      }),
      accent2: getCSSColorPalette({
        palette: colors.colors.accent2,
        baseHue: colorVar.colors.accent2.baseHue,
        baseSat: colorVar.colors.accent2.baseSat,
      }),
      accent3: getCSSColorPalette({
        palette: colors.colors.accent3,
        baseHue: colorVar.colors.accent3.baseHue,
        baseSat: colorVar.colors.accent3.baseSat,
      }),
      accent4: getCSSColorPalette({
        palette: colors.colors.accent4,
        baseHue: colorVar.colors.accent4.baseHue,
        baseSat: colorVar.colors.accent4.baseSat,
      }),
      accent5: getCSSColorPalette({
        palette: colors.colors.accent5,
        baseHue: colorVar.colors.accent5.baseHue,
        baseSat: colorVar.colors.accent5.baseSat,
      }),
      accent6: getCSSColorPalette({
        palette: colors.colors.accent6,
        baseHue: colorVar.colors.accent6.baseHue,
        baseSat: colorVar.colors.accent6.baseSat,
      }),
      accent7: getCSSColorPalette({
        palette: colors.colors.accent7,
        baseHue: colorVar.colors.accent7.baseHue,
        baseSat: colorVar.colors.accent7.baseSat,
      }),
      grey: getCSSColorPalette({
        palette: colors.colors.grey,
        baseHue: colorVar.colors.grey.baseHue,
        baseSat: colorVar.colors.grey.baseSat,
      }),
      effectTransparentLight: getCSSColor(colors.colors.effectTransparentLight),
      effectTransparentMedium: getCSSColor(colors.colors.effectTransparentMedium),
      effectTransparentHeavy: getCSSColor(colors.colors.effectTransparentHeavy),
      utilityNeutral: getCSSColorPalette({
        palette: colors.colors.utilityNeutral,
        baseHue: colorVar.colors.utilityNeutral.baseHue,
        baseSat: colorVar.colors.utilityNeutral.baseSat,
      }),
      utilityGreen: getCSSColorPalette({
        palette: colors.colors.utilityGreen,
        baseHue: colorVar.colors.utilityGreen.baseHue,
        baseSat: colorVar.colors.utilityGreen.baseSat,
      }),
      utilityYellow: getCSSColorPalette({
        palette: colors.colors.utilityYellow,
        baseHue: colorVar.colors.utilityYellow.baseHue,
        baseSat: colorVar.colors.utilityYellow.baseSat,
      }),
      utilityRed: getCSSColorPalette({
        palette: colors.colors.utilityRed,
        baseHue: colorVar.colors.utilityRed.baseHue,
        baseSat: colorVar.colors.utilityRed.baseSat,
      }),
      code: getCodeColors(colors.colors.code),
    },
    colorIntents: getDefaultCSSVarColorIntents(colorVar),
    gradients: getCSSColorGradients(colors.gradients),
  };
}

export function generateColorPalette5({
  color: color,
  light,
  dark,
}: {
  color: DS.Color;
  light: number;
  dark: number;
}) {
  if (dark > light) {
    throw new Error('the dark value must be higher than the light, e.g. 90, 10');
  }

  if (light - dark <= 50) {
    throw new Error('the light range must be greater or equal than 50, e.g. 60, 10');
  }

  const step = Math.round((light - dark) / 4);

  return {
    baseHue: color.h,
    baseSat: color.s,
    '900': { ...color, l: Math.max(color.l - 2 * step, 0) },
    '700': { ...color, l: Math.max(color.l - 1 * step, 0) },
    '500': color,
    '300': { ...color, l: Math.min(color.l + 1 * step, 100) },
    '100': { ...color, l: Math.min(color.l + 2 * step, 100) },
  } as DS.ColorPalette<undefined, DS.ColorShades5>;
}

export function generateColorGreyPalette({
  hue,
}: {
  hue: number;
}): DS.ColorPalette<undefined, DS.ColorShadesGrey> {
  return {
    baseHue: hue,
    baseSat: 6,
    1000: { h: hue, s: 6, l: 7 },
    900: { h: hue, s: 4, l: 13 },
    800: { h: hue, s: 4, l: 26 },
    700: { h: hue, s: 5, l: 46 },
    600: { h: hue, s: 5, l: 59 },
    500: { h: hue, s: 5, l: 66 },
    400: { h: hue, s: 6, l: 73 },
    300: { h: hue, s: 6, l: 83 },
    200: { h: hue, s: 6, l: 86 },
    '200-reversed': { h: hue, s: 10, l: 0 },
    100: { h: hue, s: 6, l: 90 },
    '100-reversed': { h: hue, s: 10, l: 0 },
    50: { h: hue, s: 3, l: 93 },
    25: { h: hue, s: 0, l: 97 },
    e4: { h: hue, s: 3, l: 100 },
    e3: { h: hue, s: 3, l: 100 },
    e2: { h: hue, s: 3, l: 100 },
    e1: { h: hue, s: 3, l: 100 },
    e0: { h: hue, s: 3, l: 100 },
    'e4-grey': { h: hue, s: 3, l: 89 },
    'e3-grey': { h: hue, s: 3, l: 92 },
    'e2-grey': { h: hue, s: 3, l: 95 },
    'e1-grey': { h: hue, s: 3, l: 98 },
    'e0-grey': { h: hue, s: 3, l: 100 },
    '0-reversed': { h: hue, s: 10, l: 100 },
    0: { h: hue, s: 0, l: 100 },
  };
}

export function generateColorGreyPaletteDark({
  hue,
}: {
  hue: number;
}): DS.ColorPalette<undefined, DS.ColorShadesGrey> {
  return {
    baseHue: hue,
    baseSat: 6,
    1000: { h: hue, s: 0, l: 100 },
    900: { h: hue, s: 4, l: 93 },
    800: { h: hue, s: 4, l: 85 },
    700: { h: hue, s: 5, l: 78 },
    600: { h: hue, s: 5, l: 63 },
    500: { h: hue, s: 5, l: 55 },
    400: { h: hue, s: 6, l: 47 },
    300: { h: hue, s: 6, l: 33 },
    200: { h: hue, s: 6, l: 27 },
    '200-reversed': { h: hue, s: 10, l: 100 },
    100: { h: hue, s: 6, l: 24 },
    '100-reversed': { h: hue, s: 10, l: 100 },
    50: { h: hue, s: 3, l: 20 },
    25: { h: hue, s: 0, l: 18 },
    e4: { h: hue, s: 3, l: 26 },
    e3: { h: hue, s: 3, l: 20 },
    e2: { h: hue, s: 3, l: 16 },
    e1: { h: hue, s: 3, l: 13 },
    e0: { h: hue, s: 3, l: 11 },
    'e4-grey': { h: hue, s: 3, l: 26 },
    'e3-grey': { h: hue, s: 3, l: 20 },
    'e2-grey': { h: hue, s: 3, l: 16 },
    'e1-grey': { h: hue, s: 3, l: 13 },
    'e0-grey': { h: hue, s: 3, l: 11 },
    '0-reversed': { h: hue, s: 10, l: 100 },
    0: { h: hue, s: 0, l: 7 },
  };
}

export function getCSSColorPalette<ColorShades extends string>({
  palette,
  baseHue,
  baseSat,
}: {
  palette: DS.ColorPalette<undefined, ColorShades>;
  baseHue?: string | number;
  baseSat?: string | number;
}) {
  const shades = keys(palette);
  return shades.reduce((previous, current) => {
    if (current === 'baseHue') {
      // @ts-ignore
      previous[current] = palette[current].toString();
      return previous;
    }
    if (current === 'baseSat') {
      // @ts-ignore
      previous[current] = `${palette[current].toString()}%`;
      return previous;
    }
    if (baseHue !== undefined && baseSat !== undefined) {
      const cssColor = getCSSColorVar({
        ...palette[current],
        h: baseHue,
        s: baseSat,
      });
      // @ts-ignore
      previous[current] = cssColor;
      return previous;
    }

    const cssColor = getCSSColor(palette[current]);
    // @ts-ignore
    previous[current] = cssColor;
    return previous;
  }, {} as ColorPalette<string, ColorShades, string>);
}

export function getCSSColorIntents(intents: DS.ColorIntents) {
  const colors = keys(intents);
  return colors.reduce((previous, current) => {
    const color = intents[current] as Color;
    if (current === 'current') {
      previous[current] = 'currentColor';
      return previous;
    }
    if (current === 'transparent') {
      previous[current] = current;
      return previous;
    }
    if (current === 'isLight') {
      previous[current] = previous[current];
      return previous;
    }
    previous[current] = getCSSColor(color);
    return previous;
  }, {} as DS.ColorIntents<string>);
}

export function getCSSColorGradients(intents: DS.ColorGradients) {
  const gradients = keys(intents);
  return gradients.reduce((previous, current) => {
    const gradient = intents[current] as DS.ColorGradient;
    previous[current] = getCSSLinearGradient(gradient);
    return previous;
  }, {} as DS.ColorGradients<string>);
}

export function getCodeColors(colors: CodeColors) {
  const codeColorNames = keys(colors);
  return codeColorNames.reduce((previous, current) => {
    const color = colors[current];
    previous[current] = getCSSColor(color);
    return previous;
  }, {} as CodeColors<string>);
}

/**
 * Create a CSS color string from css variables
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
  a?: number | string;
}): Property.Color {
  const sat = s ? (/var/gi.test(s.toString()) ? s : `${s}%`) : '';
  const lum = l ? (/var/gi.test(l.toString()) ? l : `${l}%`) : '';

  return `hsl(${h}, ${sat}, ${lum}, ${a === undefined ? 1 : a})`;
}

/**
 * Create a CSS color string from a Color object
 */
export function getCSSColor(
  color:
    | {
        h?: number | string;
        s?: number | string;
        l?: number | string;
        a?: number | string;
      }
    | undefined
): Property.Color {
  if (!color) {
    return '';
  }
  const { h, s, l, a } = color;
  const transparency = Number(a);
  const parsedTransparency = isNaN(transparency) ? 1 : transparency;
  return `hsl(${h}, ${s}%, ${l}%, ${a === undefined ? 1 : parsedTransparency / 100})`;
}

/**
 * Create a hex CSS color string from a Color object
 */
export function getCSSHexColor({ h, s, l, a }: Partial<DS.Color>): Property.Color {
  return toColorString({
    hue: h,
    saturation: s !== undefined ? s / 100 : 1,
    lightness: l !== undefined ? l / 100 : 1,
    alpha: a !== undefined ? a / 100 : 1,
  });
}

/**
 * Create a Color object from a hex color
 */
export function getColorFromHex(colorHex?: string): Color {
  if (!colorHex) {
    return {
      h: 0,
      s: 0,
      l: 0,
      a: 1,
    };
  }
  const parsedColor = parseToHsl(colorHex) as HslaColor;
  return {
    h: Math.round(parsedColor.hue),
    s: Math.round(100 * parsedColor.saturation),
    l: Math.round(100 * parsedColor.lightness),
    a: parsedColor.alpha !== undefined ? Math.round(100 * parsedColor.alpha) : 100,
  };
}

/**
 * Create a rgb color from a Color object
 */
export function getRGBColor(color: Partial<DS.Color>): DS.ColorRGB {
  const rgb = parseToRgb(getCSSHexColor(color));
  return {
    r: rgb.red,
    g: rgb.green,
    b: rgb.blue,
  };
}

/**
 * Create a CSS color string from a Color object
 */
export function getCSSLinearGradient({
  angle,
  stops,
}: DS.ColorGradient): Property.Background<string> {
  return `linear-gradient(${angle.value}${angle.unit}, ${stops
    .map(
      (stop) => `${getCSSColor(stop.color)} ${stop.position !== undefined ? stop.position : '0'}%`
    )
    .join(',')})`;
}

/**
 *  TODO - move to design system
 */

export function lightenColor(color: DS.Color, amount: number): DS.Color {
  return {
    ...color,
    l: color.l + amount,
  };
}

export function darkenColor(color: DS.Color, amount: number): DS.Color {
  return lightenColor(color, -amount);
}

/**
 * Create default color intents.
 */
export function getDefaultColorIntents(colors: DS.Colors['colors']): DS.ColorIntents {
  return {
    accessibilityColor: colors.primary['700'],
    current: colors.current,
    transparent: colors.transparent,

    primary: colors.primary['500'],

    secondary: colors.accent1['500'],

    primaryText: colors.grey['1000'],
    secondaryText: colors.grey['700'],
    tertiaryText: colors.grey['500'],
    disabledText: colors.grey['400'],

    infoText: colors.utilityNeutral['900'],
    infoAction: colors.utilityNeutral['500'],
    infoBackground: colors.utilityNeutral['100'],

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
    backgroundDisabled: colors.grey['100'],

    isLight: `1`,

    elevation0: colors.grey.e0,
    elevation1: colors.grey.e1,
    elevation2: colors.grey.e2,
    elevation3: colors.grey.e3,
    elevation4: colors.grey.e4,
    elevation0Grey: colors.grey['e0-grey'],
    elevation1Grey: colors.grey['e1-grey'],
    elevation2Grey: colors.grey['e2-grey'],
    elevation3Grey: colors.grey['e3-grey'],
    elevation4Grey: colors.grey['e4-grey'],
  };
}

export function getDefaultCSSVarColorIntents({
  colors,
  isLight,
}: Pick<DS.Colors<string>, 'colors'> & { isLight?: boolean }): DS.ColorIntents<string> {
  return {
    accessibilityColor: colors.primary['700'],
    current: colors.current,
    transparent: colors.transparent,

    primary: colors.primary['500'],

    secondary: colors.accent1['500'],

    primaryText: colors.grey['1000'],
    secondaryText: colors.grey['700'],
    tertiaryText: colors.grey['500'],
    disabledText: colors.grey['400'],

    infoText: colors.utilityNeutral['900'],
    infoAction: colors.utilityNeutral['500'],
    infoBackground: colors.utilityNeutral['100'],

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
    backgroundDisabled: colors.grey['100'],

    isLight: isLight ? `1` : `0`,

    elevation0: colors.grey.e0,
    elevation1: colors.grey.e1,
    elevation2: colors.grey.e2,
    elevation3: colors.grey.e3,
    elevation4: colors.grey.e4,
    elevation0Grey: colors.grey['e0-grey'],
    elevation1Grey: colors.grey['e1-grey'],
    elevation2Grey: colors.grey['e2-grey'],
    elevation3Grey: colors.grey['e3-grey'],
    elevation4Grey: colors.grey['e4-grey'],
  };
}

/**
 * Generate CSS variable names from the colors object.
 * @example
 *  ```
 *  { primary: { 500: <COLOR>} } => { primary: { 500: '--primary-500'} }
 *  ```
 */
export function getCSSVarNamesForColors({
  colors,
  colorIntents,
}: {
  colors: DS.Colors['colors'];
  colorIntents: DS.ColorIntents;
}): CSSColorsVarNames {
  const colorsVarNames = getCSSVarNameForColorsColors<DS.Colors['colors']>({
    colors,
    prefix: 'color',
    varBrackets: false,
  });
  const colorIntentsVarNames = getCSSVarNameForColorsColors<DS.Colors['colorIntents']>({
    colors: colorIntents,
    prefix: 'color-i',
    varBrackets: false,
  });

  return {
    colors: colorsVarNames,
    colorIntents: colorIntentsVarNames,
  };
}

export function getCSSVarForColors({
  colors,
  colorIntents,
}: {
  colors: DS.Colors['colors'];
  colorIntents: DS.ColorIntents;
}): CSSColorsVars {
  const colorsVarNames = getCSSVarNameForColorsColors<DS.Colors['colors']>({
    colors,
    prefix: 'color',
    varBrackets: true,
  });
  const colorIntentsVarNames = getCSSVarNameForColorsColors<DS.Colors['colorIntents']>({
    colors: colorIntents,
    prefix: 'color-i',
    varBrackets: true,
  });

  return {
    colors: colorsVarNames,
    colorIntents: colorIntentsVarNames,
  };
}

function getCSSVarNameForColorsColors<T>({
  colors,
  prefix,
  varBrackets,
}: {
  colors: DS.Colors['colors'] | DS.Colors['colorIntents'];
  prefix: string;
  varBrackets: boolean;
}) {
  const colorsVarNames = {} as T extends DS.Colors['colors']
    ? CSSColorsVarNames['colors']
    : CSSColorsVarNames['colorIntents'];

  keys(colors).forEach((current) => {
    const currentColor = current as keyof (DS.Colors['colors'] | DS.Colors['colorIntents']); // 'primary'
    const formattedCurrentColor = kebab(currentColor)
      .replace('primary', 'prim')
      .replace('secondary', 'sec')
      .replace('tertiary', 'ter')
      .replace('utility', 'util')
      .replace('accent', 'acc');
    if (currentColor && currentColor.length) {
      // for colors that have a palette (nested colors)
      if (
        colors[currentColor] &&
        typeof colors[currentColor] === 'object' &&
        !Object.keys(colors[currentColor]).includes('h')
      ) {
        const innerColor = colors[currentColor] as ColorPalette;
        keys(innerColor).forEach((colorName) => {
          const formattedColorName = kebab(colorName);
          // @ts-ignore
          if (!colorsVarNames[current]) {
            // @ts-ignore
            colorsVarNames[current] = {};
          }
          if (varBrackets) {
            const value = `var(--${prefix}-${formattedCurrentColor}-${formattedColorName})`;
            // @ts-ignore
            colorsVarNames[current][colorName] = value;
            return;
          }

          const value = `--${prefix}-${formattedCurrentColor}-${formattedColorName}`;
          // @ts-ignore
          colorsVarNames[current][colorName] = value;
          return;
        });
      }

      // for colors that don't have a nested structure
      if (
        colors[currentColor] &&
        typeof colors[currentColor] === 'object' &&
        Object.keys(colors[currentColor]).includes('h')
      ) {
        if (varBrackets) {
          // @ts-ignore
          colorsVarNames[current] = `var(--${prefix}-${formattedCurrentColor})`;
          return;
        }

        // @ts-ignore
        colorsVarNames[current] = `--${prefix}-${formattedCurrentColor}`;
        return;
      }

      // for colors that are defined as strings (e.g. currentColor)
      if (colors[currentColor] && typeof colors[currentColor] === 'string') {
        const formattedCurrentColor = kebab(currentColor);

        if (varBrackets) {
          // @ts-ignore
          colorsVarNames[current] = `var(--${prefix}-${formattedCurrentColor})`;
          return;
        }

        // @ts-ignore
        colorsVarNames[current] = `--${prefix}-${formattedCurrentColor}`;
        return;
      }

      // for colors that are defined as number (e.g. baseHue: 2)
      if (colors[currentColor] && typeof colors[currentColor] === 'number') {
        if (varBrackets) {
          // @ts-ignore
          colorsVarNames[current] = `var(--${prefix}-${formattedCurrentColor})`;
          return;
        }

        // @ts-ignore
        colorsVarNames[current] = `--${prefix}-${formattedCurrentColor}`;
        return;
      }
    }
  });

  return colorsVarNames;
}
