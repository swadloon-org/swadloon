import { ColorType } from '../types.js';

import { BoxStyle } from './box.js';
import { Variant } from './components.js';

export enum TabAs {
  div = 'div',
}

export enum TabSize {
  medium = 'medium',
}

export enum TabIcon {
  none = 'none', // default
  icon = 'icon',
  left = 'left',
  right = 'right',
}

export enum TabState {
  rest = 'rest',
  pressed = 'pressed',
  active = 'active',
  focused = 'focused',
  loading = 'loading',
  disabled = 'disabled',
}

export type TabProps = Partial<TabStyleProps>;

export interface TabStyleProps {
  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_role
   */
  role: string;
  variant: Variant;
  icon: TabIcon;
  size: TabSize;
  state: TabState;
}

export type TabColors<Override extends undefined | string = undefined> = {
  textColor?: ColorType<Override>;
  iconColor?: ColorType<Override>;
  backgroundColor?: ColorType<Override>;
  borderColor?: ColorType<Override>;
  outlineColor?: ColorType<Override>;
};

export type TabBoxStyle<Override extends undefined | string = undefined> = BoxStyle<Override>;

export type TabVariants<Override extends undefined | string = undefined> = {
  [key in Variant.primary]: TabColors<Override>;
};

export type TabSizes<Override extends undefined | string = undefined> = {
  [key in TabSize]: TabBoxStyle<Override>;
};

export type Tabs<Override extends undefined | string = undefined> = {
  variants: TabVariants<Override>;
  sizes: TabSizes<Override>;
};
