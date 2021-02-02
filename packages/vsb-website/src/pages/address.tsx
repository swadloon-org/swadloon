import { LABEL_SIZE, TEXT_STYLE } from '@newrade/core-design-system';
import { BoxV2, Center, Heading, Label, Paragraph, Stack } from '@newrade/core-react-ui';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { cssTheme } from '../design-system/theme';
import {
  AddressAutoCompleteOptions,
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

  const [isFocus, setFocus] = useState<boolean>(false);
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

  const onSelect = async (data: any) => {
    console.log(data);
  };

  const changeHandler = (evt: any) => {
    const value = evt.target.value;

    setProps({
      ...newProps,
      [evt.target.name]: value,
    });
  };

  const onSuggest = async (evt: any) => {
    const value = evt.target.value;

    setProps({
      ...newProps,
      [evt.target.name]: value,
    });

    // const searchTerm = keys(data)
    //   .map((field) => {
    //     if (data[field]) {
    //       return data[field];
    //     }
    //   })
    //   .join(' ')
    //   .trim();

    const contentAddress: AddressAutoCompleteOptions = {
      SearchTerm: value,
      Country: 'CAN',
      LanguagePreference: 'EN',
      MaxResults: 5,
    };

    const valueSuggestion = await getAddressAutoComplete(contentAddress);

    const setValidationState = () => {
      if (valueSuggestion?.Items?.[0]?.Id !== undefined) {
        setValueSuggestion(valueSuggestion?.Items);
        setSuggestion(true);
      } else if (valueSuggestion?.Items?.[0]?.Id == undefined) {
        setSuggestion(false);
      }
    };
    setValidationState();
  };

  const renderSuggestionsT = (items: any) => {
    return (
      <ul>
        {items.map((suggestion: any) => {
          return (
            <li
              style={{ lineHeight: '1' }}
              key={suggestion.Id}
              onClick={(e) => onSelectSuggestion({ Id: suggestion.Id })}
            >
              {console.log(JSON.stringify(suggestion, null))}
              {`${suggestion.Text} ${suggestion.Description}`}
            </li>
          );
        })}
      </ul>
    );
  };
  // AddressByIdResponse
  const onSelectSuggestion = async (props: AddressByIdOptions) => {
    const response: readonly AddressByIdResponse[] = await getAddressById(props);
    const result: AddressByIdResponse = response[0];
    console.log(result);

    setProps({
      address_1: result.Line1,
      address_2: result.SecondaryStreet,
      city: result.City,
      state: result.ProvinceName,
      country: result.CountryName,
      post_code: result.PostalCode,
    });
    setSuggestion(false);
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
                  onFocus={(e) => onSelect(e.target.name)}
                  onChange={(e) => onSuggest(e)}
                />

                {isSuggestion == true ? renderSuggestionsT(isValueSuggestion) : null}

                <Label variant={LABEL_SIZE.medium} variantStyle={TEXT_STYLE.bold}>
                  Adresse (appartement / bureau)
                </Label>
                <input
                  id="street-address2"
                  name={ADDRESS.ADDRESS_2}
                  value={newProps.address_2}
                  onChange={changeHandler}
                  ref={register}
                />

                <Label variant={LABEL_SIZE.medium} variantStyle={TEXT_STYLE.bold}>
                  Ville
                </Label>
                <input id="city" name={ADDRESS.CITY} value={newProps.city} onChange={changeHandler} ref={register} />

                <Label variant={LABEL_SIZE.medium} variantStyle={TEXT_STYLE.bold}>
                  Province / État
                </Label>
                <input id="state" name={ADDRESS.STATE} value={newProps.state} onChange={changeHandler} ref={register} />

                <Label variant={LABEL_SIZE.medium} variantStyle={TEXT_STYLE.bold}>
                  Code Postal
                </Label>
                <input
                  id="postcode"
                  name={ADDRESS.POST_CODE}
                  value={newProps.post_code}
                  onChange={changeHandler}
                  ref={register}
                />

                <Label variant={LABEL_SIZE.medium} variantStyle={TEXT_STYLE.bold}>
                  Pays
                </Label>
                <input
                  id="country"
                  name={ADDRESS.COUNTRY}
                  value={newProps.country}
                  onChange={changeHandler}
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
