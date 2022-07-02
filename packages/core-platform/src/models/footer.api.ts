import { Variant } from '@newrade/core-design-system';

import type { PartialOrNull } from '@newrade/core-types';

import { BlockAPI } from './block.api.js';
import { ColorModeAPI } from './color-mode.api.js';
import { CompanyAddressAPI } from './company-address.api.js';
import { CompanyInfoAPI } from './company-info.api.js';
import { LinkAPI } from './link.api.js';
import { NavigationAPI } from './navigation.api.js';

/**
 * Predefined footer layouts
 */
export enum FooterLayout {
  standard = 'standard',
  enterprise = 'enterprise',
  simple = 'simple',
  social = 'social',
  docs = 'docs',
}

export type FooterAPI = ColorModeAPI &
  PartialOrNull<{
    /**
     * Name of the navbar
     */
    name: string;
    /**
     * Controls the layout of the footer
     */
    layout: FooterLayout;
    /**
     * Controls the visual importance of the footer.
     */
    variant: Variant;
    /**
     * Navigation links for the Footer
     */
    navigation: NavigationAPI;
    /**
     * Company info config object for the footer
     */
    companyInfo: CompanyInfoAPI;
    /**
     * Company info config object for the footer
     */
    companyAddresses: CompanyAddressAPI[];
    /**
     * Blocks of content (e.g. text) inside a Footer
     */
    blocks: BlockAPI[];
    /**
     * Link to privacy notice link page
     */
    privacyNoticeLinks: LinkAPI;
    /**
     * Link to terms of service or use page
     */
    termsOfServicesLink: LinkAPI;
    /**
     * Version of the website or app
     */
    version: string;
  }>;
