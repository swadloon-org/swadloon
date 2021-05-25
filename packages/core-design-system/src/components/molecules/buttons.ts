import { ColorType } from '../../types';
import { BoxStyle } from '../atoms/box';
import { Variant } from '../components.props';

export enum ButtonAs {
  button = 'button',
  a = 'a',
  div = 'div',
}

export enum ButtonSize {
  large = 'large',
  medium = 'medium',
  small = 'small',
  xsmall = 'xSmall',
}

export enum ButtonIcon {
  none = 'none', // default
  icon = 'icon',
  left = 'left',
  right = 'right',
}

export enum ButtonState {
  rest = 'rest',
  pressed = 'pressed',
  focused = 'focused',
  loading = 'loading',
  disabled = 'disabled',
}

export type ButtonProps = Partial<ButtonStyleProps>;

export interface ButtonStyleProps {
  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role
   */
  role: string;
  variant: Variant;
  icon: ButtonIcon;
  size: ButtonSize;
  state: ButtonState;
}

export type ButtonColors<Override extends undefined | string = undefined> = {
  textColor?: ColorType<Override>;
  iconColor?: ColorType<Override>;
  backgroundColor?: ColorType<Override>;
  borderColor?: ColorType<Override>;
  outlineColor?: ColorType<Override>;
};

export type ButtonBoxStyle<Override extends undefined | string = undefined> =
  BoxStyle<Override> & {};

export type ButtonVariants<Override extends undefined | string = undefined> = {
  [key in keyof typeof Variant]: ButtonColors<Override>;
};

export type ButtonSizes<Override extends undefined | string = undefined> = {
  [key in keyof typeof ButtonSize]: ButtonBoxStyle<Override>;
};

export interface Buttons<Override extends undefined | string = undefined> {
  variants: ButtonVariants<Override>;
  sizes: ButtonSizes<Override>;
}
