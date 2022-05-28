import { COLOR_SCHEME, DesignSystemV2 } from '@newrade/core-design-system';

import { defaultAnimations } from './default-animations';
import { defaultButtons } from './default-buttons';
import { defaultColors } from './default-colors';
import { defaultEffects } from './default-effects';
import { defaultIconography } from './default-iconography';
import { defaultLayout } from './default-layout';
import { defaultSizing } from './default-sizing';
import { defaultTypography } from './default-typography';

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
