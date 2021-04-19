import { APIResponseBody, API_RESPONSE_STATUS, AppError, ERROR_TYPE } from '@newrade/core-common';
import {
  CreatePatientAPIRequestBody,
  CreatePatientAPIResponseBody,
  GetNewPatientsAPIRequestBody,
  GetNewPatientsAPIResponseBody,
  getPatientClinikoModel,
  getPatientModel,
  GetStatusAPIRequestBody,
  GetStatusAPIResponseBody,
  PatientClinikoModel,
  PatientClinikoValidation,
  CLINIKO_PATIENT_VASEC_STATUS,
  PatientModelAdmin,
  PatientFormClinikoModel,
  ClinikoAppointment,
} from '@newrade/vsb-common';
import debug from 'debug';
import { RequestHandler, Response } from 'express';
import { ValidationError } from 'yup';
import { fetchCliniko } from '../services/cliniko.service';

const log = debug('newrade:vsb-api:cliniko');
const logWarn = log.extend('warn');
const logError = log.extend('error');

/**
 * Messages
 */
export const systemError = `Une erreur s'est produite dans nos système, notre équipe technique s'occupe de l'incident, si l'erreur persiste, veuillez nous contacter.`;
const validationError = `Veuillez vérifier tout les champs du formulaire et soumettre à nouveau.`;

/**
 * Simple call to cliniko to make sure we can react their API.
 */
const getClinikoStatus: RequestHandler<any, GetStatusAPIResponseBody, GetStatusAPIRequestBody> = async (req, res) => {
  try {
    log(`request for service status`);
    const result = await fetchCliniko<any, any>({
      method: 'GET',
      route: 'services',
    });

    if (result.status === API_RESPONSE_STATUS.SUCCESS) {
      result.message = 'Système opérationel'; // override generic message
      result.payload = {}; // don't return cliniko payload
      return res.status(200).send(result);
    }
    logError(`request failed for service status`);

    return res.status(400).send(result);
  } catch (error) {
    handleUnhandledError(res, error);
  }
};

/**
 * Retrieve new patients list.
 */
