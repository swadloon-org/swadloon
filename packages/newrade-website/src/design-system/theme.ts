import { DesignSystem } from '@newrade/core-design-system';
import {
  CSSDesignSystem,
  defaultAnimations,
  defaultButtons,
  defaultEffects,
  defaultIconography,
  defaultLayout,
  defaultSizing,
  defaultTypography,
} from '@newrade/core-react-ui/lib/design-system/';
import { createCSSTheme } from '@newrade/core-react-ui/lib/utilities';
import { colors } from './colors';

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
  // layout,
  animations: defaultAnimations,
  components: {
    buttons: defaultButtons,
  },
};

export const cssTheme: CSSDesignSystem = createCSSTheme(theme);
