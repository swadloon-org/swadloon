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
        default: NaN,
        left: 16,
        right: 16,
        top: NaN,
        bottom: NaN,
      },
      iconPadding: 12,
      iconOnlyPadding: 6,
      border: {
        ...defaultButtonBorder,
        default: {
          ...defaultButtonBorder.default,
          radius: {
            all: 4,
          },
        },
      },
      outline: {
        color: defaultColorIntents.primary,
        width: defaultButtonBorderStyle.width,
        radius: defaultButtonBorderStyle.radius,
        style: defaultButtonBorderStyle.style,
      },
      iconSize: 24,
      iconMargin: {
        left: 10,
        right: 10,
        top: NaN,
        bottom: NaN,
      },
      border: defaultButtonBorder,
      outline: {},
      iconSize: 16,
      iconMargin: {},
    },
    medium: {
      padding: {
        default: NaN,
        left: 10,
        right: 10,
        top: NaN,
        bottom: NaN,
      },
      iconPadding: 10,
      iconOnlyPadding: 6,
      border: {
        ...defaultButtonBorder,
        default: {
          ...defaultButtonBorder.default,
          radius: {
            all: 4,
          },
        },
      },
      outline: {
        color: defaultColorIntents.primary,
        width: defaultButtonBorderStyle.width,
        radius: defaultButtonBorderStyle.radius,
        style: defaultButtonBorderStyle.style,
      },
      border: defaultButtonBorder,
      outline: {},
      iconSize: 16,
      iconMargin: {},
    },
    small: {
      padding: {
        default: NaN,
        left: 8,
        right: 8,
        top: NaN,
        bottom: NaN,
      },
      iconPadding: 8,
      iconOnlyPadding: 6,
      border: {
        ...defaultButtonBorder,
        default: {
          ...defaultButtonBorder.default,
          radius: {
            all: 3,
          },
        },
      },
      outline: {
        color: defaultColorIntents.primary,
        width: defaultButtonBorderStyle.width,
        radius: defaultButtonBorderStyle.radius,
        style: defaultButtonBorderStyle.style,
      },
      border: defaultButtonBorder,
      outline: {},
      iconSize: 16,
      iconMargin: {},
    },
    xSmall: {
      padding: {
        default: NaN,
        left: 6,
        right: 6,
        top: NaN,
        bottom: NaN,
      },
      iconPadding: 6,
      iconOnlyPadding: 6,
      border: {
        ...defaultButtonBorder,
        default: {
          ...defaultButtonBorder.default,
          radius: {
            all: 3,
          },
        },
      },
      outline: {
        color: defaultColorIntents.primary,
        width: defaultButtonBorderStyle.width,
        radius: defaultButtonBorderStyle.radius,
        style: defaultButtonBorderStyle.style,
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
