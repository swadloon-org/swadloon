import { DesignSystem } from '@newrade/core-design-system';
import {
  createCSSTheme,
  CSSDesignSystem,
  defaultAnimations,
  defaultButtons,
  defaultEffects,
  defaultIconography,
  defaultLayout,
  defaultSizing,
  defaultTypography,
} from '@newrade/core-react-ui';
import { colors } from './colors';
import { layout } from './layout';
import { typography } from './typography';

export const theme: DesignSystem = {
  name: 'newrade',
  variation: 'light',
  colors,
  effects: defaultEffects,
  sizing: defaultSizing,
  iconography: defaultIconography,
  // typography,
  typography: defaultTypography,
  layout: defaultLayout,
  animations: defaultAnimations,
  components: {
    buttons: defaultButtons,
  },
};

export const cssTheme: CSSDesignSystem = createCSSTheme(theme);
