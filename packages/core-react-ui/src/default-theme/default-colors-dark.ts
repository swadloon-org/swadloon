import {
  ANGLE_UNIT,
  ColorGradients,
  ColorIntents,
  Colors,
  ColorsColors,
} from '@newrade/core-design-system';

import {
  generateColorGreyPaletteDark,
  generateColorPalette5,
  getCSSVarForColors,
  getDefaultColorIntents,
} from '../utilities/colors.utilities';

import { defaultCodeColors } from './default-code-colors';

export const defaultColorsColorsDark: ColorsColors = {
  current: 'currentColor',
  transparent: {
    h: 0,
    s: 0,
    l: 0,
    a: 0,
  },
  primary: generateColorPalette5({
    color: { h: 222, s: 60, l: 70 },
    light: 90,
    dark: 20,
  }),
  accent1: generateColorPalette5({
    color: { h: 323, s: 60, l: 50 },
    light: 90,
    dark: 10,
  }),
  accent2: generateColorPalette5({
    color: { h: 290, s: 40, l: 50 },
    light: 90,
    dark: 10,
  }),
  accent3: generateColorPalette5({
    color: { h: 0, s: 0, l: 50 },
    light: 90,
    dark: 20,
  }),
  accent4: generateColorPalette5({
    color: { h: 0, s: 0, l: 50 },
    light: 90,
    dark: 20,
  }),
  accent5: generateColorPalette5({
    color: { h: 0, s: 0, l: 50 },
    light: 90,
    dark: 20,
  }),
  accent6: generateColorPalette5({
    color: { h: 0, s: 0, l: 50 },
    light: 90,
    dark: 20,
  }),
  accent7: generateColorPalette5({
    color: { h: 0, s: 0, l: 50 },
    light: 90,
    dark: 20,
  }),
  grey: generateColorGreyPaletteDark({
    hue: 222,
  }),
  effectTransparentLight: { h: 0, s: 0, l: 0, a: 24 },
  effectTransparentMedium: { h: 0, s: 0, l: 0, a: 62 },
  effectTransparentHeavy: { h: 0, s: 0, l: 0, a: 59 },
  utilityNeutral: generateColorPalette5({
    color: { h: 112, s: 0, l: 53 },
    light: 90,
    dark: 5,
  }),
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

  code: defaultCodeColors,
};

export const defaultColorIntentsDark: ColorIntents = {
  ...getDefaultColorIntents(defaultColorsColorsDark),
  isLight: `0`,
};

export const defaultColorVarDark = getCSSVarForColors({
  colors: defaultColorsColorsDark,
  colorIntents: defaultColorIntentsDark,
});

export const defaultColorsGradientsDark: ColorGradients = {
  gradient1: {
    angle: {
      value: 45,
      unit: ANGLE_UNIT.DEG,
    },
    stops: [
      { color: defaultColorsColorsDark.accent1[100], position: 0 },
      { color: defaultColorsColorsDark.accent1[500], position: 100 },
    ],
  },
  gradient2: {
    angle: {
      value: 45,
      unit: ANGLE_UNIT.DEG,
    },
    stops: [
      { color: defaultColorsColorsDark.accent2[100], position: 0 },
      { color: defaultColorsColorsDark.accent2[500], position: 100 },
    ],
  },
  gradient3: {
    angle: {
      value: 45,
      unit: ANGLE_UNIT.DEG,
    },
    stops: [
      { color: defaultColorsColorsDark.accent3[100], position: 0 },
      { color: defaultColorsColorsDark.accent3[500], position: 100 },
    ],
  },
};

export const defaultColorsDark: Colors = {
  colorScheme: 'dark',
  colors: defaultColorsColorsDark,
  colorIntents: defaultColorIntentsDark,
  gradients: defaultColorsGradientsDark,
};
