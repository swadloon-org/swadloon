import { CSSBorder } from '../../css/border';
import { BasicCSSProperties } from '../../utilities/types';
import { SizingStep } from '../../foundations/sizing';

export enum ButtonVariant {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
}

export enum ButtonIcon {
  none = 'none',
  icon = 'icon',
  left = 'left',
  right = 'right',
}

export enum ButtonSize {
  large = 'large',
  medium = 'medium',
  small = 'small',
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
  icon?: ButtonIcon;
  size?: ButtonSize;
  state?: ButtonState;
}

export type ButtonSizes = { [key in keyof typeof ButtonSize]: ButtonVariants };

export type ButtonVariants = { [key in keyof typeof ButtonVariant]: ButtonStyle };

export interface ButtonStyle {
  height?: SizingStep;
  padding?: SizingStep;
  border?: CSSBorder;

  background?: Pick<BasicCSSProperties, 'background'>;
  backgroundColor?: Pick<BasicCSSProperties, 'backgroundColor'>;
}

export interface Buttons {
  sizes: ButtonSizes;
}
