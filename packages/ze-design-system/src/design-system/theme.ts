import { COLOR_SCHEME, DesignSystem } from '@newrade/core-design-system';
import { CSSDesignSystem, CSSDesignSystemV2 } from '@newrade/core-react-ui';
import {
  defaultAnimations,
  defaultButtons,
  defaultIconography,
  defaultSizing,
} from '@newrade/core-react-ui/default-theme';
import { createCSSTheme, createCSSThemeV2 } from '@newrade/core-react-ui/utilities';

import { colors, colorsDark } from './colors';
import { effects } from './effects';
import { layout } from './layout';
import { typography } from './typography';

/**
 * Note: Do not consume exports in this file directly
 * They must be imported only in .css.ts files
 */

export const lightTheme: DesignSystem = {
  name: 'ze-light',
  colorScheme: COLOR_SCHEME.LIGHT,
  colors,
  effects,
  sizing: defaultSizing,
  iconography: defaultIconography,
  typography,
  layout,
  animations: defaultAnimations,
  components: {
    buttons: defaultButtons,
  },
};

export const lightCssTheme: CSSDesignSystem = createCSSTheme(lightTheme);
export const lightCssThemeV2: CSSDesignSystemV2 = createCSSThemeV2(lightTheme);

export const darkTheme: DesignSystem = {
  name: 'ze-dark',
  colorScheme: COLOR_SCHEME.DARK,
  colors: colorsDark,
  effects,
  sizing: defaultSizing,
  iconography: defaultIconography,
  typography,
  layout,
  animations: defaultAnimations,
  components: {
    buttons: defaultButtons,
  },
};

export const darkCssTheme: CSSDesignSystem = createCSSTheme(darkTheme);
export const darkCssThemeV2: CSSDesignSystemV2 = createCSSThemeV2(darkTheme);
