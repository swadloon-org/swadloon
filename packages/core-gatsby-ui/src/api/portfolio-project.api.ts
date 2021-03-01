import { MediaCollectionAPI } from './media-collection.api';
import { PortfolioClientAPI } from './portfolio-client.api';
import { TagAPI } from './tag.api';

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
