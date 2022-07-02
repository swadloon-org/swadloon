import { Variant } from '@newrade/core-design-system';

import type { PartialOrNull } from '@newrade/core-types';

import { BlockAPI } from './block.api.js';
import { BlockGoogleMapAPI } from './block-google-map.api.js';
import { BlockImageAPIV1, BlockImageAPIV2 } from './block-image.api.js';
import { ColorModeAPI } from './color-mode.api.js';

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

export type SectionBlock =
  | BlockAPI
  | BlockImageAPIV1
  | BlockImageAPIV2
  | BlockGoogleMapAPI
  | null
  | undefined;

export type SectionAPI = ColorModeAPI &
  PartialOrNull<{
    /**
     * name should be required
     */
    name: string;
    /**
     * Controls the visual importance of the section.
     */
    variant: Variant;
    /**
     * Predefined layouts for the section
     */
    layout: SectionLayout | string;
    /**
     * Common layout options for wide or centered content
     */
    baseLayout: SectionBaseLayout | string;
    /**
     * Presets for vertical padding.
     */
    padding: SectionPadding | string;
    /**
     * Content block
     */
    blocks: SectionBlock[];
  }>;
