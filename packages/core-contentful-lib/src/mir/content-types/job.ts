import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { COMMON_FIELD } from '../../common/common-fields';

export const createJob: Migration.MigrationFunction = function (migration) {
  const content = migration.createContentType('Job', {
    name: 'Job',
  });

  content.createField('title', { name: pascal(COMMON_FIELD.TITLE), type: 'Symbol', localized: true });

  content.createField('description', { name: pascal(COMMON_FIELD.DESCRIPTION), type: 'Text', localized: true });
};
