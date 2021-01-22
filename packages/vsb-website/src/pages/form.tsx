import { Center, Heading, Link, Stack, useTreatTheme, Paragraph, BoxV2, Label, keys } from '@newrade/core-react-ui';
import React, { useCallback, useMemo } from 'react';
import { cssTheme } from '../design-system/theme';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

import Cleave from 'cleave.js/react';
import 'cleave.js/dist/addons/cleave-phone.ca';

import {
  PatientValidation,
  PatientModel,
  PatientAPIRequestBody,
  PatientAPIResponseBody,
  REMINDER_TYPE,
} from '@newrade/vsb-common';
import { yupResolver } from '@hookform/resolvers/yup';
import { SchemaOf, ValidationError } from 'yup';
import * as styleRefs from './from.treat';
import { useStyles } from 'react-treat';
import { LABEL_SIZE, TEXT_STYLE } from '@newrade/core-design-system';
import { object } from 'io-ts';
import { date } from 'yup/lib/locale';
import { delimiter } from 'path';

export interface ISignUpData {
  street: string;
  city: string;
  province: string;
  country: string;
  postal: string;
}

const useYupValidationResolver = (PatientValidation: SchemaOf<PatientModel>) =>
  useCallback(
    async (patient) => {
      try {
        const values = await PatientValidation.validate(patient, {
          abortEarly: false,
          strict: true,
        });

        return {
          values,
          errors: {},
        };
      } catch (errors) {
        return {
          values: {},
          errors: errors.inner.reduce(
            (allErrors: Array<ValidationError>, currentError: any) => ({
              ...allErrors,

              [currentError.path]: {
                type: currentError.type ?? 'validation',
                message: currentError.message,
              },
            }),
            {}
          ),
        };
      }
    },
    [PatientValidation]
  );

const Form: React.FC = (props) => {
  const styles = useStyles(styleRefs);

  const resolver = useYupValidationResolver(PatientValidation);

  const {
    register,
    handleSubmit,
    control,
    setError,
    errors,
    formState: { isDirty, isSubmitting, touched, submitCount, isValid },
  } = useForm<PatientModel>({ mode: 'onBlur', resolver });

  const onSubmit: SubmitHandler<PatientModel> = (data) => {
    console.log(JSON.stringify(data));
    fetch('http://localhost:10003/api/register', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ api: 'vsb-api', payload: { patient: { ...data } } }, null, 2),
    })
      .then((response) => response.json())
      .then((result: PatientAPIResponseBody) => {
        if (result.errors) {
          result.errors.map((error) => {
            console.log(error);
          });
        }
        result.payload.validationErrors.map((validationError) => {
          if (validationError) {
            setError(validationError.path as keyof PatientModel, {
              type: 'manual',
              message: validationError.message,
            });
          }
        });
      });
  };

  // const phoneValidation = new Cleave('.phone-validation', {
  //   phone: true,
  //   phoneRegionCode: 'CA',
  // });

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
                  Prénom
                </Label>
                <input name="first_name" ref={register} autoComplete="given-name" defaultValue="MyName" />
                <Label variant={LABEL_SIZE.medium} variantStyle={TEXT_STYLE.bold}>
                  Nom de famille
                </Label>
                <input name="last_name" ref={register} autoComplete="last-name" defaultValue="MyLastName" />
                <Label variant={LABEL_SIZE.medium} variantStyle={TEXT_STYLE.bold}>
                  Date de naissance
                </Label>

                <Controller
                  name="date_of_birth"
                  control={control}
                  defaultValue="01-01-2000"
                  as={<Cleave ref={register} options={{ date: true, datePattern: ['d', 'm', 'Y'], delimiter: '-' }} />}
                />

                <Label variant={LABEL_SIZE.medium} variantStyle={TEXT_STYLE.bold}>
                  Sex
                </Label>
                <input name="sex" ref={register} autoComplete="sex" defaultValue="Homme" />
                <Label variant={LABEL_SIZE.medium} variantStyle={TEXT_STYLE.bold}>
                  RAMQ
                </Label>
                <input name="medicare" ref={register} autoComplete="" defaultValue="MYN-UMB-ERV" />
                <Label variant={LABEL_SIZE.medium} variantStyle={TEXT_STYLE.bold}>
                  Téléphone Type
                </Label>
                <input name={`patient_phone_numbers[${0}].phone_type`} ref={register} defaultValue="Mobile" />
                <Label variant={LABEL_SIZE.medium} variantStyle={TEXT_STYLE.bold}>
                  Téléphone
                </Label>

                <Controller
                  name={`patient_phone_numbers[${0}].number`}
                  control={control}
                  defaultValue="1 555-555-555"
                  as={
                    <Cleave
                      ref={register}
                      type="tel"
                      options={{ phone: true, phoneRegionCode: 'CA', delimiter: '-' }}
                      autoComplete="tel"
                    />
                  }
                />

                <Label variant={LABEL_SIZE.medium} variantStyle={TEXT_STYLE.bold}>
                  Courriel
                </Label>
                <input type="email" name="email" ref={register} autoComplete="email" defaultValue="myemail@email.com" />

                <Label variant={LABEL_SIZE.medium} variantStyle={TEXT_STYLE.bold}>
                  Adresse
                </Label>
                <input name="address_1" ref={register} autoComplete="address-line1" defaultValue="1020 rue Quintin" />

                <Label variant={LABEL_SIZE.medium} variantStyle={TEXT_STYLE.bold}>
                  Adresse (appartement / bureau)
                </Label>
                <input name="address_2" ref={register} autoComplete="address-line2" />

                <Label variant={LABEL_SIZE.medium} variantStyle={TEXT_STYLE.bold}>
                  Ville
                </Label>
                <input name="city" ref={register} autoComplete="address-level2" defaultValue="Saint-Jérôme" />

                <Label variant={LABEL_SIZE.medium} variantStyle={TEXT_STYLE.bold}>
                  État
                </Label>
                <input name="state" ref={register} autoComplete="address-level1" defaultValue="Québec" />

                <Label variant={LABEL_SIZE.medium} variantStyle={TEXT_STYLE.bold}>
                  Code Postal
                </Label>
                <input name="post_code" ref={register} autoComplete="postal-code" defaultValue="JJJ-JJJ" />

                <Label variant={LABEL_SIZE.medium} variantStyle={TEXT_STYLE.bold}>
                  Pays
                </Label>
                <input name="country" ref={register} autoComplete="country-name" defaultValue="Canada" />

                <Label variant={LABEL_SIZE.medium} variantStyle={TEXT_STYLE.bold}>
                  Type de rappel automatisé
                </Label>
                <input list="reminder_type" name="reminder_type" ref={register} defaultValue="SMS" />

                <datalist id="reminder_type">
                  {keys(REMINDER_TYPE).map((element, index) => {
                    return <option key={index} value={REMINDER_TYPE[element]} />;
                  })}
                </datalist>
                {console.log(isSubmitting)}
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

export default Form;
