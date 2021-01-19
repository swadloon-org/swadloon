import * as yup from 'yup';
import { SchemaOf } from 'yup';
import { PatientModel } from './patient.model';

// setLocale({
//   // use constant translation keys for messages without values
//   mixed: {
//     default: 'field_invalid',
//   },
//   // use functions to generate an error object that includes the value from the schema
//   number: {
//     min: ({ min }) => ({ key: 'field_too_short', values: { min } }),
//     max: ({ max }) => ({ key: 'field_too_big', values: { max } }),
//   },
// });

export const PatientValidation: SchemaOf<PatientModel> = yup
  .object({
    first_name: yup.string().min(2, 'Too Short').max(50, 'Too Long').required('Required'),
    last_name: yup.string().min(2, 'Too Short').max(50, 'Too Long').required('Required'),
    email: yup.string().email().required('Required'),
  })
  .defined();
