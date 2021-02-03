import { DesignSystem } from '@newrade/core-design-system';
import {
  createCSSTheme,
  CSSDesignSystem,
  defaultAnimations,
  defaultButtons,
  defaultIconography,
  defaultSizing,
} from '@newrade/core-react-ui';
import { colors } from './colors';
import { effects } from './effects';
import { layout } from './layout';
import { typography } from './typography';

export const theme: DesignSystem = {
  name: 'Clinique Dr. Boucher',
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
