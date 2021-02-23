import { PageAPI } from '../pages/page.api';

export type LinkAPI = {
  name: string;
  label: string;
  page: PageAPI;
};
