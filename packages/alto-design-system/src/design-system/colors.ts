import { ColorIntents, Colors } from '@newrade/core-design-system';
import { defaultColors, defaultColorsColors } from '@newrade/core-react-ui/lib/default-theme';
import { getDefaultColorIntents } from '@newrade/core-react-ui/lib/utilities';

export const colorsColors: Colors['colors'] = {
  ...defaultColorsColors,
  current: 'currentColor',
  transparent: {
    h: 0,
    s: 0,
    l: 0,
    a: 0,
  },
  primary: {
    '900': { h: 240, s: 60, l: 25 },
    '700': { h: 240, s: 60, l: 37 },
    '500': { h: 240, s: 60, l: 49 },
    '300': { h: 240, s: 60, l: 81 },
    '100': { h: 240, s: 60, l: 95 },
  },
  accent1: {
    '900': { h: 300, s: 60, l: 23 },
    '700': { h: 300, s: 60, l: 35 },
    '500': { h: 300, s: 60, l: 49 },
    '300': { h: 300, s: 60, l: 80 },
    '100': { h: 300, s: 60, l: 95 },
  },
  accent2: {
    '900': { h: 279, s: 60, l: 24 },
    '700': { h: 279, s: 60, l: 36 },
    '500': { h: 279, s: 60, l: 48 },
    '300': { h: 279, s: 60, l: 80 },
    '100': { h: 277, s: 62, l: 95 },
  },

  grey: {
    '1000': { h: 240, s: 2, l: 8 },
    '900': { h: 240, s: 2, l: 18 },
    '800': { h: 240, s: 2, l: 27 },
    '700': { h: 240, s: 3, l: 36 },
    '600': { h: 240, s: 3, l: 45 },
    '500': { h: 240, s: 2, l: 54 },
    '400': { h: 240, s: 3, l: 63 },
    '300': { h: 240, s: 3, l: 77 },
    '200': { h: 240, s: 2, l: 82 },
    '200-reversed': { h: 200, s: 8, l: 78 }, // to do
    '100': { h: 240, s: 3, l: 86 },
    '100-reversed': { h: 200, s: 6, l: 90 }, // to do
    '50': { h: 240, s: 2, l: 91 },
    '25': { h: 240, s: 4, l: 95 },
    '0-reversed': { h: 0, s: 0, l: 100 },
    '0': { h: 0, s: 0, l: 100 },
  },
  effectTransparentLight: { h: 0, s: 0, l: 0, a: 10 }, //to do
  effectTransparentMedium: { h: 0, s: 0, l: 0, a: 10 }, //to do
  effectTransparentHeavy: { h: 0, s: 0, l: 0, a: 13 }, //to do
  //not used
  utilityNeutral: {
    '900': { h: 204, s: 100, l: 15 },
    '700': { h: 203, s: 100, l: 29 },
    '500': { h: 203, s: 100, l: 38 },
    '300': { h: 203, s: 70, l: 77 },
    '100': { h: 203, s: 100, l: 96 },
  },
  utilityGreen: {
    '900': { h: 109, s: 52, l: 6 },
    '700': { h: 111, s: 50, l: 33 },
    '500': { h: 112, s: 50, l: 53 },
    '300': { h: 119, s: 50, l: 76 },
    '100': { h: 108, s: 48, l: 94 },
  },
  utilityYellow: {
    '900': { h: 46, s: 89, l: 7 },
    '700': { h: 47, s: 90, l: 34 },
    '500': { h: 47, s: 90, l: 54 },
    '300': { h: 47, s: 90, l: 71 },
    '100': { h: 47, s: 93, l: 94 },
  },
  utilityRed: {
    '900': { h: 0, s: 74, l: 6 },
    '700': { h: 0, s: 75, l: 30 },
    '500': { h: 360, s: 75, l: 48 },
    '300': { h: 0, s: 75, l: 68 },
    '100': { h: 0, s: 76, l: 94 },
  },
};

export const colorIntents: ColorIntents = {
  ...getDefaultColorIntents(colorsColors),
  disabledText: colorsColors.grey[25],
};

export const colors: Colors = {
  ...defaultColors,
  colors: colorsColors,
  colorIntents: colorIntents,
};
