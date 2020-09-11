import { CSSBorder } from '../../css/border';
import { BasicCSSProperties } from '../../utilities/types';
import { SizeCSSVar, SIZING, Sizing, SizingStep } from '../../foundations/sizing';

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

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ButtonIcon;
  state?: ButtonState;
}

export type ButtonSizes = { [key in keyof typeof ButtonSize]: ButtonSizeStyle };
export type ButtonVariants = { [key in keyof typeof ButtonVariant]: ButtonStyle };

export interface ButtonStyle {
  color?: string;
  colorIcon?: string;
  borderColor?: string;
  background?: string;
  backgroundColor?: string;
}

export interface ButtonSizeStyle {
  height?: SIZING;
  padding?: SizingStep | string;
  borderStyle?: CSSBorder;
  borderWidth?: CSSBorder;
  borderRadius?: CSSBorder;
}

export interface Buttons {
  variants: ButtonVariants;
  sizes: ButtonSizes;
}
