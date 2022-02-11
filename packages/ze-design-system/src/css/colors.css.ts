import { createGlobalTheme } from '@vanilla-extract/css';

import {
  GLOBAL_DARK_THEME_SELECTOR,
  GLOBAL_LIGHT_THEME_SELECTOR,
} from '@newrade/core-react-ui/global';
import { colorVars } from '@newrade/core-react-ui/theme';

import { darkCssTheme, lightCssTheme } from '../design-system/theme';

import { darkThemeConfig, lightThemeConfig } from './theme-config';

/**
 *
 * Light theme
 *
 */

createGlobalTheme(
  `${GLOBAL_LIGHT_THEME_SELECTOR}, .${lightThemeConfig.className}`,
  colorVars,
  lightCssTheme.colors
);

/**
 *
 * Dark theme
 *
 */

createGlobalTheme(
  `${GLOBAL_DARK_THEME_SELECTOR}, .${darkThemeConfig.className}`,
  colorVars,
  darkCssTheme.colors
);
