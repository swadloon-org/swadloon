import * as Migration from 'contentful-migration';

export const FormFieldExport: Migration.MigrationFunction = function (migration) {
  const formField = migration.createContentType('FormField', {
    name: 'FormField',
  });
  const isRequiredField = formField.createField('isRequired');
  isRequiredField.name('isRequired').type('Boolean').required(true);

  const typeField = formField.createField('type');
  typeField
    .name('Type')
    .type('Symbol')
    .required(true)
    .validations([
      {
        in: ['email', 'phone', 'shortText', 'longText'],
      },
    ]);

  const placeholderField = formField.createField('Placeholder');
  placeholderField.name('Placeholder').type('Symbol').localized(true);

  const errorRquiredField = formField.createField('ErrorRequired');
  errorRquiredField.name('ErrorRequired').type('Symbol').localized(true);

  const errorInvalidField = formField.createField('ErrorInvalid');
  errorInvalidField.name('ErrorInvalid').type('Symbol').localized(true);
};
