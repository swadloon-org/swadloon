import { APIRequestBody, APIResponseBody } from '@newrade/core-common';
import { ValidationError } from 'yup';
import { PatientModel, PatientModelAdmin } from './patient.model';

/**
 * Generic request
 */
export type ClinikoAPIRequestBody = APIRequestBody<any>;

/**
 * Request to create a new patient
 */
export type CreatePatientAPIRequestBody = APIRequestBody<{ patient: PatientModel }>;
export type CreatePatientAPIResponseBody = APIResponseBody<{
  yupValidationErrors?: ValidationError[];
}>;

/**
 * Request to retrieve new patients
 */
export type GetNewPatientsAPIRequestBody = APIRequestBody<any>;
export type GetNewPatientsAPIResponseBody = APIResponseBody<PatientModelAdmin[]>;
