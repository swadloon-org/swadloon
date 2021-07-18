import { PartialOrNull } from '../utilities';
import { BlockAPI } from './block.api';
import { NavigationAPI } from './navigation.api';
import { Variant } from '@newrade/core-design-system';
import { CompanyInfoAPI } from './company-info.api';

/**
 * Predefined sidebar layouts
 */
export enum SidebarLayout {
  standard = 'standard',
  enterprise = 'enterprise',
  simple = 'simple',
  social = 'social',
}

export type SidebarAPI = PartialOrNull<{
  /**
   * Name of the sidebar
   */
  name: string;
  /**
   * Controls the layout of the footer
   */
  layout: SidebarLayout | string;
  /**
   * Controls the visual importance of the sidebar.
   */
  variant: Variant;
  /**
   * Navigation links for the Sidebar
   */
  navigation: NavigationAPI;
  /**
   * Blocks of content (e.g. text)
   */
  blocks: BlockAPI[];
  /**
   * Company info config object for the sidebar
   */
  companyInfo: CompanyInfoAPI;
  /**
   * Version of the website or app
   */
  version: string;
}>;
