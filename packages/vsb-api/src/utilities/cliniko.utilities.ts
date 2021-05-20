import {
  CLINIKO_PATIENT_VASEC_STATUS,
  PatientModelAdmin,
  PatientTreatmentNote,
  PatientTreatmentNoteAnswer,
} from '@newrade/vsb-common';
import debug from 'debug';
import sanitizeHtml from 'sanitize-html';
import {
  STATUS_NOTE_QUESTION_NAME,
  STATUS_NOTE_QUESTION_NOTE,
} from '../constants/cliniko.constant';

const log = debug('newrade:vsb-api:cliniko-utilities');
const logWarn = log.extend('warn');
const logError = log.extend('error');

/**
 * Extract the id from a self link
 * @see https://github.com/redguava/cliniko-api/blob/master/sections/treatment_notes.md#get-treatment-notes
 * @example
 *  ```json
 *    "treatment_note_template": {
 *      "links": {
 *        "self": "https://api.au1.cliniko.com/v1/treatment_note_templates/789"
 *      }
 *    },
 *  ```
 */
export function getIdFromSelfLink(path?: string | null) {
  if (!path) {
    return undefined;
  }

  // receive https://api.au1.cliniko.com/v1/treatment_note_templates/789

  const reg = /(\/(?<id>\d+))/gi;

  const match = reg.exec(path);
  const id = match?.groups?.id;
  const number = Number(id);

  if (isNaN(number)) {
    return undefined;
  }

  // returns 789

  return number;
}

export function getStatusFromStatusTreatmentNote(
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
  // process status
  const statusAnswers = statusQuestion.answers?.filter((answer) => answer.selected);
  const statusAnswer = statusAnswers?.[0];
  const status = getClinikoPatientStatusFromRawAnswer(statusAnswer);

  // process status note
  const noteAnswer = noteQuestion?.answer;
  const sanitizedNoteAnswer = sanitizeHtml(noteAnswer || '', {
    disallowedTagsMode: 'discard',
    allowedTags: [],
  });

  return {
    status: status,
    statusNote: sanitizedNoteAnswer || '',
  };
}

/**
 * Instead of relying on exact string, we check for the id
 * e.g. '1.' and return the configured value
 */
export function getClinikoPatientStatusFromRawAnswer(
  answer?: PatientTreatmentNoteAnswer | null
): CLINIKO_PATIENT_VASEC_STATUS {
  if (!answer) {
    return CLINIKO_PATIENT_VASEC_STATUS.UNKNOWN;
  }

  if (!answer.value?.length) {
    return CLINIKO_PATIENT_VASEC_STATUS.UNKNOWN;
  }

  const idPattern = /^((\d\.?)+).*/gi;
  const match = idPattern.exec(answer.value);
  const id = match?.[1];

  if (id === undefined) {
    return CLINIKO_PATIENT_VASEC_STATUS.UNKNOWN;
  }

  switch (id) {
    case '0.': {
      return CLINIKO_PATIENT_VASEC_STATUS['0_ABANDON'];
    }
    case '1.': {
      return CLINIKO_PATIENT_VASEC_STATUS['1_NOUVEAU'];
    }
    case '2.': {
      return CLINIKO_PATIENT_VASEC_STATUS['2_FORM_PRE_OP_RECU'];
    }
    case '3.': {
      return CLINIKO_PATIENT_VASEC_STATUS['3_FORM_PRE_OP_REMPLI'];
    }
    case '4.': {
      return CLINIKO_PATIENT_VASEC_STATUS['4_INFO_APPOINTMENT_SET'];
    }
    case '5.1': {
      return CLINIKO_PATIENT_VASEC_STATUS['5_1_WAITING_RDV_EXAMEN'];
    }
    case '5.2': {
      return CLINIKO_PATIENT_VASEC_STATUS['5_2_WAITING_RDV_OPERATOIRE_RDV_POST_OP'];
    }
    case '5.3': {
      return CLINIKO_PATIENT_VASEC_STATUS['5_3_WAITING_AUTRE_RAISON'];
    }
    case '6.1': {
      return CLINIKO_PATIENT_VASEC_STATUS['6_1_PLAN_RDV_EXAMEN'];
    }
    case '6.2': {
      return CLINIKO_PATIENT_VASEC_STATUS['6_2_PLAN_RDV_VASECTOMIE_REV_POST_OP'];
    }
    case '7.': {
      return CLINIKO_PATIENT_VASEC_STATUS['7_WAITING_RDV_APPEL_SUIVI'];
    }
    case '8.': {
      return CLINIKO_PATIENT_VASEC_STATUS['8_WAITING_SPERMOGRAM'];
    }
    case '9.': {
      return CLINIKO_PATIENT_VASEC_STATUS['9_DOSSIER_COMPLETE'];
    }
    default: {
      logWarn(`no match for status "${match}"`);
      return CLINIKO_PATIENT_VASEC_STATUS['UNKNOWN'];
    }
  }
}
