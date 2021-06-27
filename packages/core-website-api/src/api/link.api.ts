import { ICON, Variant } from '@newrade/core-design-system';
import { PartialOrNull } from '../utilities';
import { PageAPI } from './page.api';
import { SectionAPI } from './section.api';

export enum LinkType {
  externalUrl = 'externalUrl',
  internalPage = 'internalPage',
}

export enum LinkComponent {
  link = 'link',
  button = 'button',
  buttonIcon = 'buttonIcon',
  menuitem = 'menuItem',
}

export type LinkAPI = PartialOrNull<{
  /**
   * Identifier of the link
   */
  name: string;
  /**
   * Text displayed to the user
   */
  label: string;
  /**
   * Alt text description of the link
   */
  text: string;
  /**
   * Importance of the link
   */
  variant: Variant | string;
  /**
   * How the link is rendered
   * @default 'link'
   */
  component: LinkComponent;
  /**
   * Certain component support the icon option
   */
  icon: ICON;
  /**
   * Can be internal (pages or sections) or an external link to a url
   */
  type: LinkType;
  /**
   * For link of type external url, a url to an external website
   */
  url: string;
  /**
   * Link to page
   */
  page: PageAPI;
  /**
   * Link to a section
   */
  section: SectionAPI;
}>;
