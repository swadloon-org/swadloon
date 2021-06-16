import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { ContentType } from '@newrade/core-website-api';
import { COMMON_FIELD } from './common-fields.contentful';

export const createTag: Migration.MigrationFunction = function (migration) {
  const content = migration.createContentType(ContentType.TAG, {
    name: pascal(ContentType.TAG),
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
        linkContentType: [ContentType.TAG_TYPE],
      },
    ],
  });
};
