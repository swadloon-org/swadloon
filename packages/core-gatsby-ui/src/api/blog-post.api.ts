import { BlogAuthorAPI } from './blog-author.api';
import { MediaCollectionAPI } from './media-collection.api';
import { TagAPI } from './tag.api';

export type BlogPostAPI = {
  title?: string | null;
  blogSlug?: string | null;
  subtitle?: string | null;
  blogExcerpt?: string | null;
  medias?: (MediaCollectionAPI | null | undefined)[] | null;
  text?: {
    text?: string | null;
    childMdx?: {
      body: string;
    } | null;
  };
  tags?: (TagAPI | null | undefined)[] | null;
  blogAuthor?: (BlogAuthorAPI | null | undefined)[] | null;
};
