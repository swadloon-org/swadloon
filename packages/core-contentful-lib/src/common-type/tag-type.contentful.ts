import { pascal } from 'case';
import * as Migration from 'contentful-migration';

import { ContentType } from '@newrade/core-website-api';

import { COMMON_FIELD } from './common-fields.contentful';

export const createTagType: Migration.MigrationFunction = function (migration) {
  const content = migration.createContentType(ContentType.TAG_TYPE, {
    name: pascal(ContentType.TAG_TYPE),
    displayField: COMMON_FIELD.NAME,
    description: 'TagTypes are used to create different kind of tags',
  });

  content.createField(COMMON_FIELD.NAME, {
    name: pascal(COMMON_FIELD.NAME),
    type: 'Text',
    localized: true,
    required: true,
  });

  content.createField(COMMON_FIELD.DESCRIPTION, {
    name: pascal(COMMON_FIELD.DESCRIPTION),
    type: 'Text',
    localized: true,
  });
};
