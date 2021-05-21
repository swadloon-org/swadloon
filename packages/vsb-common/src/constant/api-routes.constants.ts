export const API_BASE_PATH = `/api`;

/**
 * System
 */
export const API_HEALTH_CHECK = `${API_BASE_PATH}/health-check`;

/**
 * Patients
 */
export const API_REGISTER_PATIENT_ROUTE = `${API_BASE_PATH}/patient/register`;
export const API_LIST_PATIENTS_ROUTE = `${API_BASE_PATH}/patients`;

/**
 * Cliniko Status
 */
export const API_STATUS_CLINIKO = `${API_BASE_PATH}/cliniko/status`;

/**
 * Stmp Routes (only for testing locally)
 */
export const API_SEND_EMAIL = `${API_BASE_PATH}/email-test`;
export const API_GET_EMAIL_TEMPLATE = `${API_BASE_PATH}/email-template`;

/**
 * Other
 */
export const API_TRANSLATION_ROUTE = `${API_BASE_PATH}/translate`;
