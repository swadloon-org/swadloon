import { createGlobalTheme } from '@vanilla-extract/css';

import { GLOBAL_CSS_THEME_SCHEME } from '@newrade/core-react-ui/global';
import { colorVars } from '@newrade/core-react-ui/theme';

import { darkCssThemeV2, lightCssThemeV2 } from '../design-system/theme';

import { darkThemeConfig, lightThemeConfig } from './theme-config';

/**
 *
 * Light theme
 *
 */

createGlobalTheme(
  `.${GLOBAL_CSS_THEME_SCHEME.LIGHT}, .${lightThemeConfig.className}`,
  colorVars,
  lightCssThemeV2.colors
);

/**
 *
 * Dark theme
 *
 */

createGlobalTheme(
  `.${GLOBAL_CSS_THEME_SCHEME.DARK}, .${darkThemeConfig.className}`,
  colorVars,
  darkCssThemeV2.colors
);
