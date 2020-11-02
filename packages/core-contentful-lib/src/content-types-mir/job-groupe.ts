import * as Migration from 'contentful-migration';

export const createJobGroup: Migration.MigrationFunction = function (migration) {
  const content = migration.createContentType('jobGroup', {
    name: 'JobGroup',
  });

  content.createField('illustration', { name: 'Illustration', type: 'Symbol' });

  // Reference to the jobs
  content.createField('Jobs', {
    name: 'Jobs',
    type: 'Array',
    items: { type: 'Link', linkType: 'Entry', validations: [{ linkContentType: ['Job'] }] },
  });
};
