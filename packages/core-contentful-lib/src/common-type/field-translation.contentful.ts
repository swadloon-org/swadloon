import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { ContentType } from '@newrade/core-gatsby-ui/src';
import { COMMON_FIELD } from './common-fields.contentful';

export const createTranslation: Migration.MigrationFunction = function (migration, context) {
  const content = migration.createContentType(ContentType.TRANSLATION, {
    name: ContentType.TRANSLATION,
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
