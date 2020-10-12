import { Color } from '@newrade/core-design-system';
import CSSTypes from 'csstype';
import { ColorPalette, ColorShades5, ColorShadesGrey } from '../../../core-design-system/src/primitives/color-palette';

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

export function getCSSColor({ h, s, l, a }: Partial<Color>): CSSTypes.Color {
  return `hsl(${h}deg ${s}% ${l}% / ${a || 100}%)`;
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
