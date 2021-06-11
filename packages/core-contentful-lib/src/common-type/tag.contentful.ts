import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { ContentType } from '@newrade/core-gatsby-ui/src';
import { COMMON_FIELD } from './common-fields.contentful';

export const createTag: Migration.MigrationFunction = function (migration) {
  const content = migration.createContentType(ContentType.TAG, {
    name: pascal(ContentType.TAG),
    displayField: COMMON_FIELD.NAME,
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

  content.createField(COMMON_FIELD.NAME, { name: pascal(COMMON_FIELD.NAME), type: 'Symbol' });

  content.createField(COMMON_FIELD.DESCRIPTION, {
    name: pascal(COMMON_FIELD.DESCRIPTION),
    type: 'Text',
    localized: true,
  });
};
