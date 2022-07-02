import { pascal } from 'case';
import * as Migration from 'contentful-migration';

import { CONTENT_TYPE } from '@newrade/core-website-api';

import { COMMON_FIELD } from './common-fields.contentful.js';

export const createBlogAuthor: Migration.MigrationFunction = function (migration) {
  const content = migration.createContentType(CONTENT_TYPE.BLOG_AUTHOR, {
    name: pascal(CONTENT_TYPE.BLOG_AUTHOR),
    displayField: COMMON_FIELD.FIRST_NAME,
  });

  content.createField(COMMON_FIELD.FIRST_NAME, {
    name: pascal(COMMON_FIELD.FIRST_NAME),
    type: 'Symbol',
    required: true,
  });

  content.createField(COMMON_FIELD.LAST_NAME, {
    name: pascal(COMMON_FIELD.LAST_NAME),
    type: 'Symbol',
  });

  content.createField(COMMON_FIELD.JOB_TITLE, {
    name: pascal(COMMON_FIELD.JOB_TITLE),
    type: 'Symbol',
  });

  content.createField(COMMON_FIELD.PROFILE_PICTURE, {
    name: pascal(COMMON_FIELD.PROFILE_PICTURE),
    type: 'Link',
    linkType: 'Asset',
  });
};
