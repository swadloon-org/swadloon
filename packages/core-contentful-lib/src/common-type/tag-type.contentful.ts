import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { CONTENT_TYPE } from '@newrade/core-gatsby-ui/src';
import { COMMON_FIELD } from './common-fields.contentful';

export const createTagType: Migration.MigrationFunction = function (migration) {
  const content = migration.createContentType(CONTENT_TYPE.TAG_TYPE, {
    name: pascal(CONTENT_TYPE.TAG_TYPE),
    displayField: COMMON_FIELD.NAME,
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
