import { Center, Heading, Stack, Paragraph, BoxV2, Label, keys } from '@newrade/core-react-ui';
import React, { useState } from 'react';
import { cssTheme } from '../design-system/theme';
import { useForm, SubmitHandler } from 'react-hook-form';

import { LABEL_SIZE, TEXT_STYLE } from '@newrade/core-design-system';
import {
  AddressAutoCompleteOptions,
  getAddressAutoComplete,
  getAddressById,
  AddressByIdOptions,
} from '../services/address.service';
import debounce from 'lodash/debounce';
import value from '@mdx-js/react';

export type AdressFields = {
  street: string;
  city?: string;
  province?: string;
  country?: string;
  postal?: string;
};

const FormAdress: React.FC = (props) => {
  const { register, handleSubmit, errors } = useForm();

  const [isFocus, setFocus] = useState<boolean>(false);
  const [isSuggestion, setSuggestion] = useState<boolean>(false);
  const [isValueSug, setValueSug] = useState<any>();

  const onSubmit: SubmitHandler<any> = async (data) => {};

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

    const validationObject: AddressByIdOptions = {
      Id: await valueTest.Items?.[0]?.Id,
    };

    if (validationObject?.Id !== undefined) {
      console.log(valueTest?.Items);

      setValueSug(await valueTest?.Items);
      setSuggestion(true);
    } else if (validationObject?.Id === undefined) {
      setSuggestion(false);
    }
  };

  const renderSuggestionsT = (items: any) => {
    console.log(isSuggestion);
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
                <input
                  id="street-address"
                  name="address_1"
                  ref={register}
                  onChange={(e) => onSuggest({ street: e.target.value })}
                />

                <input type="text" name="test" id="" onChange={(e) => valueTarget(e.target.name)} />

                {isSuggestion == true ? renderSuggestionsT(isValueSug) : null}

                <Label variant={LABEL_SIZE.medium} variantStyle={TEXT_STYLE.bold}>
                  Adresse (appartement / bureau)
                </Label>
                <input id="street-address2" name="address_2" ref={register} />

                <Label variant={LABEL_SIZE.medium} variantStyle={TEXT_STYLE.bold}>
                  Ville
                </Label>
                <input id="city" name="city" ref={register} />

                <Label variant={LABEL_SIZE.medium} variantStyle={TEXT_STYLE.bold}>
                  Province / État
                </Label>
                <input id="state" name="state" ref={register} />

                <Label variant={LABEL_SIZE.medium} variantStyle={TEXT_STYLE.bold}>
                  Code Postal
                </Label>
                <input id="postcode" name="post_code" ref={register} />

                <Label variant={LABEL_SIZE.medium} variantStyle={TEXT_STYLE.bold}>
                  Pays
                </Label>
                <input id="country" name="country" ref={register} />

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
