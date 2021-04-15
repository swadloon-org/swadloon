import { Variant } from '@newrade/core-design-system';
import { PageAPI } from './page.api';
import { SectionAPI } from './section.api';

export type LinkAPI = {
  name: string;
  type: LinkType;
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

enum LinkType {
  EXTERNAL_URL = 'EXTERNAL_URL',
  INTERNAL_PAGE = 'INTERNAL_PAGE',
}
