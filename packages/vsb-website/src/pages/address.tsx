import { LABEL_SIZE, TEXT_STYLE } from '@newrade/core-design-system';
import { BoxV2, Center, Heading, Label, Paragraph, Stack } from '@newrade/core-react-ui';
import { debounce } from 'lodash';
import React, { useCallback, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { cssTheme } from '../design-system/theme';
import {
  AddressAutoCompleteOptions,
  AddressAutoCompleteResponse,
  AddressByIdOptions,
  AddressByIdResponse,
  getAddressAutoComplete,
  getAddressById,
} from '../services/address.service';

enum ADDRESS {
  ADDRESS_1 = 'address_1',
  ADDRESS_2 = 'address_2',
  CITY = 'city',
  STATE = 'state',
  POST_CODE = 'post_code',
  COUNTRY = 'country',
}

const FormAdress: React.FC = (props) => {
  const { register, handleSubmit, setValue } = useForm();

  const [isSuggestion, setSuggestion] = useState<boolean>(false);
  const [isValueSuggestion, setValueSuggestion] = useState<any>();

  const onSubmit: SubmitHandler<any> = async (data) => {};

  const debouncedSave = useCallback(
    debounce((value) => {
      if (value !== '') {
        onSuggest(value);
      } else {
        setSuggestion(false);
      }
    }, 500),
    []
  );

  const onChangeHandler = () => {
    return async (event: React.ChangeEvent<HTMLInputElement>) => {
      debouncedSave(event.target.value);
    };
  };

  const onSuggest = async (searchTerm: string) => {
    console.log(searchTerm);
    const contentAddress: AddressAutoCompleteOptions = {
      SearchTerm: searchTerm,
      Country: 'CAN',
      LanguagePreference: 'EN',
      MaxResults: 5,
    };

    const valueSuggestion = await getAddressAutoComplete(contentAddress);

    if (valueSuggestion?.Items?.[0]?.Id !== undefined) {
      setValueSuggestion(valueSuggestion?.Items);
      setSuggestion(true);
    } else if (valueSuggestion?.Items?.[0]?.Id == undefined) {
      setSuggestion(false);
    }
  };

  const handleSelectSuggestion = (suggestion: AddressAutoCompleteResponse) => {
    return async (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
      const newInfos = await onValidateById(suggestion);

      setValue(ADDRESS.ADDRESS_1, newInfos.Line1);
      setValue(ADDRESS.ADDRESS_2, newInfos.SecondaryStreet);
      setValue(ADDRESS.CITY, newInfos.City);
      setValue(ADDRESS.STATE, newInfos.ProvinceName);
      setValue(ADDRESS.COUNTRY, newInfos.CountryName);
      setValue(ADDRESS.POST_CODE, newInfos.PostalCode);
      setSuggestion(false);
    };
  };

  const renderSuggestionsT = (items: AddressAutoCompleteResponse[]) => {
    return (
      <ul>
        {items.map((suggestion: AddressAutoCompleteResponse, index: number) => {
          return (
            <li style={{ lineHeight: '1' }} key={index} onClick={handleSelectSuggestion(suggestion)}>
              {`${suggestion.Text} ${suggestion.Description}`}
              test
            </li>
          );
        })}
      </ul>
    );
  };
  const onValidateById = async (validate: AddressByIdOptions) => {
    const response: readonly AddressByIdResponse[] = await getAddressById(validate);

    const result: AddressByIdResponse = response[0];
    return result;
  };

  return (
    <Center>
      <Stack gap={[cssTheme.sizing.var.x5]}>
        <Heading>Form demo</Heading>
        <Paragraph>This is a test form for vsb-api.</Paragraph>

        <Stack gap={[cssTheme.sizing.var.x3]}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <BoxV2>
              <Stack gap={[cssTheme.sizing.var.x2]}>
                <Label variant={LABEL_SIZE.medium} variantStyle={TEXT_STYLE.bold}>
                  Adresse
                </Label>

                <input id="street-address" name={ADDRESS.ADDRESS_1} ref={register} onChange={onChangeHandler()} />

                {isSuggestion == true ? renderSuggestionsT(isValueSuggestion) : null}

                <Label variant={LABEL_SIZE.medium} variantStyle={TEXT_STYLE.bold}>
                  Adresse (appartement / bureau)
                </Label>
                <input id="street-address2" name={ADDRESS.ADDRESS_2} ref={register} />

                <Label variant={LABEL_SIZE.medium} variantStyle={TEXT_STYLE.bold}>
                  Ville
                </Label>
                <input id="city" name={ADDRESS.CITY} ref={register} />

                <Label variant={LABEL_SIZE.medium} variantStyle={TEXT_STYLE.bold}>
                  Province / État
                </Label>
                <input id="state" name={ADDRESS.STATE} ref={register} />

                <Label variant={LABEL_SIZE.medium} variantStyle={TEXT_STYLE.bold}>
                  Code Postal
                </Label>
                <input id="postcode" name={ADDRESS.POST_CODE} ref={register} />

                <Label variant={LABEL_SIZE.medium} variantStyle={TEXT_STYLE.bold}>
                  Pays
                </Label>
                <input id="country" name={ADDRESS.COUNTRY} ref={register} />

                <input type="submit" />
              </Stack>
            </BoxV2>
          </form>
        </Stack>
      </Stack>
      <div style={{ marginBottom: '600px' }}></div>
    </Center>
  );
};

export default FormAdress;
