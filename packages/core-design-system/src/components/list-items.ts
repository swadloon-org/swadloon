import { AriaRole } from 'react';

import { PARAGRAPH_SIZE, TEXT_STYLE } from '../foundations/typography.js';

import { Variant } from './components.js';

export enum ListItemAs {
  li = 'li',
}

export type ListItemProps = Partial<ListItemStyleProps>;

/**
 * ListItem component props
 */
export interface ListItemStyleProps {
  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles
   */
  role: AriaRole;
  /**
   * Visual importance
   */
  kind: Variant;
  /**
   * Controls the font size and overall sizing
   */
  size: PARAGRAPH_SIZE;
  /**
   * Applies common text styles
   */
  textStyle: TEXT_STYLE;
}
