import { BorderStyles, ButtonSizes } from '@newrade/core-design-system';

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

export const defaultButtons: ButtonSizes<string> = {
  large: {
    padding: {
      top: '20px',
      default: '20px',
    },
    border: defaultButtonBorder,
    outline: {},
  },
  medium: {
    padding: {
      default: '20px',
    },
    border: defaultButtonBorder,
    outline: {},
  },
  small: {
    padding: {
      default: '20px',
    },
    border: defaultButtonBorder,
    outline: {},
  },
  xSmall: {
    padding: {
      default: '20px',
    },
    border: defaultButtonBorder,
    outline: {},
  },
};
