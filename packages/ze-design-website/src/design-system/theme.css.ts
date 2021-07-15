import { DesignSystem } from '@newrade/core-design-system';
import {
  buttonsVars,
  placeholderButtonSize,
  placeholderButtonVariant,
} from '@newrade/core-react-ui/src/theme';
import { createTheme } from '@vanilla-extract/css';

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

export const themeClass = createTheme(buttonsVars, buttons, 'customButtons');
