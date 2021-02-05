import { LABEL_SIZE, TEXT_STYLE } from '@newrade/core-design-system';
import { BoxV2, Center, Heading, Label, Paragraph, Stack } from '@newrade/core-react-ui';
import { debounce } from 'lodash';
import React, { useState } from 'react';
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

type AdressFields = {
  address_1?: string;
  address_2?: string;
  city?: string;
  state?: string;
  country?: string;
  post_code?: string;
};

const FormAdress: React.FC = (props) => {
  const { register, handleSubmit } = useForm();

  const [isSuggestion, setSuggestion] = useState<boolean>(false);
  const [isValueSuggestion, setValueSuggestion] = useState<any>();

  const [newProps, setProps] = useState<AdressFields>({
    address_1: '',
    address_2: '',
    city: '',
    state: '',
    country: '',
    post_code: '',
  });

  const onSubmit: SubmitHandler<any> = async (data) => {};

  const onChangeHandler = (autoComplete?: boolean) => {
    return async (event: React.ChangeEvent<HTMLInputElement>) => {
      const name = event.target.name;
      const value = event.target.value;

      setProps({
        ...newProps,
        [name]: value,
      });
      if (autoComplete) {
        const delayedHandleChange = debounce((value) => onSuggest(value), 500);
        delayedHandleChange(value);
      }
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

      setProps({
        address_1: newInfos.Line1,
        address_2: newInfos.SecondaryStreet,
        city: newInfos.City,
        state: newInfos.ProvinceName,
        country: newInfos.CountryName,
        post_code: newInfos.PostalCode,
      });
      setSuggestion(false);
    };
  };

  const renderSuggestionsT = (items: AddressAutoCompleteResponse[]) => {
    return (
      <ul>
        {items.map((suggestion: AddressAutoCompleteResponse, index: number) => {
          return (
            <li style={{ lineHeight: '1' }} key={index} onClick={handleSelectSuggestion(suggestion)}>
              {/* {console.log(JSON.stringify(suggestion, null))} */}
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

                <input
                  id="street-address"
                  name={ADDRESS.ADDRESS_1}
                  ref={register}
                  value={newProps.address_1}
                  onChange={onChangeHandler(true)}
                />

                {isSuggestion == true ? renderSuggestionsT(isValueSuggestion) : null}

                <Label variant={LABEL_SIZE.medium} variantStyle={TEXT_STYLE.bold}>
                  Adresse (appartement / bureau)
                </Label>
                <input
                  id="street-address2"
                  name={ADDRESS.ADDRESS_2}
                  value={newProps.address_2}
                  onChange={onChangeHandler()}
                  ref={register}
                />

                <Label variant={LABEL_SIZE.medium} variantStyle={TEXT_STYLE.bold}>
                  Ville
                </Label>
                <input
                  id="city"
                  name={ADDRESS.CITY}
                  value={newProps.city}
                  onChange={onChangeHandler()}
                  ref={register}
                />

                <Label variant={LABEL_SIZE.medium} variantStyle={TEXT_STYLE.bold}>
                  Province / État
                </Label>
                <input
                  id="state"
                  name={ADDRESS.STATE}
                  value={newProps.state}
                  onChange={onChangeHandler()}
                  ref={register}
                />

                <Label variant={LABEL_SIZE.medium} variantStyle={TEXT_STYLE.bold}>
                  Code Postal
                </Label>
                <input
                  id="postcode"
                  name={ADDRESS.POST_CODE}
                  value={newProps.post_code}
                  onChange={onChangeHandler()}
                  ref={register}
                />

                <Label variant={LABEL_SIZE.medium} variantStyle={TEXT_STYLE.bold}>
                  Pays
                </Label>
                <input
                  id="country"
                  name={ADDRESS.COUNTRY}
                  value={newProps.country}
                  onChange={onChangeHandler()}
                  ref={register}
                />

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
