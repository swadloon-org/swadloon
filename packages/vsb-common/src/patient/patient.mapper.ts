import { formatISO, parseISO } from 'date-fns';
import { CLINIKO_PHONE_TYPE, CLINIKO_REMINDER_TYPE } from './patient.constant';
import { PatientClinikoModel, PatientModel, PatientModelAdmin } from './patient.model';

export function getPatientClinikoModel(patientModel: PatientModel): PatientClinikoModel {
  return {
    id: patientModel.id || '',
    first_name: patientModel.firstName,
    last_name: patientModel.lastName,
    date_of_birth:
      typeof patientModel.dateOfBirth === 'string'
        ? formatISO(parseISO(patientModel.dateOfBirth), { representation: 'date' })
        : formatISO(patientModel.dateOfBirth, { representation: 'date' }),
    medicare: patientModel.medicare,
    email: patientModel.email,
    patient_phone_numbers: [
      { phone_type: patientModel.patientPhoneType, number: patientModel.patientPhoneNumber },
    ],
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

export function getPatientModel(
  patientClinikoModel: PatientClinikoModel,
  extras?: Pick<PatientModelAdmin, 'status' | 'statusNote'>
): PatientModelAdmin {
  return {
    id: patientClinikoModel.id,
    firstName: patientClinikoModel.first_name,
    lastName: patientClinikoModel.last_name,
    email: patientClinikoModel.email,
    patientPhoneNumber: patientClinikoModel.patient_phone_numbers?.[0]?.number,
    patientPhoneType: patientClinikoModel.patient_phone_numbers?.[0]
      ?.phone_type as CLINIKO_PHONE_TYPE,
    updatedAt: patientClinikoModel.updated_at,
    status: extras?.status,
    statusNote: extras?.statusNote,
  };
}
