import { Center, Heading, Link, Stack, useTreatTheme, Paragraph, BoxV2, Label, keys } from '@newrade/core-react-ui';
import React, { useCallback, useMemo } from 'react';
import { cssTheme } from '../design-system/theme';
import { useForm, SubmitHandler, Controller, useFieldArray } from 'react-hook-form';
import {
  PatientValidation,
  PatientModel,
  PatientAPIRequestBody,
  PatientAPIResponseBody,
  REMINDER_TYPE,
} from '@newrade/vsb-common';
import { yupResolver } from '@hookform/resolvers/yup';
import { SchemaOf, ValidationError } from 'yup';
import { LABEL_SIZE, TEXT_STYLE } from '@newrade/core-design-system';

export type AdressTest = {
  street: string;
  city: string;
  province: string;
  country: string;
  postal: string;
};

const FormAdress: React.FC = (props) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log(
      Object.keys(data)
        .map((test: any, index: number) => {
          if (data[test]) {
            return data[test];
          }
        })
        .join(',')
    );
    let requestUrl: string =
      'http://ws1.postescanada-canadapost.ca/AddressComplete/Interactive/Find/v2.10/json3.ws?Key=TH44-ZJ42-ET17-UY39';

    requestUrl +=
      '&SearchTerm=' +
      encodeURIComponent(
        Object.keys(data)
          .map((test: any, index: number) => {
            if (data[test]) {
              return data[test];
            }
          })
          .toString()
      );
    requestUrl += '&Country=' + encodeURIComponent('CAN');
    requestUrl += '&LanguagePreference=' + encodeURIComponent('EN');
    requestUrl += '&MaxResults=' + encodeURIComponent(8);

    console.log(requestUrl);

    fetch(requestUrl, {})
      .then((response) => response.json())
      .then((data) => data.Items)
      .then((items) => console.log(items));
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
                <input id="street-address" name="address_1" ref={register} />

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
