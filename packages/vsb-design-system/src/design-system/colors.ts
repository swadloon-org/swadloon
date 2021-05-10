import { ColorIntents, Colors } from '@newrade/core-design-system';
import {
  getDefaultColorIntents,
  generateColorPalette5,
} from '@newrade/core-react-ui/lib/utilities';
import { defaultColors } from '@newrade/core-react-ui/lib/default-theme';

export const colorsColors: Colors['colors'] = {
  current: 'currentColor',
  transparent: {
    h: 0,
    s: 0,
    l: 0,
    a: 0,
  },
  primary: {
    '900': { h: 120, s: 13, l: 19 },
    '700': { h: 122, s: 10, l: 38 },
    '500': { h: 122, s: 12, l: 42 },
    '300': { h: 122, s: 19, l: 64 },
    '100': { h: 123, s: 26, l: 84 },
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
    '1000': { h: 210, s: 6, l: 7 },
    '900': { h: 200, s: 4, l: 13 },
    '800': { h: 210, s: 4, l: 26 },
    '700': { h: 207, s: 5, l: 45 },
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

export const colorIntents: ColorIntents = {
  ...getDefaultColorIntents(colorsColors),
  backgroundDisabled: colorsColors.grey[25],
};

export const colors: Colors = {
  ...defaultColors,
  colors: colorsColors,
  colorIntents: colorIntents,
};
