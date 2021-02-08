import { CLIENT_CONFIG } from '../constants/client-config.constant';
import { AUTO_COMPLETE_API_URL } from '../constants/canada-post.constant';
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

    // const response = await fetch(`${AUTO_COMPLETE_API_URL}?${encodedParams}`);
    // const result = await response.json();

    // return result;
    return {
      Items: [
        {
          Id: 'CA|CP|ENG|NS-HALIFAX-FENWICK_ST-5595',
          Text: '5595 Fenwick St',
          Highlight: '0-4',
          Cursor: 0,
          Description: 'Halifax, NS, B3H 4M2 - 16 Addresses',
          Next: 'Find',
        },
        {
          Id: 'CA|CP|A|52030',
          Text: '5595 Av Irving',
          Highlight: '0-4',
          Cursor: 0,
          Description: 'Saint-Hubert, QC, J3Y 1H2',
          Next: 'Retrieve',
        },
        {
          Id: 'CA|CP|A|111918',
          Text: '5595 Muermann Rd',
          Highlight: '0-4',
          Cursor: 0,
          Description: 'Prince George, BC, V2K 5V8',
          Next: 'Retrieve',
        },
        {
          Id: 'CA|CP|A|130769',
          Text: '5595 Rue Hercule',
          Highlight: '0-4',
          Cursor: 0,
          Description: 'Sherbrooke, QC, J1N 2J4',
          Next: 'Retrieve',
        },
        {
          Id: 'CA|CP|ENG|ON-NIAGARA_FALLS-DRUMMOND_RD-5595',
          Text: '5595 Drummond Rd',
          Highlight: '0-4',
          Cursor: 0,
          Description: 'Niagara Falls, ON, L2G 4L2 - 27 Addresses',
          Next: 'Find',
        },
        {
          Id: 'CA|CP|A|156290',
          Text: '5595 Grove Ave',
          Highlight: '0-4',
          Cursor: 0,
          Description: 'Delta, BC, V4K 2A6',
          Next: 'Retrieve',
        },
        {
          Id: 'CA|CP|A|159517',
          Text: '5595 Clearwater Lake Rd',
          Highlight: '0-4',
          Cursor: 0,
          Description: 'Sudbury, ON, P3G 1L9',
          Next: 'Retrieve',
        },
      ],
    };
  } catch (error) {
    // throw ErrorService.parseError(error, Error());
    throw Error('not good');
  }
}

export async function getAddressById(options: AddressByIdOptions) {
  try {
    const encodedParams = formEncode({ ...options, Key: CLIENT_CONFIG.CANADA_POST_API_KEY });

    // const response = await fetch(`${FIND_ADDRESS_BY_ID_API_URL}?${encodedParams}`);
    // return ErrorService.parseResponse<{ Items: readonly AddressByIdResponse[] }>({ context: Error() })(response);
    // const result = await response.json();

    return [
      {
        Id: 'string',
        DomesticId: 'string',
        Language: 'string',
        LanguageAlternatives: 'string',
        Department: 'string',
        Company: 'string',
        SubBuilding: 'string',
        BuildingNumber: 'string',
        BuildingName: 'string',
        SecondaryStreet: 'string',
        Street: 'string',
        Block: 'string',
        Neighbourhood: 'string',
        District: 'string',
        City: 'string',
        Line1: 'string',
        Line2: 'string',
        Line3: 'string',
        Line4: 'string',
        Line5: 'string',
        AdminAreaName: 'string',
        AdminAreaCode: 'string',
        Province: 'string',
        ProvinceName: 'string',
        ProvinceCode: 'string',
        PostalCode: 'string',
        CountryName: 'string',
        CountryIso2: 'string',
        CountryIso3: 'string',
        CountryIsoNumber: 'string',
        SortingNumber1: 'string',
        SortingNumber2: 'string',
        Barcode: 'string',
        POBoxNumber: 'string',
        Label: 'string',
        Type: 'string',
        DataLevel: 'string',
      },
    ];
  } catch (error) {
    // throw ErrorService.parseError(error, Error());
    throw Error('not good');
  }
}
