import * as Migration from 'contentful-migration';

export const BlogPostExport: Migration.MigrationFunction = function (migration) {
  const BlogPost = migration.createContentType('BlogPost', {
    name: 'BlogPost',
  });

  const BlogPostAuthor = BlogPost.createField('BlogPostAuthor');
  BlogPostAuthor.name('BlogPostAuthor')
    .type('Array')
    .items({ type: 'Link', linkType: 'Entry', validations: [{ linkContentType: ['BlogAuthor'] }] });
};
