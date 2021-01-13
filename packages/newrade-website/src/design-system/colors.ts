import { ColorIntents, Colors } from '@newrade/core-design-system';
import { createDefaultColorIntents, defaultColors, generateColorPalette5 } from '@newrade/core-react-ui';

export const colorsColors: Colors['colors'] = {
  current: 'currentColor',
  transparent: {
    h: 0,
    s: 0,
    l: 0,
    a: 0,
  },
  primary: {
    '900': { h: 240, s: 79, l: 41 },
    '700': { h: 240, s: 79, l: 57 },
    '500': { h: 240, s: 79, l: 65 },
    '300': { h: 238, s: 78, l: 91 },
    '100': { h: 240, s: 82, l: 96 },
  },
  accent1: generateColorPalette5({
    color: { h: 24, s: 40, l: 74 },
    light: 28,
    dark: 94,
  }),
  // not used
  accent2: generateColorPalette5({
    color: { h: 200, s: 50, l: 50 },
    light: 20,
    dark: 90,
  }),
  // not used
  accent3: generateColorPalette5({
    color: { h: 200, s: 50, l: 50 },
    light: 20,
    dark: 90,
  }),
  grey: {
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
  effectTransparentLight: { h: 222, s: 50, l: 50, a: 100 },
  effectTransparentMedium: { h: 222, s: 50, l: 50, a: 100 },
  effectTransparentHeavy: { h: 222, s: 50, l: 50, a: 100 },
  utilityGreen: generateColorPalette5({
    color: { h: 200, s: 50, l: 50 },
    light: 20,
    dark: 90,
  }),
  utilityYellow: generateColorPalette5({
    color: { h: 200, s: 50, l: 50 },
    light: 20,
    dark: 90,
  }),
  utilityRed: generateColorPalette5({
    color: { h: 200, s: 50, l: 50 },
    light: 20,
    dark: 90,
  }),
};

export const colorIntents: ColorIntents = createDefaultColorIntents(colorsColors);

export const colors: Colors = {
  ...defaultColors,
  colors: colorsColors,
  colorIntents: colorIntents,
};
