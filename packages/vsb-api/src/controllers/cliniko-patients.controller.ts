import { APIResponseBody, API_RESPONSE_STATUS, ERROR_TYPE } from '@newrade/core-common';
import {
  CLINIKO_PATIENT_VASEC_STATUS,
  GetNewPatientsAPIRequestBody,
  GetNewPatientsAPIResponseBody,
  getPatientModel,
  PatientClinikoModel,
  PatientModelAdmin,
  PatientTreatmentNote,
} from '@newrade/vsb-common';
import debug from 'debug';
import { RequestHandler, Response } from 'express';
import {
  STATUS_NOTE_QUESTION_NAME,
  STATUS_NOTE_QUESTION_NOTE,
  STATUS_NOTE_TEMPLATE_ID,
} from '../constants/cliniko.constant';
import { fetchCliniko } from '../services/cliniko.service';
import { getIdFromSelfLink } from '../utilities/cliniko.utilities';

const log = debug('newrade:vsb-api:cliniko');
const logWarn = log.extend('warn');
const logError = log.extend('error');

/**
 * Retrieve patients list, grouped by status
 */
export const getPatients: RequestHandler<
  any,
  GetNewPatientsAPIResponseBody,
  GetNewPatientsAPIRequestBody
> = async (req, res) => {
  try {
    log(`request to retrieve new patients`);

    const allPatientsResponse = await getAllClinikoPatients();

    if (!allPatientsResponse?.payload?.patients.length) {
      handleNoPatientsFound(res);
      return;
    }

    log(`for each patient retrieve the treatment notes`);

    const patientsWithTreatmentNotesRequests = allPatientsResponse?.payload?.patients.map(
      (patient) => {
        return fetchCliniko<any, { treatment_notes: PatientTreatmentNote[] }>({
          method: 'GET',
          route: `treatment_notes`,
          params: `q=patient_id:=${patient.id}&sort=updated_at:desc`,
        }).then((result) => {
          const treatmentNotes = result.payload?.treatment_notes;

          if (!treatmentNotes?.length) {
            logWarn(`no treatment notes found for patient: ${patient.id}, skipping`);
            return;
          }

          // filter notes to find the correct type
          const statusTreatmentNotes = treatmentNotes.filter((treatmentNote) => {
            if (!treatmentNote.treatment_note_template.links.self) {
              return false;
            }

            const id = getIdFromSelfLink(treatmentNote.treatment_note_template.links.self);

            if (!id) {
              return false;
            }

            if (id === STATUS_NOTE_TEMPLATE_ID) {
              return true;
            }

            return false;
          });

          if (!statusTreatmentNotes.length) {
            logWarn(`no status treatment notes found for patient: ${patient.id}, skipping`);
            return;
          }

          // we only take the most recent treatment note
          const status = getStatusFromStatusTreatmentNote(treatmentNotes[0]);

          return {
            patientTreatmentNoteResponse: result,
            patient: getPatientModel(patient, { ...status }),
          };
        });
      }
    );

    // check if our array of request is defined and not empty
    if (!patientsWithTreatmentNotesRequests.length) {
      handleNoPatientsRequests(res);
      return;
    }

    const patientsWithTreatmentNotesResult = await Promise.allSettled(
      patientsWithTreatmentNotesRequests
    );

    log(`got ${patientsWithTreatmentNotesResult.length} patients with notes`);

    const patientsWithTreatmentNotes = patientsWithTreatmentNotesResult
      .filter((result) => {
        if (result.status === 'rejected') {
          return false;
        }

        return true;
      })
      .map((result) => {
        type Fullfilled = PromiseFulfilledResult<{
          patientTreatmentNoteResponse: APIResponseBody<{
            treatment_notes: PatientTreatmentNote[];
          }>;
          patient: PatientModelAdmin;
        }>;

        if (!(result as Fullfilled).value) {
          return undefined;
        }

        return (result as Fullfilled).value.patient;
      })
      .filter((patient) => !!patient);

    log(`got ${patientsWithTreatmentNotes.length} patients with treatment notes`);

    // check if our array of request is defined and not empty
    if (!patientsWithTreatmentNotes) {
      handleNoPatientsRequests(res);
      return;
    }

    return res.status(200).send({
      ...allPatientsResponse,
      message: 'Succès pour obtenir la liste des patients',
      payload: patientsWithTreatmentNotes as PatientModelAdmin[],
    });
  } catch (error) {
    console.log(error);
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

function getStatusFromStatusTreatmentNote(
  treatmentNote?: PatientTreatmentNote | null
): Pick<PatientModelAdmin, 'status' | 'statusNote'> {
  const questions = treatmentNote?.content.sections?.[0].questions;

  const statusQuestions = questions?.filter(
    (question) => question.name === STATUS_NOTE_QUESTION_NAME
  );
  const statusQuestion = statusQuestions?.[0];
  const noteQuestions = questions?.filter(
    (question) => question.name === STATUS_NOTE_QUESTION_NOTE
  );
  const noteQuestion = noteQuestions?.[0];

  if (!statusQuestion) {
    return {
      status: CLINIKO_PATIENT_VASEC_STATUS.UNKNOWN,
      statusNote: 'Note de status introuvable',
    };
  }

  const statusAnswers = statusQuestion.answers.filter((answer) => answer.selected);
  const statusAnswer = statusAnswers[0];
  const noteAnswers = noteQuestion?.answers.filter((answer) => answer.selected);
  const noteAnswer = noteAnswers?.[0];

  return {
    status: statusAnswer.value as CLINIKO_PATIENT_VASEC_STATUS,
    statusNote: noteAnswer?.value || '',
  };
}
