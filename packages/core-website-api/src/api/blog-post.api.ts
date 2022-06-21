import { PartialOrNull } from '../utilities.js';

import { BlogAuthorAPI } from './blog-author.api.js';
import { MediaCollectionAPI } from './media-collection.api.js';
import { TagAPI } from './tag.api.js';

export type BlogPostAPI = PartialOrNull<{
  title: string;
  blogSlug: string;
  subtitle: string;
  blogExcerpt: string;
  medias: MediaCollectionAPI[];
  text: {
    text: string;
    childMdx: {
      body: string;
    };
  };
  tags: TagAPI[];
  blogAuthor: BlogAuthorAPI[];
}>;
