import { AriaRole } from 'react';

import { ICON } from '../foundations/iconography.js';
import { PARAGRAPH_SIZE, TEXT_STYLE } from '../foundations/typography.js';
import { ColorType } from '../types.js';

import { BoxStyle } from './box.js';
import { Variant } from './components.js';

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
  none = 'none',
}

export enum LinkState {
  rest = 'rest',
  hover = 'hover',
  active = 'active',
  focused = 'focused',
  disabled = 'disabled',
}

export type LinkProps = Partial<{
  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles
   */
  role: AriaRole;
  /**
   * icon placement
   */
  icon: LinkIcon;
  /**
   * What icon to render
   */
  Icon: ICON;
  /**
   * Visual importance
   */
  kind: Variant;
  /**
   * Controls the font size and overall sizing (follows paragraph sizes)
   */
  size: PARAGRAPH_SIZE; // same as paragraph sizes
  /**
   * Variant for link rendering
   */
  linkStyle: LinkVariant;
  /**
   * Applies common text styles
   */
  textStyle: TEXT_STYLE;
}>;

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
