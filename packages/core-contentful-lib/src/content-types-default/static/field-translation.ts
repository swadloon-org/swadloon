import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { COMMON_CONTENT_TYPE } from '../../constants/content-types';
import { COMMON_FIELD } from '../../constants/fields';

export const createFieldTranslation: Migration.MigrationFunction = function (migration) {
  const content = migration.createContentType(COMMON_CONTENT_TYPE.FIELD_TRANSLATION, {
    name: COMMON_CONTENT_TYPE.FIELD_TRANSLATION,
    description: 'Configurable object for translation purpose.',
  });

  content.createField(COMMON_FIELD.NAME, {
    name: pascal(COMMON_FIELD.NAME),
    type: 'Symbol',
    required: true,
  });

  content.createField(COMMON_FIELD.FIELD_TRANSLATE, {
    name: pascal(COMMON_FIELD.FIELD_TRANSLATE),
    type: 'Symbol',
    localized: true,
  });
};
