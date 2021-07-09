import { buttonsVars, defaultCSSButtons } from '@newrade/core-react-ui';
import { createTheme } from '@vanilla-extract/css';

export const themeClass = createTheme(buttonsVars, {
  ...defaultCSSButtons,
  buttons: {
    ...defaultCSSButtons.buttons,
    variants: {
      ...defaultCSSButtons.buttons.variants,
      primary: {
        ...defaultCSSButtons.buttons.variants.primary,
        textColor: 'red',
      },
    },
  },
});
