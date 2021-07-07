import {
  buttonsVars,
  colorVars,
  defaultCSSButtons,
  defaultCSSColors,
  defaultCSSSizing,
  sizingVars,
  themeVars,
} from '@newrade/core-react-ui';
import { createGlobalTheme } from '@vanilla-extract/css';

// @ts-expect-error
createGlobalTheme(':root', sizingVars, defaultCSSSizing);
// @ts-expect-error
createGlobalTheme(':root', colorVars, defaultCSSColors);
// @ts-expect-error
createGlobalTheme(':root', buttonsVars, defaultCSSButtons);

// createTheme(buttonsVars, defaultButtons);

export { themeVars };
