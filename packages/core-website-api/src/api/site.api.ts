import { CompanyAddressAPI } from './company-address.api.js';
import { CompanyInfoAPI } from './company-info.api.js';
import { NavigationAPI } from './navigation.api.js';
import { PageAPI } from './page.api.js';
import { TranslationAPI } from './translation.api.js';

export type SiteAPI = {
  name: string;
  companyInfo?: CompanyInfoAPI;
  companyAddresses?: CompanyAddressAPI;
  translation?: TranslationAPI;
  navigation?: NavigationAPI[];
  pages?: PageAPI[];
};
