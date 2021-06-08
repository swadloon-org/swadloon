import { CSSBorder } from '../../css/border';
import { SIZING } from '../../foundations/sizing';

export enum Variant {
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
  variant?: Variant;
  size?: ButtonSize;
  icon?: ButtonIcon;
  state?: ButtonState;
}

export type ButtonSizes = { [key in ButtonSize]: ButtonSizeStyle };
export type ButtonVariants = { [key in Variant]: ButtonStyle };

export interface ButtonStyle {
  color?: string;
  colorIcon?: string;
  borderColor?: string;
  background?: string;
  backgroundColor?: string;
}

export interface ButtonSizeStyle {
  width?: string | undefined;
  height?: SIZING;
  padding?: SIZING;
  paddingV?: SIZING;
  paddingH?: SIZING;
  borderStyle?: CSSBorder;
  borderWidth?: CSSBorder;
  borderRadius?: CSSBorder;
}

export interface Buttons {
  variants: ButtonVariants;
  sizes: ButtonSizes;
}
