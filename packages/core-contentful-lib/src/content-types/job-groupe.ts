import * as Migration from 'contentful-migration';

export const JobGroupExport: Migration.MigrationFunction = function (migration) {
  const jobGroup = migration.createContentType('JobGroup', {
    name: 'JobGroup',
  });

  const illustrationJobGroupe = jobGroup.createField('Illustration', { name: 'Illustration', type: 'Symbol' });

  // Reference to the jobs
  const jobs = jobGroup.createField('Jobs', {
    name: 'Jobs',
    type: 'Array',
    items: { type: 'Link', linkType: 'Entry', validations: [{ linkContentType: ['Job'] }] },
  });
};
