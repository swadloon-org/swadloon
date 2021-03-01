import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { CONTENTFUL_WIDGET } from '../../types/contentful-widget-ids';
import { COMMON_CONTENT_TYPE } from '../common-type/common-content-types';
import { COMMON_FIELD } from '../common-type/common-fields';

/**
 * A MediaCollection holds one or more media (images, videos) to be used in banners, carousels
 */
export const createMedia: Migration.MigrationFunction = function (migration) {
  const content = migration.createContentType(COMMON_CONTENT_TYPE.MEDIA, {
    name: pascal(COMMON_CONTENT_TYPE.MEDIA),
    displayField: COMMON_FIELD.NAME,
  });

  /**
   * Unique collection name
   */
  content.createField(COMMON_FIELD.NAME, {
    name: pascal(COMMON_FIELD.NAME),
    type: 'Symbol',
    validations: [
      {
        unique: true,
      },
    ],
  });
  content.changeFieldControl(COMMON_FIELD.NAME, 'builtin', CONTENTFUL_WIDGET.SINGLE_LINE, {
    helpText: 'Name of the media, e.g. "Home images"',
  });

  /**
   * Linked medias
   */
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

  /**
   * Background position of the media
   */
  content.createField(COMMON_FIELD.BACKGROUND_POSITION_Y, {
    name: pascal(COMMON_FIELD.BACKGROUND_POSITION_Y),
    type: 'Symbol',
  });
  content.changeFieldControl('backgroundPositionY', 'builtin', CONTENTFUL_WIDGET.SINGLE_LINE, {
    helpText: 'Value of background position base on the Y axis"',
  });
};
