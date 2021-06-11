import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { CONTENTFUL_WIDGET } from '../../types/contentful-widget-ids';
import { ContentType } from '@newrade/core-gatsby-ui/src';
import { COMMON_FIELD, mediaField } from './common-fields.contentful';

export const createBlogPost: Migration.MigrationFunction = function (migration) {
  const content = migration.createContentType(ContentType.BLOG_POST, {
    name: ContentType.BLOG_POST,
    displayField: COMMON_FIELD.TITLE,
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
          pattern: `^(\/[a-z,0-9,-]+)*\/`,
          flags: `g`,
        },
      },
      {
        unique: true,
      },
    ],
  });
  content.changeFieldControl(COMMON_FIELD.BLOG_SLUG, 'builtin', CONTENTFUL_WIDGET.SINGLE_LINE, {
    helpText: 'Short version of the title formatted with dashes, e.g. /a-new-blog-post/',
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
    validations: [
      {
        size: {
          max: 160,
        },
      },
    ],
  });
  content.changeFieldControl(COMMON_FIELD.BLOG_EXCERPT, 'builtin', CONTENTFUL_WIDGET.MULTI_LINE, {
    helpText:
      'Short summary of the article, will default to the first lines of content if not set.',
  });

  /**
   * MediaCollection the article main image
   */
  content.createField(COMMON_FIELD.MEDIAS, { ...mediaField });
  content.changeFieldControl(COMMON_FIELD.MEDIAS, 'builtin', CONTENTFUL_WIDGET.ENTRY_CARD_EDITOR, {
    helpText: 'Select a media collection to set images on the section.',
  });

  content.createField(COMMON_FIELD.TEXT, {
    name: pascal(COMMON_FIELD.TEXT),
    type: 'Text',
    localized: true,
  });

  /**
   * To Tags of the blog post
   */
  content.createField(COMMON_FIELD.TAGS, {
    name: pascal(COMMON_FIELD.TAGS),
    type: 'Array',
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [{ linkContentType: [ContentType.TAG] }],
    },
  });

  /**
   * Authors of the blog post
   */
  content.createField(COMMON_FIELD.BLOG_AUTHOR, {
    name: pascal(COMMON_FIELD.BLOG_AUTHOR),
    type: 'Array',
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [{ linkContentType: [COMMON_FIELD.BLOG_AUTHOR] }],
    },
  });
};
