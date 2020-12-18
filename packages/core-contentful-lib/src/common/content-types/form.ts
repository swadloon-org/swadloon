import * as Migration from 'contentful-migration';

export const createForm: Migration.MigrationFunction = function (migration) {
  const content = migration.createContentType('ContactUsForm', {
    name: 'ContactUsForm',
  });
  content.createField('title', { name: 'Title', type: 'Symbol', localized: true });

  content.createField('actionText', {
    name: 'ActionText',
    type: 'Symbol',
    localized: true,
  });

  /**
   * Reference to the formField
   */

  content.createField('fields', {
    name: 'Fields',
    type: 'Array',
    items: { type: 'Link', linkType: 'Entry', validations: [{ linkContentType: ['formField'] }] },
  });
};
