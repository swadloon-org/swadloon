import * as Migration from 'contentful-migration';

export const BlogExport: Migration.MigrationFunction = function (migration) {
  const Blog = migration.createContentType('Blog', {
    name: 'Blog',
  });

  const titleBlogSection = Blog.createField('title').name('Title').type('Symbol').required(true).localized(true);

  const titleHighlightBlogSection = Blog.createField('titleHighlight');
  titleHighlightBlogSection.name('TitleHighlight').type('Symbol').localized(true);

  const text = Blog.createField('Text');
  text.name('Text').type('Text').localized(true);

  // Refenrence to the array of blogPosts
  const blogPosts = Blog.createField('blogPosts');
  blogPosts
    .name('blogPosts')
    .type('Array')
    .items({ type: 'Link', linkType: 'Entry', validations: [{ linkContentType: ['BlogPost'] }] });

  const LinkBlog = Blog.createField('Links');
  LinkBlog.name('Link')
    .type('Array')
    .items({ type: 'Link', linkType: 'Entry', validations: [{ linkContentType: ['BlogPost'] }] });
};
