import { ButtonHTMLAttributes } from 'react';
import { ColorType } from '../../types';
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
  normal = 'normal',
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

export type ButtonStyle<Override extends undefined | string = undefined> = {
  textColor?: ColorType<Override>;
  iconColor?: ColorType<Override>;
  backgroundColor?: ColorType<Override>;
  borderColor?: ColorType<Override>;
  outlineColor?: ColorType<Override>;
};

export type ButtonBoxStyle<Override extends undefined | string = undefined> = BoxStyle<Override> & {};

export type ButtonVariants<Override extends undefined | string = undefined> = {
  [key in keyof typeof ButtonVariant]: ButtonStyle<Override>;
};

export type ButtonSizes<Override extends undefined | string = undefined> = {
  [key in keyof typeof ButtonSize]: ButtonBoxStyle<Override>;
};

export interface Buttons<Override extends undefined | string = undefined> {
  variants: ButtonVariants<Override>;
  sizes: ButtonSizes<Override>;
}
