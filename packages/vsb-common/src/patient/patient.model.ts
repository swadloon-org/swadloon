import { CLINIKO_PATIENT_VASEC_STATUS, CLINIKO_PHONE_TYPE, CLINIKO_REMINDER_TYPE } from './patient.constant';

export type PatientModelAdmin = {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  patientPhoneNumber: string;
  patientPhoneType: CLINIKO_PHONE_TYPE;
  status?: CLINIKO_PATIENT_VASEC_STATUS;
};

export type PatientModel = {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  emailConfirmation: string;
  dateOfBirth: Date | string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  postCode: string;
  country: string;
  medicare: string;
  medicareExpiryDate: Date | string;
  /** disabled on the form, will be hardcoded to email */
  // reminderType: CLINIKO_REMINDER_TYPE;
  patientPhoneNumber: string;
  patientPhoneType: CLINIKO_PHONE_TYPE;
};

export type PatientClinikoModel = {
  id?: string;
  first_name: string;
  last_name: string;

  date_of_birth: Date | string;
  medicare: string;

  email: string;
  patient_phone_numbers: [
    {
      phone_type: CLINIKO_PHONE_TYPE;
      number: string;
    }
  ];

  address_1: string;
  address_2?: string;
  city: string;
  state: string;
  post_code: string;
  country: string;

  reminder_type: CLINIKO_REMINDER_TYPE;

  /**
   * also in Cliniko but unused right now
   */

  // sex: CLINIKO_SEX;
  // address_3?: string;
  // occupation?: string;
  // gender_identity?: string;
  // title: string;
  // medicare_reference_number: string;
  // receives_confirmation_emails: boolean;
  // invoice_default_to: string;
  // invoice_email: string;
  // invoice_extra_information: string;
  // accepted_privacy_policy: boolean | null;
  // accepted_sms_marketing: boolean;
  // accepted_email_marketing: boolean;
};
