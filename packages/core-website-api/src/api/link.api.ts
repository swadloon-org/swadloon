import { ComponentSize, ICON, Variant } from '@newrade/core-design-system';

import { PartialOrNull } from '../utilities';

import { PageAPI } from './page.api';
import { SectionAPI } from './section.api';

export enum LinkType {
  externalUrl = 'externalUrl',
  internalPage = 'internalPage',
}

export enum LinkComponent {
  /**
   * Link renders link (e.g. a <a/> element)
   */
  link = 'link',
  /**
   * Renders a link object as a button component
   */
  button = 'button',
  /**
   * Renders a link object as a button component with an icon
   */
  buttonIcon = 'buttonIcon',
  /**
   * Renders a logo image (vector or raster) as a link
   */
  logo = 'logo',
  /**
   * Render a menu item (should be contained in a menu navigation object)
   */
  menuItem = 'menuItem',
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
   * The size of the rendered component
   */
  size: ComponentSize;
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
