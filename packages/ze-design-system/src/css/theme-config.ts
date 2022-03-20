import { COLOR_SCHEME } from '@newrade/core-design-system';
import { CSSRuntimeThemeConfig, CSSThemeProviderConfig } from '@newrade/core-react-ui';

/**
 *
 * Light theme
 *
 */

export const lightThemeConfig: CSSRuntimeThemeConfig = {
  name: 'ze-light',
  colorScheme: COLOR_SCHEME.LIGHT,

  default: true,
  className: 'global-css-theme-ze-light',
};

/**
 *
 * Dark theme
 *
 */

export const darkThemeConfig: CSSRuntimeThemeConfig = {
  name: 'ze-dark',
  colorScheme: COLOR_SCHEME.DARK,
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
