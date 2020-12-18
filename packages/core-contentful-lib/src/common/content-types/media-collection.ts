import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { CONTENTFUL_WIDGET } from '../../../types/contentful-widget-ids';
import { keys } from '../../utilities';
import { COMMON_CONTENT_TYPE } from '../common-content-types';
import { COMMON_FIELD } from '../common-fields';
import { CAROUSEL_STYLE, COMMON_SIZE, COMMON_STYLE_VARIANT, COMMON_VARIANT } from '../common-props-types';

/**
 * A MediaCollection holds one or more media (images, videos) to be used in banners, carousels
 */
export const createMediaCollection: Migration.MigrationFunction = function (migration) {
  const content = migration.createContentType(COMMON_CONTENT_TYPE.MEDIA_COLLECTION, {
    name: pascal(COMMON_CONTENT_TYPE.MEDIA_COLLECTION),
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
    helpText: 'Name of the media collections, e.g. "Home images"',
  });

  /**
   * Media collection type
   */
  content.createField('carouselStyle', {
    name: pascal('carouselStyle'),
    type: 'Symbol',
    required: true,
    validations: [
      {
        in: keys(CAROUSEL_STYLE),
      },
    ],
  });
  content.changeFieldControl('carouselStyle', 'builtin', CONTENTFUL_WIDGET.DROPDOWN, {
    helpText: 'Select carousel style',
  });

  /**
   * Media collection size
   */
  content.createField(COMMON_FIELD.SIZE, {
    name: pascal(COMMON_FIELD.SIZE),
    type: 'Symbol',
    validations: [{ in: [COMMON_SIZE.LARGE] }],
  });
  content.changeFieldControl(COMMON_FIELD.SIZE, 'builtin', CONTENTFUL_WIDGET.DROPDOWN, {
    helpText: 'Select media size',
  });

  /**
   * Media collection variant
   */
  content.createField(COMMON_FIELD.VARIANT, {
    name: pascal(COMMON_FIELD.VARIANT),
    type: 'Symbol',
    validations: [
      {
        in: [COMMON_VARIANT.PRIMARY, COMMON_VARIANT.SECONDARY],
      },
    ],
  });
  content.changeFieldControl(COMMON_FIELD.VARIANT, 'builtin', CONTENTFUL_WIDGET.DROPDOWN, {
    helpText: 'Select variant',
  });

  /**
   * Media collection style variant
   */
  content.createField(COMMON_FIELD.STYLE_VARIANT, {
    name: pascal(COMMON_FIELD.STYLE_VARIANT),
    type: 'Symbol',
    validations: [
      {
        in: [COMMON_STYLE_VARIANT.NORMAL],
      },
    ],
  });
  content.changeFieldControl(COMMON_FIELD.STYLE_VARIANT, 'builtin', CONTENTFUL_WIDGET.DROPDOWN, {
    helpText: 'Select style variant',
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
};
