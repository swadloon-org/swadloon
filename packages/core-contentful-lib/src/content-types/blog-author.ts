import * as Migration from 'contentful-migration';

export const BlogAuthorExport: Migration.MigrationFunction = function (migration) {
  const BlogAuthor = migration.createContentType('BlogAuthor', {
    name: 'BlogAuthor',
  });
};
