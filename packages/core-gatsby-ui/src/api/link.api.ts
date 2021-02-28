import { PageAPI } from './page.api';

export type LinkAPI = {
  name: string;
  label: string;
  page: PageAPI;
};
