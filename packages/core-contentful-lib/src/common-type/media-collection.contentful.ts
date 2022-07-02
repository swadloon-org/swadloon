import { pascal } from 'case';
import * as Migration from 'contentful-migration';

import { CONTENT_TYPE } from '@newrade/core-website-api';

import { CONTENTFUL_WIDGET } from '../types/contentful-widget-ids.js';
import { keys } from '../utilities.js';

import { COMMON_FIELD } from './common-fields.contentful.js';

export enum CarouselStyle {
  vertical = 'vertical',
  horizontal = 'horizontal',
}

/**
 * A MediaCollection holds one or more media (images, videos) to be used in banners, carousels
 */
export const createMediaCollection: Migration.MigrationFunction = function (migration) {
  const content = migration.createContentType(CONTENT_TYPE.MEDIA_COLLECTION, {
    name: pascal(CONTENT_TYPE.MEDIA_COLLECTION),
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
    helpText: 'Name of the media collections, e.g. "Home images"',
  });

  /**
   * Above The Fold
   */
  content.createField('aboveTheFold', {
    name: pascal('AboveTheFold'),
    type: 'Boolean',
  });

  /**
   * Media collection type
   */
  content.createField('carouselStyle', {
    name: pascal('carouselStyle'),
    type: 'Symbol',
    validations: [
      {
        in: keys(CarouselStyle),
      },
    ],
  });
  content.changeFieldControl('carouselStyle', 'builtin', CONTENTFUL_WIDGET.DROPDOWN, {
    helpText: 'Select carousel style',
  });

  /**
   * Linked medias
   */
  content.createField(COMMON_FIELD.MEDIAS, {
    name: pascal(COMMON_FIELD.MEDIAS),
    type: 'Array',
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [{ linkContentType: [CONTENT_TYPE.MEDIA] }],
    },
  });
  content.changeFieldControl(COMMON_FIELD.MEDIAS, 'builtin', CONTENTFUL_WIDGET.ENTRY_CARDS_EDITOR, {
    helpText: 'Select and reorder the images/videos to use in the collection',
  });
};
