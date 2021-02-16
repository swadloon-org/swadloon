import { API_RESPONSE_STATUS } from '@newrade/core-common';
import { ButtonSize, ButtonVariant } from '@newrade/core-design-system';
import {
  Bold,
  Button,
  Cluster,
  CommonComponentProps,
  Form,
  Hr,
  InputError,
  InputLabel,
  InputSelect,
  InputText,
  InputWrapper,
  OnlineIndicator,
  Paragraph,
  Stack,
  Switcher,
  useNetworkStatus,
  usePageVisibility,
  useTreatTheme,
} from '@newrade/core-react-ui';
import {
  API_REGISTER_PATIENT_ROUTE,
  API_STATUS_CLINIKO,
  CLINIKO_PHONE_TYPE,
  PatientAPIResponseBody,
  PatientModel,
  PatientValidation,
} from '@newrade/vsb-common';
import { IoAlertCircleOutline } from '@react-icons/all-files/io5/IoAlertCircleOutline';
import { IoCheckmarkCircle } from '@react-icons/all-files/io5/IoCheckmarkCircle';
import 'cleave.js/dist/addons/cleave-phone.ca';
import debug from 'debug';
import debounce from 'lodash/debounce';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
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

const log = debug('newrade:vsb-website');
const logError = log.extend('error');

type Props = CommonComponentProps & SectionProps & {};

