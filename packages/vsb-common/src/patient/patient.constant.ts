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
  '5_1_WAITING_POST_OP_FOLLOW_UP' = '5.1', // 5.1 En attente pour rdv examen physique
  SPERMOGRAM_SENT = '6.', // 6. Spermogramme envoyé
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
