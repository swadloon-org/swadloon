import { ButtonSize, ButtonVariant } from '@newrade/core-design-system';
import {
  Bold,
  Button,
  CommonComponentProps,
  Form,
  Hr,
  InputError,
  InputLabel,
  InputText,
  InputWrapper,
  keys,
  Paragraph,
  Stack,
  Switcher,
  useTreatTheme,
} from '@newrade/core-react-ui';
import { CLINIKO_REMINDER_TYPE, PatientAPIResponseBody, PatientModel, PatientValidation } from '@newrade/vsb-common';
import 'cleave.js/dist/addons/cleave-phone.ca';
import React, { useCallback, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useStyles } from 'react-treat';
import { SchemaOf, ValidationError } from 'yup';
import * as styleRefs from './block-form-vasectomy.treat';
import { SectionProps } from './section.props';

type Props = CommonComponentProps & SectionProps & {};

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

export const BlockFormVasectomy: React.FC<Props> = ({ id, style, className, section, ...props }) => {
  const { styles } = useStyles(styleRefs);
  const { cssTheme } = useTreatTheme();

  const [isLoading, setLoading] = useState<boolean>(false);
  const recaptchaRef = React.useRef<any>();
  const resolver = useYupValidationResolver(PatientValidation);

  const {
    register,
    handleSubmit,
    control,
    setError,
    errors,
    getValues,
    formState,
    // formState: { isDirty, isSubmitting, touched, submitCount, isValid },
  } = useForm<PatientModel>({ mode: 'onBlur', resolver });

  const onSubmit: SubmitHandler<PatientModel> = async (data) => {
    setLoading(true);

    const tokenRecaptcha: string = await recaptchaRef.current.getValue();

    fetch('http://localhost:10003/api/patient/register', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        { api: 'vsb-api', payload: { patient: { ...data }, recaptcha: { token: tokenRecaptcha } } },
        null,
        2
      ),
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
    setLoading(false);
  };

  const FormSwitcher: React.FC = (props) => (
    <Switcher gap={[cssTheme.sizing.var.x5]} alignItems={['flex-start']}>
      {props.children}
    </Switcher>
  );

  const FormStack: React.FC = (props) => <Stack gap={[cssTheme.sizing.var.x4]}>{props.children}</Stack>;

  return (
    <div className={`${styles.wrapper}`}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Stack gap={[cssTheme.sizing.var.x6]}>
          <FormStack>
            <FormSwitcher>
              <InputWrapper>
                <InputLabel htmlFor={'firstName'}>Prénom</InputLabel>
                <InputText
                  name="firstName"
                  ref={register}
                  autoComplete="given-name"
                  placeholder={'John'}
                  state={errors.firstName?.message ? 'error' : 'rest'}
                />
                <InputError>{errors.firstName?.message}</InputError>
              </InputWrapper>

              <InputWrapper>
                <InputLabel htmlFor={'lastName'}>Nom de famille</InputLabel>
                <InputText
                  name="lastName"
                  ref={register}
                  autoComplete="last-name"
                  placeholder={'Snow'}
                  state={errors.lastName?.message ? 'error' : 'rest'}
                />
                <InputError>{errors.lastName?.message}</InputError>
              </InputWrapper>
            </FormSwitcher>

            <FormSwitcher>
              <InputWrapper>
                <InputLabel htmlFor={'dateOfBirth'}>Date de naissance</InputLabel>
                <InputText
                  type={'text'}
                  name="date_of_birth"
                  cleaveProps={{
                    htmlRef: register,
                    options: { date: true, datePattern: ['d', 'm', 'Y'], delimiter: '-' },
                  }}
                  placeholder={'jj-mm-aaaa'}
                  state={errors.dateOfBirth?.message ? 'error' : 'rest'}
                />
                <InputError>{errors.dateOfBirth?.message}</InputError>
              </InputWrapper>

              {/* <InputWrapper>
                <InputLabel htmlFor={'sex'}>Sexe</InputLabel>
                <InputText
                  name="sex"
                  ref={register}
                  autoComplete="sex"
                  state={errors.sex?.message ? 'error' : 'rest'}
                />
                <InputError>{errors.sex?.message}</InputError>
              </InputWrapper> */}
            </FormSwitcher>
          </FormStack>

          <FormStack>
            <FormSwitcher>
              <InputWrapper>
                <InputLabel htmlFor={'medicare'}>Numero d'assurance maladie (RAMQ)</InputLabel>
                <InputText
                  name="medicare"
                  ref={register}
                  autoComplete="off"
                  placeholder={'FFFF 9999 9999'}
                  cleaveProps={{
                    htmlRef: register,
                    options: { blocks: [4, 4, 4], delimiter: ' ', uppercase: true },
                  }}
                  state={errors.medicare?.message ? 'error' : 'rest'}
                />
                <InputError>{errors.medicare?.message}</InputError>
              </InputWrapper>

              <InputWrapper>
                <InputLabel htmlFor={'medicareExpiryDate'}>Expiration</InputLabel>
                <InputText
                  type={'text'}
                  name="medicareExpiryDate"
                  cleaveProps={{
                    htmlRef: register,
                    options: { date: true, datePattern: ['d', 'm', 'Y'], delimiter: '-' },
                  }}
                  placeholder={'jj-mm-aaaa'}
                  state={errors.medicareExpiryDate?.message ? 'error' : 'rest'}
                />
                <InputError>{errors.medicareExpiryDate?.message}</InputError>
              </InputWrapper>
            </FormSwitcher>
          </FormStack>

          <FormStack>
            <FormSwitcher>
              <InputWrapper>
                <InputLabel htmlFor={'patientPhoneNumber'}>Téléphone</InputLabel>
                <InputText
                  name={'patientPhoneNumber'}
                  placeholder={'1 555-555-5555'}
                  autoComplete="tel"
                  cleaveProps={{
                    htmlRef: register,
                    type: 'tel',
                    options: { phone: true, phoneRegionCode: 'CA', delimiter: '-' },
                  }}
                  state={errors.patientPhoneNumber?.message ? 'error' : 'rest'}
                />
                <InputError>{errors.patientPhoneNumber?.message}</InputError>
              </InputWrapper>

              <InputWrapper>
                <InputLabel htmlFor={'patientPhoneType'}>Téléphone Type</InputLabel>
                <InputText
                  name={'patientPhoneType'}
                  ref={register}
                  state={errors.patientPhoneType?.message ? 'error' : 'rest'}
                />
                <InputError>{errors.patientPhoneType?.message}</InputError>
              </InputWrapper>
            </FormSwitcher>

            <FormSwitcher>
              <InputWrapper>
                <InputLabel htmlFor={'email'}>Courriel</InputLabel>
                <InputText
                  type="email"
                  name="email"
                  ref={register}
                  autoComplete="email"
                  state={errors.email?.message ? 'error' : 'rest'}
                />
                <InputError>{errors.email?.message}</InputError>
              </InputWrapper>

              <InputWrapper>
                <InputLabel htmlFor={'email'}>Confirmation du courriel</InputLabel>
                <InputText
                  type="email"
                  name="email"
                  ref={register}
                  autoComplete="email"
                  state={errors.email?.message ? 'error' : 'rest'}
                />
                <InputError>{errors.email?.message}</InputError>
              </InputWrapper>
            </FormSwitcher>
          </FormStack>

          <FormStack>
            <InputWrapper>
              <InputLabel htmlFor={'address1'}>Adresse</InputLabel>
              <InputText
                name="address1"
                ref={register}
                autoComplete="address-line1"
                state={errors.address1?.message ? 'error' : 'rest'}
              />
              <InputError>{errors.address1?.message}</InputError>
            </InputWrapper>

            <InputWrapper>
              <InputLabel htmlFor={'address2'}>Adresse (appartement / bureau)</InputLabel>
              <InputText
                name="address2"
                ref={register}
                autoComplete="address-line2"
                state={errors.address2?.message ? 'error' : 'rest'}
              />
              <InputError>{errors.address2?.message}</InputError>
            </InputWrapper>

            <FormSwitcher>
              <InputWrapper>
                <InputLabel htmlFor={'city'}>Ville</InputLabel>
                <InputText
                  name="city"
                  ref={register}
                  autoComplete="address-level2"
                  state={errors.city?.message ? 'error' : 'rest'}
                />
                <InputError>{errors.city?.message}</InputError>
              </InputWrapper>

              <InputWrapper>
                <InputLabel htmlFor={'state'}>État</InputLabel>
                <InputText
                  name="state"
                  ref={register}
                  autoComplete="address-level1"
                  state={errors.state?.message ? 'error' : 'rest'}
                />
                <InputError>{errors.state?.message}</InputError>
              </InputWrapper>
            </FormSwitcher>

            <FormSwitcher>
              <InputWrapper>
                <InputLabel htmlFor={'postCode'}>Code Postal</InputLabel>
                <InputText
                  name="postCode"
                  ref={register}
                  autoComplete="postal-code"
                  state={errors.postCode?.message ? 'error' : 'rest'}
                />
                <InputError>{errors.postCode?.message}</InputError>
              </InputWrapper>

              <InputWrapper>
                <InputLabel htmlFor={'country'}>Pays</InputLabel>
                <InputText
                  name="country"
                  ref={register}
                  autoComplete="country-name"
                  state={errors.country?.message ? 'error' : 'rest'}
                />
                <InputError>{errors.country?.message}</InputError>
              </InputWrapper>
            </FormSwitcher>
          </FormStack>

          <InputWrapper>
            <InputLabel htmlFor={'reminderType'}>Type de rappel automatisé</InputLabel>
            <InputText
              name="reminderType"
              list="reminder_type"
              ref={register}
              state={errors.reminderType?.message ? 'error' : 'rest'}
            />
            <InputError>{errors.reminderType?.message}</InputError>

            <select id="reminder_type">
              {keys(CLINIKO_REMINDER_TYPE).map((element, index) => {
                return <option key={index} value={CLINIKO_REMINDER_TYPE[element]} />;
              })}
            </select>
          </InputWrapper>

          <FormStack>
            <ReCAPTCHA size={'normal'} ref={recaptchaRef} sitekey="6Lc0iksaAAAAALyiB9gYY0sCjQYb-rdLKI-RNP6d" />

            <Paragraph>
              Une fois la demande soumise, notre équipe vous contactera dans les plus brefs délais pour planifier les
              prochaines étapes avec vous.
            </Paragraph>

            <Button
              variant={ButtonVariant.primary}
              className={isLoading ? 'loading' : ''}
              size={ButtonSize.large}
              type="submit"
            >
              {isLoading ? 'En cours...' : 'Soumettre la demande'}
            </Button>
          </FormStack>

          <Hr></Hr>

          <Paragraph>
            <Bold>N.B. :</Bold> Suite à l’ouverture de votre dossier, vous aurez <Bold>deux</Bold> ans pour prendre
            rendez-vous pour la chirurgie. Après ce délais, il est possible que notre équipe vous demande de recommencer
            la démarche.
          </Paragraph>
        </Stack>
      </Form>
    </div>
  );
};
