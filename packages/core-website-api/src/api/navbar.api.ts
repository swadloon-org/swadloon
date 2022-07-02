import { COLOR_MODE, COLOR_SCHEME, Variant } from '@newrade/core-design-system';
import type { PartialOrNull } from '@newrade/core-types';

import { BlockAPI } from './block.api.js';
import { ColorModeAPI } from './color-mode.api.js';
import { NavigationAPI } from './navigation.api.js';

/**
 * Predefined navbar layouts
 */
export enum NavbarLayout {
  standard = 'standard',
  enterprise = 'enterprise',
  simple = 'simple',
  social = 'social',
}

export type NavbarAPI = ColorModeAPI &
  PartialOrNull<{
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
     * Blocks of content (e.g. text) inside a navbar
     */
    blocks: BlockAPI[];
  }>;
