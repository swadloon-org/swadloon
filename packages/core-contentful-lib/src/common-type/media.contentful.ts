import { pascal } from 'case';
import * as Migration from 'contentful-migration';

import { ContentType } from '@newrade/core-website-api';

import { CONTENTFUL_WIDGET } from '../types/contentful-widget-ids';

import { COMMON_FIELD } from './common-fields.contentful';

/**
 * A Media hold one media (image, video) to be used in MediaCollections
 * or other models
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
   * Media for mobile
   */
  content.createField(COMMON_FIELD.MEDIA_MOBILE, {
    name: pascal(COMMON_FIELD.MEDIA_MOBILE),
    type: 'Link',
    linkType: 'Asset',
  });

  /**
   * Background position for the media on mobile
   */
  content.createField(COMMON_FIELD.BACKGROUND_POSITION_MOBILE_Y, {
    name: pascal(COMMON_FIELD.BACKGROUND_POSITION_MOBILE_Y),
    type: 'Symbol',
  });
  content.changeFieldControl(
    COMMON_FIELD.BACKGROUND_POSITION_MOBILE_Y,
    'builtin',
    CONTENTFUL_WIDGET.SINGLE_LINE,
    {
      helpText: 'Value of background position base on the Y axis"',
    }
  );

  /**
   * Max width of the image on mobile
   */
  content.createField(COMMON_FIELD.MAX_WIDTH_MOBILE, {
    name: pascal(COMMON_FIELD.MAX_WIDTH_MOBILE),
    type: 'Symbol',
  });
  content.changeFieldControl(COMMON_FIELD.MAX_WIDTH_MOBILE, 'builtin', CONTENTFUL_WIDGET.NUMBER, {
    helpText: 'Maximum width of the image on mobile',
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
  content.changeFieldControl(
    COMMON_FIELD.BACKGROUND_POSITION_Y,
    'builtin',
    CONTENTFUL_WIDGET.SINGLE_LINE,
    {
      helpText: 'Value of background position base on the Y axis"',
    }
  );

  /**
   * Max width of the image on mobile
   */
  content.createField(COMMON_FIELD.MAX_WIDTH, {
    name: pascal(COMMON_FIELD.MAX_WIDTH),
    type: 'Symbol',
  });
  content.changeFieldControl(COMMON_FIELD.MAX_WIDTH, 'builtin', CONTENTFUL_WIDGET.NUMBER, {
    helpText: 'Maximum width of the image on desktop',
  });
};
