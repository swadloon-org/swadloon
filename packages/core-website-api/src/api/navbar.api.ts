import { Variant } from '@newrade/core-design-system';

import { PartialOrNull } from '../utilities';

import { BlockAPI } from './block.api';
import { NavigationAPI } from './navigation.api';

/**
 * Predefined navbar layouts
 */
export enum NavbarLayout {
  standard = 'standard',
  enterprise = 'enterprise',
  simple = 'simple',
  social = 'social',
}

export type NavbarAPI = PartialOrNull<{
  /**
   * Name of the navbar
   */
  name: string;
  /**
   * Controls the layout of the footer
   */
  layout: NavbarLayout | string;
  /**
   * Controls the visual importance of the navbar.
   */
  variant: Variant;
  /**
   * Navigation links for the Navbar
   */
  navigation: NavigationAPI;
  /**
   * Blocks of content (e.g. text) inside a
   */
  blocks: BlockAPI[];
}>;