function handleFocusControlled(name?: string) {
  return () => {
    if (!name) {
      return;
    }
    const element = window.document.querySelector(`input[name="${name}"]`);

    if (element) {
      (element as HTMLElement).focus();
    }
  };
}

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
          logError(errors);
          return {
            values: {},
            errors: {},
          };
        }

        const updatedErrors = errors.inner.reduce(
          (allErrors: Array<ValidationError>, currentError: any) => ({
            ...allErrors,

            [currentError.path]: {
              type: currentError.type ?? 'validation',
              message: currentError.message,
            },
          }),
          {}
        );

        if (errors.inner && errors.inner.length) {
          console.log(errors.inner[0]);
          const firstError = errors.inner[0] as ValidationError;
          // handleFocusControlled(firstError.path)();
        }

        return {
          values: {},
          errors: updatedErrors,
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
  const { styles } = useStyles(styleRefs);
  const { cssTheme } = useTreatTheme();

  const { isOnline } = useNetworkStatus();
  const { pageVisible } = usePageVisibility();

  const [apiStatus, setApiStatus] = useState<'en ligne' | 'hors ligne' | undefined>(undefined);
  const [isSuggestion, setSuggestion] = useState<boolean>(false);
  const [isValueSuggestion, setValueSuggestion] = useState<any>();

  const [apiSuccess, setApiSuccess] = useState<string[]>([]);
  const [apiErrors, setApiErrors] = useState<string[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const recaptchaRef = useRef<HTMLElement & { getValue: () => any; reset: () => any }>();
  const submitButtonRef = useRef<HTMLButtonElement>();
  const resolver = useYupValidationResolver(PatientValidation);
  const defaultValues: PatientModel = {
    firstName: '',
    lastName: '',
    email: '',
    emailConfirmation: '',
    dateOfBirth: '',
    address1: '',
    address2: '',
    city: '',
    state: 'Québec',
    postCode: '',
    country: 'Canada',
    medicare: '',
    medicareExpiryDate: '',
    patientPhoneNumber: '',
    patientPhoneType: CLINIKO_PHONE_TYPE.MOBILE,
  };
  const { register, handleSubmit, setError, errors, setValue, reset, control, trigger, getValues, formState } = useForm<
    PatientModel
  >({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    shouldFocusError: true,
    defaultValues,
    resolver,
  });

  useEffect(() => {
    try {
      log('checking for api status');
      checkApiStatus();

      const interval = window.setInterval(() => {
        if (isOnline && pageVisible) {
          checkApiStatus();
        }
      }, 15000);
      return () => {
        window.clearInterval(interval);
      };
    } catch (error) {
      setApiStatus('hors ligne');
      logError('api offline');
    }
  }, [pageVisible, isOnline]);

  function checkApiStatus() {
    fetch(API_STATUS_CLINIKO)
      .then((response) => response.json())
      .then((body: PatientAPIResponseBody) => {
        if (body.status === API_RESPONSE_STATUS.SUCCESS) {
          setApiStatus('en ligne');
        }
      })
      .catch((error) => {
        setApiStatus('hors ligne');
        logError('api offline');
      });
  }

  function scrollToSubmit() {
    const recaptchatPos = submitButtonRef.current ? submitButtonRef.current.offsetTop : 0;
    window.scrollTo({
      top: recaptchatPos - window.document.documentElement.clientHeight / 2,
      behavior: 'smooth',
    });
  }

  const onSubmit: SubmitHandler<PatientModel> = async (data) => {
    log('submitting');

    setLoading(true);

    if (!recaptchaRef.current) {
      setLoading(false);
      return;
    }

    scrollToSubmit();

    const tokenRecaptcha: string = recaptchaRef.current.getValue();

    setApiErrors([]);
    setApiSuccess([]);

    fetch(API_REGISTER_PATIENT_ROUTE, {
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
        if (result.status === API_RESPONSE_STATUS.SUCCESS) {
          log('patient was successfully created');
          setApiSuccess([result.message]);
          reset(defaultValues);
          if (recaptchaRef.current) {
            recaptchaRef.current.reset();
          }
          return;
        }

        if (result.errors) {
          result.errors.map((error) => {
            logError(error);
          });
        }

        if (result.payload.yupValidationErrors) {
          result.payload.yupValidationErrors.map((validationError) => {
            if (validationError) {
              logError(validationError);
              setError(validationError.path as keyof PatientModel, {
                type: 'manual',
                message: validationError.message,
              });
            }
          });
        }

        if (result.message) {
          setApiErrors([result.message]);
          return;
        }

        setApiErrors([
          ...result.errors.map((error) => error.message),
          ...(result.payload.yupValidationErrors
            ? result.payload.yupValidationErrors.map((error) => error.errors.join(', '))
            : []),
        ]);
      })
      .catch((error) => {
        logError(error);
      })
      .finally(() => {
        window.setTimeout(() => {
          setLoading(false);
          log('end submitting');
        }, 1000);
      });
  };

  function handleKeyPress(event: React.KeyboardEvent<any>) {
    if (event.charCode === 13) {
      handleSubmit(onSubmit)();
    }
  }

  const debouncedSave = debounce((value) => {
    if (value !== '') {
      handleAddressSuggest(value);
    } else {
      setSuggestion(false);
    }
  }, 1000);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => debouncedSave(event.target.value);

  const handleAddressSuggest = async (searchTerm: string) => {
    const contentAddress: AddressAutoCompleteOptions = {
      SearchTerm: searchTerm,
      Country: 'CAN',
      LanguagePreference: 'EN',
      MaxResults: 8,
    };

    const valueSuggestion = await getAddressAutoComplete(contentAddress);

    if (valueSuggestion?.Items?.[0]?.Id !== undefined) {
      setValueSuggestion(valueSuggestion?.Items);
      setSuggestion(true);
    } else if (valueSuggestion?.Items?.[0]?.Id == undefined) {
      setSuggestion(false);
    }
  };

  const handleSelectSuggestion = (suggestion: AddressAutoCompleteResponse) => async (event: React.MouseEvent) => {
    const newInfos = await onValidateById(suggestion);

    if (!newInfos) {
      setSuggestion(false);
      return;
    }

    setValue('address1', newInfos.Line1 as string, {
      shouldValidate: true,
    });
    setValue('address2', newInfos.SecondaryStreet, {
      shouldValidate: true,
    });
    setValue('city', newInfos.City as string, {
      shouldValidate: true,
    });
    setValue('state', newInfos.ProvinceName as string, {
      shouldValidate: true,
    });
    setValue('country', newInfos.CountryName as string, {
      shouldValidate: true,
    });
    setValue('postCode', newInfos.PostalCode as string, {
      shouldValidate: true,
    });

    setSuggestion(false);
  };

  const onValidateById = async (validate: AddressByIdOptions) => {
    const response = await getAddressById(validate);

    const result: AddressByIdResponse | undefined = response?.Items?.[0];
    return result;
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
                  onKeyPress={handleKeyPress}
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
                <Controller
                  name="dateOfBirth"
                  control={control}
                  onFocus={handleFocusControlled('dateOfBirth')}
                  render={({ onChange, onBlur, value, name, ref }) => (
                    <InputText
                      type={'tel'}
                      name={name}
                      cleaveProps={{
                        htmlRef: (htmlRef) => {
                          htmlRef = ref;
                        },
                        onChange,
                        onBlur,
                        value,
                        options: { date: true, datePattern: ['d', 'm', 'Y'], delimiter: '-' },
                      }}
                      placeholder={'jj-mm-aaaa'}
                      autoComplete={'bday'}
                      state={errors.dateOfBirth?.message ? 'error' : 'rest'}
                    />
                  )}
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

                <Controller
                  name="medicare"
                  control={control}
                  onFocus={handleFocusControlled('medicare')}
                  render={({ onChange, onBlur, value, name, ref }) => (
                    <InputText
                      name={name}
                      autoComplete={'off'}
                      placeholder={'FFFF 9999 9999'}
                      type={'text'}
                      cleaveProps={{
                        htmlRef: (htmlRef) => {
                          htmlRef = ref;
                        },
                        onChange,
                        onBlur,
                        value,
                        options: { blocks: [4, 4, 4], delimiter: ' ', uppercase: true },
                      }}
                      state={errors.medicare?.message ? 'error' : 'rest'}
                    />
                  )}
                />

                <InputError>{errors.medicare?.message}</InputError>
              </InputWrapper>

              <InputWrapper>
                <InputLabel htmlFor={'medicareExpiryDate'}>Expiration</InputLabel>

                <Controller
                  name="medicareExpiryDate"
                  control={control}
                  onFocus={handleFocusControlled('medicareExpiryDate')}
                  render={({ onChange, onBlur, value, name, ref }) => (
                    <InputText
                      name={name}
                      type={'tel'}
                      cleaveProps={{
                        htmlRef: (htmlRef) => {
                          htmlRef = ref;
                        },
                        onChange,
                        onBlur,
                        value,
                        options: { date: true, datePattern: ['m', 'y'], delimiter: '-' },
                      }}
                      placeholder={'mm-aa'}
                      autoComplete={'off'}
                      state={errors.medicareExpiryDate?.message ? 'error' : 'rest'}
                    />
                  )}
                />

                <InputError>{errors.medicareExpiryDate?.message}</InputError>
              </InputWrapper>
            </FormSwitcher>
          </FormStack>

          <FormStack>
            <FormSwitcher>
              <InputWrapper>
                <InputLabel htmlFor={'patientPhoneNumber'}>Téléphone</InputLabel>
                <Controller
                  name="patientPhoneNumber"
                  control={control}
                  onFocus={handleFocusControlled('patientPhoneNumber')}
                  render={({ onChange, onBlur, value, name, ref }) => (
                    <InputText
                      type={'tel'}
                      name={name}
                      cleaveProps={{
                        htmlRef: (htmlRef) => {
                          htmlRef = ref;
                        },
                        onChange,
                        onBlur,
                        value,
                        options: { phone: true, phoneRegionCode: 'CA', delimiter: '-' },
                      }}
                      placeholder={'555-555-5555'}
                      autoComplete={'tel'}
                      state={errors.patientPhoneNumber?.message ? 'error' : 'rest'}
                    />
                  )}
                />

                <InputError>{errors.patientPhoneNumber?.message}</InputError>
              </InputWrapper>

              <InputWrapper>
                <InputLabel htmlFor={'patientPhoneType'}>Téléphone Type</InputLabel>
                <InputSelect
                  name={'patientPhoneType'}
                  ref={register}
                  state={errors.patientPhoneType?.message ? 'error' : 'rest'}
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
                  onBlur={() => {
                    if (getValues('emailConfirmation')) {
                      trigger('emailConfirmation');
                    }
                  }}
                  placeholder={'john@snow.com'}
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
                  autoComplete="email"
                  placeholder={'john@snow.com'}
                  onBlur={() => {
                    if (getValues('email')) {
                      trigger('email');
                    }
                  }}
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
                placeholder={'111 rue...'}
                onChange={onChangeHandler}
                state={errors.address1?.message ? 'error' : 'rest'}
              />
              <InputError>{errors.address1?.message}</InputError>
            </InputWrapper>
            {isSuggestion ? renderSuggestionsT(isValueSuggestion) : null}

            <InputWrapper>
              <InputLabel htmlFor={'address2'}>Adresse (appartement / bureau)</InputLabel>
              <InputText
                name="address2"
                ref={register}
                placeholder={'#222'}
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
                  placeholder={'Montréal'}
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
                  placeholder={'Québec'}
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
                  placeholder={'H1H2H2'}
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
                  placeholder={'Canada'}
                  autoComplete="country-name"
                  state={errors.country?.message ? 'error' : 'rest'}
                />
                <InputError>{errors.country?.message}</InputError>
              </InputWrapper>
            </FormSwitcher>
          </FormStack>

          {/* disabled on the form, will be hardcoded to email */}
          {/* <InputWrapper>
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
          </InputWrapper> */}

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
              ref={submitButtonRef}
              variant={ButtonVariant.primary}
              className={isLoading ? 'loading' : ''}
              size={ButtonSize.large}
              isDisabled={isLoading}
              type="submit"
            >
              {isLoading ? 'En cours...' : 'Soumettre la demande'}
            </Button>

            {!isLoading && apiSuccess.length ? (
              <Stack gap={[cssTheme.sizing.var.x3]}>
                {apiSuccess.map((success, index) => {
                  return (
                    <Cluster
                      key={index}
                      justifyContent={['flex-start']}
                      className={`${styles.success}`}
                      gap={[cssTheme.sizing.var.x2]}
                    >
                      <IoCheckmarkCircle className={styles.successIcon} size={30} />
                      <Paragraph>{success}</Paragraph>
                    </Cluster>
                  );
                })}
              </Stack>
            ) : null}

            {!isLoading && apiErrors.length ? (
              <Stack gap={[cssTheme.sizing.var.x3]}>
                {apiErrors.map((error, index) => {
                  return (
                    <Cluster
                      key={index}
                      id="formError"
                      justifyContent={['flex-start']}
                      className={`${styles.error}`}
                      gap={[cssTheme.sizing.var.x2]}
                    >
                      <IoAlertCircleOutline className={styles.errorIcon} size={24} />
                      <Paragraph>{error}</Paragraph>
                    </Cluster>
                  );
                })}
              </Stack>
            ) : null}

            <OnlineIndicator status={apiStatus === 'en ligne' ? 'online' : 'offline'}>
              système {apiStatus || 'en chargement...'}
            </OnlineIndicator>

            <Hr></Hr>
          </FormStack>

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
