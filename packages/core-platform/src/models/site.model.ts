import { CompanyAddressAPI } from './company-address.api';
import { CompanyInfoAPI } from './company-info.api';
import { NavigationAPI } from './navigation.api';
import { PageAPI } from './page.api';
import { TranslationAPI } from './translation.api';

export type Site = {
  name: string;
  companyInfo?: CompanyInfoAPI;
  companyAddresses?: CompanyAddressAPI;
  translation?: TranslationAPI;
  navigation?: NavigationAPI[];
  pages?: PageAPI[];
};
