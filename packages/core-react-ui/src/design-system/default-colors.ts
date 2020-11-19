import { ColorIntents, Colors, ColorsVarNames, ColorsVars } from '@newrade/core-design-system';
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
  effectTransparentLight: { h: 222, s: 50, l: 50 },
  effectTransparentMedium: { h: 222, s: 50, l: 50 },
  effectTransparentHeavy: { h: 222, s: 50, l: 50 },
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

export const DEFAULT_COLORS_VAR_NAMES: ColorsVarNames = getCSSVarNamesForColors({
  colors: defaultColorsColors,
  colorIntents: defaultColorIntents,
});

export const DEFAULT_COLORS_VAR: ColorsVars = getCSSVarForColors({
  colors: defaultColorsColors,
  colorIntents: defaultColorIntents,
});

export const defaultColors: Colors = {
  varNames: DEFAULT_COLORS_VAR_NAMES,
  var: DEFAULT_COLORS_VAR,
  colors: defaultColorsColors,
  colorIntents: defaultColorIntents,
};
