import { endOfDay, endOfMonth, isDate, parse, sub } from 'date-fns';
import * as yup from 'yup';
import { SchemaOf } from 'yup';
import { CLINIKO_PHONE_TYPE, CLINIKO_REMINDER_TYPE } from './patient.constant';
import { PatientClinikoModel, PatientModel } from './patient.model';

// import endOfDay from 'date-fns/endOfDay';
// import endOfMonth from 'date-fns/endOfMonth';
// import isDate from 'date-fns/isDate';
// import parse from 'date-fns/parse';
// import sub from 'date-fns/sub';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

function parseFRDateString(format = 'dd-MM-yyyy') {
  return (value: string, originalValue: string | Date) => {
    const parsedDate = isDate(originalValue) ? originalValue : parse(originalValue as string, format, new Date());
    return parsedDate;
  };
}

export const PatientValidation: SchemaOf<PatientModel> = yup
  .object({
    firstName: yup.string().min(2, 'Trop court').max(50, 'Maximum 50 charactère').required('Requis'),
    lastName: yup.string().min(2, 'Trop court').max(50, 'Maximum 50 charactère').required('Requis'),
    dateOfBirth: yup
      .date()
      .transform(parseFRDateString())
      .min(
        sub(endOfDay(new Date()), {
          years: 130,
        }),
        'Date invalide'
      )
      .max(
        sub(endOfDay(new Date()), {
          years: 18,
        }),
        'Âge minimum est de 18 ans'
      )
      .typeError('Date invalide')
      .required('Requis'),

    medicare: yup.string().min(12, 'Minimum 12 charactères').required('Requis'),
    medicareExpiryDate: yup
      .date()
      .transform(parseFRDateString('MM-yyyy'))
      .min(endOfMonth(new Date()), 'Carte expirée')
      .typeError('Date invalide')
      .required('Requis'),

    email: yup
      .string()
      .email(`Mauvais format d'email`)
      .oneOf([yup.ref('email'), null], 'Emails doivent être identiques')
      .required('Requis'),
    emailConfirmation: yup
      .string()
      .email(`Mauvais format d'email`)
      .oneOf([yup.ref('email'), null], 'Emails doivent être identiques')
      .required('Requis'),
    patientPhoneNumber: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Requis'),
    patientPhoneType: yup.mixed().oneOf([CLINIKO_PHONE_TYPE.MOBILE, CLINIKO_PHONE_TYPE.HOME]),

    address1: yup.string().required('Requis'),
    address2: yup.string(),
    city: yup.string().required('Requis'),
    state: yup.string().required('Requis'),
    postCode: yup.string().required('Requis'),
    country: yup.string().required('Requis'),

    reminderType: yup
      .mixed()
      .oneOf([
        CLINIKO_REMINDER_TYPE.NONE,
        CLINIKO_REMINDER_TYPE.SMS,
        CLINIKO_REMINDER_TYPE.EMAIL,
        CLINIKO_REMINDER_TYPE.SMS_EMAIL,
      ]),
  })
  .defined();

export const PatientClinikoValidation: SchemaOf<Omit<PatientClinikoModel, 'emailConfirmation'>> = yup
  .object({
    first_name: yup.string().min(2, 'Too Short').max(50, 'validation.tooShort').required('Requis'),
    last_name: yup.string().min(2, 'Too Short').max(50, 'Too Long').required('Requis'),
    date_of_birth: yup
      .string()
      .matches(/^(?:0[1-9]|[12]\d|3[01])([\/.-])(?:0[1-9]|1[012])\1(?:19|20)\d\d$/, {
        excludeEmptyString: true,
        message: 'Format jj-mm-aaaa, par ex. 01-05-1980 est le premier mai 1980',
      })
      .required('Requis'),
    medicare: yup.string().required('Requis'),

    email: yup.string().email().required('Requis'),
    patient_phone_numbers: yup
      .array()
      .of(
        yup.object().shape({
          phone_type: yup.string().required('Requis'),
          number: yup.string().required('Requis'),
        })
      )
      .required('Requis'),

    address_1: yup.string().required('Requis'),
    address_2: yup.string(),
    city: yup.string().required('Requis'),
    state: yup.string().required('Requis'),
    post_code: yup.string().required('Requis'),
    country: yup.string().required('Requis'),

    reminder_type: yup
      .mixed()
      .oneOf([
        CLINIKO_REMINDER_TYPE.NONE,
        CLINIKO_REMINDER_TYPE.SMS,
        CLINIKO_REMINDER_TYPE.EMAIL,
        CLINIKO_REMINDER_TYPE.SMS_EMAIL,
      ]),

    /**
     * also in Cliniko but unused right now
     */
    // sex: yup.string(),
    // occupation: yup.string(),
    // gender_identity: yup.string(),
    // address_3: yup.string(),
    // title: yup.string().required('Requis'),
    // medicare_reference_number: yup.string().required('Requis'),
    // receives_confirmation_emails: yup.boolean().required('Requis'),
    // invoice_default_to: yup.string().required('Requis'),
    // invoice_email: yup.string().required('Requis'),
    // invoice_extra_information: yup.string().required('Requis'),
    // accepted_privacy_policy: yup.bool().nullable().required('Requis'),
    // accepted_sms_marketing: yup.boolean().required('Requis'),
    // accepted_email_marketing: yup.boolean().required('Requis'),
  })
  .defined();
