import { DesignSystem } from '@newrade/core-design-system';
import { CSSDesignSystem } from '@newrade/core-react-ui';
import {
  defaultAnimations,
  defaultButtons,
  defaultIconography,
  defaultSizing,
} from '@newrade/core-react-ui/default-theme';
import { createCSSTheme } from '@newrade/core-react-ui/utilities';
import { colors } from './colors';
import { effects } from './effects';
import { layout } from './layout';
import { typography } from './typography';

/**
 * Note: Do not consume exports in this file directly
 * They must be imported only in .treat.ts or .css.ts files
 */

export const theme: DesignSystem = {
  name: 'ZE DS',
  variation: 'light',
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
export const cssTheme: CSSDesignSystem = createCSSTheme(theme);
