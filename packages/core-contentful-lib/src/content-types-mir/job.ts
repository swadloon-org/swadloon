import * as Migration from 'contentful-migration';
import { COMMON_FIELD, descriptionField } from '../constants/fields';

export const createJob: Migration.MigrationFunction = function (migration) {
  const content = migration.createContentType('Job', {
    name: 'Job',
  });

  content.createField('title', { name: COMMON_FIELD.TITLE, type: 'Symbol', localized: true });

  content.createField('Description', { ...descriptionField });
};
