import { ANGLE_UNIT, ColorGradients, ColorIntents, Colors } from '@newrade/core-design-system';
import {
  generateColorGreyPalette,
  generateColorPalette5,
  getCSSVarForColors,
  getDefaultColorIntents,
} from '../utilities/colors.utilities';

export const defaultColorsColors: Colors['colors'] = {
  current: 'currentColor',
  transparent: {
    h: 0,
    s: 0,
    l: 0,
    a: 0,
  },
  primary: generateColorPalette5({
    color: { h: 222, s: 50, l: 50 },
    light: 90,
    dark: 20,
  }),
  accent1: generateColorPalette5({
    color: { h: 323, s: 80, l: 50 },
    light: 90,
    dark: 10,
  }),
  accent2: generateColorPalette5({
    color: { h: 290, s: 50, l: 50 },
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
  grey: generateColorGreyPalette({
    hue: 222,
  }),
  effectTransparentLight: { h: 0, s: 0, l: 0, a: 10 },
  effectTransparentMedium: { h: 0, s: 0, l: 0, a: 10 },
  effectTransparentHeavy: { h: 0, s: 0, l: 0, a: 13 },
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
};

export const defaultColorIntents: ColorIntents = getDefaultColorIntents(defaultColorsColors);

export const defaultColorVar = getCSSVarForColors({
  colors: defaultColorsColors,
  colorIntents: defaultColorIntents,
});

export const defaultColorsGradients: ColorGradients = {
  gradient1: {
    angle: {
      value: 45,
      unit: ANGLE_UNIT.DEG,
    },
    stops: [
      { color: defaultColorsColors.accent1[100], position: 0 },
      { color: defaultColorsColors.accent1[500], position: 100 },
    ],
  },
  gradient2: {
    angle: {
      value: 45,
      unit: ANGLE_UNIT.DEG,
    },
    stops: [
      { color: defaultColorsColors.accent2[100], position: 0 },
      { color: defaultColorsColors.accent2[500], position: 100 },
    ],
  },
  gradient3: {
    angle: {
      value: 45,
      unit: ANGLE_UNIT.DEG,
    },
    stops: [
      { color: defaultColorsColors.accent3[100], position: 0 },
      { color: defaultColorsColors.accent3[500], position: 100 },
    ],
  },
};

export const defaultColors: Colors = {
  colors: defaultColorsColors,
  colorIntents: defaultColorIntents,
  gradients: defaultColorsGradients,
};
