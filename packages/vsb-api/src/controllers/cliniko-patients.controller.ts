import { APIResponseBody, API_RESPONSE_STATUS, ERROR_TYPE } from '@newrade/core-common';
import {
  CLINIKO_PATIENT_VASEC_STATUS,
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

type Answers = {
  value: string;
  selected?: boolean;
};

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

    log(`for each patient retrieve the treatment notes`);

    const patientsWithTreatmentNotesRequests = allPatientsResponse?.payload?.patients.map((patient) => {
      const patientTreatmentNoteResponse = fetchCliniko<any, any>({
        method: 'GET',
        route: `treatment_notes`,
        params: `q=patient_id:=${patient.id}`,
      }).then((result) => {
        const latestStatus = () => {
          const optionResult =
            result.payload?.treatment_notes[result.payload.treatment_notes.length - 1].content.sections[0].questions[0]
              .answers;
          if (optionResult !== null && optionResult !== undefined) {
            let obj = optionResult.find((objectPayload: Answers) => objectPayload?.selected === true);
            let index = optionResult.indexOf(obj);
            let valueTreatmentNotes = optionResult[index].value;
            const regexName = RegExp(/[\d][.][\d]?/g);

            const arrayMatch: string[] = [...valueTreatmentNotes.match(regexName)];
            const resultEnum: CLINIKO_PATIENT_VASEC_STATUS = arrayMatch[0] as CLINIKO_PATIENT_VASEC_STATUS;
            return resultEnum;
          }
        };

        const currentStatus = latestStatus();

        log(JSON.stringify({ patient: getPatientModel(patient, { status: currentStatus }) }, null, 2));
        return { patientTreatmentNoteResponse: result, patient: getPatientModel(patient) };
      });

      return patientTreatmentNoteResponse;
    });

    if (!patientsWithTreatmentNotesRequests) {
      handleNoPatientsRequests(res);
      return;
    }

    const patientsWithTreatmentNotesResult = await Promise.allSettled(patientsWithTreatmentNotesRequests);

    log(`find the treatment notes with the right treatment_note_template id`);

    log(`keep the last treatment note as source of truth`);

    log(`in the treament note find the selected state and return the good status`);

    log(`return the list of patient including the status`);

    log(`got ${allPatientsResponse?.payload?.patients?.length} patients`);

    const patientsWithoutFormsRequests = allPatientsResponse?.payload?.patients.map((patient) => {
      /** REWRITE */
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
