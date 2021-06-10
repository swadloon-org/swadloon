import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { COMMON_CONTENT_TYPE } from '../common-type/common-content-types';
import { COMMON_FIELD } from '../common-type/common-fields';

export const createTagType: Migration.MigrationFunction = function (migration) {
  const content = migration.createContentType(COMMON_CONTENT_TYPE.TAG_TYPE, {
    name: pascal(COMMON_CONTENT_TYPE.TAG_TYPE),
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
