import { APIRequestBody, APIResponseBody } from '@newrade/core-common';
import { ValidationError } from 'yup';
import { PatientClinikoModel, PatientAPIModel } from '..';

export type PatientAPIResponseBody = APIResponseBody<{ validationErrors: ValidationError[] }>;
export type PatientAPIRequestBody = APIRequestBody<{ patient: PatientAPIModel }>;
