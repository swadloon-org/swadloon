import { ICON } from '../foundations/iconography.js';
import { ColorType } from '../types.js';

import { BoxStyle } from './box.js';
import { Variant } from './components.js';

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
}

export enum InputValidityState {
  neutral = 'neutral',
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
  /**
   * The visual importance of the component
   */
  variant: Variant;
  /**
   * Icon placement
   */
  icon: InputIcon;
  /**
   * What icon to render
   */
  Icon: ICON;
  /**
   * General size of the input
   */
  size: InputSize;
  /**
   * Validation state
   */
  validity: InputValidityState;
  /**
   * Loading state
   */
  loading: boolean;
  /**
   * Disabled state
   */
  disabled: boolean;
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
