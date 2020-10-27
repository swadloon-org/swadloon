import * as Migration from 'contentful-migration';

export const BlogExport: Migration.MigrationFunction = function (migration) {
  const Blog = migration.createContentType('Blog', {
    name: 'Blog',
  });

  const titleBlogSection = Blog.createField('title').name('Title').type('Symbol').required(true).localized(true);

  const titleHighlightBlogSection = Blog.createField('titleHighlight', {
    name: 'TitleHighlight',
    type: 'Symbol',
    localized: true,
  });

  const text = Blog.createField('Text', { name: 'Text', type: 'Text', localized: true });

  const LinkBlog = Blog.createField('Link', {
    name: 'Link',
    type: 'Array',
    items: { type: 'Link', linkType: 'Entry', validations: [{ linkContentType: ['BlogPost'] }] },
  });
  /**
   * Refenrence to the array of blogPosts
   */
  const blogPosts = Blog.createField('blogPosts', {
    name: 'blogPosts',
    type: 'Array',
    items: { type: 'Link', linkType: 'Entry', validations: [{ linkContentType: ['BlogPost'] }] },
  });
};
