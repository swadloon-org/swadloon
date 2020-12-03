import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { COMMON_CONTENT_TYPE } from '../../constants/content-types';
import { CONTENTFUL_WIDGET } from '../../constants/contentful-widget-ids';
import { COMMON_FIELD, mediaField } from '../../constants/fields';

export const createBlogPost: Migration.MigrationFunction = function (migration) {
  const content = migration.createContentType(COMMON_CONTENT_TYPE.BLOG_POST, {
    name: COMMON_CONTENT_TYPE.BLOG_POST,
  });

  content.createField(COMMON_FIELD.TITLE, {
    name: pascal(COMMON_FIELD.TITLE),
    type: 'Symbol',
    localized: true,
    required: true,
  });

  content.createField(COMMON_FIELD.BLOG_SLUG, {
    name: pascal(COMMON_FIELD.BLOG_SLUG),
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
  content.changeFieldControl(COMMON_FIELD.BLOG_SLUG, 'builtin', CONTENTFUL_WIDGET.SINGLE_LINE, {
    helpText: 'Short version of the title formatted with dashes, e.g. a-new-blog-post',
  });

  content.createField(COMMON_FIELD.SUBTITLE, {
    name: pascal(COMMON_FIELD.SUBTITLE),
    type: 'Symbol',
    localized: true,
  });

  content.createField(COMMON_FIELD.BLOG_EXCERPT, {
    name: pascal(COMMON_FIELD.BLOG_EXCERPT),
    type: 'Text',
    localized: true,
  });
  content.changeFieldControl(COMMON_FIELD.BLOG_EXCERPT, 'builtin', CONTENTFUL_WIDGET.MULTI_LINE, {
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

  content.createField(COMMON_FIELD.BLOG_AUTHOR, {
    name: pascal(COMMON_FIELD.BLOG_AUTHOR),
    type: 'Array',
    items: { type: 'Link', linkType: 'Entry', validations: [{ linkContentType: [COMMON_FIELD.BLOG_AUTHOR] }] },
  });
};
