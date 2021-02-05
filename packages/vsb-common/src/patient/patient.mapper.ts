import { formatISO } from 'date-fns';
import { PatientModel, PatientClinikoModel } from './patient.model';

export function getPatientClinikoModel(patientModel: PatientModel): PatientClinikoModel {
  return {
    first_name: patientModel.firstName,
    last_name: patientModel.lastName,
    date_of_birth:
      typeof patientModel.dateOfBirth === 'string'
        ? patientModel.dateOfBirth
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
    reminder_type: patientModel.reminderType,
  };
}
