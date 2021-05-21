import { DesignSystem } from '@newrade/core-design-system';
import { CSSDesignSystem } from '@newrade/core-react-ui';
import {
  defaultAnimations,
  defaultButtons,
  defaultEffects,
  defaultIconography,
  defaultSizing,
} from '@newrade/core-react-ui/lib/default-theme';
import { createCSSTheme } from '@newrade/core-react-ui/lib/utilities';
import { colors } from './colors';
import { layout } from './layout';
import { typography } from './typography';

export const theme: DesignSystem = {
  name: 'newrade',
  variation: 'light',
  colors: colors,
  effects: defaultEffects,
  sizing: defaultSizing,
  iconography: defaultIconography,
  typography: typography,
  layout: layout,
  animations: defaultAnimations,
  components: {
    buttons: defaultButtons,
  },
};

export const cssTheme: CSSDesignSystem = createCSSTheme(theme);
