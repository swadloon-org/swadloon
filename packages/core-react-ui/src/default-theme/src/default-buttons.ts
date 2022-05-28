import { Border, BorderStyles, Buttons, Padding } from '@newrade/core-design-system';

import { defaultColorIntents, defaultColors, defaultColorsColors } from './default-colors';

const defaultButtonBorderStyle: Border = {
  width: 1,
  style: 'solid',
  color: defaultColors.colorIntents.primary,
  radius: {
    all: 3,
  },
};

const defaultButtonPadding: Padding = {
  default: NaN,
  left: NaN,
  right: NaN,
  top: NaN,
  bottom: NaN,
};

export const defaultButtonBorder: BorderStyles = {
  default: defaultButtonBorderStyle,
  top: defaultButtonBorderStyle,
  right: defaultButtonBorderStyle,
  bottom: defaultButtonBorderStyle,
  left: defaultButtonBorderStyle,
};

export const defaultButtons: Buttons = {
  sizes: {
    large: {
      height: 56,
      width: NaN,
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
    },
    medium: {
      height: 40,
      width: NaN,
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
      iconSize: 16,
      iconMargin: {
        left: 10,
        right: 10,
        top: NaN,
        bottom: NaN,
      },
    },
    small: {
      height: 32,
      width: NaN,
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
      iconSize: 16,
      iconMargin: {
        left: 10,
        right: 10,
        top: NaN,
        bottom: NaN,
      },
    },
    xSmall: {
      height: 24,
      width: NaN,
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
      iconSize: 16,
      iconMargin: {
        left: 10,
        right: 10,
        top: NaN,
        bottom: NaN,
      },
    },
  },
  variants: {
    primary: {
      textColor: defaultColorsColors.grey['0-reversed'],
      textColorActive: defaultColorsColors.grey['0-reversed'],
      textColorDisabled: defaultColorIntents.disabledText,
      backgroundColor: defaultColorIntents.primary,
      backgroundColorActive: defaultColorsColors.primary[700],
      backgroundColorDisabled: defaultColorIntents.disabled,
      iconColor: defaultColorsColors.grey['0-reversed'],
      iconColorActive: defaultColorsColors.grey['0-reversed'],
      iconColorDisabled: defaultColorsColors.grey['0-reversed'],
      borderColor: defaultColorIntents.primary,
      borderColorActive: defaultColorIntents.primary,
      borderColorDisabled: defaultColorIntents.disabled,
      outlineColor: defaultColorIntents.primary,
      outlineColorActive: defaultColorIntents.primary,
      outlineColorDisabled: defaultColorIntents.primary,
    },
    secondary: {
      textColor: defaultColorIntents.primary,
      textColorActive: defaultColorIntents.primary,
      textColorDisabled: defaultColorIntents.disabledText,
      backgroundColor: defaultColorIntents.transparent,
      backgroundColorActive: defaultColorsColors.primary[100],
      backgroundColorDisabled: defaultColorIntents.disabled,
      iconColor: defaultColorIntents.primary,
      iconColorActive: defaultColorIntents.primary,
      iconColorDisabled: defaultColorIntents.primary,
      borderColor: defaultColorIntents.primary,
      borderColorActive: defaultColorIntents.primary,
      borderColorDisabled: defaultColorIntents.disabled,
      outlineColor: defaultColorIntents.primary,
      outlineColorActive: defaultColorIntents.primary,
      outlineColorDisabled: defaultColorIntents.primary,
    },
    tertiary: {
      textColor: defaultColorIntents.primary,
      textColorActive: defaultColorIntents.primary,
      textColorDisabled: defaultColorIntents.disabledText,
      backgroundColor: defaultColorIntents.transparent,
      backgroundColorActive: defaultColorsColors.primary[100],
      backgroundColorDisabled: defaultColorIntents.disabled,
      iconColor: defaultColorIntents.primary,
      iconColorActive: defaultColorIntents.primary,
      iconColorDisabled: defaultColorIntents.primary,
      borderColor: defaultColorIntents.transparent,
      borderColorActive: defaultColorIntents.transparent,
      borderColorDisabled: defaultColorIntents.disabled,
      outlineColor: defaultColorIntents.primary,
      outlineColorActive: defaultColorIntents.primary,
      outlineColorDisabled: defaultColorIntents.primary,
    },
    positive: {
      textColor: defaultColorsColors.grey['0-reversed'],
      textColorActive: defaultColorsColors.grey['0-reversed'],
      textColorDisabled: defaultColorIntents.disabledText,
      backgroundColor: defaultColorIntents.successAction,
      backgroundColorActive: defaultColorsColors.utilityGreen[700],
      backgroundColorDisabled: defaultColorIntents.disabled,
      iconColor: defaultColorsColors.grey['0-reversed'],
      iconColorActive: defaultColorsColors.grey['0-reversed'],
      iconColorDisabled: defaultColorsColors.grey['0-reversed'],
      borderColor: defaultColorIntents.successAction,
      borderColorActive: defaultColorIntents.successAction,
      borderColorDisabled: defaultColorIntents.disabled,
      outlineColor: defaultColorIntents.successAction,
      outlineColorActive: defaultColorIntents.successAction,
      outlineColorDisabled: defaultColorIntents.successAction,
    },
    warning: {
      textColor: defaultColorsColors.grey['0-reversed'],
      textColorActive: defaultColorsColors.grey['0-reversed'],
      textColorDisabled: defaultColorIntents.disabledText,
      backgroundColor: defaultColorIntents.warningAction,
      backgroundColorActive: defaultColorsColors.utilityYellow[700],
      backgroundColorDisabled: defaultColorIntents.disabled,
      iconColor: defaultColorsColors.grey['0-reversed'],
      iconColorActive: defaultColorsColors.grey['0-reversed'],
      iconColorDisabled: defaultColorsColors.grey['0-reversed'],
      borderColor: defaultColorIntents.warningAction,
      borderColorActive: defaultColorIntents.warningAction,
      borderColorDisabled: defaultColorIntents.disabled,
      outlineColor: defaultColorIntents.warningAction,
      outlineColorActive: defaultColorIntents.warningAction,
      outlineColorDisabled: defaultColorIntents.warningAction,
    },
    danger: {
      textColor: defaultColorsColors.grey['0-reversed'],
      textColorActive: defaultColorsColors.grey['0-reversed'],
      textColorDisabled: defaultColorIntents.disabledText,
      backgroundColor: defaultColorIntents.dangerAction,
      backgroundColorActive: defaultColorsColors.utilityRed[700],
      backgroundColorDisabled: defaultColorIntents.disabled,
      iconColor: defaultColorsColors.grey['0-reversed'],
      iconColorActive: defaultColorsColors.grey['0-reversed'],
      iconColorDisabled: defaultColorsColors.grey['0-reversed'],
      borderColor: defaultColorIntents.dangerAction,
      borderColorActive: defaultColorIntents.dangerAction,
      borderColorDisabled: defaultColorIntents.disabled,
      outlineColor: defaultColorIntents.dangerAction,
      outlineColorActive: defaultColorIntents.dangerAction,
      outlineColorDisabled: defaultColorIntents.dangerAction,
    },
  },
};

/**
 * DefaultButtons object without the `vars` property which is used only
 * in application-defined theme configuration
 */
export type DefaultButtons = Omit<Buttons, 'vars'>;
