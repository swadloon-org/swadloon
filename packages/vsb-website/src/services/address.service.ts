// import { ErrorService } from './error.service';
// import { SitefinityAuthService } from './sitefinity-auth.service';

// let requestUrl: string =
//   'http://ws1.postescanada-canadapost.ca/AddressComplete/Interactive/Find/v2.10/json3.ws?Key=TH44-ZJ42-ET17-UY39';

// requestUrl += '&SearchTerm=' + encodeURIComponent(data.street);
// requestUrl += '&Country=' + encodeURIComponent('CAN');
// requestUrl += '&MaxResults=' + encodeURIComponent(8);

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

/**
 * @see https://www.canadapost.ca/pca/support/webservice/addresscomplete/interactive/find/2.1/
 */
// export async function getAddressAutoComplete(options: AddressAutoCompleteOptions) {
//   try {
//     const encodedParams = SitefinityAuthService.formEncode({ ...options, Key: CLIENT_CONFIG.CANADA_POST_API_KEY });

//     const response = await fetch(`${AUTO_COMPLETE_API_URL}?${encodedParams}`);
//     return ErrorService.parseResponse<{ Items: readonly AddressAutoCompleteResponse[] }>({ context: Error() })(
//       response
//     );
//   } catch (error) {
//     throw ErrorService.parseError(error, Error());
//   }
// }

// export async function getAddressById(options: AddressByIdOptions) {
//   try {
//     const encodedParams = SitefinityAuthService.formEncode({ ...options, Key: CLIENT_CONFIG.CANADA_POST_API_KEY });

//     const response = await fetch(`${FIND_ADDRESS_BY_ID_API_URL}?${encodedParams}`);
//     return ErrorService.parseResponse<{ Items: readonly AddressByIdResponse[] }>({ context: Error() })(response);
//   } catch (error) {
//     throw ErrorService.parseError(error, Error());
//   }
// }
