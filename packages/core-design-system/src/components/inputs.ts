import { ICON } from '../foundations/iconography';
import { ColorType } from '../types';

import { BoxStyle } from './box';
import { Variant } from './components.props';

export enum InputType {
  normal = 'normal',
  compact = 'compact',
}

export enum InputKind {
  text = 'text',
  number = 'number',
  select = 'select',
}

export enum InputSize {
  large = 'large',
  medium = 'medium',
  small = 'small',
  xSmall = 'xSmall',
}

export enum InputInternalState {
  rest = 'rest',
  focused = 'focused',
  loading = 'loading',
  disabled = 'disabled',
}

export enum InputState {
  rest = 'rest',
  valid = 'valid',
  warning = 'warning',
  error = 'error',
}

/**
 * Position of the icon in the input field
 *
 * @default 'none'
 */
export enum InputIcon {
  none = 'none',
  icon = 'icon',
  left = 'left',
  right = 'right',
}

export type InputProps = Partial<InputStyleProps>;

export interface InputStyleProps {
  variant: Variant;
  icon: InputIcon;
  Icon: ICON;
  variantSize: InputSize;
  state: InputState;
}

export type InputColors<Override extends undefined | string = undefined> = {
  textColor?: ColorType<Override>;
  iconColor?: ColorType<Override>;
  backgroundColor?: ColorType<Override>;
  borderColor?: ColorType<Override>;
  outlineColor?: ColorType<Override>;
};

export type InputBoxStyle<Override extends undefined | string = undefined> = BoxStyle<Override>;

export type InputVariants<Override extends undefined | string = undefined> = {
  [key in Variant]: InputColors<Override>;
};

export type InputSizes<Override extends undefined | string = undefined> = {
  [key in InputSize]: InputBoxStyle<Override>;
};

export type Inputs<Override extends undefined | string = undefined> = {
  variants: InputVariants<Override>;
  sizes: InputSizes<Override>;
};
