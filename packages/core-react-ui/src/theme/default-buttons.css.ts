import {
  Border,
  BorderStyles,
  ButtonBoxStyle,
  ButtonColors,
  DesignSystem,
  OutlineStyles,
} from '@newrade/core-design-system';
import { createThemeContract } from '@vanilla-extract/css';
import { colorVars } from './default-colors.css';

export const placeholderButtonVariant: ButtonColors<string> = {
  textColor: colorVars.colorIntents.primaryTextReversed,
  iconColor: '',
  backgroundColor: 'black',
  borderColor: 'black',
  outlineColor: '',
};

export const placeholderButtonBorder: Border<string> = {
  width: '1px',
  color: 'black',
  style: 'solid',
};

export const placeholderButtonOutline: OutlineStyles<string> = {
  width: '',
  color: '',
  style: 'solid',
};

export const placeholderButtonSize: ButtonBoxStyle<string> = {
  width: '',
  height: '',
  padding: {
    default: '10px',
    top: '',
    right: '',
    bottom: '',
    left: '',
  },
  border: {
    default: placeholderButtonBorder,
    top: placeholderButtonBorder,
    right: placeholderButtonBorder,
    bottom: placeholderButtonBorder,
    left: placeholderButtonBorder,
  },
  outline: placeholderButtonOutline,
  backgroundColor: '',
};

export const defaultButtonBorder: BorderStyles<string> = {
  default: {
    width: '1px',
    style: 'solid',
    color: 'red',
    radius: '3px',
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
};

export const defaultCSSButtons: Pick<DesignSystem<string>['components'], 'buttons'> = {
  buttons: {
    variants: {
      primary: placeholderButtonVariant,
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

export const buttonsVars = createThemeContract<Pick<DesignSystem<string>['components'], 'buttons'>>(
  {
    buttons: {
      variants: {
        primary: placeholderButtonVariant,
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
  }
);
