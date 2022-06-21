import { PartialOrNull } from '../utilities.js';

export type CompanyAddressAPI = PartialOrNull<{
  /**
   * The multiple filed of the company address'
   */
  name: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  postalCode: string;
  provinceState: string;
  country: string;
  phone: string;
  phoneNoFees: string;
  fax: string;
  websiteURL: string;
  email: string;
}>;
