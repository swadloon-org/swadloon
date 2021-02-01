import { AUTO_COMPLETE_API_URL, FIND_ADDRESS_BY_ID_API_URL } from '../constants/canada-post.constant';
import { CLIENT_CONFIG } from '../constants/client-config.constant';
// import { ErrorService } from './error.service';

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
    const encodedParams = formEncode({ ...options, Key: CLIENT_CONFIG.CANADA_POST_API_KEY });

    const response = await fetch(`${AUTO_COMPLETE_API_URL}?${encodedParams}`);
    const result = await response.json();
    return result;
  } catch (error) {
    // throw ErrorService.parseError(error, Error());
    throw Error('not good');
  }
}

export async function getAddressById(options: AddressByIdOptions) {
  try {
    const encodedParams = formEncode({ ...options, Key: CLIENT_CONFIG.CANADA_POST_API_KEY });

    const response = await fetch(`${FIND_ADDRESS_BY_ID_API_URL}?${encodedParams}`);
    // return ErrorService.parseResponse<{ Items: readonly AddressByIdResponse[] }>({ context: Error() })(response);
    const result = await response.json();

    return result.Items;
  } catch (error) {
    // throw ErrorService.parseError(error, Error());
    throw Error('not good');
  }
}
