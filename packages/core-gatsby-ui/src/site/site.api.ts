import { NavigationAPI } from '../navigation/navigation.api';
import { PageAPI } from '../pages/page.api';

export type SiteAPI = {
  navigation: NavigationAPI[];
  pages: PageAPI[];
};
