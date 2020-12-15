import {
  ANGLE_UNIT,
  ColorGradients,
  ColorIntents,
  Colors,
  ColorsVarNames,
  ColorsVars,
} from '@newrade/core-design-system';
import {
  createDefaultColorIntents,
  generateColorGreyPalette,
  generateColorPalette5,
  getCSSVarForColors,
  getCSSVarNamesForColors,
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
    light: 20,
    dark: 90,
  }),
  accent1: generateColorPalette5({
    color: { h: 200, s: 50, l: 50 },
    light: 20,
    dark: 90,
  }),
  accent2: generateColorPalette5({
    color: { h: 200, s: 50, l: 50 },
    light: 20,
    dark: 90,
  }),
  accent3: generateColorPalette5({
    color: { h: 200, s: 50, l: 50 },
    light: 20,
    dark: 90,
  }),
  grey: generateColorGreyPalette({
    hue: 10,
  }),
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

export const defaultColorIntents: ColorIntents = createDefaultColorIntents(defaultColorsColors);

export const defaultColorsVarNames: ColorsVarNames = getCSSVarNamesForColors({
  colors: defaultColorsColors,
  colorIntents: defaultColorIntents,
});

export const defaultColorsVar: ColorsVars = getCSSVarForColors({
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
  varNames: defaultColorsVarNames,
  var: defaultColorsVar,
  colors: defaultColorsColors,
  colorIntents: defaultColorIntents,
  gradients: defaultColorsGradients,
};
