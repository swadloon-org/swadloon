import { API_REGISTER_PATIENT_ROUTE, PatientAPIResponseBody } from '@newrade/vsb-common';

export function postClinikoPatient() {
  try {
    fetch(API_REGISTER_PATIENT_ROUTE, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify(
      //   { api: 'vsb-api', payload: { patient: { ...data }, recaptcha: { token: tokenRecaptcha } } },
      //   null,
      //   2
      // ),
    })
      .then((response) => response.json())
      .then((result: PatientAPIResponseBody) => {
        if (result.errors) {
          result.errors.map((error) => {
            console.log(error);
          });
        }

        if (result.payload.yupValidationErrors) {
          result.payload.yupValidationErrors.map((validationError) => {
            if (validationError) {
              // setError(validationError.path as keyof PatientModel, {
              //   type: 'manual',
              //   message: validationError.message,
              // });
            }
          });
        }

        // setApiErrors([
        //   ...result.errors.map((error) => error.message),
        //   ...result.payload.yupValidationErrors.map((error) => error.errors.join(', ')),
        // ]);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        // window.setTimeout(() => {
        //   setLoading(false);
        // }, 1000);
      });
  } catch (error) {}
}
