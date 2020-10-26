import * as Migration from 'contentful-migration';

export const JobExport: Migration.MigrationFunction = function (migration) {
  const job = migration.createContentType('Job', {
    name: 'Job',
  });

  const titleJob = job.createField('title');
  titleJob.name('Title').type('Symbol').localized(true);

  const descriptionJob = job.createField('Description');
  descriptionJob.name('Description').type('Text').localized(true);
};
