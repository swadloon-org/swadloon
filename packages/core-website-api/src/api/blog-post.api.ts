import { PartialOrNull } from '../utilities';
import { BlogAuthorAPI } from './blog-author.api';
import { MediaCollectionAPI } from './media-collection.api';
import { TagAPI } from './tag.api';

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
