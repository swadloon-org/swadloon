import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { VALENTINE_CONTENT_TYPE } from '../../valentine/constants/content-types';
import { VALENTINE_FIELD } from '../../valentine/constants/fields';
import { CONTENTFUL_WIDGET } from '../constants/contentful-widget-ids';
import { COMMON_FIELD, mediaField } from '../constants/fields';

export const createProject: Migration.MigrationFunction = function (migration) {
  const content = migration.createContentType(VALENTINE_CONTENT_TYPE.PROJECT, {
    name: VALENTINE_CONTENT_TYPE.PROJECT,
  });

  content.createField(COMMON_FIELD.TITLE, {
    name: pascal(COMMON_FIELD.TITLE),
    type: 'Symbol',
    localized: true,
    required: true,
  });

  content.createField(VALENTINE_FIELD.PROJECT_SLUG, {
    name: pascal(VALENTINE_FIELD.PROJECT_SLUG),
    type: 'Symbol',
    localized: true,
    required: true,
    validations: [
      {
        regexp: {
          pattern: '^([a-z]-?)+',
          flags: 'g',
        },
      },
    ],
  });
  content.changeFieldControl(VALENTINE_FIELD.PROJECT_SLUG, 'builtin', CONTENTFUL_WIDGET.SINGLE_LINE, {
    helpText: 'Short version of the title formatted with dashes, e.g. a-new-blog-post',
  });

  content.createField(COMMON_FIELD.SUBTITLE, {
    name: pascal(COMMON_FIELD.SUBTITLE),
    type: 'Symbol',
    localized: true,
  });

  content.createField(VALENTINE_FIELD.PROJECT_EXCERPT, {
    name: pascal(VALENTINE_FIELD.PROJECT_EXCERPT),
    type: 'Text',
    localized: true,
  });
  content.changeFieldControl(VALENTINE_FIELD.PROJECT_EXCERPT, 'builtin', CONTENTFUL_WIDGET.MULTI_LINE, {
    helpText: 'Short summary of the article, will default to the first lines of content if not set.',
  });

  /**
   * MediaCollection the article main image
   */

  content.createField(COMMON_FIELD.MEDIAS, { ...mediaField });
  content.changeFieldControl(COMMON_FIELD.MEDIAS, 'builtin', CONTENTFUL_WIDGET.ENTRY_CARD_EDITOR, {
    helpText: 'Select a media collection to set images on the section.',
  });

  content.createField(COMMON_FIELD.TEXT, { name: pascal(COMMON_FIELD.TEXT), type: 'Text', localized: true });
};
