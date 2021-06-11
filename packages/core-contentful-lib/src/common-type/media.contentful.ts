import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { CONTENTFUL_WIDGET } from '../../types/contentful-widget-ids';
import { ContentType } from '@newrade/core-gatsby-ui/src';
import { COMMON_FIELD } from './common-fields.contentful';

/**
 * A Media hold one media (image, video) to be used in MediaCollections
 */
export const createMedia: Migration.MigrationFunction = function (migration) {
  const content = migration.createContentType(ContentType.MEDIA, {
    name: pascal(ContentType.MEDIA),
    displayField: COMMON_FIELD.NAME,
  });

  /**
   * Unique media name
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
    helpText: 'Name of the media, e.g. "Home banner"',
  });

  /**
   * Alt text description of the media
   */
  content.createField(COMMON_FIELD.TEXT, {
    name: pascal(COMMON_FIELD.TEXT),
    type: 'Text',
    localized: true,
  });

  /**
   * Linked media
   */
  content.createField(COMMON_FIELD.MEDIA, {
    name: pascal(COMMON_FIELD.MEDIA),
    type: 'Link',
    linkType: 'Asset',
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
