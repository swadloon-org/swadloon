import * as Migration from 'contentful-migration';

export const LinkExport: Migration.MigrationFunction = function (migration) {
  const link = migration.createContentType('Link', {
    name: 'Link',
  });

  const typeLink = link.createField('type');
  typeLink
    .name('Type')
    .type('Symbol')
    .required(true)
    .validations([
      {
        in: ['EXTERNAL_URL', 'INTERNAL_PAGE'],
      },
    ]);

  const nameLink = link.createField('Name');
  nameLink.name('Name').type('Symbol');

  const labelLink = link.createField('Label');
  labelLink.name('Label').type('Symbol');

  const urlLink = link.createField('URL');
  urlLink.name('URL').type('Symbol');
};
