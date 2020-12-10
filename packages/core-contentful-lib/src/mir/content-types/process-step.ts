import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { COMMON_FIELD } from '../constants/fields';

export const createProcessStep: Migration.MigrationFunction = function (migration) {
  const content = migration.createContentType('processStep', {
    name: 'ProcessStep',
  });

  content.createField('title', { name: COMMON_FIELD.TITLE, type: 'Symbol', localized: true });

  content.createField('description', {
    name: pascal(COMMON_FIELD.DESCRIPTION),
    type: 'Text',
    localized: true,
  });
};
