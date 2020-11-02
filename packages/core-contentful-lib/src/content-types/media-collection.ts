import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { COMMON_CONTENT_TYPE } from '../constants/content-types';
import { CONTENTFUL_WIDGET } from '../constants/contentful-widget-ids';
import { COMMON_FIELD } from '../constants/fields';

export const createMediaCollection: Migration.MigrationFunction = function (migration) {
  const content = migration.createContentType(COMMON_CONTENT_TYPE.MEDIA_COLLECTION, {
    name: pascal(COMMON_CONTENT_TYPE.MEDIA_COLLECTION),
  });

  // content.createField(COMMON_FIELD.TYPE, {
  //   ...typeField,
  //   validations: [{ in: [MEDIA_COLLECTION.CAROUSEL_HORIZONTAL, MEDIA_COLLECTION.CAROUSEL_VERTICAL] }],
  // });
  // content.createField(COMMON_FIELD.VARIANT, { ...variantField, validations: [{ in: ['carousel'] }] });
  // content.createField(COMMON_FIELD.SIZE, {
  //   ...sizeField,
  //   validations: [{ in: [COMMON_SIZE.LARGE, COMMON_SIZE.LARGE] }],
  // });

  content.createField(COMMON_FIELD.MEDIAS, {
    name: pascal(COMMON_FIELD.MEDIAS),
    type: 'Array',
    items: {
      type: 'Link',
      linkType: 'Asset',
    },
  });
  content.changeFieldControl(COMMON_FIELD.MEDIAS, 'builtin', CONTENTFUL_WIDGET.ASSET_GALLERY_EDITOR, {
    helpText: 'Select and reorder the images/videos to use in the collection',
  });
};
