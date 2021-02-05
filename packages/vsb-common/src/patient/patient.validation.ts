import * as yup from 'yup';
import { SchemaOf } from 'yup';
import { PatientClinikoModel, REMINDER_TYPE, PatientAPIModel } from './patient.model';

export const PatientValidation: SchemaOf<PatientAPIModel> = yup
  .object({
    sex: yup.string(),
    first_name: yup.string().min(2, 'Too Short').max(50, 'validation.tooShort').required('Requis'),
    last_name: yup.string().min(2, 'Too Short').max(50, 'Too Long').required('Requis'),
    email: yup.string().email().required('Requis'),
    date_of_birth: yup
      .string()
      .matches(/^(?:0[1-9]|[12]\d|3[01])([\/.-])(?:0[1-9]|1[012])\1(?:19|20)\d\d$/, {
        excludeEmptyString: true,
        message: 'Format jj-mm-aaaa, par ex. 01-05-1980 est le premier mai 1980',
      })
      .required('Requis'),
    address_1: yup.string().required('Requis'),
    address_2: yup.string(),
    city: yup.string().required('Requis'),
    state: yup.string().required('Requis'),
    post_code: yup.string().required('Requis'),
    country: yup.string().required('Requis'),
    medicare: yup.string().required('Requis'),

    reminder_type: yup
      .mixed()
      .oneOf([REMINDER_TYPE.NONE, REMINDER_TYPE.SMS, REMINDER_TYPE.EMAIL, REMINDER_TYPE.SMS_EMAIL]),
    patient_phone_numbers: yup
      .array()
      .of(
        yup.object().shape({
          phone_type: yup.string().required('Requis'),
          number: yup.string().required('Requis'),
        })
      )
      .required('Requis'),

    /**
     * Extra fields not in Cliniko, only for validation on our side
     */
    medicare_expiry_date: yup
      .string()
      .matches(/^(?:0[1-9]|[12]\d|3[01])([\/.-])(?:0[1-9]|1[012])\1(?:19|20)\d\d$/, {
        excludeEmptyString: true,
        message: 'Format jj-mm-aaaa, par ex. 01-05-1980 est le premier mai 1980',
      })
      .required('Requis'),

    /**
     * also in Cliniko but unused right now
     */
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
