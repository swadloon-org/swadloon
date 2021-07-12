import {
  Border,
  BorderStyles,
  ButtonBoxStyle,
  ButtonColors,
  DesignSystem,
  OutlineStyles,
} from '@newrade/core-design-system';

export const placeholderButtonVariant: ButtonColors<string> = {
  // textColor: colorVars.colorIntents.primaryTextReversed,
  textColor: 'white',
  iconColor: 'black',
  backgroundColor: 'black',
  borderColor: 'black',
  outlineColor: 'black',
};

export const placeholderButtonBorder: Border<string> = {
  width: '1px',
  color: 'black',
  style: 'solid',
};

export const placeholderButtonOutline: OutlineStyles<string> = {
  width: '1px',
  color: 'black',
  style: 'solid',
};

export const placeholderButtonSize: ButtonBoxStyle<string> = {
  width: '10px',
  height: '10px',
  padding: {
    default: '10px',
    top: '10px',
    right: '10px',
    bottom: '10px',
    left: '10px',
  },
  border: {
    default: placeholderButtonBorder,
    top: placeholderButtonBorder,
    right: placeholderButtonBorder,
    bottom: placeholderButtonBorder,
    left: placeholderButtonBorder,
  },
  outline: placeholderButtonOutline,
  backgroundColor: 'black',
};

export const defaultButtonBorder: BorderStyles<string> = {
  default: {
    width: '1px',
    style: 'solid',
    color: 'red',
    radius: '3px',
  },
  top: { width: '1px', style: 'solid', color: 'red', radius: '3px' },
  right: { width: '1px', style: 'solid', color: 'red', radius: '3px' },
  bottom: { width: '1px', style: 'solid', color: 'red', radius: '3px' },
  left: { width: '1px', style: 'solid', color: 'red', radius: '3px' },
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
