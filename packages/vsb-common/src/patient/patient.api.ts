import { APIRequestBody, APIResponseBody } from '@newrade/core-common';
import { ValidationError } from 'yup';
import { PatientModel } from '..';

export type PatientAPIResponseBody = APIResponseBody<{ validationErrors: ValidationError[] }>;
export type PatientAPIRequestBody = APIRequestBody<{ patient: PatientModel }>;
