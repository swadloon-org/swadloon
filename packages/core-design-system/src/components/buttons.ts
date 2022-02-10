import { ICON } from '../foundations/iconography';
import { ColorType } from '../types';

import { BoxStyle } from './box';
import { Variant } from './components';

/**
 * Buttons
 *
 * @description Types to describe every variants and styles of our buttons.
 */
export type Buttons<Override extends undefined | string = undefined> = {
  variants: ButtonVariants<Override>;
  sizes: ButtonSizes<Override>;
};

export type ButtonBoxStyle<Override extends undefined | string = undefined> = BoxStyle<Override>;

/**
 * Possible sizes for buttons
 */
export enum ButtonSize {
  large = 'large',
  medium = 'medium',
  small = 'small',
  xSmall = 'xSmall',
}

export type ButtonSizes<Override extends undefined | string = undefined> = {
  [key in ButtonSize]: ButtonBoxStyle<Override>;
};

/**
 * Icon positions
 */
export enum ButtonIcon {
  none = 'none',
  /** Button with just an icon */
  icon = 'icon',
  left = 'left',
  right = 'right',
}

/**
 * Intention variants for buttons
 */
export enum ButtonIntention {
  neutral = 'neutral',
  positive = 'positive',
  warning = 'warning',
  negative = 'negative',
}

/**
 * Props that component libraries can implement
 */
export type ButtonProps = Partial<{
  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role
   */
  role: string;
  /**
   * Visual importance
   */
  variant: Variant;
  /**
   * Overall size of the button component
   */
  size: ButtonSize;
  /**
   * Additional variants for button intentions
   */
  intention: ButtonIntention;
  /**
   * Disabled state
   */
  disabled: boolean;
  /**
   * Loading state
   */
  loading: boolean;
  /**
   * Placement of the icon
   */
  icon: ButtonIcon;
  /**
   * What icon to render
   */
  Icon: ICON;
}>;

/**
 * Properties for each color type in a button
 */
export type ButtonColors<Override extends undefined | string = undefined> = {
  textColor?: ColorType<Override>;
  iconColor?: ColorType<Override>;
  backgroundColor?: ColorType<Override>;
  borderColor?: ColorType<Override>;
  outlineColor?: ColorType<Override>;
};

export type ButtonVariants<Override extends undefined | string = undefined> = {
  [key in Variant]: ButtonColors<Override>;
};
