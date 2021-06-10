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
    '900': { h: 177, s: 100, l: 14 },
    '700': { h: 178, s: 93, l: 22 },
    '500': { h: 178, s: 93, l: 27 },
    '300': { h: 175, s: 40, l: 80 },
    '100': { h: 176, s: 93, l: 97 },
  },
  accent1: {
    '900': { h: 177, s: 39, l: 11 },
    '700': { h: 177, s: 40, l: 18 },
    '500': { h: 177, s: 41, l: 29 },
    '300': { h: 177, s: 41, l: 75 },
    '100': { h: 177, s: 42, l: 93 },
  },
  accent2: {
    '900': { h: 190, s: 39, l: 27 },
    '700': { h: 190, s: 39, l: 54 },
    '500': { h: 191, s: 39, l: 72 },
    '300': { h: 191, s: 39, l: 86 },
    '100': { h: 189, s: 39, l: 93 },
  },
  accent3: {
    '900': { h: 223, s: 55, l: 19 },
    '700': { h: 228, s: 43, l: 30 },
    '500': { h: 228, s: 42, l: 40 },
    '300': { h: 228, s: 42, l: 55 },
    '100': { h: 227, s: 42, l: 78 },
  },
  accent4: {
    '900': { h: 3, s: 52, l: 16 },
    '700': { h: 2, s: 51, l: 33 },
    '500': { h: 2, s: 52, l: 44 },
    '300': { h: 2, s: 52, l: 58 },
    '100': { h: 2, s: 51, l: 79 },
  },
  accent5: {
    '900': { h: 36, s: 91, l: 25 },
    '700': { h: 36, s: 91, l: 58 },
    '500': { h: 36, s: 91, l: 67 },
    '300': { h: 36, s: 91, l: 79 },
    '100': { h: 36, s: 90, l: 92 },
  },
  accent6: {
    '900': { h: 317, s: 38, l: 15 },
    '700': { h: 317, s: 39, l: 22 },
    '500': { h: 317, s: 40, l: 29 },
    '300': { h: 317, s: 39, l: 47 },
    '100': { h: 316, s: 38, l: 73 },
  },
  accent7: {
    '900': { h: 206, s: 27, l: 20 },
    '700': { h: 205, s: 27, l: 41 },
    '500': { h: 205, s: 27, l: 54 },
    '300': { h: 204, s: 27, l: 66 },
    '100': { h: 206, s: 28, l: 89 },
  },
  grey: {
    '1000': { h: 210, s: 3, l: 10 },
    '900': { h: 210, s: 3, l: 19 },
    '800': { h: 210, s: 3, l: 24 },
    '700': { h: 213, s: 5, l: 41 },
    '600': { h: 210, s: 5, l: 48 },
    '500': { h: 210, s: 5, l: 55 },
    '400': { h: 207, s: 8, l: 66 },
    '300': { h: 206, s: 8, l: 72 },
    '200': { h: 210, s: 8, l: 78 },
    '200-reversed': { h: 200, s: 8, l: 78 },
    '100': { h: 210, s: 6, l: 90 },
    '100-reversed': { h: 200, s: 6, l: 90 },
    '50': { h: 210, s: 9, l: 87 },
    '25': { h: 210, s: 9, l: 92 },
    '0-reversed': { h: 0, s: 0, l: 100 },
    '0': { h: 0, s: 0, l: 100 },
  },
  effectTransparentLight: { h: 0, s: 0, l: 0, a: 10 },
  effectTransparentMedium: { h: 0, s: 0, l: 0, a: 10 },
  effectTransparentHeavy: { h: 0, s: 0, l: 0, a: 13 },
  utilityNeutral: {
    '900': { h: 204, s: 100, l: 15 },
    '700': { h: 203, s: 100, l: 29 },
    '500': { h: 203, s: 100, l: 38 },
    '300': { h: 203, s: 70, l: 77 },
    '100': { h: 203, s: 100, l: 96 },
  },
  utilityGreen: {
    '900': { h: 146, s: 96, l: 10 },
    '700': { h: 155, s: 85, l: 26 },
    '500': { h: 155, s: 85, l: 35 },
    '300': { h: 156, s: 45, l: 58 },
    '100': { h: 156, s: 45, l: 94 },
  },
  utilityYellow: {
    '900': { h: 39, s: 100, l: 21 },
    '700': { h: 39, s: 100, l: 45 },
    '500': { h: 39, s: 100, l: 60 },
    '300': { h: 39, s: 100, l: 75 },
    '100': { h: 50, s: 92, l: 95 },
  },
  utilityRed: {
    '900': { h: 12, s: 100, l: 18 },
    '700': { h: 12, s: 92, l: 38 },
    '500': { h: 12, s: 91, l: 43 },
    '300': { h: 12, s: 92, l: 72 },
    '100': { h: 12, s: 100, l: 95 },
  },
};

export const colorIntents: ColorIntents = {
  ...getDefaultColorIntents(colorsColors),
<<<<<<< Updated upstream
  primaryText: colorsColors.grey[1000],
  secondaryText: colorsColors.grey[800],
  tertiaryText: colorsColors.grey[700],
  disabledText: colorsColors.grey[25],
  successText: colorsColors.utilityGreen[900],
  successAction: colorsColors.utilityGreen[500],
  successBackground: colorsColors.utilityGreen[100],
  warningText: colorsColors.utilityYellow[900],
  warningAction: colorsColors.utilityYellow[500],
  warningBackground: colorsColors.utilityYellow[100],
  dangerText: colorsColors.utilityYellow[900],
  dangerAction: colorsColors.utilityYellow[500],
  dangerBackground: colorsColors.utilityYellow[100],
=======
<<<<<<< Updated upstream
>>>>>>> Stashed changes
  backgroundDisabled: colorsColors.grey[25],
=======
  disabledText: colorsColors.grey[25],
>>>>>>> Stashed changes
};

export const colors: Colors = {
  ...defaultColors,
  colors: colorsColors,
  colorIntents: colorIntents,
};
