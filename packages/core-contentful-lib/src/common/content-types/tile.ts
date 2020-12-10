import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { COMMON_CONTENT_TYPE } from '../constants/content-types';
import { CONTENTFUL_WIDGET } from '../constants/contentful-widget-ids';
import { COMMON_FIELD, mediaField } from '../constants/fields';

export const createTile: Migration.MigrationFunction = function (migration) {
  const content = migration.createContentType(COMMON_CONTENT_TYPE.TILE, {
    name: pascal(COMMON_CONTENT_TYPE.TILE),
  });

  content.createField(COMMON_FIELD.TITLE, { name: pascal(COMMON_FIELD.TITLE), type: 'Symbol', localized: true });
  content.createField(COMMON_FIELD.SUBTITLE, { name: pascal(COMMON_FIELD.SUBTITLE), type: 'Symbol', localized: true });
  content.createField(COMMON_FIELD.TEXT, { name: pascal(COMMON_FIELD.TEXT), type: 'Text', localized: true });

  /**
   * MediaCollection
   */
  content.createField(COMMON_FIELD.MEDIAS, { ...mediaField });
  content.changeFieldControl(COMMON_FIELD.MEDIAS, 'builtin', CONTENTFUL_WIDGET.ENTRY_CARD_EDITOR, {
    helpText: 'Select a media collection to set banner images on the page.',
  });
};
