import {
  CSSRuntimeThemeConfig,
  CSSThemeProviderConfig,
} from '@newrade/core-react-ui/src/design-system/css-theme-config';

import { darkCssTheme, lightCssTheme } from '../design-system/theme';

/**
 *
 * Light theme
 *
 */

export const lightThemeConfig: CSSRuntimeThemeConfig = {
  name: lightCssTheme.name,
  colorScheme: lightCssTheme.colorScheme,
  default: true,
  className: 'global-css-theme-ze-light',
};

/**
 *
 * Dark theme
 *
 */

export const darkThemeConfig: CSSRuntimeThemeConfig = {
  name: darkCssTheme.name,
  colorScheme: darkCssTheme.colorScheme,
  default: false,
  className: 'global-css-theme-ze-dark',
};

/**
 *
 * CSS Theme provider config
 *
 */

export const cssThemeConfig: CSSThemeProviderConfig = {
  themes: [lightThemeConfig, darkThemeConfig],
};
