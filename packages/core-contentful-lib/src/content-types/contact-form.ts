import * as Migration from 'contentful-migration';

export const ContactUsFormExport: Migration.MigrationFunction = function (migration) {
  const contactUsForm = migration.createContentType('ContactUsForm', {
    name: 'ContactUsForm',
  });
  const titleContact = contactUsForm.createField('Title', { name: 'Title', type: 'Symbol', localized: true });

  const actionContact = contactUsForm.createField('ActionText', {
    name: 'ActionText',
    type: 'Symbol',
    localized: true,
  });

  /**
   * Reference to the formField
   */

  const contactField = contactUsForm.createField('Fields', {
    name: 'Fields',
    type: 'Array',
    items: { type: 'Link', linkType: 'Entry', validations: [{ linkContentType: ['formField'] }] },
  });
};
