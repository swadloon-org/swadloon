import { formatISO, parseISO } from 'date-fns';
import { CLINIKO_REMINDER_TYPE } from './patient.constant';
import { PatientClinikoModel, PatientModel } from './patient.model';

export function getPatientClinikoModel(patientModel: PatientModel): PatientClinikoModel {
  return {
    first_name: patientModel.firstName,
    last_name: patientModel.lastName,
    date_of_birth:
      typeof patientModel.dateOfBirth === 'string'
        ? formatISO(parseISO(patientModel.dateOfBirth), { representation: 'date' })
        : formatISO(patientModel.dateOfBirth, { representation: 'date' }),
    medicare: patientModel.medicare,
    email: patientModel.email,
    patient_phone_numbers: [{ phone_type: patientModel.patientPhoneType, number: patientModel.patientPhoneNumber }],
    address_1: patientModel.address1,
    address_2: patientModel.address2,
    city: patientModel.city,
    state: patientModel.state,
    post_code: patientModel.postCode,
    country: patientModel.country,
    /** disabled on the form, will be hardcoded to email */
    reminder_type: CLINIKO_REMINDER_TYPE.EMAIL,
  };
}
