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
  '7_WAITING_RDV_APPEL_SUIVI' = '7', // 7. En attente pour rdv appel de suivi post-op
  '8_WAITING_SPERMOGRAM' = '8.1', // 8. En attente du résultat spermogramme
  '9_DOSSIER_COMPLETE' = '9', // 9. Dossier complété
  '0_ABANDON' = '0.', // 0. Abandon / désistement
  'UNKNOWN' = 'UNKNOWN', // indicates a problem in the backend
}

export const ClinikoPatientVasecStatusDescription: {
  [key in CLINIKO_PATIENT_VASEC_STATUS]: {
    color: string;
    description: string;
  };
} = {
  [CLINIKO_PATIENT_VASEC_STATUS['1_NOUVEAU']]: {
    description: '1. Nouveau',
    color: 'red',
  },
  [CLINIKO_PATIENT_VASEC_STATUS['2_FORM_PRE_OP_RECU']]: {
    description: '2. Formulaire pré-op reçu',
    color: 'red',
  },
  [CLINIKO_PATIENT_VASEC_STATUS['3_FORM_PRE_OP_REMPLI']]: {
    description: '3. Formulaire pré-op rempli',
    color: 'red',
  },
  [CLINIKO_PATIENT_VASEC_STATUS['4_INFO_APPOINTMENT_SET']]: {
    description: '4. Rendez-vous fixé pour appel',
    color: 'red',
  },
  [CLINIKO_PATIENT_VASEC_STATUS['5_1_WAITING_RDV_EXAMEN']]: {
    description: '5.1 En attente pour rdv examen physique',
    color: 'red',
  },
  [CLINIKO_PATIENT_VASEC_STATUS['5_2_WAITING_RDV_OPERATOIRE_RDV_POST_OP']]: {
    description: '5.2 En attente pour rdv opératoire et suivi post-op',
    color: 'red',
  },
  [CLINIKO_PATIENT_VASEC_STATUS['5_3_WAITING_AUTRE_RAISON']]: {
    description: '5.3 En attente pour autre(s) raison(s)',
    color: 'red',
  },
  [CLINIKO_PATIENT_VASEC_STATUS['6_1_PLAN_RDV_EXAMEN']]: {
    description: '6.1 Rdv planifié (examen physique)',
    color: 'red',
  },
  [CLINIKO_PATIENT_VASEC_STATUS['6_2_PLAN_RDV_VASECTOMIE_REV_POST_OP']]: {
    description: '6.2 Rdv planifié (vasectomie + suivi post-op)',
    color: 'red',
  },
  [CLINIKO_PATIENT_VASEC_STATUS['7_WAITING_RDV_APPEL_SUIVI']]: {
    description: '7. En attente pour rdv appel de suivi post-op',
    color: 'red',
  },
  [CLINIKO_PATIENT_VASEC_STATUS['8_WAITING_SPERMOGRAM']]: {
    description: '8. En attente du résultat spermogramme',
    color: 'red',
  },
  [CLINIKO_PATIENT_VASEC_STATUS['9_DOSSIER_COMPLETE']]: {
    description: '9. Dossier complété',
    color: 'red',
  },
  [CLINIKO_PATIENT_VASEC_STATUS['0_ABANDON']]: {
    description: '0. Abandon / désistement',
    color: 'red',
  },
  [CLINIKO_PATIENT_VASEC_STATUS['UNKNOWN']]: {
    description: 'UNKNOWN',
    color: 'red',
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
