import { pascal } from 'case';
import * as Migration from 'contentful-migration';

import { CONTENT_TYPE } from '@newrade/core-website-api';

import { COMMON_FIELD } from './common-fields.contentful';

export const createTranslation: Migration.MigrationFunction = function (migration, context) {
  const content = migration.createContentType(CONTENT_TYPE.TRANSLATION, {
    name: CONTENT_TYPE.TRANSLATION,
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
    required: true,
  });
};
