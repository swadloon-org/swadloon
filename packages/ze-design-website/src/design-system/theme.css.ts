import { DesignSystem, VIEWPORT } from '@newrade/core-design-system';
import { defaultCSSLayout } from '@newrade/core-react-ui/src/theme/default-css-layout';
import {
  buttonsVars,
  layoutVars,
  placeholderButtonSize,
  placeholderButtonVariant,
} from '@newrade/core-react-ui/theme';
import { createGlobalTheme, createTheme } from '@vanilla-extract/css';

export const buttons: Pick<DesignSystem<string>['components'], 'buttons'> = {
  buttons: {
    variants: {
      primary: { ...placeholderButtonVariant, textColor: 'red' },
      primaryReversed: placeholderButtonVariant,
      secondary: placeholderButtonVariant,
      secondaryReversed: placeholderButtonVariant,
      tertiary: placeholderButtonVariant,
      tertiaryReversed: placeholderButtonVariant,
    },
    sizes: {
      large: placeholderButtonSize,
      medium: placeholderButtonSize,
      small: placeholderButtonSize,
      xSmall: placeholderButtonSize,
    },
  },
};

// createGlobalTheme(':root', layoutVars, {
//   ...defaultCSSLayout,
//   navbarHeight: {
//     ...defaultCSSLayout.navbarHeight,
//     // @ts-ignore
//     [VIEWPORT.desktop]: '80px',
//   },
// });

export const customButtonsTheme = createTheme(buttonsVars, buttons, 'custom-buttons');
// export const customLayoutTheme = createTheme(layoutVars, buttons, 'custom-layout');
