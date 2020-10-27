import * as Migration from 'contentful-migration';

export const InfoTileExport: Migration.MigrationFunction = function (migration) {
  const infoTile = migration.createContentType('InfoTile', {
    name: 'InfoTile',
  });
  const illustrationTile = infoTile.createField('Illustration');
  illustrationTile.name('Illustration').type('Symbol');

  const titleTile = infoTile.createField('title', { name: 'Title', type: 'Symbol', localized: true });

  const textTile = infoTile.createField('Text');
  textTile.name('Text').type('Text').localized(true);
};
