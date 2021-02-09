import { ButtonSize, ButtonVariant } from '@newrade/core-design-system';
import {
  Bold,
  Button,
  CommonComponentProps,
  Form,
  Hr,
  InputError,
  InputLabel,
  InputSelect,
  InputText,
  InputWrapper,
  Paragraph,
  Stack,
  Switcher,
  useTreatTheme,
} from '@newrade/core-react-ui';
import {
  CLINIKO_PHONE_TYPE,
  CLINIKO_REMINDER_TYPE,
  PatientAPIResponseBody,
  PatientModel,
  PatientValidation,
} from '@newrade/vsb-common';
import 'cleave.js/dist/addons/cleave-phone.ca';
import debounce from 'lodash/debounce';
import React, { useCallback, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useStyles } from 'react-treat';
import { SchemaOf, ValidationError } from 'yup';
import {
  AddressAutoCompleteOptions,
  AddressAutoCompleteResponse,
  AddressByIdOptions,
  AddressByIdResponse,
  getAddressAutoComplete,
  getAddressById,
} from '../services/address.service';
import * as styleRefs from './block-form-vasectomy.treat';
import { SectionProps } from './section.props';

type Props = CommonComponentProps & SectionProps & {};

const useYupValidationResolver = (PatientValidation: SchemaOf<PatientModel>) =>
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
        // capture other than validation errors
        if (!errors.inner) {
          console.log(errors);
          return {
            values: {},
            errors: {},
          };
        }

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

const FormSwitcher: React.FC = (props) => {
  const { cssTheme } = useTreatTheme();

  return (
    <Switcher gap={[cssTheme.sizing.var.x5]} alignItems={['flex-start']}>
      {props.children}
    </Switcher>
  );
};

const FormStack: React.FC = (props) => {
  const { cssTheme } = useTreatTheme();

  return <Stack gap={[cssTheme.sizing.var.x4]}>{props.children}</Stack>;
};

export const BlockFormVasectomy: React.FC<Props> = ({ id, style, className, section, ...props }) => {
  const [isSuggestion, setSuggestion] = useState<boolean>(false);
  const [isValueSuggestion, setValueSuggestion] = useState<any>();

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
    setValue,
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
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        window.setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  };

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

      setValue('address1', newInfos.Line1 as string);
      setValue('address2', newInfos.SecondaryStreet);
      setValue('city', newInfos.City as string);
      setValue('state', newInfos.ProvinceName as string);
      setValue('country', newInfos.CountryName as string);
      setValue('postCode', newInfos.PostalCode as string);

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
                  name="dateOfBirth"
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
                    options: { date: true, datePattern: ['m', 'Y'], delimiter: '-' },
                  }}
                  placeholder={'mm-aaaa'}
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
                  placeholder={'555-555-5555'}
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
                <InputSelect
                  name={'patientPhoneType'}
                  ref={register}
                  state={errors.patientPhoneType?.message ? 'error' : 'rest'}
                  defaultValue={CLINIKO_PHONE_TYPE.MOBILE}
                >
                  <option value={CLINIKO_PHONE_TYPE.MOBILE}>{'Mobile'}</option>
                  <option value={CLINIKO_PHONE_TYPE.HOME}>{'Fixe'}</option>
                </InputSelect>

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
                <InputLabel htmlFor={'emailConfirmation'}>Confirmation du courriel</InputLabel>
                <InputText
                  type="email"
                  name="emailConfirmation"
                  ref={register}
                  autoComplete="emailConfirmation"
                  state={errors.emailConfirmation?.message ? 'error' : 'rest'}
                />

                <InputError>{errors.emailConfirmation?.message}</InputError>
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
                onChange={onChangeHandler()}
              />
              <InputError>{errors.address1?.message}</InputError>
            </InputWrapper>
            {isSuggestion == true ? renderSuggestionsT(isValueSuggestion) : ''}

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
            <InputSelect
              name="reminderType"
              ref={register}
              state={errors.reminderType?.message ? 'error' : 'rest'}
              defaultValue={CLINIKO_REMINDER_TYPE.EMAIL}
            >
              <option value={CLINIKO_REMINDER_TYPE.EMAIL}>{'Email'}</option>
              <option value={CLINIKO_REMINDER_TYPE.SMS}>{'Message texte'}</option>
              <option value={CLINIKO_REMINDER_TYPE.SMS_EMAIL}>{'Email et message texte'}</option>
            </InputSelect>

            <InputError>{errors.reminderType?.message}</InputError>
          </InputWrapper>

          <FormStack>
            <ReCAPTCHA
              hl={'fr'}
              size={'normal'}
              ref={recaptchaRef}
              sitekey="6Lc0iksaAAAAALyiB9gYY0sCjQYb-rdLKI-RNP6d"
            />

            <Paragraph>
              Une fois la demande soumise, notre équipe vous contactera dans les plus brefs délais pour planifier les
              prochaines étapes avec vous.
            </Paragraph>

            <Button
              variant={ButtonVariant.primary}
              className={isLoading ? 'loading' : ''}
              size={ButtonSize.large}
              isDisabled={isLoading}
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
