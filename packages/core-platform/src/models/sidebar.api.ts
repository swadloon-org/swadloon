import { Variant } from '@newrade/core-design-system';

import { PartialOrNull } from '../utilities.js';

import { BlockAPI } from './block.api.js';
import { CompanyInfoAPI } from './company-info.api.js';
import { NavigationAPI } from './navigation.api.js';

/**
 * Predefined sidebar layouts
 */
export enum SidebarLayout {
  standard = 'standard',
  docs = 'docs',
}

export type SidebarAPI = PartialOrNull<{
  /**
   * Name of the sidebar
   */
  name: string;
  /**
   * Controls the layout of the sidebar
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
