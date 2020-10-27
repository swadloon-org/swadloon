import * as Migration from 'contentful-migration';

export const InfoCheckExport: Migration.MigrationFunction = function (migration) {
  const infoCheck = migration.createContentType('InfoCheck', {
    name: 'InfoCheck',
  });
  const textCheck = infoCheck.createField('Text');
  textCheck.name('Text').type('Symbol').localized(true);
};
