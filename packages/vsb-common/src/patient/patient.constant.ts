/**
 * Must stay in sync with the template on cliniko
 * Only the number is needed since we check with a regex
 *
 * @see https://clinique-dr-pierre-boucher.ca1.cliniko.com/settings/templates/608098732734417720/edit
 */
export enum CLINIKO_PATIENT_VASEC_STATUS {
  '1_NOUVEAU' = '1.', // 1. Nouveau (en attente du formulaire pré-op)
  '2_FORM_PRE_OP_RECU' = '2.', // 2. Formulaire pré-op (a reçu le formulaire)
  '3_FORM_PRE_OP_REMPLI' = '3.', // 3. Formulaire pré-op rempli (attente de rdv pour scéance info)
  '4_INFO_APPOINTMENT_SET' = '4.', // 4. Rendez-vous fixé pour appel (scéance info)
  '5_1_WAITING_RDV_EXAMEN' = '5.1', // 5.1 En attente pour rdv examen physique
  '5_2_WAITING_RDV_OPERATOIRE_RDV_POST_OP' = '5.2', // 5.2 En attente pour rdv opératoire et suivi post-op
  '5_3_WAITING_AUTRE_RAISON' = '5.3', // 5.3 En attente pour autre(s) raison(s)
  '6_1_PLAN_RDV_EXAMEN' = '6.1', // 6.1 Rdv planifié (examen physique)
  '6_2_PLAN_RDV_VASECTOMIE_REV_POST_OP' = '6.2', // 6.2 Rdv planifié (vasectomie + suivi post-op)
  '7_WAITING_RDV_APPEL_SUIVI' = '7', // 7. En attente pour rdv appel de suivi post-op
  '8_1_WAITING_SPERMOGRAM' = '8.1', // 8.1 En attente résultat spermogramme
  '8_2_SPERMOGRAM_SENT' = '8.2', //  8.2 Envoie du résultat spermogramme
  '9_DOSSIER_COMPLETE' = '9', // 9. Dossier complété
  '0_ABANDON' = '0.', // 0. Abandon / désistement
}

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
