import { Variant } from '@newrade/core-design-system';
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
  component?: 'link' | 'button' | 'menuItem';
  icon?: boolean;
  label?: string | null;
  url?: string | null;
  page?: PageAPI;
  section?: SectionAPI;
};

export enum LinkType {
  externalUrl = 'externalUrl',
  internalPage = 'internalPage',
}

export enum LinkComponent {
  link = 'link',
  button = 'button',
  menuitem = 'menuItem',
}
