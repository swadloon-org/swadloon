import { PageAPI } from './page.api';
import { SectionAPI } from './section.api';

export type LinkAPI = {
  type: LinkType;
  name: string;
  label?: string | null;
  url?: string | null;
  page?: PageAPI;
  section?: SectionAPI;
};

enum LinkType {
  EXTERNAL_URL = 'EXTERNAL_URL',
  INTERNAL_PAGE = 'INTERNAL_PAGE',
}
