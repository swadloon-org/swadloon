/**
 * Must stay in sync with the template on cliniko
 * Only the number is needed since we check with a regex
 */
export enum CLINIKO_PATIENT_VASEC_STATUS {
  NEW = '1.', // 1. Nouveau (en attente du formulaire pré-op)
  WAITING_FORM_PRE_OP = '2.', // 2. Formulaire pré-op (a reçu le formulaire)
  COMPLETED_FORM_PRE_OP = '3.', // 3. Formulaire pré-op rempli
  APPOINTMENT_SET_PHONE_CALL = '4.', // 4. Rendez-vous fixé pour appel avec Dr. Boucher
  WAITING_POST_OP_FOLLOW_UP = '5.', // 5. En attente pour appel de suivi post-opératoire
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