export const getNewPatients: RequestHandler<any, GetNewPatientsAPIResponseBody, GetNewPatientsAPIRequestBody> = async (
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

    log(`finding patients with the status ${CLINIKO_PATIENT_VASEC_STATUS.NEW} ...`);

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

/**
 * Retrieve patients that have received the pre-op form but have not completed it.
 */
export const getPendingFormPatients: RequestHandler<
  any,
  GetNewPatientsAPIResponseBody,
  GetNewPatientsAPIRequestBody
> = async (req, res) => {
  try {
    log(`request to retrieve patients with pending forms`);

    const allPatientsResponse = await getAllClinikoPatients();

    if (!allPatientsResponse?.payload?.patients.length) {
      handleNoPatientsFound(res);
      return;
    }

    log(`got ${allPatientsResponse?.payload?.patients?.length} patients`);

    log(`finding patients with the status ${CLINIKO_PATIENT_VASEC_STATUS.WAITING_FORM_PRE_OP} ...`);

    const patientsPendingFormsRequests = allPatientsResponse?.payload?.patients.map((patient) => {
      const patientFormResponse = fetchCliniko<any, { patient_forms?: PatientFormClinikoModel[] }>({
        method: 'GET',
        route: `patient_forms`,
        params: `q[]=patient_id:=${patient.id}`,
      }).then((result) => {
        return { patientFormResponse: result, patient: getPatientModel(patient) };
      });

      return patientFormResponse;
    });

    if (!patientsPendingFormsRequests) {
      handleNoPatientsRequests(res);
      return;
    }

    const patientsPendingFormsResults = await Promise.allSettled(patientsPendingFormsRequests);

    const patientsPendingForms = patientsPendingFormsResults
      .filter((result) => {
        if (result.status === 'rejected') {
          return false;
        }

        // check if the patient has forms
        if (result.value.patientFormResponse.payload?.patient_forms?.length) {
          // check if the forms are not completed
          if (
            result.value.patientFormResponse.payload.patient_forms.filter((form) => form.completed_at === null).length
          ) {
            return true;
          }
        }

        return false;
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

    log(`got ${patientsPendingForms.length} patients with forms pending`);

    return res.status(200).send({
      ...allPatientsResponse,
      message: 'Succès pour obtenir la liste des patients avec formulaires envoyés',
      payload: patientsPendingForms,
    });
  } catch (error) {
    handleUnhandledError(res, error);
  }
};

/**
 * Retrieve patients that have completed the pre-op form with no appointment.
 */
export const getCompletedFormPatients: RequestHandler<
  any,
  GetNewPatientsAPIResponseBody,
  GetNewPatientsAPIRequestBody
> = async (req, res) => {
  try {
    log(`request to retrieve patients with completed forms with no appointment`);

    const allPatientsResponse = await getAllClinikoPatients();

    if (!allPatientsResponse?.payload?.patients.length) {
      handleNoPatientsFound(res);
      return;
    }

    log(`got ${allPatientsResponse?.payload?.patients?.length} patients`);

    log(`finding patients with the status ${CLINIKO_PATIENT_VASEC_STATUS.COMPLETED_FORM_PRE_OP} ...`);

    const patientsCompletedFormsRequests = allPatientsResponse?.payload?.patients.map((patient) => {
      const patientFormResponse = fetchCliniko<any, { patient_forms?: PatientFormClinikoModel[] }>({
        method: 'GET',
        route: `patient_forms`,
        params: `q[]=patient_id:=${patient.id}`,
      }).then((result) => {
        return { patientFormResponse: result, patient: getPatientModel(patient) };
      });

      return patientFormResponse;
    });

    if (!patientsCompletedFormsRequests) {
      handleNoPatientsRequests(res);
      return;
    }

    const patientsPendingFormsResults = await Promise.allSettled(patientsCompletedFormsRequests);

    const patientsPendingForms = patientsPendingFormsResults
      .filter((result) => {
        if (result.status === 'rejected') {
          return false;
        }

        // check if the patient has forms
        if (result.value.patientFormResponse.payload?.patient_forms?.length) {
          // check if the forms are not completed
          if (
            result.value.patientFormResponse.payload.patient_forms.filter((form) => form.completed_at !== null).length
          ) {
            return true;
          }
        }

        return false;
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

    log(`got ${patientsPendingForms.length} patients with forms completed`);

    log(`checking which ones have no appointment`);

    const patientsNoAppointmentRequests = patientsPendingForms.map((patient) => {
      const patientAppointmentResponse = fetchCliniko<any, { appointments?: any[] }>({
        method: 'GET',
        route: `patients/${patient.id}/appointments`,
      }).then((result) => {
        return { patientAppointment: result, patient: patient };
      });

      return patientAppointmentResponse;
    });

    const patientsNoAppointmentResults = await Promise.allSettled(patientsNoAppointmentRequests);

    const patientsPendingFormsWithNoAppointment = patientsNoAppointmentResults
      .filter((result) => {
        if (result.status === 'rejected') {
          return false;
        }

        // check if the patient has appointments
        if (result.value.patientAppointment.payload?.appointments?.length) {
          return false;
        }

        return true;
      })
      .map(
        (result) =>
          (result as PromiseFulfilledResult<{
            patientAppointment: APIResponseBody<{
              appointments?: any[];
            }>;
            patient: PatientModelAdmin;
          }>).value.patient
      );

    log(`got ${patientsPendingFormsWithNoAppointment.length} patients with forms completed and no appointments`);

    return res.status(200).send({
      ...allPatientsResponse,
      message: 'Succès pour obtenir la liste des patients avec formulaires complétés et pas de rendez-vous',
      payload: patientsPendingFormsWithNoAppointment,
    });
  } catch (error) {
    handleUnhandledError(res, error);
  }
};

/**
 * Retrieve patients that have completed the pre-op form, and have an appointment of type info.
 */
export const getWaitingCallPatients: RequestHandler<
  any,
  GetNewPatientsAPIResponseBody,
  GetNewPatientsAPIRequestBody
> = async (req, res) => {
  try {
    log(`request to retrieve patients with completed forms and an appointment of type sceance information`);

    const allPatientsResponse = await getAllClinikoPatients();

    if (!allPatientsResponse?.payload?.patients.length) {
      handleNoPatientsFound(res);
      return;
    }

    log(`got ${allPatientsResponse?.payload?.patients?.length} patients`);

    log(`finding patients with the status ${CLINIKO_PATIENT_VASEC_STATUS.APPOINTMENT_SET_PHONE_CALL} ...`);

    const patientsCompletedFormsRequests = allPatientsResponse?.payload?.patients.map((patient) => {
      const patientFormResponse = fetchCliniko<any, { patient_forms?: PatientFormClinikoModel[] }>({
        method: 'GET',
        route: `patient_forms`,
        params: `q[]=patient_id:=${patient.id}`,
      }).then((result) => {
        return { patientFormResponse: result, patient: getPatientModel(patient) };
      });

      return patientFormResponse;
    });

    if (!patientsCompletedFormsRequests) {
      handleNoPatientsRequests(res);
      return;
    }

    const patientsPendingFormsResults = await Promise.allSettled(patientsCompletedFormsRequests);

    const patientsPendingForms = patientsPendingFormsResults
      .filter((result) => {
        if (result.status === 'rejected') {
          return false;
        }

        // check if the patient has forms
        if (result.value.patientFormResponse.payload?.patient_forms?.length) {
          // check if the forms are not completed
          if (
            result.value.patientFormResponse.payload.patient_forms.filter((form) => form.completed_at !== null).length
          ) {
            return true;
          }
        }

        return false;
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

    log(`got ${patientsPendingForms.length} patients with forms completed`);

    log(`checking which ones have appointment(s)`);

    const patientsAppointmentRequests = patientsPendingForms.map((patient) => {
      const patientAppointmentResponse = fetchCliniko<any, { appointments?: ClinikoAppointment[] }>({
        method: 'GET',
        route: `patients/${patient.id}/appointments`,
      }).then((result) => {
        return { patientAppointment: result, patient: patient };
      });

      return patientAppointmentResponse;
    });

    const patientsAppointmentResults = await Promise.allSettled(patientsAppointmentRequests);

    const patientsPendingFormsWithAppointments = patientsAppointmentResults.filter((result) => {
      if (result.status === 'rejected') {
        return false;
      }

      // check if the patient has appointments
      if (result.value.patientAppointment.payload?.appointments?.length) {
        return true;
      }

      return false;
    });
    log(`got ${patientsPendingFormsWithAppointments.length} patients with forms completed and appointments`);

    log(`checking that we have at least one appointment of type`);

    const patientsAppointmentRequests = patientsPendingFormsWithAppointments.map((result) => {
      const resultFulfilled = result as PromiseFulfilledResult<{
        patientAppointment: APIResponseBody<{
          appointments: any[];
        }>;
        patient: PatientModelAdmin;
      }>;
      const patientAppointmentTypeResponse = fetchCliniko<any, { appointment_type?: { name: string } }>({
        method: 'GET',
        route: `appointment_types/${resultFulfilled.value.patientAppointment}`,
      }).then((result) => {
        return { patientAppointment: result, patient: result };
      });

      return patientAppointmentResponse;
    });

    return res.status(200).send({
      ...allPatientsResponse,
      message: 'Succès pour obtenir la liste des patients avec formulaires complétés et rendez-vous',
      payload: patientsPendingFormsWithAppointments,
    });
  } catch (error) {
    handleUnhandledError(res, error);
  }
};

/**
 * Create a new patient from our form.
 */
const postPatient: RequestHandler<any, CreatePatientAPIResponseBody, CreatePatientAPIRequestBody> = async (
  req,
  res
) => {
  try {
    log(`request to create a patient`);

    const payload = req.body?.payload?.patient;

    if (!req.body?.payload?.patient) {
      logError(`missing payload`);

      res.status(400).send({
        api: 'vsb-api',
        status: API_RESPONSE_STATUS.ERROR,
        message: validationError,
        errors: [{ name: ERROR_TYPE.DTO_VALIDATION_ERROR, message: 'Empty payload' }],
        payload: {},
      });
      return;
    }

    const clinikoPatient = getPatientClinikoModel(payload);

    PatientClinikoValidation.validateSync(clinikoPatient, {
      abortEarly: false,
    });

    log(`validation passed, sending request to cliniko`);

    const result = await fetchCliniko<PatientClinikoModel, any>({
      method: 'POST',
      route: 'patients',
      payload: clinikoPatient,
    });

    log(`patient successfully created`);

    return res.status(200).send(result);
  } catch (error) {
    logError(`request failed`);
    const yupError = error as ValidationError;

    // handle error thrown from yup
    if (yupError.inner) {
      logError(`request did not pass yup validation`);

      const appError = new AppError({
        name: ERROR_TYPE.DTO_VALIDATION_ERROR,
        message: 'Invalid dto',
      });
      res.status(400).send({
        api: 'vsb-api',
        status: API_RESPONSE_STATUS.ERROR,
        message: validationError,
        errors: [appError],
        payload: { yupValidationErrors: yupError.inner },
      });
      return;
    }

    handleUnhandledError(res, error, { yupValidationErrors: yupError.inner });
  }
};

async function getAllClinikoPatients() {
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

export const ClinikoController: { [key: string]: RequestHandler } = {
  getClinikoStatus: getClinikoStatus,
  getNewPatients: getNewPatients,
  getPendingFormPatients: getPendingFormPatients,
  getCompletedFormPatients: getCompletedFormPatients,
  getWaitingCallPatients: getWaitingCallPatients,
  getWaitingOpPatients: getWaitingCallPatients, // todo
  getPostOpPatients: getWaitingCallPatients, // todo
  postPatient: postPatient,
};
