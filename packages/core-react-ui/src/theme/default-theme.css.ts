import { ButtonSizes } from '@newrade/core-design-system';
import { createTheme } from '@vanilla-extract/css';
import { defaultButtons } from './default-buttons.css';

export const [defaultThemeClassName, themeVars] = createTheme<{
  buttons: ButtonSizes<string>;
}>({
  buttons: defaultButtons,
});
