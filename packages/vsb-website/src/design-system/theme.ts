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

export const theme: DesignSystem = {
  name: 'vsb-website',
  variation: 'light',
  colors,
  effects: defaultEffects,
  sizing: defaultSizing,
  iconography: defaultIconography,
  typography: defaultTypography,
  layout: defaultLayout,
  animations: defaultAnimations,
  components: {
    buttons: defaultButtons,
  },
};

export const cssTheme: CSSDesignSystem = createCSSTheme(theme);
