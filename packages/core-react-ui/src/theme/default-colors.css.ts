import { Colors } from '@newrade/core-design-system';
import { createThemeContract } from '@vanilla-extract/css';
import { defaultColors } from '../default-theme/default-colors';
import { getCSSColorsV2 } from '../utilities';

export const defaultCSSColors = getCSSColorsV2(defaultColors);

export const colorVars = createThemeContract<Colors<string>>(defaultCSSColors);
