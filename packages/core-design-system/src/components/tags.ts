import { ColorType } from '../types.js';

import { BoxStyle } from './box.js';
import { Variant } from './components.js';

export enum TagAs {
  div = 'div',
}

export enum TagSize {
  medium = 'medium',
  small = 'small',
}

export enum TagState {
  rest = 'rest',
}

export type TagProps = Partial<TagStyleProps>;

export interface TagStyleProps {
  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role
   */
  role: string;
  variant: Variant;
  size: TagSize;
  state: TagState;
}

export type TagColors<Override extends undefined | string = undefined> = {
  textColor?: ColorType<Override>;
  backgroundColor?: ColorType<Override>;
  borderColor?: ColorType<Override>;
};

export type TagBoxStyle<Override extends undefined | string = undefined> = BoxStyle<Override> & {};

export type TagVariants<Override extends undefined | string = undefined> = {
  [key in Variant]: TagColors<Override>;
};

export type TagSizes<Override extends undefined | string = undefined> = {
  [key in TagSize]: TagBoxStyle<Override>;
};

export interface Tags<Override extends undefined | string = undefined> {
  variants: TagVariants<Override>;
  sizes: TagSizes<Override>;
}
