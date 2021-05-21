import { Buttons } from '@newrade/core-design-system';
import { defaultColorIntents } from './default-colors';

export const defaultButtons: Buttons = {
  sizes: {
    large: {
      border: {
        default: {
          width: 1,
          style: 'solid',
          radius: {
            all: 3,
          },
        },
      },
      padding: {
        default: 2,
      },
    },
    medium: {
      padding: {
        default: 2,
      },
    },
    small: {
      padding: {
        default: 2,
      },
    },
    xsmall: {
      padding: {
        default: 2,
      },
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
    primaryReversed: {
      textColor: defaultColorIntents.primaryTextReversed,
      backgroundColor: defaultColorIntents.primaryTextReversed,
      iconColor: defaultColorIntents.primaryTextReversed,
      borderColor: defaultColorIntents.primaryTextReversed,
      outlineColor: defaultColorIntents.primaryTextReversed,
    },
    secondary: {
      textColor: defaultColorIntents.primaryText,
      backgroundColor: defaultColorIntents.primaryText,
      iconColor: defaultColorIntents.primaryText,
      borderColor: defaultColorIntents.primaryText,
      outlineColor: defaultColorIntents.primaryText,
    },
    secondaryReversed: {
      textColor: defaultColorIntents.primaryTextReversed,
      backgroundColor: defaultColorIntents.primaryTextReversed,
      iconColor: defaultColorIntents.primaryTextReversed,
      borderColor: defaultColorIntents.primaryTextReversed,
      outlineColor: defaultColorIntents.primaryTextReversed,
    },
    tertiary: {
      textColor: defaultColorIntents.primaryText,
      backgroundColor: defaultColorIntents.primaryText,
      iconColor: defaultColorIntents.primaryText,
      borderColor: defaultColorIntents.primaryText,
      outlineColor: defaultColorIntents.primaryText,
    },
    tertiaryReversed: {
      textColor: defaultColorIntents.primaryTextReversed,
      backgroundColor: defaultColorIntents.primaryTextReversed,
      iconColor: defaultColorIntents.primaryTextReversed,
      borderColor: defaultColorIntents.primaryTextReversed,
      outlineColor: defaultColorIntents.primaryTextReversed,
    },
  },
};
