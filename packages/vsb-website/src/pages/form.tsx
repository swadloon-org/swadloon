import { Center, Heading, Link, Stack, useTreatTheme, Paragraph, BoxV2 } from '@newrade/core-react-ui';
import React, { useCallback, useMemo } from 'react';
import { cssTheme } from '../design-system/theme';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { PatientValidation, PatientModel, PatientAPIRequestBody, PatientAPIResponseBody } from '@newrade/vsb-common';
import { yupResolver } from '@hookform/resolvers/yup';
import { SchemaOf, ValidationError } from 'yup';

import * as styleRefs from './from.treat';
import { useStyles } from 'react-treat';

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
        //
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

  return (
    <Center>
      <Stack gap={[cssTheme.sizing.var.x5]}>
        <Heading>Form demo</Heading>
        <Paragraph>This is a test form for vsb-api.</Paragraph>

        <Stack gap={[cssTheme.sizing.var.x3]}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <BoxV2>
              <Stack gap={[cssTheme.sizing.var.x2]}>
                <input
                  className={errors.first_name == undefined ? styles.correct : styles.incorrect}
                  name="first_name"
                  ref={register}
                />
                {console.log(errors.first_name)}
                <input
                  className={errors.last_name == undefined ? styles.correct : styles.incorrect}
                  name="last_name"
                  ref={register}
                />
                {console.log(errors.last_name)}

                {/* <input name="last_name" ref={register} /> */}
                {/*
                <Controller
                  control={control}
                  ref={register}
                  name="last_name"
                  render={({ onChange, onBlur }) => <input ref={register} />}
                />
                {errors.last_name && <span>{errors.last_name?.message}</span>} */}

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
