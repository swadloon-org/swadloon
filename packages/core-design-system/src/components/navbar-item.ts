import { ColorType } from '../types';
import { ICON } from '..';

import { BoxStyle } from './box';
import { Variant } from './components.props';

export enum NavbarItemAs {
  button = 'button',
  a = 'a',
  div = 'div',
}

export enum NavbarItemSize {
  medium = 'medium',
  small = 'small',
}

/**
 * Position of the icon
 *
 * @default 'none'
 */
export enum NavbarItemIcon {
  none = 'none',
  icon = 'icon',
  left = 'left',
  right = 'right',
}

export enum NavbarItemState {
  rest = 'rest',
  active = 'active',
  hover = 'hover',
  focused = 'focused',
  loading = 'loading',
  disabled = 'disabled',
}

export type NavbarItemProps = Partial<NavbarItemStyleProps>;

export interface NavbarItemStyleProps {
  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
   */
  role: string;
  variant: Variant;
  icon: NavbarItemIcon;
  Icon: ICON;
  size: NavbarItemSize;
}

export type NavbarItemColors<Override extends undefined | string = undefined> = {
  textColor?: ColorType<Override>;
  iconColor?: ColorType<Override>;
  backgroundColor?: ColorType<Override>;
  borderColor?: ColorType<Override>;
  outlineColor?: ColorType<Override>;
};

export type NavbarItemBoxStyle<Override extends undefined | string = undefined> =
  BoxStyle<Override>;

export type NavbarItemVariants<Override extends undefined | string = undefined> = {
  [key in Variant]: NavbarItemColors<Override>;
};

export type NavbarItemSizes<Override extends undefined | string = undefined> = {
  [key in NavbarItemSize]: NavbarItemBoxStyle<Override>;
};

export type NavbarItems<Override extends undefined | string = undefined> = {
  variants: NavbarItemVariants<Override>;
  sizes: NavbarItemSizes<Override>;
};
