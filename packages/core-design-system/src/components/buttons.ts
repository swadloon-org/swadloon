import React from 'react';

import { ICON } from '../foundations/iconography';
import { ColorType, DeepPartial, SizeType } from '../types';

import { BoxStyle, Margin } from './box';
import { Variant } from './components';

/**
 * Props for icons in buttons
 */
export type ButtonIconStyle<Override extends undefined | string = undefined> = {
  /**
   * The icon height and width
   */
  iconSize?: SizeType<Override>;
  /**
   * Used to control specific spacing around icons in button
   * (will be ignored in Button rendering only the icon )
   */
  iconMargin: Margin<Override>;
  /**
   * Padding specific for icon buttons
   */
  iconPadding: SizeType<Override>;
  /**
   * Padding specific for icon only button
   */
  iconOnlyPadding: SizeType<Override>;
};

export type ButtonBoxStyle<Override extends undefined | string = undefined> = BoxStyle<Override> &
  ButtonIconStyle<Override>;

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
  /** default */
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
  positive = 'positive',
  warning = 'warning',
  danger = 'danger',
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
  variant: Variant | ButtonIntention;
  /**
   * Overall size of the button component
   */
  size: ButtonSize;
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

/**
 * Color configuration for buttons
 */
export type ButtonVariants<Override extends undefined | string = undefined> = {
  [key in Variant | ButtonIntention]: ButtonColors<Override>;
};

/**
 * Buttons
 *
 * @description Types to describe every variants and styles of our buttons.
 */
export type Buttons<Override extends undefined | string = undefined> = {
  variants: ButtonVariants<Override>;
  sizes: ButtonSizes<Override>;

  /**
   * Reference to variables (string) to be used in place of defined values when a theme is created.
   * This should not be used for default themes since they are used to generate the base contracts.
   */
  vars?: Omit<ButtonsVars, 'vars'>;
};

export type ButtonsVars = DeepPartial<Buttons<string>>;
