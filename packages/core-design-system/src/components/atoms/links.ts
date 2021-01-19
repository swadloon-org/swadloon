import { PARAGRAPH_SIZE } from '../../foundations/typography';
import { ColorType } from '../../types';
import { BoxStyle } from '../atoms/box';

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

export enum LinkStyleVariant {
  normal = 'normal',
  reversed = 'reversed',
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
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role
   */
  role: string;
  /**
   * icon placement
   */
  variantIcon: LinkIcon;
  /**
   * Normal or reversed style
   */
  variantStyle: LinkStyleVariant;
  variant: LinkVariant;
  variantSize: PARAGRAPH_SIZE; // same as paragraph sizes
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
  [key in keyof typeof LinkVariant]: LinkStyle<Override>;
};

export type LinkSizes<Override extends undefined | string = undefined> = {
  [key in keyof typeof LinkSize]: LinkBoxStyle<Override>;
};

export interface Links<Override extends undefined | string = undefined> {
  variants: LinkVariants<Override>;
  sizes: LinkSizes<Override>;
}
