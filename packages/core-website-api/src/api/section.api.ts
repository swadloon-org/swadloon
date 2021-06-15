import { Variant } from '@newrade/core-design-system';
import { BlockAPI } from './block.api';

export enum SectionBaseLayout {
  /**
   * Will honor the content margins.
   */
  center = 'center',
  /**
   * Will take up all width available.
   */
  fullWidth = 'fullWidth',
}

/**
 * Predefined section paddings
 */
export enum SectionPadding {
  large = 'large',
  medium = 'medium',
  small = 'small',
  none = 'none',
}

/**
 * Predefined section layouts
 */
export enum SectionLayout {
  switcher = 'switcher',
  statement = 'statement',
  stack = 'stack',
  divider = 'divider',
  banner = 'banner',
  callout = 'callout',
  showcase = 'showcase',
  messenger = 'messenger',
}

export type SectionAPI = {
  /**
   * name should be required
   */
  name?: string | null;
  /**
   * Controls the visual importance of the section.
   */
  variant?: Variant;
  layout?: SectionLayout | null | string;
  baseLayout?: SectionBaseLayout | null | string;
  /**
   * Presets for vertical padding.
   */
  padding?: SectionPadding | null | string;
  blocks?: (BlockAPI | null | undefined)[] | null;
};
