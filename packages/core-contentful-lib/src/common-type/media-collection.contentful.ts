import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { CONTENTFUL_WIDGET } from '../../types/contentful-widget-ids';
import { ContentType } from '@newrade/core-gatsby-ui/src';
import { COMMON_FIELD } from './common-fields.contentful';
import { keys } from '../utilities';

export enum CarouselStyle {
  vertical = 'vertical',
  horizontal = 'horizontal',
}

/**
 * A MediaCollection holds one or more media (images, videos) to be used in banners, carousels
 */
export const createMediaCollection: Migration.MigrationFunction = function (migration) {
  const content = migration.createContentType(ContentType.MEDIA_COLLECTION, {
    name: pascal(ContentType.MEDIA_COLLECTION),
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
      linkType: 'Asset',
    },
  });
  content.changeFieldControl(
    COMMON_FIELD.MEDIAS,
    'builtin',
    CONTENTFUL_WIDGET.ASSET_GALLERY_EDITOR,
    {
      helpText: 'Select and reorder the images/videos to use in the collection',
    }
  );
};
