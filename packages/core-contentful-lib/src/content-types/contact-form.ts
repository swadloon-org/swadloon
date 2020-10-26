import * as Migration from 'contentful-migration';

export const ContactUsFormExport: Migration.MigrationFunction = function (migration) {
  const contactUsForm = migration.createContentType('ContactUsForm', {
    name: 'ContactUsForm',
  });
  const titleContact = contactUsForm.createField('Title');
  titleContact.name('Title').type('Symbol');

  const actionContact = contactUsForm.createField('ActionText');
  actionContact.name('ActionText').type('Symbol');

  // Reference to the formField
  const contactField = contactUsForm.createField('Fields');
  contactField
    .name('Fields')
    .type('Array')
    .items({ type: 'Link', linkType: 'Entry', validations: [{ linkContentType: ['formField'] }] });
};
