import { APIResponseBody, API_RESPONSE_STATUS, ERROR_TYPE } from '@newrade/core-common';
import {
  GetNewPatientsAPIRequestBody,
  GetNewPatientsAPIResponseBody,
  getPatientModel,
  PatientClinikoModel,
  PatientModelAdmin,
} from '@newrade/vsb-common';
import debug from 'debug';
import { RequestHandler, Response } from 'express';
import { fetchCliniko } from '../services/cliniko.service';

const log = debug('newrade:vsb-api:cliniko');
const logWarn = log.extend('warn');
const logError = log.extend('error');

/**
 * Retrieve patients list, grouped by status
 */
export const getPatients: RequestHandler<any, GetNewPatientsAPIResponseBody, GetNewPatientsAPIRequestBody> = async (
  req,
  res
) => {
  try {
    log(`request to retrieve new patients`);

    const allPatientsResponse = await getAllClinikoPatients();

    if (!allPatientsResponse?.payload?.patients.length) {
      handleNoPatientsFound(res);
      return;
    }

    log(`got ${allPatientsResponse?.payload?.patients?.length} patients`);

    const patientsWithoutFormsRequests = allPatientsResponse?.payload?.patients.map((patient) => {
      const patientFormResponse = fetchCliniko<any, { patient_forms: any[] }>({
        method: 'GET',
        route: `patient_forms`,
        params: `q=patient_id:=${patient.id}`,
      }).then((result) => {
        return { patientFormResponse: result, patient: getPatientModel(patient) };
      });

      return patientFormResponse;
    });

    if (!patientsWithoutFormsRequests) {
      handleNoPatientsRequests(res);
      return;
    }

    const patientsWithoutFormsResult = await Promise.allSettled(patientsWithoutFormsRequests);

    const patientsWithoutForms = patientsWithoutFormsResult
      .filter((result) => {
        if (result.status === 'rejected') {
          return false;
        }

        if (result.value.patientFormResponse.payload?.patient_forms?.length) {
          return false;
        }

        return true;
      })
      .map(
        (result) =>
          (result as PromiseFulfilledResult<{
            patientFormResponse: APIResponseBody<{
              patient_forms: any[];
            }>;
            patient: PatientModelAdmin;
          }>).value.patient
      );

    log(`got ${patientsWithoutForms.length} patients with no forms`);

    return res.status(200).send({
      ...allPatientsResponse,
      message: 'Succès pour obtenir la liste des nouveaux patients',
      payload: patientsWithoutForms,
    });
  } catch (error) {
    handleUnhandledError(res, error);
  }
};

export async function getAllClinikoPatients() {
  const route = 'patients';
  const paramsSearch = 'created_at';
  const filterParams = `?sort=${paramsSearch}&order=desc`;

  log(`retrieving all patients from cliniko`);

  const response = await fetchCliniko<any, { patients: PatientClinikoModel[] }>({
    method: 'GET',
    route: `${route}${filterParams}`,
  });

  return response;
}

function handleNoPatientsFound(res: Response<APIResponseBody<any>>) {
  logError(`no patients could be found from cliniko`);
  res.status(503).send({
    api: 'vsb-api',
    status: API_RESPONSE_STATUS.ERROR,
    message: 'Impossible obtenir la liste des patients',
    errors: [{ name: ERROR_TYPE.UNHANDLED_ERROR, message: 'no patients found' }],
    payload: [],
  });
}

function handleNoPatientsRequests(res: Response<APIResponseBody<any>>) {
  logError(`no patient requests`);
  res.status(503).send({
    api: 'vsb-api',
    status: API_RESPONSE_STATUS.ERROR,
    message: 'Impossible de chercher info sur patients',
    errors: [{ name: ERROR_TYPE.UNHANDLED_ERROR, message: 'no patient requests' }],
    payload: [],
  });
}

function handleUnhandledError(res: Response<APIResponseBody<any>>, error?: Error, payload?: any) {
  logError(`request failed to an unhandled error`);
  res.status(500).send({
    api: 'vsb-api',
    status: API_RESPONSE_STATUS.ERROR,
    message: `Une erreur système s'est produite, notre équipe est avertie`,
    errors: [{ name: ERROR_TYPE.UNHANDLED_ERROR, message: error?.message || '' }],
    payload: payload,
  });
}

type ControllerMethods = 'getPatients';

export const ClinikoPatientsController: { [key in ControllerMethods]: RequestHandler } = {
  getPatients,
};
