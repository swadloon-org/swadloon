import { pascal } from 'case';
import * as Migration from 'contentful-migration';

import { CONTENT_TYPE } from '@newrade/core-website-api';

import { COMMON_FIELD } from './common-fields.contentful.js';

export const createTag: Migration.MigrationFunction = function (migration) {
  const content = migration.createContentType(CONTENT_TYPE.TAG, {
    name: pascal(CONTENT_TYPE.TAG),
    displayField: COMMON_FIELD.TEXT,
    description: 'Tags are used to annotate other content type with categories like BlogPosts.',
  });

  content.createField(COMMON_FIELD.TEXT, {
    name: pascal(COMMON_FIELD.TEXT),
    type: 'Symbol',
    required: true,
    localized: true,
  });

  content.createField(COMMON_FIELD.TYPE, {
    name: pascal(COMMON_FIELD.TYPE),
    type: 'Link',
    linkType: 'Entry',
    required: true,
    validations: [
      {
        linkContentType: [CONTENT_TYPE.TAG_TYPE],
      },
    ],
  });
};
