import {
  ClinikoPatientVasecStatus,
  CLINIKO_PATIENT_VASEC_STATUS,
} from '../../../../vsb-common/src';
import {
  getClinikoPatientStatusFromRawAnswer,
  getIdFromSelfLink,
  getStatusFromStatusTreatmentNote,
} from '../../utilities/cliniko.utilities';
import { patientStatusesMock } from './cliniko-patient-status.mock';

import { patientTreatmentNode } from './cliniko-patients.mock';

describe(`cliniko patients utilities`, () => {
  describe(`${getIdFromSelfLink.name}`, () => {
    it('should extract the id from a self link path', () => {
      const id = getIdFromSelfLink(
        'https://api.ca1.cliniko.com/v1/treatment_note_templates/608098732734417720'
      );
      expect(id).toBe(608098732734417720);
    });
  });

  describe(`${getStatusFromStatusTreatmentNote.name}`, () => {
    it('should give the correct status from the raw answer value coming from cliniko', () => {
      const { status, statusNote } = getStatusFromStatusTreatmentNote(
        patientTreatmentNode.treatment_notes[0]
      );
      expect(status).toBe(CLINIKO_PATIENT_VASEC_STATUS['3_FORM_PRE_OP_REMPLI']);
      expect(statusNote).toBe('Test note');
    });
  });

  describe(`${getClinikoPatientStatusFromRawAnswer.name}`, () => {
    it('should give the correct status from the raw status value', () => {
      const statuses = patientStatusesMock.map((answer) =>
        getClinikoPatientStatusFromRawAnswer(answer)
      );
      expect(statuses).toEqual([
        '1.',
        '2.',
        '3.',
        '4.',
        '5.1',
        '5.2',
        '5.3',
        '6.1',
        '6.2',
        '7.',
        '8.',
        '9',
        '0.',
      ]);
    });
  });
});
