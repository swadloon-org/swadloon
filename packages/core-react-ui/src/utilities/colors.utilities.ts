import {
  Color,
  ColorIntents,
  ColorPalette,
  Colors,
  ColorShades5,
  ColorShadesGrey,
  ColorsVarNames,
  ColorsVars,
} from '@newrade/core-design-system';
import { kebab } from 'case';
import CSSTypes from 'csstype';

export function generateColorPalette5({ color: color, light, dark }: { color: Color; light: number; dark: number }) {
  if (dark < light) {
    throw new Error('the dark value must be higher than the light, e.g. 90, 10');
  }

  if (dark - light <= 50) {
    throw new Error('the light range must be greater or equal than 50, e.g. 60, 10');
  }

  const lightStep = Math.round((dark - light) / 5);

  return {
    '100': { ...color, l: color.l - 2 * lightStep },
    '300': { ...color, l: color.l - 1 * lightStep },
    '500': color,
    '700': { ...color, l: color.l + 1 * lightStep },
    '900': { ...color, l: color.l + 2 * lightStep },
  } as ColorPalette<ColorShades5>;
}

export function generateColorGreyPalette({ hue }: { hue: number }) {
  return {
    '0': { h: hue, s: 10, l: 0 },
    '0-reversed': { h: hue, s: 10, l: 0 },
    '25': { h: hue, s: 10, l: 6 },
    '50': { h: hue, s: 10, l: 9 },
    '100': { h: hue, s: 10, l: 10 },
    '100-reversed': { h: hue, s: 10, l: 0 },
    '200': { h: hue, s: 10, l: 20 },
    '200-reversed': { h: hue, s: 10, l: 0 },
    '300': { h: hue, s: 10, l: 30 },
    '400': { h: hue, s: 10, l: 40 },
    '500': { h: hue, s: 10, l: 50 },
    '600': { h: hue, s: 10, l: 60 },
    '700': { h: hue, s: 10, l: 70 },
    '800': { h: hue, s: 10, l: 80 },
    '900': { h: hue, s: 10, l: 90 },
    '1000': { h: hue, s: 10, l: 95 },
  } as ColorPalette<ColorShadesGrey>;
}

export function getCSSColorPalette<ColorShades extends string>(palette: ColorPalette<ColorShades>) {
  const keys = Object.keys(palette) as ColorShades[];
  return keys.reduce((previous, current) => {
    previous[current] = getCSSColor(palette[current]);
    return previous;
  }, {} as ColorPalette<ColorShades, CSSTypes.Color>);
}

/**
 *
 */
export function getCSSColor({ h, s, l, a }: Partial<Color>): CSSTypes.Color {
  return `hsl(${h}deg ${s}% ${l}% / ${a === undefined ? 100 : a}%)`;
}

export function lightenColor(color: Color, amount: number): Color {
  return {
    ...color,
    l: color.l + amount,
  };
}

export function darkenColor(color: Color, amount: number): Color {
  return lightenColor(color, -amount);
}

/**
 * Create default color intents.
 */
export function createDefaultColorIntents(colors: Colors['colors']): ColorIntents {
  return {
    accessibilityColor: colors.primary['700'],
    current: colors.current,
    transparent: colors.transparent,
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
 * Generate CSS variable names from the colors object.
 * @example `{ primary: { 500: <COLOR>} } => { primary: { 500: '--primary-500'} }`
 */
export function getCSSVarNamesForColors({
  colors,
  colorIntents,
}: {
  colors: Colors['colors'];
  colorIntents: ColorIntents;
}): ColorsVarNames {
  const colorsVarNames: ColorsVarNames = getNameForColors(colors, 'color');
  const colorIntentsVarNames: ColorsVarNames = getNameForColors(colorIntents, 'color-intent');

  return [...colorsVarNames, ...colorIntentsVarNames];
}

export function getCSSVarForColors({
  colors,
  colorIntents,
}: {
  colors: Colors['colors'];
  colorIntents: ColorIntents;
}): ColorsVars {
  return getCSSVarNamesForColors({
    colors,
    colorIntents,
  }).map((cssVar) => `var(${cssVar})`);
}

function getNameForColors(colors: Colors['colors'] | Colors['colorIntents'], prefix: string) {
  const colorsVarNames: ColorsVarNames = [];

  Object.keys(colors).forEach((current) => {
    const currentColor = current as keyof (Colors['colors'] | Colors['colorIntents']); // 'primary'
    if (currentColor && currentColor.length) {
      // for colors that have a palette (nested colors)
      if (
        colors[currentColor] &&
        typeof colors[currentColor] === 'object' &&
        !Object.keys(colors[currentColor]).includes('h')
      ) {
        Object.keys(colors[currentColor]).map((colorName) => {
          const formattedCurrentColor = kebab(currentColor);
          const formattedColorName = kebab(colorName);
          colorsVarNames.push(`--${prefix}-${formattedCurrentColor}-${formattedColorName}`);
        });
      }

      // for colors that don't have a nested structure
      if (
        colors[currentColor] &&
        typeof colors[currentColor] === 'object' &&
        Object.keys(colors[currentColor]).includes('h')
      ) {
        const formattedCurrentColor = kebab(currentColor);
        const formattedColorName = kebab(currentColor);
        colorsVarNames.push(`--${prefix}-${formattedCurrentColor}`);
      }
    }
  });

  return colorsVarNames;
}
