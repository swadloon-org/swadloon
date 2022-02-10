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
      iconSize: 16,
      iconMargin: {},
    },
    medium: {
      padding: {
        default: 2,
      },
      border: defaultButtonBorder,
      outline: {},
      iconSize: 16,
      iconMargin: {},
    },
    small: {
      padding: {
        default: 2,
      },
      border: defaultButtonBorder,
      outline: {},
      iconSize: 16,
      iconMargin: {},
    },
    xSmall: {
      padding: {
        default: 2,
      },
      border: defaultButtonBorder,
      outline: {},
      iconSize: 16,
      iconMargin: {},
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
    positive: {
      textColor: defaultColorIntents.primaryText,
      backgroundColor: defaultColorIntents.primaryText,
      iconColor: defaultColorIntents.primaryText,
      borderColor: defaultColorIntents.primaryText,
      outlineColor: defaultColorIntents.primaryText,
    },
    warning: {
      textColor: defaultColorIntents.warningText,
      backgroundColor: defaultColorIntents.primaryText,
      iconColor: defaultColorIntents.primaryText,
      borderColor: defaultColorIntents.primaryText,
      outlineColor: defaultColorIntents.primaryText,
    },
    danger: {
      textColor: defaultColorIntents.dangerText,
      backgroundColor: defaultColorIntents.primaryText,
      iconColor: defaultColorIntents.primaryText,
      borderColor: defaultColorIntents.primaryText,
      outlineColor: defaultColorIntents.primaryText,
    },
  },
};

/**
 * DefaultButtons object without the `vars` property which is used only
 * in application-defined theme configuration
 */
export type DefaultButtons = Omit<Buttons, 'vars'>;
