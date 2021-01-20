import { Center, Heading, Link, Stack, useTreatTheme, Paragraph, BoxV2 } from '@newrade/core-react-ui';
import React, { useCallback, useMemo } from 'react';
import { cssTheme } from '../design-system/theme';
import { useForm, SubmitHandler } from 'react-hook-form';
import { PatientValidation, PatientModel, PatientAPIRequestBody, PatientAPIResponseBody } from '@newrade/vsb-common';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// @ts-ignore
const useYupValidationResolver = (PatientValidation) =>
  useCallback(
    async (patient) => {
      try {
        const values = await PatientValidation.validate(patient, {
          abortEarly: false,
        });

        return {
          values,
          errors: {},
        };
      } catch (errors) {
        return {
          values: {},
          errors: errors.inner.reduce(
            //@ts-ignore
            (allErrors, currentError) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? 'validation',
                message: currentError.message,
                value: 'test',
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
  const onSubmit: SubmitHandler<PatientModel> = (patient) => {
    fetch('http://localhost:3002/api/register', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ api: 'vsb-api', payload: { patient } }, null, 2),
    })
      .then((response) => response.json())
      .then((result: PatientAPIResponseBody) => console.log(result));
  };

  const resolver = useYupValidationResolver(PatientValidation);

  const { register, handleSubmit, errors } = useForm({
    resolver,
  });

  return (
    <Center>
      <Stack gap={[cssTheme.sizing.var.x5]}>
        <Heading>Form demo</Heading>
        <Paragraph>This is a test form for vsb-api.</Paragraph>

        <Stack gap={[cssTheme.sizing.var.x3]}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <BoxV2>
              <Stack gap={[cssTheme.sizing.var.x2]}>
                <input name="first_name" ref={register} />
                {console.log(errors.first_name)}
                <input name="last_name" ref={register} />
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
