import { COLOR_SCHEME, DesignSystemV2 } from '@newrade/core-design-system';

import { defaultAnimations } from './default-animations.js';
import { defaultButtons } from './default-buttons.js';
import { defaultColors } from './default-colors.js';
import { defaultEffects } from './default-effects.js';
import { defaultIconography } from './default-iconography.js';
import { defaultLayout } from './default-layout.js';
import { defaultSizing } from './default-sizing.js';
import { defaultTypography } from './default-typography.js';

export const defaultTheme: DesignSystemV2 = {
  name: 'core-react-ui',
  colorScheme: COLOR_SCHEME.LIGHT,
  colors: defaultColors,
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
