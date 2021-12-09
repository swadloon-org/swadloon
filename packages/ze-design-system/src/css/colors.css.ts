import { createGlobalTheme } from '@vanilla-extract/css';

import { GLOBAL_CSS_THEME } from '@newrade/core-gatsb-config/config';
import { colorVars } from '@newrade/core-react-ui/theme';

import { darkCssThemeV2, lightCssThemeV2 } from '../design-system/theme';

import { darkThemeConfig } from './themes-config';

/**
 *
 * Light theme
 *
 */

// @ts-ignore
createGlobalTheme(':root', colorVars, lightCssThemeV2.colors);

/**
 *
 * Dark theme
 *
 */

createGlobalTheme(
  `.${GLOBAL_CSS_THEME.DARK}, .${darkThemeConfig.classNames.colors}`,
  colorVars,
  // @ts-ignore
  darkCssThemeV2.colors
);
