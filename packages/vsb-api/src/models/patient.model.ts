import * as t from 'io-ts';

enum REMINDER_TYPE {
  NONE = 'None',
  EMAIL = 'Email',
  SMS = 'SMS',
  SMS_EMAIL = 'SMS & Email',
}

const PatientModel = t.type({
  last_name: t.string,
  first_name: t.string,
  gender_identity: t.string,
  email: t.string,
  date_of_birth: t.string,
  sex: t.string,
  title: t.string,
  address_1: t.string,
  address_2: t.string,
  address_3: t.string,
  post_code: t.string,
  city: t.string,
  country: t.string,
  state: t.string,
  invoice_default_to: t.string,
  invoice_email: t.string,
  invoice_extra_information: t.string,
  accepted_privacy_policy: t.union([t.boolean, t.null]),
  accepted_sms_marketing: t.boolean,
  accepted_email_marketing: t.boolean,
  occupation: t.union([t.string, t.null]),
  medicare: t.union([t.string, t.null]),
  medicare_reference_number: t.string,
  receives_confirmation_emails: t.boolean,
  reminder_type: t.keyof({
    None: REMINDER_TYPE.NONE,
    Email: REMINDER_TYPE.EMAIL,
    SMS: REMINDER_TYPE.SMS,
    'SMS & Email': REMINDER_TYPE.SMS_EMAIL,
  }),
  patient_phone_numbers: t.array(
    t.type({
      phone_type: t.string,
      number: t.string,
    })
  ),
});

export default PatientModel;
