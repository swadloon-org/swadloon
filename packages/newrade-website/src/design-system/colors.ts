import { ColorIntents, Colors } from '@newrade/core-design-system';
import { defaultColors } from '@newrade/core-react-ui/lib/design-system';
import { getDefaultColorIntents, generateColorPalette5 } from '@newrade/core-react-ui/lib/utilities';

export const colorsColors: Colors['colors'] = {
  current: 'currentColor',
  transparent: {
    h: 0,
    s: 0,
    l: 0,
    a: 0,
  },
  primary: {
    baseHue: 240,
    baseSat: 79,
    '900': { h: 240, s: 79, l: 41 },
    '700': { h: 240, s: 79, l: 57 },
    '500': { h: 240, s: 79, l: 65 },
    '300': { h: 238, s: 78, l: 91 },
    '100': { h: 240, s: 82, l: 96 },
  },
  accent1: generateColorPalette5({
    color: { h: 24, s: 40, l: 74 },
    light: 94,
    dark: 28,
  }),
  // not used
  accent2: generateColorPalette5({
    color: { h: 200, s: 50, l: 50 },
    light: 90,
    dark: 20,
  }),
  // not used
  accent3: generateColorPalette5({
    color: { h: 200, s: 50, l: 50 },
    light: 90,
    dark: 20,
  }),
  grey: {
    baseHue: 210,
    baseSat: 6,
    '1000': { h: 210, s: 6, l: 7 },
    '900': { h: 200, s: 4, l: 13 },
    '800': { h: 210, s: 4, l: 26 },
    '700': { h: 207, s: 5, l: 39 },
    '600': { h: 207, s: 5, l: 59 },
    '500': { h: 207, s: 5, l: 66 },
    '400': { h: 210, s: 6, l: 73 },
    '300': { h: 204, s: 6, l: 83 },
    '200': { h: 210, s: 6, l: 86 },
    '200-reversed': { h: 200, s: 6, l: 90 },
    '100': { h: 200, s: 6, l: 90 },
    '100-reversed': { h: 200, s: 6, l: 90 },
    '50': { h: 180, s: 3, l: 93 },
    '25': { h: 0, s: 0, l: 97 },
    '0-reversed': { h: 0, s: 0, l: 100 },
    '0': { h: 0, s: 0, l: 100 },
  },
  effectTransparentLight: { h: 0, s: 0, l: 0, a: 10 },
  effectTransparentMedium: { h: 0, s: 0, l: 0, a: 10 },
  effectTransparentHeavy: { h: 0, s: 0, l: 0, a: 13 },
  utilityGreen: generateColorPalette5({
    color: { h: 112, s: 71, l: 53 },
    light: 90,
    dark: 5,
  }),
  utilityYellow: generateColorPalette5({
    color: { h: 47, s: 90, l: 54 },
    light: 90,
    dark: 5,
  }),
  utilityRed: generateColorPalette5({
    color: { h: 360, s: 84, l: 48 },
    light: 90,
    dark: 5,
  }),
};

export const colorIntents: ColorIntents = getDefaultColorIntents(colorsColors);

export const colors: Colors = {
  ...defaultColors,
  colors: colorsColors,
  colorIntents: colorIntents,
};
