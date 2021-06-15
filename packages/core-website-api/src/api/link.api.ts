import { Icon, Variant } from '@newrade/core-design-system';
import { PageAPI } from './page.api';
import { SectionAPI } from './section.api';

export type LinkAPI = {
  /**
   * Identifier of the link
   */
  name: string;
  /**
   * Can be internal (pages or sections) or an external link to a url
   */
  type: LinkType;
  /**
   * Importance of the link
   */
  variant?: Variant | null | string;
  /**
   * How the link is rendered
   * @default 'link'
   */
  component?: LinkComponent;
  /**
   * Certain component support the icon option
   */
  icon?: Icon;
  /**
   * Text displayed to the user
   */
  label?: string | null;
  /**
   * For link of type external url, a url to an external website
   */
  url?: string | null;
  /**
   * Link to page
   */
  page?: PageAPI;
  /**
   * Link to a section
   */
  section?: SectionAPI;
};

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
