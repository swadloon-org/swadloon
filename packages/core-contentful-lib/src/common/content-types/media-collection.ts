import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { COMMON_SIZE, MEDIA_COLLECTION } from 'types/props-type';
import { CONTENTFUL_WIDGET } from '../../../types/contentful-widget-ids';
import { keys } from '../../utilities';
import { COMMON_CONTENT_TYPE } from '../common-content-types';
import { COMMON_FIELD } from '../common-fields';

export const createMediaCollection: Migration.MigrationFunction = function (migration) {
  const content = migration.createContentType(COMMON_CONTENT_TYPE.MEDIA_COLLECTION, {
    name: pascal(COMMON_CONTENT_TYPE.MEDIA_COLLECTION),
  });

  content.createField(COMMON_FIELD.TYPE, {
    name: pascal(COMMON_FIELD.TYPE),
    type: 'Link',
    linkType: 'Entry',
    required: true,
    validations: [
      {
        linkContentType: keys(MEDIA_COLLECTION),
      },
    ],
  });
  content.changeFieldControl(COMMON_FIELD.TYPE, 'builtin', CONTENTFUL_WIDGET.LIST, {
    helpText: 'Select media type',
  });

  MEDIA_COLLECTION;

  content.createField(COMMON_FIELD.VARIANT, {
    name: pascal(COMMON_FIELD.VARIANT),
    type: 'Array',
    validations: [{ size: { max: 1 } }],
    items: {
      type: 'Symbol',
      validations: [{ in: keys(COMMON_SIZE) }],
    },
  });
  content.changeFieldControl(COMMON_FIELD.VARIANT, 'builtin', CONTENTFUL_WIDGET.LIST, {
    helpText: 'Select media variant',
  });

  content.createField(COMMON_FIELD.SIZE, {
    name: pascal(COMMON_FIELD.SIZE),
    type: 'Array',
    validations: [{ size: { max: 1 } }],
    items: {
      type: 'Symbol',
      validations: [{ in: keys(COMMON_SIZE) }],
    },
  });
  content.changeFieldControl(COMMON_FIELD.SIZE, 'builtin', CONTENTFUL_WIDGET.LIST, {
    helpText: 'Select media size',
  });

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
