import { BlockAPI } from './block.api';

/**
 * Predefined footer layouts
 */
export enum FooterLayout {
  standard = 'standard',
  enterprise = 'enterprise',
  simple = 'simple',
  social = 'social',
}

export type FooterAPI = {
  /**
   * name should be required
   */
  name?: string | null;
  /**
   * Controls the layout of the footer
   */
  layout?: FooterLayout | null | string;

  blocks?: (BlockAPI | null | undefined)[] | null;
};
