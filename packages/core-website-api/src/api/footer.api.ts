import { Variant } from '@newrade/core-design-system';
import { PartialOrNull } from '../utilities';
import { BlockAPI } from './block.api';
import { CompanyInfoAPI } from './company-info.api';
import { LinkAPI } from './link.api';
import { NavigationAPI } from './navigation.api';

/**
 * Predefined footer layouts
 */
export enum FooterLayout {
  standard = 'standard',
  enterprise = 'enterprise',
  simple = 'simple',
  social = 'social',
}

export type FooterAPI = PartialOrNull<{
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
