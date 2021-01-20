import * as yup from 'yup';
import { SchemaOf } from 'yup';
import { PatientModel } from './patient.model';

export const PatientValidation: SchemaOf<PatientModel> = yup
  .object({
    // occupation: yup.string(),
    // gender_identity: yup.string(),
    // sex: yup.string(),
    // address_2: yup.string(),
    // address_3: yup.string(),
    first_name: yup.string().min(2, 'Too Short').max(50, 'Too Long').required('Required'),
    last_name: yup.string().min(2, 'Too Short').max(50, 'Too Long').required('Required'),
    // email: yup.string().email().required('Required'),
    // date_of_birth: yup.string().required('Required'),
    // title: yup.string().required('Required'),
    // address_1: yup.string().required('Required'),
    // post_code: yup.string().required('Required'),
    // city: yup.string().required('Required'),
    // country: yup.string().required('Required'),
    // state: yup.string().required('Required'),
    // invoice_default_to: yup.string().required('Required'),
    // invoice_email: yup.string().required('Required'),
    // invoice_extra_information: yup.string().required('Required'),
    // accepted_privacy_policy: yup.bool().nullable().required('Required'),
    // accepted_sms_marketing: yup.boolean().required('Required'),
    // accepted_email_marketing: yup.boolean().required('Required'),
    // medicare: yup.string().required('Required'),
    // medicare_reference_number: yup.string().required('Required'),
    // receives_confirmation_emails: yup.boolean().required('Required'),

    // reminder_type: yup
    //   .mixed()
    //   .oneOf([REMINDER_TYPE.NONE, REMINDER_TYPE.SMS, REMINDER_TYPE.EMAIL, REMINDER_TYPE.SMS_EMAIL]),

    // patient_phone_numbers: yup
    //   .array()
    //   .of(
    //     yup.object().shape({
    //       phone_type: yup.string().required(),
    //       number: yup.string().required(),
    //     })
    //   )
    //   .required(),
  })
  .defined();
