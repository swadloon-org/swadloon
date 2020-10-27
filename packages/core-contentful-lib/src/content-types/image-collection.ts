import * as Migration from 'contentful-migration';
import { imageFields, imagesFields } from '../common/types.models';

export const ImageCollectionExport: Migration.MigrationFunction = function (migration) {
  const imageCollection = migration.createContentType('ImageCollection', {
    name: 'ImageCollection',
  });

  const imageSingle = imageCollection.createField('Image', { ...imageFields });
  const imageMultiple = imageCollection.createField('Images', { ...imagesFields });
};
