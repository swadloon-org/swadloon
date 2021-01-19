export enum REMINDER_TYPE {
  NONE = 'None',
  EMAIL = 'Email',
  SMS = 'SMS',
  SMS_EMAIL = 'SMS & Email',
}

export type PatientModel = {
  first_name: string;
  last_name: string;
  email: string;
  date_of_birth: string;
  title: string;
  address_1: string;
  post_code: string;
  city: string;
  country: string;
  state: string;
  invoice_default_to: string;
  invoice_email: string;
  invoice_extra_information: string;
  accepted_privacy_policy: boolean | null;
  accepted_sms_marketing: boolean;
  accepted_email_marketing: boolean;
  medicare: string;
  medicare_reference_number: string;
  receives_confirmation_emails: boolean;
  reminder_type: REMINDER_TYPE.NONE | REMINDER_TYPE.EMAIL | REMINDER_TYPE.SMS | REMINDER_TYPE.SMS_EMAIL;
  patient_phone_numbers: [
    {
      phone_type: string;
      number: string;
    }
  ];

  occupation?: string;
  gender_identity?: string;
  sex?: string;
  address_2?: string;
  address_3?: string;
};
