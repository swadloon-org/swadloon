import { Property } from 'csstype';
import parseToHsl from 'polished/lib/color/parseToHsl';
import parseToRgb from 'polished/lib/color/parseToRgb';
import toColorString from 'polished/lib/color/toColorString';
import { HslaColor, RgbaColor } from 'polished/lib/types/color';

import * as DS from '@newrade/core-design-system';
import {
  CodeColors,
  Color,
  COLOR_FORMAT,
  COLOR_SCHEME,
  ColorPalette,
  ColorType,
} from '@newrade/core-design-system';

import { CSSColor, CSSColors } from '../design-system/design-system';
import { keys } from '../utilities-iso/utilities-iso';

type CSSColorsOptions = {
  format: COLOR_FORMAT;
};

const defaultCSSColorsOptions: CSSColorsOptions = {
  format: COLOR_FORMAT.HSL,
};

/**
 * for vanilla css
 */
export function getCSSColorsV2(
  colors: DS.Colors,
  options?: Partial<CSSColorsOptions>
): DS.Colors<string> {
  const validatedOptions = { ...defaultCSSColorsOptions, ...options };

  const cssColors = {
    current: 'currentColor',
    transparent: getCSSColor(colors.colors.transparent, validatedOptions),
    primary: getCSSColorPalette(
      {
        palette: colors.colors.primary,
        baseHue: colors.colors.primary.baseHue,
        baseSat: colors.colors.primary.baseSat,
      },
      validatedOptions
    ),
    accent1: getCSSColorPalette(
      {
        palette: colors.colors.accent1,
        baseHue: colors.colors.accent1.baseHue,
        baseSat: colors.colors.accent1.baseSat,
      },
      validatedOptions
    ),
    accent2: getCSSColorPalette(
      {
        palette: colors.colors.accent2,
        baseHue: colors.colors.accent2.baseHue,
        baseSat: colors.colors.accent2.baseSat,
      },
      validatedOptions
    ),
    accent3: getCSSColorPalette(
      {
        palette: colors.colors.accent3,
        baseHue: colors.colors.accent3.baseHue,
        baseSat: colors.colors.accent3.baseSat,
      },
      validatedOptions
    ),
    accent4: getCSSColorPalette(
      {
        palette: colors.colors.accent4,
        baseHue: colors.colors.accent4.baseHue,
        baseSat: colors.colors.accent4.baseSat,
      },
      validatedOptions
    ),
    accent5: getCSSColorPalette(
      {
        palette: colors.colors.accent5,
        baseHue: colors.colors.accent5.baseHue,
        baseSat: colors.colors.accent5.baseSat,
      },
      validatedOptions
    ),
    accent6: getCSSColorPalette(
      {
        palette: colors.colors.accent6,
        baseHue: colors.colors.accent6.baseHue,
        baseSat: colors.colors.accent6.baseSat,
      },
      validatedOptions
    ),
    accent7: getCSSColorPalette(
      {
        palette: colors.colors.accent7,
        baseHue: colors.colors.accent7.baseHue,
        baseSat: colors.colors.accent7.baseSat,
      },
      validatedOptions
    ),
    grey: getCSSColorPalette(
      {
        palette: colors.colors.grey,
        baseHue: colors.colors.grey.baseHue,
        baseSat: colors.colors.grey.baseSat,
      },
      validatedOptions
    ),
    effectTransparentLight: getCSSColor(colors.colors.effectTransparentLight, validatedOptions),
    effectTransparentMedium: getCSSColor(colors.colors.effectTransparentMedium, validatedOptions),
    effectTransparentHeavy: getCSSColor(colors.colors.effectTransparentHeavy, validatedOptions),
    utilityNeutral: getCSSColorPalette(
      {
        palette: colors.colors.utilityNeutral,
        baseHue: colors.colors.utilityNeutral.baseHue,
        baseSat: colors.colors.utilityNeutral.baseSat,
      },
      validatedOptions
    ),
    utilityGreen: getCSSColorPalette(
      {
        palette: colors.colors.utilityGreen,
        baseHue: colors.colors.utilityGreen.baseHue,
        baseSat: colors.colors.utilityGreen.baseSat,
      },
      validatedOptions
    ),
    utilityYellow: getCSSColorPalette(
      {
        palette: colors.colors.utilityYellow,
        baseHue: colors.colors.utilityYellow.baseHue,
        baseSat: colors.colors.utilityYellow.baseSat,
      },
      validatedOptions
    ),
    utilityRed: getCSSColorPalette(
      {
        palette: colors.colors.utilityRed,
        baseHue: colors.colors.utilityRed.baseHue,
        baseSat: colors.colors.utilityRed.baseSat,
      },
      validatedOptions
    ),
    code: getCodeColors(colors.colors.code, validatedOptions),
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

export function getCSSColorPalette<ColorShades extends string>(
  {
    palette,
    baseHue,
    baseSat,
  }: {
    palette: DS.ColorPalette<undefined, ColorShades>;
    baseHue?: string | number;
    baseSat?: string | number;
  },
  options?: CSSColorsOptions
) {
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
      const cssColor = getCSSColor(
        {
          ...palette[current],
          h: baseHue,
          s: baseSat,
        },
        options
      );
      // @ts-ignore
      previous[current] = cssColor;
      return previous;
    }

    const cssColor = getCSSColor(palette[current], options);
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

export function getCodeColors(colors: CodeColors, options?: CSSColorsOptions) {
  const codeColorNames = keys(colors);
  return codeColorNames.reduce((previous, current) => {
    const color = colors[current];
    previous[current] = getCSSColor(color, options);
    return previous;
  }, {} as CodeColors<string>);
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
    | undefined,
  options?: CSSColorsOptions
): ColorType<string> {
  if (!color) {
    return '';
  }

  if (!options) {
    return getCSSHSLColor(color);
  }

  if (!options.format) {
    return getCSSHSLColor(color);
  }

  switch (options.format) {
    case COLOR_FORMAT.RGBA: {
      return getCSSRGBColor(color);
    }
    case COLOR_FORMAT.HEX: {
      return getCSSHexColor(color);
    }
    default:
    case COLOR_FORMAT.HSL: {
      return getCSSHSLColor(color);
    }
  }
}

/**
 * Create a CSS color string from a Color object
 *
 * Supports string (css variables) for
 */
export function getCSSHSLColor(color?: CSSColor): ColorType<string> {
  if (!color) {
    return '';
  }
  const { hueStr, hueNumber, satStr, satNumber, lightStr, lightNumber, transStr, transNumber } =
    getParsedColor(color);

  const hsla = [
    `${hueStr ? hueStr : hueNumber}`,
    `${satStr ? satStr : satNumber + '%'}`,
    `${lightStr ? lightStr : lightNumber + '%'}`,
    `${transStr ? transStr : transNumber !== undefined ? transNumber / 100 : 1}`,
  ];

  return `hsl(${hsla.join(', ')})`;
}

/**
 * Create a hex CSS color string from a Color object
 */
export function getCSSHexColor(color: CSSColor): ColorType<string> {
  const { hueNumber, satNumber, lightNumber, transNumber } = getParsedColor(color);

  const hex = toColorString({
    hue: hueNumber !== undefined ? hueNumber : 0,
    saturation: satNumber !== undefined ? satNumber / 100 : 1,
    lightness: lightNumber !== undefined ? lightNumber / 100 : 1,
    alpha: transNumber !== undefined ? transNumber / 100 : 1,
  });

  // some program have trouble with short HEX code for colors...
  if (/#FFF/i.test(hex)) {
    return '#FFFFFF';
  }

  return hex;
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
 * Create a rgb color from a Color object
 */
export function getCSSRGBColor(color: CSSColor): DS.ColorType<string> {
  const rgb = parseToRgb(getCSSHexColor(color)) as RgbaColor;

  // background: toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 }),
  return toColorString({
    red: rgb.red,
    green: rgb.green,
    blue: rgb.blue,
    alpha: rgb.alpha !== undefined ? rgb.alpha : 1,
  });
}

/**
 * Intelligently parse raw colors and handle scenario where CSS variables are used
 */
function getParsedColor(color: CSSColor) {
  const { h, s, l, a } = color;

  const hueStr = typeof h === 'string' ? h : undefined;
  const hueNumberOrNaN = typeof h === 'number' ? Number(h) : undefined;
  const hueNumber = hueStr
    ? undefined
    : hueNumberOrNaN !== undefined && !isNaN(hueNumberOrNaN)
    ? hueNumberOrNaN
    : 0;

  const satStr = typeof s === 'string' ? s : undefined;
  const satNumberOrNaN = typeof s === 'number' ? Number(s) : undefined;
  const satNumber = satStr
    ? undefined
    : satNumberOrNaN !== undefined && !isNaN(satNumberOrNaN)
    ? satNumberOrNaN
    : 0;

  const lightStr = typeof l === 'string' ? l : undefined;
  const lightNumberOrNaN = typeof l === 'number' ? Number(l) : undefined;
  const lightNumber = lightStr
    ? undefined
    : lightNumberOrNaN !== undefined && !isNaN(lightNumberOrNaN)
    ? lightNumberOrNaN
    : 0;

  const transStr = typeof a === 'string' ? a : undefined;
  const transNumberOrNaN = typeof a === 'number' ? Number(a) : undefined;
  const transNumber = transStr
    ? undefined
    : transNumberOrNaN !== undefined && !isNaN(transNumberOrNaN)
    ? transNumberOrNaN
    : 100;

  return { hueStr, hueNumber, satStr, satNumber, lightStr, lightNumber, transStr, transNumber };
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
    disabled: colors.grey['100'],

    primaryText: colors.grey['1000'],
    secondaryText: colors.grey['700'],
    tertiaryText: colors.grey['500'],
    disabledText: colors.grey['400'],

    infoText: colors.utilityNeutral['900'],
    infoAction: colors.utilityNeutral['500'],
    infoBackground: colors.utilityNeutral['100'],

    successText: colors.utilityGreen['500'],
    successAction: colors.utilityGreen['500'],
    successBackground: colors.utilityGreen['100'],

    warningText: colors.utilityYellow['900'],
    warningAction: colors.utilityYellow['500'],
    warningBackground: colors.utilityYellow['100'],

    dangerText: colors.utilityRed['500'],
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
    disabled: colors.grey['500'],
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
