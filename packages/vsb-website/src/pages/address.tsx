import { LABEL_SIZE, TEXT_STYLE } from '@newrade/core-design-system';
import { BoxV2, Center, Heading, keys, Label, Paragraph, Stack } from '@newrade/core-react-ui';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { cssTheme } from '../design-system/theme';
import { AddressAutoCompleteOptions, AddressByIdOptions, getAddressAutoComplete } from '../services/address.service';

enum ADDRESS {
  ADDRESS_1 = 'address_1',
  ADDRESS_2 = 'address_2',
  CITY = 'city',
  STATE = 'state',
  POST_CODE = 'post_code',
  COUNTRY = 'country',
}

export type AdressFields = {
  street: string;
  city?: string;
  province?: string;
  country?: string;
  postal?: string;
};

const FormAdress: React.FC = (props) => {
  const { register, handleSubmit } = useForm();

  const [isFocus, setFocus] = useState<boolean>(false);
  const [isSuggestion, setSuggestion] = useState<boolean>(false);
  const [isValueSug, setValueSug] = useState<any>();

  const onSubmit: SubmitHandler<any> = async (data) => {};

  const onSelect = async (data: any) => {
    console.log(data);
  };

  const onSuggest = async (data: AdressFields) => {
    const searchTerm = keys(data)
      .map((field) => {
        if (data[field]) {
          return data[field];
        }
      })
      .join(' ')
      .trim();

    const contentAddress: AddressAutoCompleteOptions = {
      SearchTerm: searchTerm,
      Country: 'CAN',
      LanguagePreference: 'EN',
      MaxResults: 5,
    };
    const valueTest = await getAddressAutoComplete(contentAddress);

    const setValidationState = () => {
      if (valueTest?.Items?.[0]?.Id !== undefined) {
        setValueSug(valueTest?.Items);
        setSuggestion(true);
      } else if (valueTest?.Items?.[0]?.Id == undefined) {
        setSuggestion(false);
      }
    };
    setValidationState();
  };

  const renderSuggestionsT = (items: any) => {
    return (
      <ul>
        {items.map((suggestion: any) => {
          return <li key={suggestion.Id}>{suggestion.Text + suggestion.Description}</li>;
        })}
      </ul>
    );
  };

  const valueTarget = (value: any) => {
    console.log(value);
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
                <input type="text" name="test" id="" onChange={(e) => valueTarget(e.target.name)} />

                <input
                  id="street-address"
                  name={ADDRESS.ADDRESS_1}
                  ref={register}
                  onFocus={(e) => onSelect(e.target.name)}
                  onChange={(e) => onSuggest({ street: e.target.value })}
                />

                {isSuggestion == true ? renderSuggestionsT(isValueSug) : null}

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
