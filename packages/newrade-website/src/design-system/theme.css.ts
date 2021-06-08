import { defaultButtons, themeVars } from '@newrade/core-react-ui';
import { createTheme } from '@vanilla-extract/css';

export const themeClassName = createTheme(themeVars, {
  buttons: {
    ...defaultButtons,
    medium: {
      ...defaultButtons.medium,
      padding: {
        default: '40px',
      },
    },
  },
});
