import { NavigationAPI } from './navigation.api';
import { PageAPI } from './page.api';
import { TranslationAPI } from './translation.api';

export type SiteAPI = {
  name: string;
  companyInfo: any;
  companyAddresses: any;
  translation: TranslationAPI;
  navigation: NavigationAPI[];
  pages: PageAPI[];
};
