import { DesignSystem } from '@newrade/core-design-system';
import { createGlobalTheme } from '@vanilla-extract/css';
import { buttonsVars, defaultCSSButtons } from './default-buttons.css';
import { colorVars, defaultCSSColors } from './default-colors.css';

type CSSTheme = Pick<DesignSystem<string>, 'components'>;

export const themeVars: CSSTheme = {
  components: {
    ...buttonsVars,
  },
};
