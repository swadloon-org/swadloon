import * as Migration from 'contentful-migration';
import { imageFields, markdownFields, subTitleFields, titleFields } from '../common/types.models';

export const BlogPostExport: Migration.MigrationFunction = function (migration) {
  const BlogPost = migration.createContentType('BlogPost', {
    name: 'BlogPost',
  });

  const titlePost = BlogPost.createField('title', { ...titleFields });
  const subTitlePost = BlogPost.createField('Subtitle', { ...subTitleFields });
  const excerptPost = BlogPost.createField('Excerpt', { name: 'Excerpt', type: 'Symbol', localized: true });
  const imagePost = BlogPost.createField('Image', { ...imageFields });

  const BlogPostAuthor = BlogPost.createField('BlogPostAuthor', {
    name: 'BlogPostAuthor',
    type: 'Array',
    items: { type: 'Link', linkType: 'Entry', validations: [{ linkContentType: ['BlogAuthor'] }] },
  });

  const markdownPost = BlogPost.createField('Content', { ...markdownFields });
};
