import { clientEnv } from '../../types/dot-env-client';
import { AUTO_COMPLETE_API_URL, FIND_ADDRESS_BY_ID_API_URL } from '../constants/canada-post.constant';

export type AddressAutoCompleteOptions = {
  SearchTerm: string;
  Key?: string;
  LastId?: string;
  SearchFor?: string;
  Country?: string;
  LanguagePreference?: string;
  MaxSuggestions?: number;
  MaxResults?: number;
};

export type AddressAutoCompleteResponse = {
  Cursor: 0;
  Description: string;
  Highlight: string; // 0-3,4-12
  Id: string;
  Next: string;
  Text: string;
};

export type AddressByIdOptions = {
  Key?: string;
  Id: string;
};

export type AddressByIdResponse = {
  Id?: string;
  DomesticId?: string;
  Language?: string;
  LanguageAlternatives?: string;
  Department?: string;
  Company?: string;
  SubBuilding?: string;
  BuildingNumber?: string;
  BuildingName?: string;
  SecondaryStreet?: string;
  Street?: string;
  Block?: string;
  Neighbourhood?: string;
  District?: string;
  City?: string;
  Line1?: string;
  Line2?: string;
  Line3?: string;
  Line4?: string;
  Line5?: string;
  AdminAreaName?: string;
  AdminAreaCode?: string;
  Province?: string;
  ProvinceName?: string;
  ProvinceCode?: string;
  PostalCode?: string;
  CountryName?: string;
  CountryIso2?: string;
  CountryIso3?: string;
  CountryIsoNumber?: string;
  SortingNumber1?: string;
  SortingNumber2?: string;
  Barcode?: string;
  POBoxNumber?: string;
  Label?: string;
  Type?: string;
  DataLevel?: string;
};

export function formEncode(payload: { [key: string]: string | number | undefined }) {
  const urlEncoded = new URLSearchParams();
  Object.keys(payload).forEach((key) => {
    const value: any = payload[key];
    urlEncoded.append(key, value);
  });
  return urlEncoded;
}

/**
 * @see https://www.canadapost.ca/pca/support/webservice/addresscomplete/interactive/find/2.1/
 */
export async function getAddressAutoComplete(options: AddressAutoCompleteOptions) {
  try {
    const encodedParams = formEncode({ ...options, Key: clientEnv.CANADA_POST_API_KEY_VSB });

    const response = await fetch(`${AUTO_COMPLETE_API_URL}?${encodedParams}`);
    const result = await response.json();

    return result;
  } catch (error) {
    throw Error('invalid suggestion');
  }
}

export async function getAddressById(
  options: AddressByIdOptions
): Promise<{ Items: (AddressByIdResponse | undefined)[] | undefined }> {
  try {
    const encodedParams = formEncode({ ...options, Key: clientEnv.CANADA_POST_API_KEY_VSB });

    const response = await fetch(`${FIND_ADDRESS_BY_ID_API_URL}?${encodedParams}`);
    const result = await response.json();

    return result;
  } catch (error) {
    throw Error('not good');
  }
}
