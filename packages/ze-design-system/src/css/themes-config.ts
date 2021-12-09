import { GLOBAL_CSS_THEME } from '@newrade/core-gatsb-config/config';
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
  className: GLOBAL_CSS_THEME.LIGHT,
  classNames: {},
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
  className: GLOBAL_CSS_THEME.DARK,
  classNames: {
    colors: `${GLOBAL_CSS_THEME.DARK}-${darkCssTheme.name}-colors`,
  },
};

/**
 *
 * CSS Theme provider config
 *
 */

export const cssThemeConfig: CSSThemeProviderConfig = {
  autoDetect: true,
  themes: [lightThemeConfig, darkThemeConfig],
};
