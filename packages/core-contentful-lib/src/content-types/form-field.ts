import * as Migration from 'contentful-migration';

export const FormFieldExport: Migration.MigrationFunction = function (migration) {
  const formField = migration.createContentType('FormField', {
    name: 'FormField',
  });
  const isRequiredField = formField.createField('isRequired', { name: 'isRequired', type: 'Boolean', required: true });

  const typeField = formField.createField('type', {
    name: 'Type',
    type: 'Symbol',
    required: true,
    validations: [
      {
        in: ['email', 'phone', 'shortText', 'longText'],
      },
    ],
  });

  const placeholderField = formField.createField('Placeholder', {
    name: 'Placeholder',
    type: 'Symbol',
    localized: true,
  });

  const errorRquiredField = formField.createField('ErrorRequired', {
    name: 'ErrorRequired',
    type: 'Symbol',
    localized: true,
  });

  const errorInvalidField = formField.createField('ErrorInvalid', {
    name: 'ErrorInvalid',
    type: 'Symbol',
    localized: true,
  });
};
