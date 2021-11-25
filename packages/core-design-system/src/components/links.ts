import { AriaRole } from 'react';

import { PARAGRAPH_SIZE, TEXT_STYLE } from '../foundations/typography';
import { ColorType } from '../types';

import { BoxStyle } from './box';
import { Variant } from './components.props';

export enum LinkAs {
  button = 'button',
  a = 'a',
}

export enum LinkSize {
  large = 'large',
  medium = 'medium',
  small = 'small',
}

export enum LinkVariant {
  underline = 'underline',
  noUnderline = 'noUnderline',
}

export enum LinkIcon {
  right = 'right',
}

export enum LinkState {
  rest = 'rest',
  hover = 'hover',
  active = 'active',
  focused = 'focused',
  disabled = 'disabled',
}

export type LinkProps = Partial<LinkStyleProps>;

export interface LinkStyleProps {
  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles
   */
  role: AriaRole;
  /**
   * icon placement
   */
  variantIcon: LinkIcon;
  /**
   * Normal or reversed style
   */
  variantLevel: Variant;
  variant: LinkVariant;
  variantSize: PARAGRAPH_SIZE; // same as paragraph sizes
  variantStyle: TEXT_STYLE; // same as paragraph style
  state: LinkState;
}

export type LinkStyle<Override extends undefined | string = undefined> = {
  textColor?: ColorType<Override>;
  iconColor?: ColorType<Override>;
  backgroundColor?: ColorType<Override>;
  borderColor?: ColorType<Override>;
  outlineColor?: ColorType<Override>;
};

export type LinkBoxStyle<Override extends undefined | string = undefined> = BoxStyle<Override> & {};

export type LinkVariants<Override extends undefined | string = undefined> = {
  [key in LinkVariant]: LinkStyle<Override>;
};

export type LinkSizes<Override extends undefined | string = undefined> = {
  [key in LinkSize]: LinkBoxStyle<Override>;
};

export interface Links<Override extends undefined | string = undefined> {
  variants: LinkVariants<Override>;
  sizes: LinkSizes<Override>;
}
