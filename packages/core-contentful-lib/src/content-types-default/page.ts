import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { COMMON_CONTENT_TYPE } from '../constants/content-types';
import { CONTENTFUL_WIDGET } from '../constants/contentful-widget-ids';
import { COMMON_FIELD, mediaField } from '../constants/fields';

export const createPage: Migration.MigrationFunction = function (migration) {
  const content = migration.createContentType(COMMON_CONTENT_TYPE.PAGE, {
    name: COMMON_CONTENT_TYPE.PAGE,
    description: 'Model to hold informations for pages',
  });

  content.createField(COMMON_FIELD.NAME, {
    name: pascal(COMMON_FIELD.NAME),
    type: 'Symbol',
  });
  content.createField(COMMON_FIELD.TITLE, {
    name: pascal(COMMON_FIELD.TITLE),
    type: 'Symbol',
    localized: true,
  });
  content.createField(COMMON_FIELD.DESCRIPTION, {
    name: pascal(COMMON_FIELD.DESCRIPTION),
    type: 'Symbol',
    localized: true,
  });

  content.changeFieldControl(COMMON_FIELD.DESCRIPTION, 'builtin', CONTENTFUL_WIDGET.MULTI_LINE, {
    helpText: 'Enter the page description, it will be used for SEO purposes',
  });

  //  Types
  content.createField(COMMON_FIELD.TYPE, {
    name: pascal(COMMON_FIELD.TYPE),
    type: 'Link',
    linkType: 'Entry',
    required: true,
    validations: [
      {
        linkContentType: [COMMON_CONTENT_TYPE.SECTION_TYPE],
      },
    ],
  });

  content.createField(COMMON_FIELD.ROUTE, { name: pascal(COMMON_FIELD.ROUTE), type: 'Symbol', localized: true });

  //  Banner
  /**
   * For all types
   */
  content.createField(COMMON_FIELD.BANNER, {
    name: pascal(COMMON_FIELD.BANNER),
    type: 'Link',
    linkType: 'Entry',
    required: true,
    validations: [
      {
        linkContentType: [COMMON_CONTENT_TYPE.BANNER],
      },
    ],
  });

  /**
   * MediaCollection for banner images
   */
  content.createField(COMMON_FIELD.MEDIAS, { ...mediaField });
  content.changeFieldControl(COMMON_FIELD.MEDIAS, 'builtin', CONTENTFUL_WIDGET.ENTRY_CARD_EDITOR, {
    helpText: 'Select a media collection to set banner images on the page.',
  });
  /**
   * Sections for the page
   */
  content.createField(COMMON_FIELD.SECTIONS, {
    name: pascal(COMMON_FIELD.SECTIONS),
    type: 'Array',
    items: { type: 'Link', linkType: 'Entry', validations: [{ linkContentType: [COMMON_CONTENT_TYPE.SECTION] }] },
  });
};
