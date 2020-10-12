import { ColorIntents, Colors } from '@newrade/core-design-system';
import { generateColorGreyPalette, generateColorPalette5 } from '../utilities/colors.utilities';
import { createDefaultColorIntents } from '../utilities/utilities';

export const defaultColors: Colors = {
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
  transparent: { h: 222, s: 50, l: 50, a: 0 },
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

export const defaultColorIntents: ColorIntents = createDefaultColorIntents(defaultColors);
