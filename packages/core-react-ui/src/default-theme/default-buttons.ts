import { BorderStyles, Buttons } from '@newrade/core-design-system';

import { defaultColorIntents, defaultColors } from './default-colors';

export const defaultButtonBorder: BorderStyles = {
  default: {
    width: 1,
    style: 'solid',
    color: defaultColors.colorIntents.primary,
    radius: {
      all: 3,
    },
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
};

export const defaultButtons: Buttons = {
  sizes: {
    large: {
      padding: {
        default: 2,
      },
      border: defaultButtonBorder,
      outline: {},
    },
    medium: {
      padding: {
        default: 2,
      },
      border: defaultButtonBorder,
      outline: {},
    },
    small: {
      padding: {
        default: 2,
      },
      border: defaultButtonBorder,
      outline: {},
    },
    xSmall: {
      padding: {
        default: 2,
      },
      border: defaultButtonBorder,
      outline: {},
    },
  },
  variants: {
    primary: {
      textColor: defaultColorIntents.primaryText,
      backgroundColor: defaultColorIntents.primaryText,
      iconColor: defaultColorIntents.primaryText,
      borderColor: defaultColorIntents.primaryText,
      outlineColor: defaultColorIntents.primaryText,
    },
    secondary: {
      textColor: defaultColorIntents.primaryText,
      backgroundColor: defaultColorIntents.primaryText,
      iconColor: defaultColorIntents.primaryText,
      borderColor: defaultColorIntents.primaryText,
      outlineColor: defaultColorIntents.primaryText,
    },
    tertiary: {
      textColor: defaultColorIntents.primaryText,
      backgroundColor: defaultColorIntents.primaryText,
      iconColor: defaultColorIntents.primaryText,
      borderColor: defaultColorIntents.primaryText,
      outlineColor: defaultColorIntents.primaryText,
    },
  },
};
