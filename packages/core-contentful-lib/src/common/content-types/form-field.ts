import * as Migration from 'contentful-migration';
import { keys } from '../../utilities';
import { INPUT_TYPE } from '../common-fields';

export const createFormField: Migration.MigrationFunction = function (migration) {
  const content = migration.createContentType('FormField', {
    name: 'FormField',
  });
  content.createField('isRequired', { name: 'IsRequired', type: 'Boolean', required: true });

  content.createField('type', {
    name: 'Type',
    type: 'Symbol',
    required: true,
    validations: [
      {
        in: keys(INPUT_TYPE),
      },
    ],
  });

  content.createField('placeholder', {
    name: 'Placeholder',
    type: 'Symbol',
    localized: true,
  });

  content.createField('errorRequired', {
    name: 'ErrorRequired',
    type: 'Symbol',
    localized: true,
  });

  content.createField('errorInvalid', {
    name: 'ErrorInvalid',
    type: 'Symbol',
    localized: true,
  });
};
