import { DesignSystem } from '@newrade/core-design-system';
import { CSSDesignSystem } from '@newrade/core-react-ui/lib/design-system';
import {
  defaultAnimations,
  defaultButtons,
  defaultIconography,
  defaultSizing,
} from '@newrade/core-react-ui/lib/default-theme';
import { createCSSTheme } from '@newrade/core-react-ui/lib/utilities';
import { colors } from './colors';
import { effects } from './effects';
import { layout } from './layout';
import { typography } from './typography';

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
