import * as Migration from 'contentful-migration';

export const createInfoCheck: Migration.MigrationFunction = function (migration) {
  const infoCheck = migration.createContentType('infoCheck', {
    name: 'InfoCheck',
  });
  infoCheck.createField('text', { name: 'Text', type: 'Symbol', localized: true });
};
