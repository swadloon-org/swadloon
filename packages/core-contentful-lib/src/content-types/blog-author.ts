import * as Migration from 'contentful-migration';

export const BlogAuthorExport: Migration.MigrationFunction = function (migration) {
  const BlogAuthor = migration.createContentType('BlogAuthor', {
    name: 'BlogAuthor',
  });

  const fullNameAuthor = BlogAuthor.createField('FullName', { name: 'FullName', type: 'Symbol', required: true });

  const jobTitleAuthor = BlogAuthor.createField('JobTitle', { name: 'JobTitle', type: 'Symbol', localized: true });
  const profilPictureAuthor = BlogAuthor.createField('ProfilPicture', {
    name: 'JobTitle',
    type: 'Link',
    linkType: 'Asset',
    localized: true,
  });
};
