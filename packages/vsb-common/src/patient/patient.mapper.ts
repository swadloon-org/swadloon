import { formatISO } from 'date-fns';
import { PatientAPIModel, PatientClinikoModel } from './patient.model';

// TODO: find best approach to map object to another object (automapper ?)
export function getPatientClinkoModel(patientAPIModel: PatientAPIModel): Partial<PatientClinikoModel> {
  return {
    first_name: patientAPIModel.firstName,
    last_name: patientAPIModel.lastName,
    date_of_birth: formatISO(patientAPIModel.dateOfBirth, { representation: 'date' }),
  };
}
