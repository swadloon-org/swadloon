import { DesignSystem } from '@newrade/core-design-system';
import { createCSSTheme } from '@newrade/core-react-ui/lib/utilities';
import { CSSDesignSystem } from '@newrade/core-react-ui/lib/design-system';
import {
  defaultSizing,
  defaultIconography,
  defaultAnimations,
  defaultButtons,
} from '@newrade/core-react-ui/lib/design-system/index';
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
