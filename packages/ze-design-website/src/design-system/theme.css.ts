import { createGlobalTheme } from '@vanilla-extract/css';

import {
  CSSRuntimeThemeConfig,
  CSSThemeProviderConfig,
} from '@newrade/core-react-ui/src/design-system/css-theme-config';
import {
  buttonsVars,
  colorVars,
  effectsVars,
  layoutVars,
  sizingVars,
  typographyVars,
} from '@newrade/core-react-ui/theme';
import {
  darkCssTheme,
  darkCssThemeV2,
  lightCssTheme,
  lightCssThemeV2,
} from '@newrade/ze-design-system/src/design-system/theme';

/**
 *
 * Light theme
 *
 */

const lightThemeConfig: CSSRuntimeThemeConfig = {
  name: lightCssTheme.name,
  variation: lightCssTheme.variation,
  default: true,
  classNames: {},
};

// @ts-expect-error
createGlobalTheme(':root', colorVars, lightCssThemeV2.colors);
// @ts-expect-error
createGlobalTheme(':root', effectsVars, lightCssThemeV2.effects);
// @ts-expect-error
createGlobalTheme(':root', sizingVars, lightCssThemeV2.sizing);
// @ts-expect-error
createGlobalTheme(':root', layoutVars, lightCssThemeV2.layout);
// @ts-expect-error
createGlobalTheme(':root', typographyVars, lightCssThemeV2.typography);
// createGlobalTheme(':root', buttonsVars, lightCssThemeV2.components);

/**
 *
 * Dark theme
 *
 */

const darkThemeConfig: CSSRuntimeThemeConfig = {
  name: darkCssTheme.name,
  variation: darkCssTheme.variation,
  default: false,
  classNames: {
    colors: `global-theme-colors-${darkCssTheme.name}`,
  },
};

// @ts-expect-error
createGlobalTheme(`.${darkThemeConfig.classNames.colors}`, colorVars, darkCssThemeV2.colors);

/**
 *
 * CSS Theme provider config
 *
 */

export const cssThemeConfig: CSSThemeProviderConfig = {
  autoDetect: true,
  themes: [lightThemeConfig, darkThemeConfig],
};
