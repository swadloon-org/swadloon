import { ColorIntents, Colors } from '@newrade/core-design-system';
import { defaultColors } from '@newrade/core-react-ui/lib/default-theme';
import { getDefaultColorIntents } from '@newrade/core-react-ui/lib/utilities';

export const colorsColors: Colors['colors'] = {
  current: 'currentColor',
  transparent: {
    h: 0,
    s: 0,
    l: 0,
    a: 0,
  },
  primary: {
    '900': { h: 0, s: 85, l: 28 },
    '700': { h: 1, s: 85, l: 42 },
    '500': { h: 1, s: 85, l: 56 },
    '300': { h: 1, s: 86, l: 78 },
    '100': { h: 1, s: 86, l: 89 },
  },
  //not used
  accent1: {
    '900': { h: 177, s: 39, l: 11 },
    '700': { h: 177, s: 40, l: 18 },
    '500': { h: 177, s: 41, l: 29 },
    '300': { h: 177, s: 41, l: 75 },
    '100': { h: 177, s: 42, l: 93 },
  },
  //not used
  accent2: {
    '900': { h: 190, s: 39, l: 27 },
    '700': { h: 190, s: 39, l: 54 },
    '500': { h: 191, s: 39, l: 72 },
    '300': { h: 191, s: 39, l: 86 },
    '100': { h: 189, s: 39, l: 93 },
  },
  //not used
  accent3: {
    '900': { h: 223, s: 55, l: 19 },
    '700': { h: 228, s: 43, l: 30 },
    '500': { h: 228, s: 42, l: 40 },
    '300': { h: 228, s: 42, l: 55 },
    '100': { h: 227, s: 42, l: 78 },
  },
  //not used
  accent4: {
    '900': { h: 3, s: 52, l: 16 },
    '700': { h: 2, s: 51, l: 33 },
    '500': { h: 2, s: 52, l: 44 },
    '300': { h: 2, s: 52, l: 58 },
    '100': { h: 2, s: 51, l: 79 },
  },
  //not used
  accent5: {
    '900': { h: 36, s: 91, l: 25 },
    '700': { h: 36, s: 91, l: 58 },
    '500': { h: 36, s: 91, l: 67 },
    '300': { h: 36, s: 91, l: 79 },
    '100': { h: 36, s: 90, l: 92 },
  },
  //not used
  accent6: {
    '900': { h: 317, s: 38, l: 15 },
    '700': { h: 317, s: 39, l: 22 },
    '500': { h: 317, s: 40, l: 29 },
    '300': { h: 317, s: 39, l: 47 },
    '100': { h: 316, s: 38, l: 73 },
  },
  //not used
  accent7: {
    '900': { h: 206, s: 27, l: 20 },
    '700': { h: 205, s: 27, l: 41 },
    '500': { h: 205, s: 27, l: 54 },
    '300': { h: 204, s: 27, l: 66 },
    '100': { h: 206, s: 28, l: 89 },
  },
  grey: {
    '1000': { h: 0, s: 0, l: 9 },
    '900': { h: 0, s: 0, l: 16 },
    '800': { h: 0, s: 0, l: 24 },
    '700': { h: 0, s: 0, l: 32 },
    '600': { h: 0, s: 0, l: 39 },
    '500': { h: 0, s: 0, l: 47 },
    '400': { h: 0, s: 0, l: 55 },
    '300': { h: 0, s: 0, l: 62 },
    '200': { h: 0, s: 0, l: 70 },
    '200-reversed': { h: 200, s: 8, l: 78 }, //to do
    '100': { h: 0, s: 0, l: 83 },
    '100-reversed': { h: 200, s: 6, l: 90 }, //to do
    '50': { h: 0, s: 0, l: 89 },
    '25': { h: 0, s: 0, l: 93 },
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
    '900': { h: 113, s: 71, l: 13 },
    '700': { h: 119, s: 82, l: 38 },
    '500': { h: 112, s: 71, l: 53 },
    '300': { h: 119, s: 84, l: 76 },
    '100': { h: 120, s: 84, l: 95 },
  },
  utilityYellow: {
    '900': { h: 47, s: 88, l: 14 },
    '700': { h: 47, s: 80, l: 45 },
    '500': { h: 47, s: 90, l: 54 },
    '300': { h: 47, s: 89, l: 72 },
    '100': { h: 47, s: 83, l: 91 },
  },
  utilityRed: {
    '900': { h: 0, s: 84, l: 12 },
    '700': { h: 0, s: 85, l: 36 },
    '500': { h: 360, s: 84, l: 48 },
    '300': { h: 0, s: 85, l: 74 },
    '100': { h: 0, s: 82, l: 94 },
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
