import { ButtonHTMLAttributes } from 'react';
import { Color } from '../../primitives/color';
import { Border, BoxStyle, Outline, Padding } from '../atoms/box';

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

export type ButtonStyle<ColorType> = {
  textColor?: ColorType;
  iconColor?: ColorType;
  backgroundColor?: ColorType;
  borderColor?: ColorType;
  outlineColor?: ColorType;
};

export type ButtonBoxStyle<ColorType, PaddingType, BorderType, OutlineType> = BoxStyle<
  ColorType,
  PaddingType,
  BorderType,
  OutlineType
> & {};

export type ButtonVariants<ColorType = Color> = { [key in keyof typeof ButtonVariant]: ButtonStyle<ColorType> };

export type ButtonSizes<ColorType = Color, PaddingType = Padding, BorderType = Border, OutlineType = Outline> = {
  [key in keyof typeof ButtonSize]: ButtonBoxStyle<ColorType, PaddingType, BorderType, OutlineType>;
};

export interface Buttons<ColorType = Color, PaddingType = number, BorderType = Border, OutlineType = Outline> {
  variants: ButtonVariants<ColorType>;
  sizes: ButtonSizes<ColorType, PaddingType, BorderType, OutlineType>;
}
