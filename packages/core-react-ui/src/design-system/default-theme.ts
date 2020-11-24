import { DesignSystem } from '@newrade/core-design-system';
import { createCSSTheme } from '../utilities/theme.utilities';
import { defaultAnimations } from './default-animations';
import { defaultButtons } from './default-buttons';
import { defaultColors } from './default-colors';
import { defaultEffects } from './default-effects';
import { defaultIconography } from './default-iconography';
import { defaultLayout } from './default-layout';
import { defaultSizizng } from './default-sizing';
import { defaultTypography } from './default-typography';

export const defaultTheme: DesignSystem = {
  name: 'core-react-ui',
  variation: 'light',
  colors: defaultColors,
  effects: defaultEffects,
  sizing: defaultSizizng,
  iconography: defaultIconography,
  typography: defaultTypography,
  layout: defaultLayout,
  animations: defaultAnimations,
  components: {
    buttons: defaultButtons,
  },
};

export const defaultCSSTheme: Partial<DesignSystem<string>> = createCSSTheme(defaultTheme);
