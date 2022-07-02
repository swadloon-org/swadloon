import { createGlobalTheme } from '@vanilla-extract/css';

import { defaultColors, defaultColorsDark } from '@newrade/core-react-ui/default-theme';
import {
  GLOBAL_DARK_THEME_SELECTOR,
  GLOBAL_LIGHT_THEME_SELECTOR,
} from '@newrade/core-react-ui/global';
import { colorVars } from '@newrade/core-react-ui/theme';
import { getCSSColorsV2 } from '@newrade/core-react-ui/utilities-theme';

import { darkThemeConfig, lightThemeConfig } from './theme-config.js';

/**
 *
 * Light theme
 *
 */

const cssLightColors = getCSSColorsV2(defaultColors);

createGlobalTheme(
  `${GLOBAL_LIGHT_THEME_SELECTOR}, .${lightThemeConfig.className}`,
  colorVars,
  cssLightColors
);

/**
 *
 * Dark theme
 *
 */

const cssDarkColors = getCSSColorsV2(defaultColorsDark);

createGlobalTheme(
  `${GLOBAL_DARK_THEME_SELECTOR}, .${darkThemeConfig.className}`,
  colorVars,
  cssDarkColors
);
