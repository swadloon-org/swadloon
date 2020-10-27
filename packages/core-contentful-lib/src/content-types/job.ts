import * as Migration from 'contentful-migration';
import { titleFields } from '../common/types.models';

export const JobExport: Migration.MigrationFunction = function (migration) {
  const job = migration.createContentType('Job', {
    name: 'Job',
  });

  const titleJob = job.createField('title', { ...titleFields });

  const descriptionJob = job.createField('Description');
  descriptionJob.name('Description').type('Text').localized(true);
};
