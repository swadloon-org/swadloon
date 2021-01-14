export type Patient = {
  first_name: string;
  last_name: string;
  gender_identity: string;
  email: string;
  date_of_birth: string;
  sex: string;
  title: string;
  address_1: string;
  address_2: string;
  address_3: string;
  post_code: string;
  city: string;
  country: string;
  state: string;
  invoice_default_to: string;
  invoice_email: string | null;
  invoice_extra_information: string;
  accepted_privacy_policy: boolean | null;
  accepted_sms_marketing: boolean;
  accepted_email_marketing: boolean;
  occupation: string;
  medicare: string;
  medicare_reference_number: string | null;
  receives_confirmation_emails: boolean;
  reminder_type: 'None' | 'Email' | 'SMS & Email';

  patient_phone_numbers: [
    {
      phone_type: string;
      number: string;
    }
  ];
};
