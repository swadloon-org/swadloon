import * as Migration from 'contentful-migration';

export const ImageCollectionExport: Migration.MigrationFunction = function (migration) {
  const imageCollection = migration.createContentType('ImageCollection', {
    name: 'ImageCollection',
  });
};
