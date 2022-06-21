import { MediaCollectionAPI } from './media-collection.api.js';
import { PortfolioClientAPI } from './portfolio-client.api.js';
import { TagAPI } from './tag.api.js';

export type PortfolioProjectAPI = {
  title: string;
  portfolioProjectSlug: string;
  subtitle: string;
  portfolioProjectExcerpt: string;
  medias?: (MediaCollectionAPI | null | undefined)[] | null;
  text?: {
    text?: string | null;
    childMdx?: {
      body: string;
    } | null;
  };
  tags?: (TagAPI | null | undefined)[] | null;

  portfolios?: (PortfolioClientAPI | null | undefined)[] | null;
};
