import { APIRequestBody, APIResponseBody } from '@newrade/core-common';
import { ValidationError } from 'yup';
import { PatientModel } from './patient.model';

export type PatientAPIResponseBody = APIResponseBody<{ yupValidationErrors?: ValidationError[] }>;
export type PatientAPIRequestBody = APIRequestBody<{ patient: PatientModel }>;
