import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { COMMON_CONTENT_TYPE } from '../constants/content-types';
import { CONTENTFUL_WIDGET } from '../constants/contentful-widget-ids';
import { COMMON_FIELD, descriptionField, mediaField, nameField } from '../constants/fields';

export const createPage: Migration.MigrationFunction = function (migration) {
  const content = migration.createContentType(COMMON_CONTENT_TYPE.PAGE, {
    name: COMMON_CONTENT_TYPE.PAGE,
    description: 'Model to hold informations for pages',
  });

  content.createField(COMMON_FIELD.NAME, { ...nameField });
  content.createField(COMMON_FIELD.DESCRIPTION, { ...descriptionField });
  content.changeFieldControl(COMMON_FIELD.DESCRIPTION, 'builtin', CONTENTFUL_WIDGET.MULTI_LINE, {
    helpText: 'Enter the page description, it will be used for SEO purposes',
  });

  content.createField('title', { name: COMMON_FIELD.TITLE, type: 'Symbol', localized: true });
  content.createField('Route', { name: 'Route', type: 'Symbol', localized: true });
  content.createField('BannerTitle', { name: 'BannerTitle', type: 'Symbol', localized: true });
  content.createField('BannerSubTitle', {
    name: 'BannerSubTitle',
    type: 'Symbol',
    localized: true,
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
