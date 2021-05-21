import { PatientModelStatusObject } from './patient.model';

/**
 * Must stay in sync with the template on cliniko
 * Only the number is needed since we check with a regex
 *
 * @see https://clinique-dr-pierre-boucher.ca1.cliniko.com/settings/templates/608098732734417720/edit
 */
export enum CLINIKO_PATIENT_VASEC_STATUS {
  '1_NOUVEAU' = '1.', // 1. Nouveau (en attente du formulaire pré-op)
  '2_FORM_PRE_OP_RECU' = '2.', // 2. Formulaire pré-op reçu
  '3_FORM_PRE_OP_REMPLI' = '3.', // 3. Formulaire pré-op rempli (attente de rdv pour scéance info)
  '4_INFO_APPOINTMENT_SET' = '4.', // 4. Rendez-vous fixé pour appel (scéance info)
  '5_1_WAITING_RDV_EXAMEN' = '5.1', // 5.1 En attente pour rdv examen physique
  '5_2_WAITING_RDV_OPERATOIRE_RDV_POST_OP' = '5.2', // 5.2 En attente pour rdv opératoire et suivi post-op
  '5_3_WAITING_AUTRE_RAISON' = '5.3', // 5.3 En attente pour autre(s) raison(s)
  '6_1_PLAN_RDV_EXAMEN' = '6.1', // 6.1 Rdv planifié (examen physique)
  '6_2_PLAN_RDV_VASECTOMIE_REV_POST_OP' = '6.2', // 6.2 Rdv planifié (vasectomie + suivi post-op)
  '7_WAITING_RDV_APPEL_SUIVI' = '7.', // 7. En attente pour rdv appel de suivi post-op
  '8_WAITING_SPERMOGRAM' = '8.', // 8. En attente du résultat spermogramme
  '9_DOSSIER_COMPLETE' = '9', // 9. Dossier complété
  '0_ABANDON' = '0.', // 0. Abandon / désistement
  'UNKNOWN' = 'UNKNOWN', // indicates a problem in the backend
}

export const clinikoPatientVasecStatus: {
  [key in CLINIKO_PATIENT_VASEC_STATUS]: PatientModelStatusObject;
} = {
  [CLINIKO_PATIENT_VASEC_STATUS['1_NOUVEAU']]: {
    order: 1,
    description: '1. Nouveau',
    color: '#23a727',
    colorText: 'white',
  },
  [CLINIKO_PATIENT_VASEC_STATUS['2_FORM_PRE_OP_RECU']]: {
    order: 2,
    description: '2. Formulaire pré-op reçu',
    color: '#229ba7',
    colorText: 'white',
  },
  [CLINIKO_PATIENT_VASEC_STATUS['3_FORM_PRE_OP_REMPLI']]: {
    order: 3,
    description: '3. Formulaire pré-op rempli',
    color: '#2370a7',
    colorText: 'white',
  },
  [CLINIKO_PATIENT_VASEC_STATUS['4_INFO_APPOINTMENT_SET']]: {
    order: 4,
    description: '4. Rendez-vous fixé pour appel',
    color: '#6e23a7',
    colorText: 'white',
  },
  [CLINIKO_PATIENT_VASEC_STATUS['5_1_WAITING_RDV_EXAMEN']]: {
    order: 5,
    description: '5.1 En attente pour rdv examen physique',
    color: '#ffbdf1',
    colorText: '#333333',
  },
  [CLINIKO_PATIENT_VASEC_STATUS['5_2_WAITING_RDV_OPERATOIRE_RDV_POST_OP']]: {
    order: 6,
    description: '5.2 En attente pour rdv opératoire et suivi post-op',
    color: '#ffbdf1',
    colorText: '#333333',
  },
  [CLINIKO_PATIENT_VASEC_STATUS['5_3_WAITING_AUTRE_RAISON']]: {
    order: 7,
    description: '5.3 En attente pour autre(s) raison(s)',
    color: '#ffbdf1',
    colorText: '#333333',
  },
  [CLINIKO_PATIENT_VASEC_STATUS['6_1_PLAN_RDV_EXAMEN']]: {
    order: 8,
    description: '6.1 Rdv planifié (examen physique)',
    color: '#bd2c91',
    colorText: 'white',
  },
  [CLINIKO_PATIENT_VASEC_STATUS['6_2_PLAN_RDV_VASECTOMIE_REV_POST_OP']]: {
    order: 9,
    description: '6.2 Rdv planifié (vasectomie + suivi post-op)',
    color: '#bd2c91',
    colorText: 'white',
  },
  [CLINIKO_PATIENT_VASEC_STATUS['7_WAITING_RDV_APPEL_SUIVI']]: {
    order: 10,
    description: '7. En attente pour rdv appel de suivi post-op',
    color: '#ffaaaa',
    colorText: '#333333',
  },
  [CLINIKO_PATIENT_VASEC_STATUS['8_WAITING_SPERMOGRAM']]: {
    order: 11,
    description: '8. En attente du résultat spermogramme',
    color: '#d6d86c',
    colorText: '#333333',
  },
  [CLINIKO_PATIENT_VASEC_STATUS['9_DOSSIER_COMPLETE']]: {
    order: 12,
    description: '9. Dossier complété',
    color: '#868686',
    colorText: 'white',
  },
  [CLINIKO_PATIENT_VASEC_STATUS['0_ABANDON']]: {
    order: 13,
    description: '0. Abandon / désistement',
    color: '#d0d0d0',
    colorText: '#717171',
  },
  [CLINIKO_PATIENT_VASEC_STATUS['UNKNOWN']]: {
    order: 14,
    description: '⚠️ UNKNOWN',
    color: 'black',
    colorText: 'white',
  },
};

export enum CLINIKO_REMINDER_TYPE {
  NONE = 'None',
  EMAIL = 'Email',
  SMS = 'SMS',
  SMS_EMAIL = 'SMS & Email',
}

export enum CLINIKO_PHONE_TYPE {
  MOBILE = 'Mobile',
  HOME = 'Home',
}

export enum CLINIKO_SEX {
  MALE = 'Male',
  FEMALE = 'Female',
}
