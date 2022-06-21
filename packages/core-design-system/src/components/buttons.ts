import React from 'react';

import { ICON } from '../foundations/iconography.js';
import { ColorType, DeepPartial, SizeType } from '../types.js';

import { BorderStyles, BoxStyle, Margin, OutlineStyles, Padding } from './box.js';
import { Variant } from './components.js';

/**
 * Props for icons in buttons
 */
export type ButtonIconStyle<Override extends undefined | string = undefined> = {
  /**
   * The icon height and width
   */
  iconSize: SizeType<Override>;
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

export type ButtonBoxStyle<Override extends undefined | string = undefined> = {
  width: SizeType<Override>;
  height: SizeType<Override>;
  padding: Padding<Override>;
  border: BorderStyles<Override>;
  outline: OutlineStyles<Override>;
} & ButtonIconStyle<Override>;

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
  textColor: ColorType<Override>;
  textColorActive: ColorType<Override>;
  textColorDisabled: ColorType<Override>;
  iconColor: ColorType<Override>;
  iconColorActive: ColorType<Override>;
  iconColorDisabled: ColorType<Override>;
  backgroundColor: ColorType<Override>;
  backgroundColorActive: ColorType<Override>;
  backgroundColorDisabled: ColorType<Override>;
  borderColor: ColorType<Override>;
  borderColorActive: ColorType<Override>;
  borderColorDisabled: ColorType<Override>;
  outlineColor: ColorType<Override>;
  outlineColorActive: ColorType<Override>;
  outlineColorDisabled: ColorType<Override>;
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
