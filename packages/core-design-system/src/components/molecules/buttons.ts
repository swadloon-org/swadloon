import { ButtonHTMLAttributes } from 'react';
import { Color } from '../../primitives/color';
import { BoxStyle } from '../atoms/box';

export enum ButtonAs {
  button = 'button',
  a = 'a',
}

export enum ButtonVariant {
  primary = 'primary',
  primaryReversed = 'primaryReversed',
  secondary = 'secondary',
  secondaryReversed = 'secondaryReversed',
  tertiary = 'tertiary',
  tertiaryReversed = 'tertiaryReversed',
}

export enum ButtonSize {
  large = 'large',
  medium = 'medium',
  small = 'small',
}

export enum ButtonIcon {
  none = 'none', // default
  icon = 'icon',
  left = 'left',
  right = 'right',
}

export enum ButtonState {
  default = 'default',
  pressed = 'pressed',
  focused = 'focused',
  loading = 'loading',
  disabled = 'disabled',
}

export interface ButtonProps extends ButtonHTMLAttributes<any> {
  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role
   */
  role?: string;
  variant?: ButtonVariant;
  icon?: ButtonIcon;
  size?: ButtonSize;
  state?: ButtonState;
}

export type ButtonStyle = {
  textColor?: Color;
  iconColor?: Color;
};

export type ButtonBoxStyle = BoxStyle & {};

export type ButtonVariants = { [key in keyof typeof ButtonVariant]: ButtonStyle };

export type ButtonSizes = { [key in keyof typeof ButtonSize]: ButtonBoxStyle };

export interface Buttons {
  variants: ButtonVariants;
  sizes: ButtonSizes;
}
