import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { COMMON_CONTENT_TYPE } from '../common-type/common-content-types';
import { COMMON_FIELD } from '../common-type/common-fields';

export const createTranslation: Migration.MigrationFunction = function (migration) {
  const content = migration.createContentType(COMMON_CONTENT_TYPE.TRANSLATION, {
    name: COMMON_CONTENT_TYPE.TRANSLATION,
    description: 'Configurable object for translation purpose.',
    displayField: COMMON_FIELD.KEY,
  });

  content.createField(COMMON_FIELD.KEY, {
    name: pascal(COMMON_FIELD.KEY),
    type: 'Symbol',
    required: true,
  });

  content.createField(COMMON_FIELD.VALUE, {
    name: pascal(COMMON_FIELD.VALUE),
    type: 'Symbol',
    localized: true,
  });
};
