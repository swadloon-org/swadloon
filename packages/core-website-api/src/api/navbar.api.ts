import { BlockAPI } from './block.api';

/**
 * Predefined navbar layouts
 */
export enum NavbarLayout {
  standard = 'standard',
  enterprise = 'enterprise',
  simple = 'simple',
  social = 'social',
}

export type NavbarAPI = {
  /**
   * name should be required
   */
  name?: string | null;
  /**
   * Controls the layout of the footer
   */
  layout?: NavbarLayout | null | string;

  blocks?: (BlockAPI | null | undefined)[] | null;
};
